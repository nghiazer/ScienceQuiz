import type { MathQuestionInput } from '../../../types/quiz'
import { COUNT_SHAPES } from './count-shapes'
import { PERIMETER } from './perimeter'
import { AREA_GRID } from './area-grid'
import { CUBES_NETS } from './cubes-nets'
import { SYMMETRY_CLOCK } from './symmetry-clock'

export const GEOMETRY_QUESTIONS: MathQuestionInput[] = [
  ...COUNT_SHAPES,
  ...PERIMETER,
  ...AREA_GRID,
  ...CUBES_NETS,
  ...SYMMETRY_CLOCK,
]
