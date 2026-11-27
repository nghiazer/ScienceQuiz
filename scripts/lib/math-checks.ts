/* Kiểm tra riêng cho ngân hàng Toán TIMO. Dùng trong check-data. */
import { MATH_QUESTIONS, SUBJECT_TOPICS, SUBTOPICS, TOPICS } from '../../src/data/questions'
import { ILLUSTRATIONS } from '../../src/components/illustrations/registry'
import type { MathTopic } from '../../src/types/quiz'

export const MATH_PER_SUBTOPIC = 40
export const MATH_PER_TOPIC = 200
/** Lời giải Toán cần dài hơn giải thích Khoa học một chút. */
const MAX_EXPLANATION = 360
const MAX_POSITION_SHARE = 0.4
/** Khi một mảng đã đủ câu: tối thiểu 15% câu khó, tối thiểu 25% câu dễ. */
const MIN_HARD_SHARE = 0.15
const MIN_EASY_SHARE = 0.25

// Các số phải giống nhau giữa tiếng Việt và tiếng Anh (luôn viết số bằng chữ số).
const nums = (s: string) => (s.match(/\d+([.,]\d+)?/g) ?? []).join(' ')

export function checkMath(): { errors: string[]; lines: string[] } {
  const errors: string[] = []
  const fail = (m: string) => errors.push(m)
  const lines: string[] = []
  const topics = SUBJECT_TOPICS.math as MathTopic[]

  const ids = new Set<string>()
  for (const q of MATH_QUESTIONS) {
    if (ids.has(q.id)) fail(`id trùng: ${q.id}`)
    ids.add(q.id)
    const sub = SUBTOPICS[q.subtopic]
    if (!sub) fail(`${q.id}: subtopic không tồn tại: ${q.subtopic}`)
    else if (sub.topic !== q.topic) fail(`${q.id}: subtopic ${q.subtopic} không thuộc mảng ${q.topic}`)
    if (!q.id.startsWith(`${q.subtopic}-`)) fail(`${q.id}: id phải có dạng ${q.subtopic}-NN`)
    if (!q.question_vi.trim() || !q.question_en.trim()) fail(`${q.id}: thiếu nội dung câu hỏi`)
    if (q.options_vi.length !== 4 || q.options_en.length !== 4) fail(`${q.id}: phải có đúng 4 đáp án cho cả hai ngôn ngữ`)
    for (const o of [...q.options_vi, ...q.options_en]) if (!o.trim()) fail(`${q.id}: có đáp án rỗng`)
    if (new Set(q.options_vi).size !== 4) fail(`${q.id}: đáp án tiếng Việt bị trùng`)
    if (new Set(q.options_en).size !== 4) fail(`${q.id}: đáp án tiếng Anh bị trùng`)
    if (![0, 1, 2, 3].includes(q.correctIndex)) fail(`${q.id}: correctIndex không hợp lệ`)
    if (nums(q.question_vi) !== nums(q.question_en)) fail(`${q.id}: số trong câu hỏi vi/en không khớp (vi: ${nums(q.question_vi)} | en: ${nums(q.question_en)})`)
    q.options_vi.forEach((o, i) => {
      if (nums(o) !== nums(q.options_en[i])) fail(`${q.id}: số ở đáp án ${i + 1} vi/en không khớp`)
    })
    if (!q.explanation_vi.includes('Ý tưởng') || !q.explanation_vi.includes('Lời giải')) fail(`${q.id}: explanation_vi thiếu "Ý tưởng" hoặc "Lời giải"`)
    if (!q.explanation_en.includes('Idea') || !q.explanation_en.includes('Solution')) fail(`${q.id}: explanation_en thiếu "Idea" hoặc "Solution"`)
    if (q.explanation_vi.length > MAX_EXPLANATION || q.explanation_en.length > MAX_EXPLANATION)
      fail(`${q.id}: lời giải quá dài (tối đa ${MAX_EXPLANATION} ký tự; vi ${q.explanation_vi.length}, en ${q.explanation_en.length})`)
    // Đáp án đúng phải xuất hiện trong lời giải (bắt lỗi chọn nhầm đáp án khi đáp án là số).
    const right = q.options_en[q.correctIndex]
    const rightNum = nums(right)
    if (rightNum && !rightNum.includes(' ') && !nums(q.explanation_en).split(' ').includes(rightNum))
      fail(`${q.id}: lời giải tiếng Anh không nhắc tới đáp án đúng ${rightNum} — kiểm tra lại correctIndex`)
    if (q.illustrationId && !(q.illustrationId in ILLUSTRATIONS)) fail(`${q.id}: illustrationId không tồn tại: ${q.illustrationId}`)
  }

  // Hình Toán (tiền tố ma-) phải được ít nhất một câu dùng.
  const usedIll = new Set(MATH_QUESTIONS.map((q) => q.illustrationId).filter(Boolean))
  for (const id of Object.keys(ILLUSTRATIONS).filter((k) => k.startsWith('ma-'))) {
    if (!usedIll.has(id as never)) fail(`hình ${id}: chưa có câu Toán nào dùng`)
  }

  const perSub: Record<string, number> = {}
  for (const q of MATH_QUESTIONS) perSub[q.subtopic] = (perSub[q.subtopic] ?? 0) + 1
  for (const [id, meta] of Object.entries(SUBTOPICS)) {
    if (!topics.includes(meta.topic as MathTopic)) continue
    const n = perSub[id] ?? 0
    // Đang bổ sung dần tới mục tiêu: thiếu chỉ báo tiến độ, vượt mục tiêu mới là lỗi.
    if (n > MATH_PER_SUBTOPIC) fail(`chủ điểm ${id}: ${n} câu, vượt mục tiêu ${MATH_PER_SUBTOPIC}`)
    else if (n < MATH_PER_SUBTOPIC) lines.push(`  tiến độ: ${id} ${n}/${MATH_PER_SUBTOPIC}`)
  }

  for (const t of topics) {
    const qs = MATH_QUESTIONS.filter((q) => q.topic === t)
    if (qs.length > MATH_PER_TOPIC) fail(`mảng ${t}: ${qs.length} câu, vượt mục tiêu ${MATH_PER_TOPIC}`)
    const d = { easy: 0, medium: 0, hard: 0 }
    for (const q of qs) d[q.difficulty]++
    if (qs.length >= MATH_PER_TOPIC) {
      if (d.hard < qs.length * MIN_HARD_SHARE) fail(`mảng ${t}: chỉ ${d.hard} câu khó (cần ≥ ${Math.ceil(qs.length * MIN_HARD_SHARE)})`)
      if (d.easy < qs.length * MIN_EASY_SHARE) fail(`mảng ${t}: chỉ ${d.easy} câu dễ (cần ≥ ${Math.ceil(qs.length * MIN_EASY_SHARE)})`)
    }
    ;[0, 1, 2, 3].forEach((i) => {
      const share = qs.filter((q) => q.correctIndex === i).length / Math.max(qs.length, 1)
      if (share > MAX_POSITION_SHARE) fail(`mảng ${t}: đáp án ở vị trí ${'ABCD'[i]} chiếm ${Math.round(share * 100)}% (tối đa 40%)`)
    })
    const pos = [0, 1, 2, 3].map((i) => Math.round((qs.filter((q) => q.correctIndex === i).length / Math.max(qs.length, 1)) * 100) + '%').join('/')
    const ill = qs.filter((q) => q.illustrationId).length
    lines.push(`  ${TOPICS[t].name_vi.padEnd(14)} ${qs.length} câu  dễ/vừa/khó = ${d.easy}/${d.medium}/${d.hard}  hình=${ill}  A/B/C/D=${pos}`)
  }
  return { errors, lines }
}
