import type { MathQuestionInput } from '../../../types/quiz'
import { ODD_EVEN } from './odd-even'
import { PLACE_VALUE } from './place-value'
import { MULTIPLES } from './multiples'
import { DIGIT_COUNT } from './digit-count'
import { REMAINDER_CYCLES } from './remainder-cycles'

export const NUMBER_THEORY_QUESTIONS: MathQuestionInput[] = [
  ...ODD_EVEN,
  ...PLACE_VALUE,
  ...MULTIPLES,
  ...DIGIT_COUNT,
  ...REMAINDER_CYCLES,
]
