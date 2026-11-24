/* Tra cứu câu hỏi. Chạy: npm run q -- <bộ lọc>
 * Bộ lọc: --id=pa-negative-07 | --topic=past-simple | --sub=pa-negative | --diff=easy|medium|hard
 *         --trap | --text=từ khóa (không phân biệt hoa thường) | --limit=20 | --full
 * Ví dụ: npm run q -- --sub=pa-negative --diff=hard --full */
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { ALL_QUESTIONS } from '../src/data/questions'
import type { Question } from '../src/types/quiz'

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, ...v] = a.replace(/^--/, '').split('=')
    return [k, v.length ? v.join('=') : 'true']
  }),
)
const limit = Number(args.limit ?? 20)
const full = args.full === 'true'

const text = (q: Question) =>
  q.subject === 'english'
    ? `${q.passage_en ?? ''} ${q.question_en} ${q.options_en.join(' ')}`
    : `${q.question_vi} ${q.question_en} ${q.options_vi.join(' ')} ${q.options_en.join(' ')}`

const hits = ALL_QUESTIONS.filter(
  (q) =>
    (!args.id || q.id === args.id) &&
    (!args.topic || q.topic === args.topic) &&
    (!args.sub || q.subtopic === args.sub) &&
    (!args.diff || q.difficulty === args.diff) &&
    (!args.trap || (q.subject === 'english' && q.trap)) &&
    (!args.text || text(q).toLowerCase().includes(String(args.text).toLowerCase())),
)

// Tìm file nguồn: tiếng Anh theo `section('<thì>', '<chủ điểm>')`, Khoa học theo `id: '<id>'`.
function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f)
    return statSync(p).isDirectory() ? walk(p) : p.endsWith('.ts') ? [p] : []
  })
}
const files = walk('src/data').map((p) => ({ p, src: readFileSync(p, 'utf8') }))
const sourceOf = (q: Question) => {
  const needle = q.subject === 'english' ? `'${q.subtopic}')` : `id: '${q.id}'`
  return files.find((f) => f.src.includes(needle))?.p ?? '?'
}

console.log(`${hits.length} câu khớp (hiển thị tối đa ${limit})\n`)
for (const q of hits.slice(0, limit)) {
  const head = `${q.id} [${q.difficulty}${q.subject === 'english' && q.trap ? ', bẫy' : ''}${q.illustrationId ? ', hình ' + q.illustrationId : ''}]  ${sourceOf(q)}`
  console.log(head)
  const opts = q.subject === 'english' ? q.options_en : q.options_vi
  if (q.subject === 'english' && q.passage_en) console.log(`  “${q.passage_en}”`)
  console.log(`  ${q.subject === 'english' ? q.question_en.replace(/\n/g, ' / ') : q.question_vi}`)
  opts.forEach((o, i) => console.log(`   ${i === q.correctIndex ? '✓' : ' '} ${'ABCD'[i]}. ${o}`))
  if (full) console.log(`  ${q.explanation_vi.replace(/\n/g, ' | ')}`)
  console.log()
}
