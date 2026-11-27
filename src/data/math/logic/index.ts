import type { MathQuestionInput } from '../../../types/quiz'
import { NUMBER_PATTERNS } from './number-patterns'
import { SHAPE_PATTERNS } from './shape-patterns'
import { ORDERING_TRUTH } from './ordering-truth'
import { CALENDAR_AGE } from './calendar-age'
import { WORK_BACKWARDS } from './work-backwards'

export const LOGIC_QUESTIONS: MathQuestionInput[] = [
  ...NUMBER_PATTERNS,
  ...SHAPE_PATTERNS,
  ...ORDERING_TRUTH,
  ...CALENDAR_AGE,
  ...WORK_BACKWARDS,
]
