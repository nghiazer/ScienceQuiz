/* Chỉ chạy kiểm tra trùng lặp. Chạy: npm run check:dupes */
import { ALL_QUESTIONS as QUESTIONS } from '../src/data/questions'
import { findDupes, type AllowEntry } from './lib/dupes'
import { readFileSync } from 'node:fs'

const allow = JSON.parse(readFileSync('scripts/dupes-allowlist.json', 'utf8')) as AllowEntry[]
const { errors, warnings } = findDupes(QUESTIONS, allow)
for (const w of warnings) console.warn('cảnh báo: ' + w)
if (errors.length) {
  for (const e of errors) console.error('lỗi: ' + e)
  console.error(`\n✗ ${errors.length} cặp trùng cần xử lý`)
  process.exit(1)
}
console.log(`✓ Không có câu trùng (${QUESTIONS.length} câu, ${allow.length} cặp được allowlist)`)
