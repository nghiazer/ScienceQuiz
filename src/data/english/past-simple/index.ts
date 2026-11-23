import type { EnglishQuestionInput } from '../../../types/quiz'
import { TIME_WORDS } from './time-words'
import { REGULAR } from './regular-ed'
import { IRREGULAR_1 } from './irregular-1'
import { IRREGULAR_2 } from './irregular-2'
import { WAS_WERE } from './was-were'
import { NEGATIVE } from './negative'
import { ASKING } from './questions'
import { VERSUS } from './vs-present'
import { DIALOGUES } from './dialogues'
import { NOTICES } from './notices'

export const PAST_SIMPLE_QUESTIONS: EnglishQuestionInput[] = [
  ...TIME_WORDS,
  ...REGULAR,
  ...IRREGULAR_1,
  ...IRREGULAR_2,
  ...WAS_WERE,
  ...NEGATIVE,
  ...ASKING,
  ...VERSUS,
  ...DIALOGUES,
  ...NOTICES,
]
