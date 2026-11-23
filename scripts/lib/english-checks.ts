/* Kiểm tra riêng cho ngân hàng Tiếng Anh (Cambridge KET/PET). Dùng trong check-data. */
import { ENGLISH_QUESTIONS, SUBJECT_TOPICS, SUBTOPICS, TOPICS } from '../../src/data/questions'
import { ILLUSTRATIONS } from '../../src/components/illustrations/registry'
import type { EnglishQuestion, EnglishTopic } from '../../src/types/quiz'

export const ENGLISH_PER_TOPIC = 1000
export const ENGLISH_PER_SUBTOPIC = 100
/** Tối thiểu 12% số câu mỗi thì là câu bẫy phân biệt các thì. */
const MIN_TRAP_SHARE = 0.12
const MAX_POSITION_SHARE = 0.4
const VI_CHARS = /[ăâđêôơưáàảãạấầẩẫậắằẳẵặéèẻẽẹếềểễệíìỉĩịóòỏõọốồổỗộớờởỡợúùủũụứừửữựýỳỷỹỵ]/i

export function checkEnglish(): { errors: string[]; lines: string[] } {
  const errors: string[] = []
  const fail = (m: string) => errors.push(m)
  const lines: string[] = []
  const topics = SUBJECT_TOPICS.english as EnglishTopic[]

  const ids = new Set<string>()
  for (const q of ENGLISH_QUESTIONS) {
    if (ids.has(q.id)) fail(`id trùng: ${q.id}`)
    ids.add(q.id)
    const sub = SUBTOPICS[q.subtopic]
    if (!sub) fail(`${q.id}: subtopic không tồn tại: ${q.subtopic}`)
    else if (sub.topic !== q.topic) fail(`${q.id}: subtopic ${q.subtopic} không thuộc thì ${q.topic}`)
    if (!q.question_en.trim()) fail(`${q.id}: thiếu câu hỏi`)
    if (q.options_en.length !== 4 || new Set(q.options_en).size !== 4) fail(`${q.id}: phải có đúng 4 đáp án khác nhau`)
    for (const o of q.options_en) if (!o.trim()) fail(`${q.id}: có đáp án rỗng`)
    if (![0, 1, 2, 3].includes(q.correctIndex)) fail(`${q.id}: correctIndex không hợp lệ`)
    for (const t of [q.question_en, q.passage_en ?? '', ...q.options_en]) {
      if (VI_CHARS.test(t)) fail(`${q.id}: nội dung câu hỏi/đáp án có chữ tiếng Việt: "${t.slice(0, 40)}"`)
    }
    const blanks = (q.question_en.match(/___/g) ?? []).length
    const blanksAll = blanks + ((q.passage_en ?? '').match(/___/g) ?? []).length
    if ((q.format === 'sentence' || q.format === 'dialogue') && blanks !== 1) fail(`${q.id}: ${q.format} cần đúng 1 chỗ trống ___ (có ${blanks})`)
    if (q.format === 'notice' && blanksAll !== 1) fail(`${q.id}: notice cần đúng 1 chỗ trống ___ trong biển báo hoặc câu hỏi (có ${blanksAll})`)
    if (q.format === 'dialogue' && !/^A:/m.test(q.question_en)) fail(`${q.id}: hội thoại cần lượt lời A: và B:`)
    if (q.format === 'notice' && !q.passage_en?.trim()) fail(`${q.id}: notice cần passage_en`)
    if (q.format !== 'notice' && q.passage_en) fail(`${q.id}: chỉ notice mới có passage_en`)
    if (!q.explanation_vi.includes('Dấu hiệu') || !q.explanation_vi.includes('Quy tắc')) fail(`${q.id}: explanation_vi thiếu "Dấu hiệu" hoặc "Quy tắc"`)
    if (!q.explanation_en.includes('Clue') || !q.explanation_en.includes('Rule')) fail(`${q.id}: explanation_en thiếu "Clue" hoặc "Rule"`)
    if (q.explanation_vi.length > 320 || q.explanation_en.length > 320) fail(`${q.id}: giải thích quá dài (tối đa 320 ký tự)`)
    if (q.illustrationId && !(q.illustrationId in ILLUSTRATIONS)) fail(`${q.id}: illustrationId không tồn tại: ${q.illustrationId}`)
    // Đáp án đúng không được lặp lại nguyên văn trong đáp án sai (đã kiểm ở trên bằng Set).
  }

  const by = <T extends EnglishQuestion>(f: (q: T) => string) => (qs: T[]) => qs.reduce<Record<string, number>>((m, q) => ((m[f(q)] = (m[f(q)] ?? 0) + 1), m), {})
  const perSub = by<EnglishQuestion>((q) => q.subtopic)(ENGLISH_QUESTIONS)
  for (const [id, meta] of Object.entries(SUBTOPICS)) {
    if (!topics.includes(meta.topic as EnglishTopic)) continue
    const n = perSub[id] ?? 0
    // Đang bổ sung dần tới mục tiêu: thiếu chỉ báo tiến độ, vượt mục tiêu mới là lỗi.
    if (n > ENGLISH_PER_SUBTOPIC) fail(`chủ điểm ${id}: ${n} câu, vượt mục tiêu ${ENGLISH_PER_SUBTOPIC}`)
    else if (n < ENGLISH_PER_SUBTOPIC) lines.push(`  tiến độ: ${id} ${n}/${ENGLISH_PER_SUBTOPIC}`)
  }

  for (const t of topics) {
    const qs = ENGLISH_QUESTIONS.filter((q) => q.topic === t)
    if (qs.length > ENGLISH_PER_TOPIC) fail(`thì ${t}: ${qs.length} câu, vượt mục tiêu ${ENGLISH_PER_TOPIC}`)
    const traps = qs.filter((q) => q.trap).length
    const minTraps = Math.ceil(qs.length * MIN_TRAP_SHARE)
    if (traps < minTraps) fail(`thì ${t}: chỉ ${traps} câu bẫy (cần ≥ ${minTraps})`)
    ;[0, 1, 2, 3].forEach((i) => {
      const share = qs.filter((q) => q.correctIndex === i).length / Math.max(qs.length, 1)
      if (share > MAX_POSITION_SHARE) fail(`thì ${t}: đáp án ở vị trí ${'ABCD'[i]} chiếm ${Math.round(share * 100)}% (tối đa 40%)`)
    })
    const d = { easy: 0, medium: 0, hard: 0 }
    for (const q of qs) d[q.difficulty]++
    const pos = [0, 1, 2, 3].map((i) => Math.round((qs.filter((q) => q.correctIndex === i).length / Math.max(qs.length, 1)) * 100) + '%').join('/')
    const ill = qs.filter((q) => q.illustrationId).length
    lines.push(`  ${TOPICS[t].name_en.padEnd(19)} ${qs.length} câu  dễ/vừa/khó = ${d.easy}/${d.medium}/${d.hard}  bẫy=${traps}  hình=${ill}  A/B/C/D=${pos}`)
  }
  return { errors, lines }
}
