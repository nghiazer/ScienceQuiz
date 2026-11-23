import type { EnglishQuestion } from '../types/quiz'
import { PRESENT_SIMPLE_QUESTIONS } from './english/present-simple'
import { PRESENT_CONTINUOUS_QUESTIONS } from './english/present-continuous'
import { PAST_SIMPLE_QUESTIONS } from './english/past-simple'

/** Câu Tiếng Anh chuẩn Cambridge KET (A2) / PET (B1): 3 thì × 10 chủ điểm; mục tiêu 100 câu mỗi chủ điểm (1000 câu mỗi thì). */
export const ENGLISH_QUESTIONS: EnglishQuestion[] = [
  ...PRESENT_SIMPLE_QUESTIONS,
  ...PRESENT_CONTINUOUS_QUESTIONS,
  ...PAST_SIMPLE_QUESTIONS,
].map((q) => ({ ...q, subject: 'english' as const }))
