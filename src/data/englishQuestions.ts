import type { EnglishQuestion } from '../types/quiz'
import { PRESENT_SIMPLE_QUESTIONS } from './english/presentSimple'
import { PRESENT_CONTINUOUS_QUESTIONS } from './english/presentContinuous'
import { PAST_SIMPLE_QUESTIONS } from './english/pastSimple'

/** 360 câu Tiếng Anh chuẩn Cambridge KET (A2) / PET (B1): 3 thì × 10 chủ điểm × 12 câu. */
export const ENGLISH_QUESTIONS: EnglishQuestion[] = [
  ...PRESENT_SIMPLE_QUESTIONS,
  ...PRESENT_CONTINUOUS_QUESTIONS,
  ...PAST_SIMPLE_QUESTIONS,
].map((q) => ({ ...q, subject: 'english' as const }))
