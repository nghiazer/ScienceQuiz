/* Kiểm tra cấu trúc ngân hàng câu hỏi. Chạy: npm run check:data */
import { ALL_QUESTIONS, QUESTIONS, SUBJECT_TOPICS, TOPIC_ORDER } from '../src/data/questions'
import { checkEnglish, ENGLISH_PER_TOPIC } from './lib/english-checks'
import { checkMath, MATH_PER_TOPIC } from './lib/math-checks'
import { SUBTOPICS } from '../src/data/topics'
import { ILLUSTRATIONS } from '../src/components/illustrations/registry'
import type { Difficulty, Topic } from '../src/types/quiz'
import { findDupes, type AllowEntry } from './lib/dupes'
import { readFileSync } from 'node:fs'
import { DRESSES, DRESSES_PER_SUBJECT, WARDROBE, WARDROBE_SIZE } from '../src/data/dresses'

const errors: string[] = []
const fail = (msg: string) => errors.push(msg)

const PER_TOPIC = 120 // mục tiêu sau khi hoàn tất đợt bổ sung
const MIN_PER_SUBTOPIC = 5
const MAX_EXPLANATION = 320
const DIFFS: Difficulty[] = ['easy', 'medium', 'hard']
const MAX_POSITION_SHARE = 0.4

// Các số trong câu hỏi và đáp án phải giống nhau giữa tiếng Việt và tiếng Anh.
const nums = (s: string) => (s.match(/\d+([.,]\d+)?/g) ?? []).join(' ')

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
  if (nums(q.question_vi) !== nums(q.question_en)) fail(`${q.id}: số trong câu hỏi vi/en không khớp`)
  q.options_vi.forEach((o, i) => {
    if (nums(o) !== nums(q.options_en[i])) fail(`${q.id}: số ở đáp án ${i + 1} vi/en không khớp`)
  })
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
  if ((perTopic[t] ?? 0) < PER_TOPIC) console.warn(`  tiến độ: chủ đề ${t} ${perTopic[t] ?? 0}/${PER_TOPIC} câu`)
  if ((perTopic[t] ?? 0) > PER_TOPIC) fail(`chủ đề ${t}: ${perTopic[t]} câu, vượt mục tiêu ${PER_TOPIC}`)
}
for (const [s, n] of Object.entries(SUBTOPICS).filter(([, v]) => SUBJECT_TOPICS.science.includes(v.topic))) {
  const count = perSub[s] ?? 0
  if (count < MIN_PER_SUBTOPIC) fail(`chủ điểm ${s}: ${count} câu, cần tối thiểu ${MIN_PER_SUBTOPIC}`)
  void n
}

const usedIllus = new Set(QUESTIONS.map((q) => q.illustrationId).filter(Boolean))
const illusCoverage = QUESTIONS.filter((q) => q.illustrationId).length
const ENGLISH_ILLUS = new Set(['en-timeline-past', 'en-timeline-now', 'en-timeline-habit', 'en-dialogue', 'en-daily-routine', 'en-look-listen'])
// Hình Toán có tiền tố ma-
const scienceIllus = Object.keys(ILLUSTRATIONS).filter((k) => !ENGLISH_ILLUS.has(k) && !k.startsWith('ma-'))
const unusedIllus = scienceIllus.filter((k) => !usedIllus.has(k as never))

console.log(`Tổng số câu: ${QUESTIONS.length}`)
for (const t of TOPIC_ORDER) console.log(`  ${t.padEnd(9)} ${perTopic[t] ?? 0} câu  dễ/vừa/khó = ${perDiff[t]?.easy}/${perDiff[t]?.medium}/${perDiff[t]?.hard}`)
console.log(`Chủ điểm: ${Object.values(SUBTOPICS).filter((v) => SUBJECT_TOPICS.science.includes(v.topic)).length}, câu có hình: ${illusCoverage} (${Math.round((illusCoverage / QUESTIONS.length) * 100)}%)`)
console.log(`Hình minh họa Khoa học: ${scienceIllus.length} (chưa dùng: ${unusedIllus.length ? unusedIllus.join(', ') : 'không có'})`)

// Vị trí đáp án đúng không được lệch: mỗi vị trí tối đa 40% (toàn kho và từng chủ đề).
const posShare = (qs: typeof QUESTIONS) =>
  [0, 1, 2, 3].map((i) => qs.filter((q) => q.correctIndex === i).length / Math.max(qs.length, 1))
const checkPos = (label: string, qs: typeof QUESTIONS) =>
  posShare(qs).forEach((share, i) => {
    if (share > MAX_POSITION_SHARE) fail(`${label}: đáp án ở vị trí ${'ABCD'[i]} chiếm ${Math.round(share * 100)}% (tối đa 40%)`)
  })
checkPos('toàn kho', QUESTIONS)
for (const t of TOPIC_ORDER as Topic[]) checkPos(`chủ đề ${t}`, QUESTIONS.filter((q) => q.topic === t))
console.log(`Vị trí đáp án đúng A/B/C/D: ${posShare(QUESTIONS).map((x) => Math.round(x * 100) + '%').join(' / ')}`)

// Khoa học: đáp án đúng không được là phương án dài nhất hẳn (bé đoán "chọn câu dài" sẽ đúng quá nhiều). Mục tiêu dưới 35%.
{
  const longShare = QUESTIONS.filter((q) => {
    const L = q.options_vi.map((o) => o.length)
    const sorted = [...L].sort((x, y) => y - x)
    return L[q.correctIndex] === sorted[0] && sorted[0] >= sorted[1] * 1.3
  }).length / Math.max(QUESTIONS.length, 1)
  if (longShare >= 0.35) fail(`đáp án đúng là phương án dài nhất hẳn ở ${Math.round(longShare * 100)}% câu Khoa học (tối đa 35%)`)
}

// Khoa học: lời giải theo khung 💡 Vì sao / 📘 Ghi nhớ (vi) và 💡 Why / 📘 Remember (en).
for (const q of QUESTIONS) {
  if (!(q.explanation_vi.includes('💡 Vì sao:') && q.explanation_vi.includes('📘 Ghi nhớ:'))) fail(`${q.id}: explanation_vi thiếu khung "💡 Vì sao:" / "📘 Ghi nhớ:"`)
  if (!(q.explanation_en.includes('💡 Why:') && q.explanation_en.includes('📘 Remember:'))) fail(`${q.id}: explanation_en thiếu khung "💡 Why:" / "📘 Remember:"`)
}

// Trùng lặp (xem scripts/lib/dupes.ts và scripts/dupes-allowlist.json)
const allow = JSON.parse(readFileSync('scripts/dupes-allowlist.json', 'utf8')) as AllowEntry[]
const dupes = findDupes(ALL_QUESTIONS, allow)
errors.push(...dupes.errors)
for (const w of dupes.warnings) console.warn('  cảnh báo: ' + w)

// Váy dạ hội: mỗi môn đúng DRESSES_PER_SUBJECT váy, thứ tự liên tục, tên đủ và không trùng,
// độ đẹp (tier) không giảm, màu hợp lệ, không có hai váy giống hệt nhau, váy cấp 4–5 phải có điểm "hoàng gia"
const dressIds = new Set<string>()
const dressNames = new Set<string>()
const dressLooks = new Map<string, string>()
const HEX = /^#[0-9a-fA-F]{6}$/
const ROYAL_KEYS = ['tiara', 'cape', 'wings', 'train', 'aura'] as const
const colorsOf = (look: Record<string, unknown>): string[] =>
  Object.entries(look).flatMap(([k, v]) =>
    k === 'silhouette' || k === 'pattern' || k === 'sleeves' || k === 'trim' || k === 'tiara' || k === 'neckline' || k === 'hair'
      ? []
      : typeof v === 'string' ? [v] : Array.isArray(v) ? (v as string[]) : [])
for (const [subj, list] of Object.entries(DRESSES)) {
  if (list.length !== DRESSES_PER_SUBJECT) fail(`váy ${subj}: ${list.length} váy, cần ${DRESSES_PER_SUBJECT}`)
  list.forEach((d, i) => {
    if (d.index !== i + 1) fail(`váy ${d.id}: index ${d.index} không đúng thứ tự (cần ${i + 1})`)
    if (dressIds.has(d.id)) fail(`váy trùng id: ${d.id}`)
    dressIds.add(d.id)
    if (!d.name_vi.trim() || !d.name_en.trim()) fail(`váy ${d.id}: thiếu tên`)
    if (i > 0 && d.tier < list[i - 1].tier) fail(`váy ${d.id}: tier giảm so với váy trước`)
    if (d.subject !== subj) fail(`váy ${d.id}: sai môn`)
    for (const n of [d.name_vi, d.name_en]) {
      if (dressNames.has(n.toLowerCase())) fail(`váy ${d.id}: tên trùng "${n}"`)
      dressNames.add(n.toLowerCase())
    }
    for (const c of colorsOf(d.look as unknown as Record<string, unknown>)) {
      if (!HEX.test(c)) fail(`váy ${d.id}: màu không hợp lệ "${c}"`)
    }
    const key = JSON.stringify(d.look)
    const same = dressLooks.get(key)
    if (same) fail(`váy ${d.id}: giống hệt ${same}`)
    dressLooks.set(key, d.id)
    if (d.tier >= 4 && !ROYAL_KEYS.some((k) => d.look[k])) fail(`váy ${d.id}: cấp ${d.tier} cần ít nhất một trong ${ROYAL_KEYS.join('/')}`)
    // Dòng váy Toán là dòng cao cấp: mỗi váy có ít nhất một chi tiết mới và nhiều điểm hoàng gia hơn.
    if (subj === 'math') {
      const l = d.look
      const premium =
        ['petal', 'bustle', 'crystal'].includes(l.silhouette) ||
        ['diamonds', 'hexagons', 'numbers', 'filigree', 'crystals'].includes(l.pattern ?? '') ||
        l.tiara === 'crown' || Boolean(l.veil || l.scepter || l.corset || l.hemJewels || l.petticoat)
      if (!premium) fail(`váy ${d.id}: váy Toán cần ít nhất một chi tiết cao cấp mới (dáng petal/bustle/crystal, hoa văn hình học, crown, veil, scepter, corset, hemJewels, petticoat)`)
      if (!(l.trim || l.necklace || l.gems)) fail(`váy ${d.id}: váy Toán cần trim, necklace hoặc gems`)
      const royal = ROYAL_KEYS.filter((k) => l[k]).length
      if (d.tier >= 3 && royal < 1) fail(`váy ${d.id}: váy Toán cấp ${d.tier} cần ít nhất một điểm hoàng gia`)
      if (d.tier === 5 && royal < 3) fail(`váy ${d.id}: váy Toán cấp 5 cần ít nhất 3 điểm hoàng gia (có ${royal})`)
    }
  })
}
// Tủ chung: đủ váy của cả ba môn, mỗi váy một lần, cấp không giảm theo thứ tự mở.
if (WARDROBE_SIZE !== DRESSES_PER_SUBJECT * Object.keys(DRESSES).length || new Set(WARDROBE.map((d) => d.id)).size !== WARDROBE_SIZE)
  fail(`tủ váy chung: ${WARDROBE_SIZE} váy, cần ${DRESSES_PER_SUBJECT * Object.keys(DRESSES).length} váy khác nhau`)
WARDROBE.forEach((d, i) => {
  if (i > 0 && d.tier < WARDROBE[i - 1].tier) fail(`tủ váy chung: ${d.id} có cấp thấp hơn váy đứng trước`)
})
console.log(`Váy dạ hội: ${Object.entries(DRESSES).map(([k, v]) => `${k} ${v.length}`).join(', ')} · tủ chung ${WARDROBE_SIZE}`)

// Tiếng Anh
const en = checkEnglish()
errors.push(...en.errors)
console.log(`\nTiếng Anh (Cambridge KET/PET): mục tiêu ${ENGLISH_PER_TOPIC} câu mỗi thì`)
for (const l of en.lines) console.log(l)

// Toán TIMO
const ma = checkMath()
errors.push(...ma.errors)
console.log(`\nToán TIMO: mục tiêu ${MATH_PER_TOPIC} câu mỗi mảng`)
for (const l of ma.lines) console.log(l)

if (errors.length) {
  console.error(`\n✗ ${errors.length} lỗi:`)
  for (const e of errors) console.error('  - ' + e)
  process.exit(1)
}
console.log('\n✓ Dữ liệu hợp lệ')
