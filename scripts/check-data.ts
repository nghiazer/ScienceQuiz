/* Kiểm tra cấu trúc ngân hàng câu hỏi. Chạy: npm run check:data */
import { QUESTIONS, TOPIC_ORDER } from '../src/data/questions'
import { SUBTOPICS } from '../src/data/topics'
import { ILLUSTRATIONS } from '../src/components/illustrations/registry'
import type { Difficulty, Topic } from '../src/types/quiz'

const errors: string[] = []
const fail = (msg: string) => errors.push(msg)

const PER_TOPIC = 60
const MIN_PER_SUBTOPIC = 5
const MAX_EXPLANATION = 320
const DIFFS: Difficulty[] = ['easy', 'medium', 'hard']

const ids = new Set<string>()
for (const q of QUESTIONS) {
  if (ids.has(q.id)) fail(`id trùng: ${q.id}`)
  ids.add(q.id)

  if (!q.question_vi.trim() || !q.question_en.trim()) fail(`${q.id}: thiếu nội dung câu hỏi`)
  if (q.options_vi.length !== 4 || q.options_en.length !== 4) fail(`${q.id}: phải có đúng 4 đáp án cho cả hai ngôn ngữ`)
  for (const o of [...q.options_vi, ...q.options_en]) if (!o.trim()) fail(`${q.id}: có đáp án rỗng`)
  if (new Set(q.options_vi).size !== 4) fail(`${q.id}: đáp án tiếng Việt bị trùng`)
  if (new Set(q.options_en).size !== 4) fail(`${q.id}: đáp án tiếng Anh bị trùng`)
  if (![0, 1, 2, 3].includes(q.correctIndex)) fail(`${q.id}: correctIndex không hợp lệ`)
  if (!DIFFS.includes(q.difficulty)) fail(`${q.id}: độ khó không hợp lệ`)
  if (!q.explanation_vi.trim() || !q.explanation_en.trim()) fail(`${q.id}: thiếu giải thích`)
  if (q.explanation_vi.length > MAX_EXPLANATION || q.explanation_en.length > MAX_EXPLANATION)
    fail(`${q.id}: giải thích quá dài (tối đa ${MAX_EXPLANATION} ký tự)`)
  if (q.illustrationId && !(q.illustrationId in ILLUSTRATIONS)) fail(`${q.id}: illustrationId không tồn tại: ${q.illustrationId}`)
  const sub = SUBTOPICS[q.subtopic]
  if (!sub) fail(`${q.id}: subtopic không tồn tại: ${q.subtopic}`)
  else if (sub.topic !== q.topic) fail(`${q.id}: subtopic ${q.subtopic} không thuộc chủ đề ${q.topic}`)
}

const perTopic: Record<string, number> = {}
const perSub: Record<string, number> = {}
const perDiff: Record<string, Record<string, number>> = {}
for (const q of QUESTIONS) {
  perTopic[q.topic] = (perTopic[q.topic] ?? 0) + 1
  perSub[q.subtopic] = (perSub[q.subtopic] ?? 0) + 1
  perDiff[q.topic] ??= { easy: 0, medium: 0, hard: 0 }
  perDiff[q.topic][q.difficulty]++
}
for (const t of TOPIC_ORDER as Topic[]) {
  if (perTopic[t] !== PER_TOPIC) fail(`chủ đề ${t}: ${perTopic[t] ?? 0} câu, cần ${PER_TOPIC}`)
}
for (const [s, n] of Object.entries(SUBTOPICS)) {
  const count = perSub[s] ?? 0
  if (count < MIN_PER_SUBTOPIC) fail(`chủ điểm ${s}: ${count} câu, cần tối thiểu ${MIN_PER_SUBTOPIC}`)
  void n
}

const usedIllus = new Set(QUESTIONS.map((q) => q.illustrationId).filter(Boolean))
const illusCoverage = QUESTIONS.filter((q) => q.illustrationId).length
const unusedIllus = Object.keys(ILLUSTRATIONS).filter((k) => !usedIllus.has(k as never))

console.log(`Tổng số câu: ${QUESTIONS.length}`)
for (const t of TOPIC_ORDER) console.log(`  ${t.padEnd(9)} ${perTopic[t] ?? 0} câu  dễ/vừa/khó = ${perDiff[t]?.easy}/${perDiff[t]?.medium}/${perDiff[t]?.hard}`)
console.log(`Chủ điểm: ${Object.keys(SUBTOPICS).length}, câu có hình: ${illusCoverage} (${Math.round((illusCoverage / QUESTIONS.length) * 100)}%)`)
console.log(`Hình minh họa: ${Object.keys(ILLUSTRATIONS).length} (chưa dùng: ${unusedIllus.length ? unusedIllus.join(', ') : 'không có'})`)

if (errors.length) {
  console.error(`\n✗ ${errors.length} lỗi:`)
  for (const e of errors) console.error('  - ' + e)
  process.exit(1)
}
console.log('\n✓ Dữ liệu hợp lệ')
