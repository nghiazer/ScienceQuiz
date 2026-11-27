export type Subject = 'science' | 'english' | 'math'
export type ScienceTopic = 'living' | 'physical' | 'earth' | 'inquiry'
export type EnglishTopic = 'present-simple' | 'present-continuous' | 'past-simple'
/** Toán chuẩn TIMO: 5 mảng thi */
export type MathTopic = 'logic' | 'arithmetic' | 'number-theory' | 'geometry' | 'combinatorics'
export type Topic = ScienceTopic | EnglishTopic | MathTopic
export type Difficulty = 'easy' | 'medium' | 'hard'
export type LangMode = 'vi' | 'en' | 'bi'
export type OptionIndex = 0 | 1 | 2 | 3
export type Options = [string, string, string, string]

export type ScienceSubtopicId =
  | 'plant-parts' | 'plant-needs' | 'animal-groups' | 'life-cycles' | 'habitats-adapt' | 'food-chains' | 'living-vs-nonliving' | 'human-body'
  | 'seeds-growth' | 'feeding-teeth' | 'caring-young' | 'decomposers' | 'survival-strategies' | 'healthy-habits'
  | 'magnets' | 'electricity' | 'conductors' | 'sound' | 'light-shadow' | 'forces-motion' | 'float-sink' | 'materials-states'
  | 'heat-transfer' | 'energy-forms' | 'simple-machines' | 'dissolving-mixtures' | 'material-properties' | 'sound-pitch'
  | 'sun' | 'moon' | 'day-night' | 'shadows-time' | 'water-cycle' | 'weather-seasons' | 'earth-shape' | 'rocks-soil'
  | 'stars-sky' | 'air-wind' | 'resources-pollution' | 'landforms' | 'planets-order'
  | 'observation' | 'measuring-tools' | 'reading-numbers' | 'charts' | 'fair-test' | 'predict-compare' | 'classify' | 'variables-cause'
  | 'patterns-sequences' | 'estimating-units' | 'lab-safety' | 'line-graphs' | 'experiment-design' | 'evidence-opinion'

export type EnglishSubtopicId =
  | 'ps-routines' | 'ps-third-person' | 'ps-frequency' | 'ps-negative' | 'ps-questions'
  | 'ps-to-be' | 'ps-state-verbs' | 'ps-facts-timetables' | 'ps-dialogues' | 'ps-notices'
  | 'pc-now' | 'pc-look-listen' | 'pc-spelling' | 'pc-negative' | 'pc-questions'
  | 'pc-future-plans' | 'pc-temporary' | 'pc-vs-simple' | 'pc-dialogues' | 'pc-notices'
  | 'pa-time-words' | 'pa-regular-ed' | 'pa-irregular-1' | 'pa-irregular-2' | 'pa-was-were'
  | 'pa-negative' | 'pa-questions' | 'pa-vs-present' | 'pa-dialogues' | 'pa-notices'

export type MathSubtopicId =
  | 'log-number-patterns' | 'log-shape-patterns' | 'log-ordering-truth' | 'log-calendar-age' | 'log-work-backwards'
  | 'ari-quick-calc' | 'ari-missing-number' | 'ari-word-problems' | 'ari-money-time-units' | 'ari-balance-unknown'
  | 'num-odd-even' | 'num-place-value' | 'num-multiples' | 'num-digit-count' | 'num-remainder-cycles'
  | 'geo-count-shapes' | 'geo-perimeter' | 'geo-area-grid' | 'geo-cubes-nets' | 'geo-symmetry-clock'
  | 'com-choices' | 'com-grid-paths' | 'com-handshakes' | 'com-pigeonhole' | 'com-systematic-list'

export type SubtopicId = ScienceSubtopicId | EnglishSubtopicId | MathSubtopicId

export type IllustrationId =
  | 'magnets' | 'butterfly-life-cycle' | 'sun-shadow' | 'circuit-open' | 'circuit-closed' | 'melting-ice'
  | 'food-chain' | 'moon-phases' | 'thermometer' | 'thermometer-cold' | 'plant-experiment' | 'bar-chart' | 'water-cycle'
  | 'plant-parts' | 'frog-life-cycle' | 'animal-panel' | 'conductor-test' | 'drum-sound' | 'flashlight-shadow'
  | 'push-pull' | 'float-sink' | 'water-states' | 'earth-rotation' | 'weather-icons' | 'soil-layers'
  | 'ruler-pencil' | 'balance-scale' | 'magnifier-ant'
  | 'seed-sprout' | 'animal-teeth' | 'compost-cycle' | 'heat-spoon' | 'dissolve-cup' | 'simple-machines' | 'planets-order' | 'constellation' | 'sea-breeze' | 'landforms' | 'volcano' | 'rainbow' | 'line-graph' | 'pictograph' | 'measuring-cup' | 'pattern-sequence' | 'lab-goggles' | 'energy-ball' | 'series-circuit' | 'compass'
  | 'en-timeline-past' | 'en-timeline-now' | 'en-timeline-habit' | 'en-dialogue' | 'en-daily-routine' | 'en-look-listen'
  | 'ma-count-triangles' | 'ma-count-squares' | 'ma-grid-area' | 'ma-perimeter-shape' | 'ma-cube-stack' | 'ma-cube-net' | 'ma-clock'
  | 'ma-symmetry-fold' | 'ma-grid-paths' | 'ma-matchsticks' | 'ma-number-pyramid' | 'ma-magic-square' | 'ma-balance-math' | 'ma-shape-pattern'

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

/** Câu Toán TIMO: song ngữ như Khoa học; mọi con số viết bằng chữ số để vi/en khớp nhau. */
export interface MathQuestion extends BaseQuestion {
  subject: 'math'
  topic: MathTopic
  subtopic: MathSubtopicId
  question_vi: string
  question_en: string
  options_vi: Options
  options_en: Options
}

export type Question = ScienceQuestion | EnglishQuestion | MathQuestion
/** Câu song ngữ (có question_vi / options_vi): Khoa học và Toán. */
export type BilingualQuestion = ScienceQuestion | MathQuestion

/** Dạng khai báo trong file dữ liệu Khoa học (subject được thêm tự động). */
export type ScienceQuestionInput = Omit<ScienceQuestion, 'subject'>
export type EnglishQuestionInput = Omit<EnglishQuestion, 'subject'>
export type MathQuestionInput = Omit<MathQuestion, 'subject'>

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
  /** chuỗi đúng liên tiếp của môn lúc bắt đầu bài (để hiện tiến độ mở váy trong lúc làm) */
  dressRunStart?: number
  /** thời điểm bắt đầu bài (Date.now()), để ghi thời lượng làm bài vào lịch sử */
  startedAt?: number
}

export interface QuizResult {
  config: QuizConfig
  answers: AnswerRecord[]
  stars: number
  percent: number
  /** id các váy vừa mở khóa nhờ bài này */
  newDresses: string[]
}

export interface TopicStat {
  correct: number
  total: number
}

/** Một lượt làm bài đã hoàn thành, lưu để vẽ biểu đồ cho phụ huynh. */
export interface SessionRecord {
  /** thời điểm hoàn thành, dạng ISO */
  at: string
  /** ngày địa phương YYYY-MM-DD */
  date: string
  subject: Subject
  kind: QuizKind
  topic?: Topic
  total: number
  correct: number
  /** thời lượng làm bài (giây), tối đa 3600 */
  durationSec: number
}

/** Câu bé làm sai gần đây. selectedIndex tính theo thứ tự đáp án GỐC trong ngân hàng (không phải thứ tự đã xáo). */
export interface MistakeRecord {
  id: string
  at: string
  selectedIndex: OptionIndex | null
}

export interface Progress {
  totalStars: number
  streak: number
  lastPlayedDate: string | null
  quizzesCompleted: number
  mockCompleted: number
  /** số bài thi thử Tiếng Anh đã hoàn thành (mockCompleted chỉ tính Khoa học) */
  englishMockCompleted: number
  /** số bài thi thử Toán TIMO đã hoàn thành */
  mathMockCompleted: number
  perfectCount: number
  topicStats: Record<Topic, TopicStat>
  /** id các câu đã trả lời, dùng để ưu tiên câu mới ở các lượt sau */
  seenIds: string[]
  /** váy đã mở theo luật cũ (tủ riêng từng môn), giữ lại khi gộp thành tủ chung */
  keptDresses: string[]
  /** id các váy đã mở trong tủ chung; lần đầu nạp tiến độ cũ được điền sẵn để bé không mất váy nào */
  unlockedDresses: string[]
  /** số câu đúng liên tiếp hiện tại của từng môn; đủ CORRECT_PER_DRESS thì mở 1 váy rồi đếm lại từ 0 */
  correctRun: Record<Subject, number>
  /** các lượt làm bài, mới nhất ở cuối, tối đa 300 */
  history: SessionRecord[]
  /** thống kê cộng dồn theo id chuyên đề con */
  subtopicStats: Record<string, TopicStat>
  /** thống kê cộng dồn theo môn và độ khó */
  difficultyStats: Record<Subject, Record<Difficulty, TopicStat>>
  /** câu sai gần đây, mới nhất đứng đầu, không trùng id, tối đa 30 */
  recentMistakes: MistakeRecord[]
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
