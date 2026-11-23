import type { EnglishQuestionInput } from '../../../types/quiz'
import { ROUTINES } from './routines'
import { THIRD_PERSON } from './third-person'
import { FREQUENCY } from './frequency'
import { NEGATIVE } from './negative'
import { ASKING } from './questions'
import { TO_BE } from './to-be'
import { STATE_VERBS } from './state-verbs'
import { FACTS } from './facts-timetables'
import { DIALOGUES } from './dialogues'
import { NOTICES } from './notices'

export const PRESENT_SIMPLE_QUESTIONS: EnglishQuestionInput[] = [
  ...ROUTINES,
  ...THIRD_PERSON,
  ...FREQUENCY,
  ...NEGATIVE,
  ...ASKING,
  ...TO_BE,
  ...STATE_VERBS,
  ...FACTS,
  ...DIALOGUES,
  ...NOTICES,
]
