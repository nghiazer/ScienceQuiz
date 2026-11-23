export type Subject = 'science' | 'english'
export type ScienceTopic = 'living' | 'physical' | 'earth' | 'inquiry'
export type EnglishTopic = 'present-simple' | 'present-continuous' | 'past-simple'
export type Topic = ScienceTopic | EnglishTopic
export type Difficulty = 'easy' | 'medium' | 'hard'
export type LangMode = 'vi' | 'en' | 'bi'
export type OptionIndex = 0 | 1 | 2 | 3
export type Options = [string, string, string, string]

export type ScienceSubtopicId =
  | 'plant-parts' | 'plant-needs' | 'animal-groups' | 'life-cycles' | 'habitats-adapt' | 'food-chains' | 'living-vs-nonliving' | 'human-body'
  | 'seeds-growth' | 'feeding-teeth' | 'caring-young' | 'decomposers' | 'survival-strategies' | 'healthy-habits'
  | 'magnets' | 'electricity' | 'conductors' | 'sound' | 'light-shadow' | 'forces-motion' | 'float-sink' | 'materials-states'
  | 'sun' | 'moon' | 'day-night' | 'shadows-time' | 'water-cycle' | 'weather-seasons' | 'earth-shape' | 'rocks-soil'
  | 'observation' | 'measuring-tools' | 'reading-numbers' | 'charts' | 'fair-test' | 'predict-compare' | 'classify' | 'variables-cause'

export type EnglishSubtopicId =
  | 'ps-routines' | 'ps-third-person' | 'ps-frequency' | 'ps-negative' | 'ps-questions'
  | 'ps-to-be' | 'ps-state-verbs' | 'ps-facts-timetables' | 'ps-dialogues' | 'ps-notices'
  | 'pc-now' | 'pc-look-listen' | 'pc-spelling' | 'pc-negative' | 'pc-questions'
  | 'pc-future-plans' | 'pc-temporary' | 'pc-vs-simple' | 'pc-dialogues' | 'pc-notices'
  | 'pa-time-words' | 'pa-regular-ed' | 'pa-irregular-1' | 'pa-irregular-2' | 'pa-was-were'
  | 'pa-negative' | 'pa-questions' | 'pa-vs-present' | 'pa-dialogues' | 'pa-notices'

export type SubtopicId = ScienceSubtopicId | EnglishSubtopicId

export type IllustrationId =
  | 'magnets' | 'butterfly-life-cycle' | 'sun-shadow' | 'circuit-open' | 'circuit-closed' | 'melting-ice'
  | 'food-chain' | 'moon-phases' | 'thermometer' | 'thermometer-cold' | 'plant-experiment' | 'bar-chart' | 'water-cycle'
  | 'plant-parts' | 'frog-life-cycle' | 'animal-panel' | 'conductor-test' | 'drum-sound' | 'flashlight-shadow'
  | 'push-pull' | 'float-sink' | 'water-states' | 'earth-rotation' | 'weather-icons' | 'soil-layers'
  | 'ruler-pencil' | 'balance-scale' | 'magnifier-ant'
  | 'en-timeline-past' | 'en-timeline-now' | 'en-timeline-habit' | 'en-dialogue' | 'en-daily-routine' | 'en-look-listen'

interface BaseQuestion {
  id: string
  difficulty: Difficulty
  correctIndex: OptionIndex
  explanation_vi: string
  explanation_en: string
  illustrationId?: IllustrationId
}

export interface ScienceQuestion extends BaseQuestion {
  subject: 'science'
  topic: ScienceTopic
  subtopic: ScienceSubtopicId
  question_vi: string
  question_en: string
  options_vi: Options
  options_en: Options
}

export type EnglishFormat = 'sentence' | 'dialogue' | 'notice'

/** Câu hỏi tiếng Anh: câu hỏi và đáp án luôn bằng tiếng Anh; chỉ phần giải thích có tiếng Việt. */
export interface EnglishQuestion extends BaseQuestion {
  subject: 'english'
  topic: EnglishTopic
  subtopic: EnglishSubtopicId
  format: EnglishFormat
  /** Biển báo / tin nhắn ngắn (bắt buộc khi format = 'notice') */
  passage_en?: string
  question_en: string
  options_en: Options
  /** Câu bẫy phân biệt các thì, ưu tiên đưa vào đề thi thử */
  trap?: true
}

export type Question = ScienceQuestion | EnglishQuestion

/** Dạng khai báo trong file dữ liệu Khoa học (subject được thêm tự động). */
export type ScienceQuestionInput = Omit<ScienceQuestion, 'subject'>
export type EnglishQuestionInput = Omit<EnglishQuestion, 'subject'>

export type QuizKind = 'topic' | 'mock' | 'retry'

export interface AnswerRecord {
  questionId: string
  /** null = chưa trả lời (ví dụ hết giờ) */
  selectedIndex: OptionIndex | null
  correct: boolean
}

export interface QuizConfig {
  kind: QuizKind
  subject: Subject
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
  /** số bài thi thử Tiếng Anh đã hoàn thành (mockCompleted chỉ tính Khoa học) */
  englishMockCompleted: number
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
  subject: Subject
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
