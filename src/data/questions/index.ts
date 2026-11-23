import type { Question } from '../../types/quiz'
import { LIVING_QUESTIONS } from './living'
import { PHYSICAL_QUESTIONS } from './physical'
import { EARTH_QUESTIONS } from './earth'
import { INQUIRY_QUESTIONS } from './inquiry'

export { TOPICS, TOPIC_ORDER, SUBTOPICS } from '../topics'

/** Toàn bộ ngân hàng câu hỏi. Mỗi chủ đề nằm trong một file riêng. */
export const QUESTIONS: Question[] = [
  ...LIVING_QUESTIONS,
  ...PHYSICAL_QUESTIONS,
  ...EARTH_QUESTIONS,
  ...INQUIRY_QUESTIONS,
]
