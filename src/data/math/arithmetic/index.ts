import type { MathQuestionInput } from '../../../types/quiz'
import { QUICK_CALC } from './quick-calc'
import { MISSING_NUMBER } from './missing-number'
import { WORD_PROBLEMS } from './word-problems'
import { MONEY_TIME_UNITS } from './money-time-units'
import { BALANCE_UNKNOWN } from './balance-unknown'

export const ARITHMETIC_QUESTIONS: MathQuestionInput[] = [
  ...QUICK_CALC,
  ...MISSING_NUMBER,
  ...WORD_PROBLEMS,
  ...MONEY_TIME_UNITS,
  ...BALANCE_UNKNOWN,
]
