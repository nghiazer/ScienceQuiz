import type { MathQuestion } from '../types/quiz'
import { LOGIC_QUESTIONS } from './math/logic'
import { ARITHMETIC_QUESTIONS } from './math/arithmetic'
import { NUMBER_THEORY_QUESTIONS } from './math/number-theory'
import { GEOMETRY_QUESTIONS } from './math/geometry'
import { COMBINATORICS_QUESTIONS } from './math/combinatorics'

/** Câu Toán chuẩn TIMO (lớp 2–3): 5 mảng × 5 chủ điểm; mục tiêu 40 câu mỗi chủ điểm (200 câu mỗi mảng, 1000 câu). */
export const MATH_QUESTIONS: MathQuestion[] = [
  ...LOGIC_QUESTIONS,
  ...ARITHMETIC_QUESTIONS,
  ...NUMBER_THEORY_QUESTIONS,
  ...GEOMETRY_QUESTIONS,
  ...COMBINATORICS_QUESTIONS,
].map((q) => ({ ...q, subject: 'math' as const }))
