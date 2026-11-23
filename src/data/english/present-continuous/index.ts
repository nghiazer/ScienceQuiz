import type { EnglishQuestionInput } from '../../../types/quiz'
import { NOW } from './now'
import { LOOK_LISTEN } from './look-listen'
import { SPELLING } from './spelling'
import { NEGATIVE } from './negative'
import { ASKING } from './questions'
import { FUTURE } from './future-plans'
import { TEMPORARY } from './temporary'
import { VERSUS } from './vs-simple'
import { DIALOGUES } from './dialogues'
import { NOTICES } from './notices'

export const PRESENT_CONTINUOUS_QUESTIONS: EnglishQuestionInput[] = [
  ...NOW,
  ...LOOK_LISTEN,
  ...SPELLING,
  ...NEGATIVE,
  ...ASKING,
  ...FUTURE,
  ...TEMPORARY,
  ...VERSUS,
  ...DIALOGUES,
  ...NOTICES,
]
