/* Sinh sổ cái câu hỏi để soạn và review nội dung. Chạy: npm run ledger */
import { writeFileSync, mkdirSync } from 'node:fs'
import { ENGLISH_QUESTIONS, QUESTIONS, SUBJECT_TOPICS, TOPIC_ORDER, TOPICS, SUBTOPICS } from '../src/data/questions'
import type { Question } from '../src/types/quiz'

const short = (s: string, n = 90) => (s.length > n ? s.slice(0, n - 1) + '…' : s)
const mdCell = (s: string) => s.replace(/\|/g, '\\|')
const DIFF = { easy: 'dễ', medium: 'vừa', hard: 'khó' } as const

const lines: string[] = [
  '# Sổ cái câu hỏi',
  '',
  'Sinh tự động từ `src/data/questions` bằng `npm run ledger`. Không sửa tay file này.',
  'Dùng để chọn khái niệm chưa có trước khi soạn câu mới và làm phiếu review nội dung khoa học.',
  '',
]
for (const t of TOPIC_ORDER) {
  const topicQs = QUESTIONS.filter((q) => q.topic === t)
  lines.push(`## ${TOPICS[t].name_vi} (${topicQs.length} câu)`, '')
  const subs = Object.entries(SUBTOPICS).filter(([, v]) => v.topic === t).map(([k]) => k)
  for (const sid of subs) {
    const qs = topicQs.filter((q: Question) => q.subtopic === sid)
    lines.push(`### ${SUBTOPICS[sid as keyof typeof SUBTOPICS].vi} (${qs.length} câu)`, '')
    lines.push('| id | độ khó | hình | câu hỏi | đáp án đúng | kiểm tra |', '| --- | --- | --- | --- | --- | --- |')
    for (const q of qs) {
      lines.push(
        `| ${q.id} | ${DIFF[q.difficulty]} | ${q.illustrationId ?? ''} | ${mdCell(short(q.question_vi))} | ${mdCell(short(q.options_vi[q.correctIndex], 60))} | ☐ |`,
      )
    }
    lines.push('')
  }
}
lines.push('# Tiếng Anh (Cambridge KET / PET)', '')
for (const t of SUBJECT_TOPICS.english) {
  const topicQs = ENGLISH_QUESTIONS.filter((q) => q.topic === t)
  lines.push(`## ${TOPICS[t].name_vi} – ${TOPICS[t].name_en} (${topicQs.length} câu)`, '')
  const subs = Object.entries(SUBTOPICS).filter(([, v]) => v.topic === t).map(([k]) => k)
  for (const sid of subs) {
    const qs = topicQs.filter((q) => q.subtopic === sid)
    lines.push(`### ${SUBTOPICS[sid as keyof typeof SUBTOPICS].vi} (${qs.length} câu)`, '')
    lines.push('| id | độ khó | hình | bẫy | câu hỏi | đáp án đúng | kiểm tra |', '| --- | --- | --- | --- | --- | --- | --- |')
    for (const q of qs) {
      const text = (q.passage_en ? q.passage_en + ' → ' : '') + q.question_en
      lines.push(
        `| ${q.id} | ${DIFF[q.difficulty]} | ${q.illustrationId ?? ''} | ${q.trap ? '⚠' : ''} | ${mdCell(short(text.replace(/\n/g, ' / ')))} | ${mdCell(short(q.options_en[q.correctIndex], 40))} | ☐ |`,
      )
    }
    lines.push('')
  }
}
mkdirSync('docs', { recursive: true })
writeFileSync('docs/question-ledger.md', lines.join('\n') + '\n')
console.log(`Đã ghi docs/question-ledger.md (${QUESTIONS.length} câu Khoa học + ${ENGLISH_QUESTIONS.length} câu Tiếng Anh)`)
