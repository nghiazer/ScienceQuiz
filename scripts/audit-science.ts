/* Đo tự động bộ câu Khoa học để rà soát: lộ đáp án, lời giải ngắn, đáp án gộp, câu có hình.
 * Chạy: npm run audit:science [-- --out=đường/dẫn.txt]  (không sửa dữ liệu) */
import { writeFileSync } from 'node:fs'
import { SCIENCE_QUESTIONS } from '../src/data/questions'
import type { ScienceQuestion } from '../src/types/quiz'

const outArg = process.argv.find((a) => a.startsWith('--out='))?.slice(6)

const GROUPED = /^(Cả hai|Tất cả|Không có|Không ai|Cả 2)/
/** Lời giải tối thiểu để bé hiểu vì sao đúng (ký tự). */
const MIN_EXPLANATION = 80
/** Đáp án đúng dài nhất hẳn: gấp ≥ 1,3 lần phương án dài thứ hai. */
const LONG_RATIO = 1.3

interface Flag {
  id: string
  topic: string
  subtopic: string
  reasons: string[]
}

const flags: Flag[] = []
const longest: ScienceQuestion[] = []

for (const q of SCIENCE_QUESTIONS) {
  const reasons: string[] = []
  const lens = q.options_vi.map((o) => o.length)
  const correct = lens[q.correctIndex]
  const sorted = [...lens].sort((a, b) => b - a)
  if (correct === sorted[0] && sorted[0] >= sorted[1] * LONG_RATIO) {
    reasons.push(`đáp án đúng dài nhất (${correct} ký tự so với ${sorted[1]})`)
    longest.push(q)
  }
  if (q.explanation_vi.length < MIN_EXPLANATION) reasons.push(`lời giải ngắn (${q.explanation_vi.length} ký tự)`)
  if (q.options_vi.some((o) => GROUPED.test(o.trim()))) reasons.push('có đáp án gộp (Cả hai / Tất cả / Không có)')
  if (reasons.length) flags.push({ id: q.id, topic: q.topic, subtopic: q.subtopic, reasons })
}

const pct = (n: number) => `${Math.round((n / SCIENCE_QUESTIONS.length) * 100)}%`
const lines: string[] = []
lines.push(`Tổng: ${SCIENCE_QUESTIONS.length} câu Khoa học · câu bị nghi: ${flags.length}`)
lines.push(`Đáp án đúng là phương án dài nhất hẳn: ${longest.length} (${pct(longest.length)}) — mục tiêu dưới 35%`)
for (const t of ['living', 'physical', 'earth', 'inquiry']) {
  const tf = flags.filter((f) => f.topic === t)
  lines.push(`  ${t.padEnd(9)} bị nghi ${tf.length} câu`)
}
lines.push('')
for (const f of flags) lines.push(`${f.id.padEnd(10)} [${f.subtopic}] ${f.reasons.join('; ')}`)

const report = lines.join('\n') + '\n'
if (outArg) writeFileSync(outArg, report)
console.log(report)
