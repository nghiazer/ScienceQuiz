export type Topic = 'living' | 'physical' | 'earth' | 'inquiry'
export type Difficulty = 'easy' | 'medium' | 'hard'
export type LangMode = 'vi' | 'en' | 'bi'
export type OptionIndex = 0 | 1 | 2 | 3
export type Options = [string, string, string, string]

export type SubtopicId =
  | 'plant-parts' | 'plant-needs' | 'animal-groups' | 'life-cycles' | 'habitats-adapt' | 'food-chains' | 'living-vs-nonliving' | 'human-body'
  | 'magnets' | 'electricity' | 'conductors' | 'sound' | 'light-shadow' | 'forces-motion' | 'float-sink' | 'materials-states'
  | 'sun' | 'moon' | 'day-night' | 'shadows-time' | 'water-cycle' | 'weather-seasons' | 'earth-shape' | 'rocks-soil'
  | 'observation' | 'measuring-tools' | 'reading-numbers' | 'charts' | 'fair-test' | 'predict-compare' | 'classify' | 'variables-cause'

export type IllustrationId =
  | 'magnets' | 'butterfly-life-cycle' | 'sun-shadow' | 'circuit-open' | 'circuit-closed' | 'melting-ice'
  | 'food-chain' | 'moon-phases' | 'thermometer' | 'thermometer-cold' | 'plant-experiment' | 'bar-chart' | 'water-cycle'
  | 'plant-parts' | 'frog-life-cycle' | 'animal-panel' | 'conductor-test' | 'drum-sound' | 'flashlight-shadow'
  | 'push-pull' | 'float-sink' | 'water-states' | 'earth-rotation' | 'weather-icons' | 'soil-layers'
  | 'ruler-pencil' | 'balance-scale' | 'magnifier-ant'

export interface Question {
  id: string
  topic: Topic
  subtopic: SubtopicId
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
  /** id các câu đã trả lời, dùng để ưu tiên câu mới ở các lượt sau */
  seenIds: string[]
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
  gradient: string
  soft: string
  text: string
  ring: string
  hex: string
}
