import type { MathQuestionInput } from '../../../types/quiz'
import { CHOICES } from './choices'
import { GRID_PATHS } from './grid-paths'
import { HANDSHAKES } from './handshakes'
import { PIGEONHOLE } from './pigeonhole'
import { SYSTEMATIC_LIST } from './systematic-list'

export const COMBINATORICS_QUESTIONS: MathQuestionInput[] = [
  ...CHOICES,
  ...GRID_PATHS,
  ...HANDSHAKES,
  ...PIGEONHOLE,
  ...SYSTEMATIC_LIST,
]
