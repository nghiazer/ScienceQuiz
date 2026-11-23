export type Topic = 'living' | 'physical' | 'earth' | 'inquiry'
export type Difficulty = 'easy' | 'medium'
export type LangMode = 'vi' | 'en' | 'bi'
export type OptionIndex = 0 | 1 | 2 | 3
export type Options = [string, string, string, string]

export type IllustrationId =
  | 'magnets'
  | 'butterfly-life-cycle'
  | 'sun-shadow'
  | 'circuit-open'
  | 'circuit-closed'
  | 'melting-ice'
  | 'food-chain'
  | 'moon-phases'
  | 'thermometer'
  | 'plant-experiment'
  | 'bar-chart'
  | 'water-cycle'

export interface Question {
  id: string
  topic: Topic
  difficulty: Difficulty
  question_vi: string
  question_en: string
  options_vi: Options
  options_en: Options
  correctIndex: OptionIndex
  explanation_vi: string
  explanation_en: string
  illustrationId?: IllustrationId
}

export type QuizKind = 'topic' | 'mock' | 'retry'

export interface AnswerRecord {
  questionId: string
  /** null = chưa trả lời (ví dụ hết giờ) */
  selectedIndex: OptionIndex | null
  correct: boolean
}

export interface QuizConfig {
  kind: QuizKind
  topic?: Topic
  questions: Question[]
  timerEnabled: boolean
}

export interface QuizResult {
  config: QuizConfig
  answers: AnswerRecord[]
  stars: number
  percent: number
  newBadges: string[]
}

export interface TopicStat {
  correct: number
  total: number
}

export interface Progress {
  totalStars: number
  streak: number
  lastPlayedDate: string | null
  quizzesCompleted: number
  mockCompleted: number
  perfectCount: number
  topicStats: Record<Topic, TopicStat>
  unlockedBadges: string[]
}

export interface BadgeDef {
  id: string
  emoji: string
  name_vi: string
  name_en: string
  desc_vi: string
  desc_en: string
  check: (p: Progress, last?: { percent: number; kind: QuizKind }) => boolean
}

export interface TopicMeta {
  id: Topic
  name_vi: string
  name_en: string
  desc_vi: string
  desc_en: string
  emoji: string
  /** tailwind class sets */
  gradient: string
  soft: string
  text: string
  ring: string
  hex: string
}
