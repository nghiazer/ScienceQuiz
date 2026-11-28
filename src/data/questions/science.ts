import type { ScienceQuestion } from '../../types/quiz'
import { LIVING_QUESTIONS } from './living'
import { PHYSICAL_QUESTIONS } from './physical'
import { EARTH_QUESTIONS } from './earth'
import { INQUIRY_QUESTIONS } from './inquiry'

/** Ngân hàng câu hỏi Khoa học. Các câu cũ mặc định thuộc môn 'science'. */
export const SCIENCE_QUESTIONS: ScienceQuestion[] = [
  ...LIVING_QUESTIONS,
  ...PHYSICAL_QUESTIONS,
  ...EARTH_QUESTIONS,
  ...INQUIRY_QUESTIONS,
].map((q) => ({ ...q, subject: 'science' as const }))
