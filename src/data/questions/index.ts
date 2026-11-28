import type { Question, Subject } from '../../types/quiz'
import { SCIENCE_QUESTIONS } from './science'
import { ENGLISH_QUESTIONS } from '../englishQuestions'
import { MATH_QUESTIONS } from '../mathQuestions'

/*
 * Nạp ĐỒNG BỘ cả ba kho — chỉ dành cho scripts/ (check-data, ledger, query…).
 * Ứng dụng không import file này: kho từng môn được tải khi cần qua src/data/questionBank.ts.
 */

export { TOPICS, TOPIC_ORDER, SUBTOPICS, SUBJECTS, SUBJECT_TOPICS } from '../topics'
export { SCIENCE_QUESTIONS, ENGLISH_QUESTIONS, MATH_QUESTIONS }

/** Giữ tên cũ: chỉ gồm câu hỏi Khoa học, để mã nguồn và script hiện có không đổi. */
export const QUESTIONS = SCIENCE_QUESTIONS

export const ALL_QUESTIONS: Question[] = [...SCIENCE_QUESTIONS, ...ENGLISH_QUESTIONS, ...MATH_QUESTIONS]

export const QUESTIONS_BY_SUBJECT: Record<Subject, Question[]> = {
  science: SCIENCE_QUESTIONS,
  english: ENGLISH_QUESTIONS,
  math: MATH_QUESTIONS,
}
