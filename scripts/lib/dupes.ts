/* Phát hiện câu hỏi trùng hoặc gần trùng. Dùng chung cho check-data và check-dupes. */
import type { Question } from '../../src/types/quiz'

export interface AllowEntry { a: string; b: string; reason: string }
export interface DupeReport { errors: string[]; warnings: string[] }

const STOP = new Set(['và', 'là', 'của', 'các', 'những', 'một', 'the', 'a', 'an', 'of', 'is', 'in', 'to', 'and'])

export function normalize(s: string): string {
  return s.toLowerCase().normalize('NFC').replace(/[^\p{L}\p{N}\s]/gu, ' ').replace(/\s+/g, ' ').trim()
}

export function tokens(s: string): Set<string> {
  return new Set(normalize(s).split(' ').filter((w) => w.length > 1 && !STOP.has(w)))
}

export function jaccard(a: Set<string>, b: Set<string>): number {
  let inter = 0
  for (const x of a) if (b.has(x)) inter++
  const union = a.size + b.size - inter
  return union === 0 ? 0 : inter / union
}

const SIM_ERROR = 0.65
const SIM_WARN = 0.8
// Câu ngữ pháp Tiếng Anh ngắn và theo mẫu nên giống nhau nhiều hơn: nới ngưỡng, và đáp án đúng được phép lặp (vd. "doesn’t").
const SIM_ERROR_EN = 0.8

const viText = (q: Question) => (q.subject === 'english' ? `${q.passage_en ?? ''} ${q.question_en}` : q.question_vi)
const enText = (q: Question) => (q.subject === 'english' ? `${q.passage_en ?? ''} ${q.question_en}` : q.question_en)
const answerText = (q: Question) => (q.subject === 'english' ? q.options_en[q.correctIndex] : q.options_vi[q.correctIndex])

interface Prepared {
  q: Question
  nvi: string
  nen: string
  viTok: Set<string>
  enTok: Set<string>
}

export function findDupes(qs: Question[], allow: AllowEntry[]): DupeReport {
  const errors: string[] = []
  const warnings: string[] = []
  const allowed = (a: string, b: string) =>
    allow.some((e) => (e.a === a && e.b === b) || (e.a === b && e.b === a))

  // Chuẩn hoá và tách từ một lần cho mỗi câu (kho Tiếng Anh lên tới hàng nghìn câu).
  const prep: Prepared[] = qs.map((q) => ({
    q,
    nvi: normalize(viText(q)),
    nen: normalize(enText(q)),
    viTok: tokens(viText(q)),
    enTok: tokens(enText(q)),
  }))

  for (let i = 0; i < prep.length; i++) {
    for (let j = i + 1; j < prep.length; j++) {
      const a = prep[i]
      const b = prep[j]
      const p = a.q
      const q = b.q
      if (p.subject !== q.subject) continue
      const english = p.subject === 'english'
      // Tiếng Anh: so sánh gần-trùng trong cùng một thì; trùng nguyên văn được kiểm tra riêng toàn kho bên dưới.
      if (english && p.topic !== q.topic) continue
      const pair = `${p.id} / ${q.id}`
      const sameSub = p.subtopic === q.subtopic

      // 1) Cùng nội dung câu hỏi: không cho phép allowlist.
      if (a.nvi === b.nvi || a.nen === b.nen) {
        errors.push(`${pair}: trùng nguyên văn câu hỏi (không được allowlist)`)
        continue
      }

      const sim = Math.max(jaccard(a.viTok, b.viTok), jaccard(a.enTok, b.enTok))
      const sameAnswer = !english && sameSub && normalize(answerText(p)) === normalize(answerText(q))

      if (sameSub && sim >= (english ? SIM_ERROR_EN : SIM_ERROR) && !allowed(p.id, q.id)) {
        errors.push(`${pair}: câu hỏi gần giống nhau (độ giống ${sim.toFixed(2)}) cùng chủ điểm ${p.subtopic}`)
      } else if (sameAnswer && !allowed(p.id, q.id)) {
        errors.push(`${pair}: cùng chủ điểm ${p.subtopic} và cùng đáp án đúng "${answerText(p)}"`)
      } else if (!sameSub && sim >= SIM_WARN) {
        warnings.push(`${pair}: câu hỏi rất giống nhau (${sim.toFixed(2)}) khác chủ điểm`)
      }
    }
  }

  // Tiếng Anh: không được trùng nguyên văn (kể cả khác thì) trên toàn kho.
  const seen = new Map<string, string>()
  for (const x of prep) {
    if (x.q.subject !== 'english') continue
    const first = seen.get(x.nen)
    if (first && first !== x.q.id) errors.push(`${first} / ${x.q.id}: trùng nguyên văn câu hỏi (không được allowlist)`)
    else seen.set(x.nen, x.q.id)
  }
  return { errors: Array.from(new Set(errors)), warnings }
}
