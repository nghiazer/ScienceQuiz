import type { Question, ScienceQuestion, Subject } from '../../types/quiz'
import { LIVING_QUESTIONS } from './living'
import { PHYSICAL_QUESTIONS } from './physical'
import { EARTH_QUESTIONS } from './earth'
import { INQUIRY_QUESTIONS } from './inquiry'
import { ENGLISH_QUESTIONS } from '../englishQuestions'
import { MATH_QUESTIONS } from '../mathQuestions'

export { TOPICS, TOPIC_ORDER, SUBTOPICS, SUBJECTS, SUBJECT_TOPICS } from '../topics'
export { ENGLISH_QUESTIONS, MATH_QUESTIONS }

/** Ngân hàng câu hỏi Khoa học. Các câu cũ mặc định thuộc môn 'science'. */
export const SCIENCE_QUESTIONS: ScienceQuestion[] = [
  ...LIVING_QUESTIONS,
  ...PHYSICAL_QUESTIONS,
  ...EARTH_QUESTIONS,
  ...INQUIRY_QUESTIONS,
].map((q) => ({ ...q, subject: 'science' as const }))

/** Giữ tên cũ: chỉ gồm câu hỏi Khoa học, để mã nguồn và script hiện có không đổi. */
export const QUESTIONS = SCIENCE_QUESTIONS

export const ALL_QUESTIONS: Question[] = [...SCIENCE_QUESTIONS, ...ENGLISH_QUESTIONS, ...MATH_QUESTIONS]

export const QUESTIONS_BY_SUBJECT: Record<Subject, Question[]> = {
  science: SCIENCE_QUESTIONS,
  english: ENGLISH_QUESTIONS,
  math: MATH_QUESTIONS,
}
