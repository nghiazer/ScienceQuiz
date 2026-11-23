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

export function findDupes(qs: Question[], allow: AllowEntry[]): DupeReport {
  const errors: string[] = []
  const warnings: string[] = []
  const allowed = (a: string, b: string) =>
    allow.some((e) => (e.a === a && e.b === b) || (e.a === b && e.b === a))

  for (let i = 0; i < qs.length; i++) {
    for (let j = i + 1; j < qs.length; j++) {
      const p = qs[i]
      const q = qs[j]
      const pair = `${p.id} / ${q.id}`
      const sameSub = p.subtopic === q.subtopic

      // 1) Cùng nội dung câu hỏi: không cho phép allowlist.
      if (normalize(p.question_vi) === normalize(q.question_vi) || normalize(p.question_en) === normalize(q.question_en)) {
        errors.push(`${pair}: trùng nguyên văn câu hỏi (không được allowlist)`)
        continue
      }

      const sim = Math.max(jaccard(tokens(p.question_vi), tokens(q.question_vi)), jaccard(tokens(p.question_en), tokens(q.question_en)))
      const sameAnswer =
        sameSub && normalize(p.options_vi[p.correctIndex]) === normalize(q.options_vi[q.correctIndex])

      if (sameSub && sim >= SIM_ERROR && !allowed(p.id, q.id)) {
        errors.push(`${pair}: câu hỏi gần giống nhau (độ giống ${sim.toFixed(2)}) cùng chủ điểm ${p.subtopic}`)
      } else if (sameAnswer && !allowed(p.id, q.id)) {
        errors.push(`${pair}: cùng chủ điểm ${p.subtopic} và cùng đáp án đúng "${p.options_vi[p.correctIndex]}"`)
      } else if (!sameSub && sim >= SIM_WARN) {
        warnings.push(`${pair}: câu hỏi rất giống nhau (${sim.toFixed(2)}) khác chủ điểm`)
      }
    }
  }
  return { errors, warnings }
}
