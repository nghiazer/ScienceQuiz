import { ALL_QUESTIONS, ENGLISH_QUESTIONS, MATH_QUESTIONS, SCIENCE_QUESTIONS, SUBJECT_TOPICS, TOPIC_ORDER } from '../data/questions'
import type { AnswerRecord, Difficulty, OptionIndex, Options, Question, Subject, Topic } from '../types/quiz'

export function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Câu mà thứ tự đáp án có ý nghĩa: không được xáo.
const LETTER_REF = /^(Hình |Picture )?[A-D]($|\s*[—(–-])/ // đáp án tham chiếu nhãn A–D trên hình
const GROUPED = /^(Cả hai|Tất cả|Không có|Không ai|Both|All |None|Neither)/i // "Cả hai…", "Không có gì…"
const NUMERIC = /^[\d.,]+(\s*(°C|cm|bạn|children|giờ|hours))?$/ // dãy số xếp tăng dần

export function isOrderSensitive(q: Question): boolean {
  if (q.subject === 'english') return false // đáp án ngữ pháp độc lập, luôn xáo được
  const all = [...q.options_vi, ...q.options_en].map((o) => o.trim())
  return all.some((o) => LETTER_REF.test(o) || GROUPED.test(o)) || q.options_vi.every((o) => NUMERIC.test(o.trim()))
}

// Đáp án Toán dạng số (có thể kèm đơn vị: "12 cm", "3 giờ") hoặc giờ "8:30": khi chơi được xếp tăng dần như đề TIMO.
const NUMBER_OPTION = /^-?\d+(?:[.,:]\d+)?(?:\s.*)?$/
const numericValue = (o: string) => {
  const t = o.trim().match(/^(\d+):(\d+)/)
  return t ? Number(t[1]) * 60 + Number(t[2]) : parseFloat(o.replace(',', '.'))
}

export function isNumericOptions(q: Question): boolean {
  return q.subject === 'math' && q.options_en.every((o) => NUMBER_OPTION.test(o.trim()))
}

/** Trả về bản sao có thứ tự đáp án xáo trộn (vi và en cùng một phép hoán vị), để đáp án đúng không luôn ở cùng vị trí. */
export function shuffleOptions(q: Question): Question {
  if (isNumericOptions(q)) {
    const order = [0, 1, 2, 3].sort((a, b) => numericValue(q.options_en[a]) - numericValue(q.options_en[b]))
    return permute(q, order)
  }
  if (isOrderSensitive(q)) return q
  return permute(q, shuffle([0, 1, 2, 3]))
}

function permute(q: Question, order: number[]): Question {
  if (q.subject === 'english') {
    return {
      ...q,
      options_en: order.map((i) => q.options_en[i]) as Options,
      correctIndex: order.indexOf(q.correctIndex) as OptionIndex,
    }
  }
  return {
    ...q,
    options_vi: order.map((i) => q.options_vi[i]) as Options,
    options_en: order.map((i) => q.options_en[i]) as Options,
    correctIndex: order.indexOf(q.correctIndex) as OptionIndex,
  }
}

export const MOCK_SIZE = 15
export const MOCK_MINUTES = 20
/** Sau khi trả lời (đúng hay sai) phải chờ chừng này mili giây mới được sang câu tiếp theo, để bé đọc giải thích. */
export const NEXT_DELAY_MS = 3500
export const ENGLISH_MOCK_SIZE = 15
/** Đề thi thử Toán theo vòng loại TIMO: 25 câu (5 câu mỗi mảng), 90 phút. */
export const MATH_MOCK_SIZE = 25
export const MOCK_SIZE_BY_SUBJECT: Record<Subject, number> = { science: MOCK_SIZE, english: ENGLISH_MOCK_SIZE, math: MATH_MOCK_SIZE }
export const MOCK_MINUTES_BY_SUBJECT: Record<Subject, number> = { science: MOCK_MINUTES, english: MOCK_MINUTES, math: 90 }
/** Số câu mỗi lượt luyện theo chủ đề (kho có 60 câu mỗi chủ đề). */
export const TOPIC_SESSION_SIZE = 10

/** Phân bổ độ khó cho đề thi thử: 6 dễ, 6 vừa, 3 khó (khoảng 40/40/20). */
const MOCK_DIFFICULTY_PLAN: Difficulty[] = [
  ...Array<Difficulty>(6).fill('easy'),
  ...Array<Difficulty>(6).fill('medium'),
  ...Array<Difficulty>(3).fill('hard'),
]

/** Đưa câu chưa gặp lên trước, câu đã gặp xuống sau. */
function unseenFirst(pool: Question[], seen: ReadonlySet<string>): Question[] {
  return [...shuffle(pool.filter((q) => !seen.has(q.id))), ...shuffle(pool.filter((q) => seen.has(q.id)))]
}

export function buildTopicQuiz(topic: Topic, seen: ReadonlySet<string>): Question[] {
  const pool = ALL_QUESTIONS.filter((q) => q.topic === topic)
  return unseenFirst(pool, seen).slice(0, TOPIC_SESSION_SIZE).map(shuffleOptions)
}

/**
 * 15 câu bao phủ cả 4 chủ đề (4+4+4+3) và đúng phân bổ độ khó.
 * Với mỗi ô (chủ đề, độ khó) ưu tiên câu chưa gặp; nếu hết thì nới dần điều kiện.
 */
export function buildMockTest(seen: ReadonlySet<string>): Question[] {
  const topicSlots: Topic[] = shuffle(TOPIC_ORDER.flatMap((t, i) => Array<Topic>(i === 0 ? 3 : 4).fill(t)))
  const diffSlots = shuffle(MOCK_DIFFICULTY_PLAN)
  const used = new Set<string>()
  const picked: Question[] = []

  const take = (candidates: Question[]) => {
    const ordered = unseenFirst(candidates.filter((q) => !used.has(q.id)), seen)
    const q = ordered[0]
    if (q) {
      used.add(q.id)
      picked.push(q)
    }
  }

  topicSlots.forEach((topic, i) => {
    const diff = diffSlots[i]
    const exact = SCIENCE_QUESTIONS.filter((q) => q.topic === topic && q.difficulty === diff)
    if (exact.some((q) => !used.has(q.id))) return take(exact)
    const sameTopic = SCIENCE_QUESTIONS.filter((q) => q.topic === topic)
    if (sameTopic.some((q) => !used.has(q.id))) return take(sameTopic)
    take(SCIENCE_QUESTIONS)
  })
  return shuffle(picked).map(shuffleOptions)
}

/**
 * Đề thi thử Tiếng Anh: 15 câu trộn 3 thì (5 + 5 + 5), phân bổ độ khó 6/6/3,
 * ưu tiên ít nhất 5 câu "bẫy" phân biệt các thì và câu chưa gặp.
 */
export function buildEnglishMockTest(seen: ReadonlySet<string>): Question[] {
  const TRAPS = 5
  const topics = SUBJECT_TOPICS.english
  const used = new Set<string>()
  const picked: Question[] = []

  const pick = (candidates: Question[]): boolean => {
    const q = unseenFirst(candidates.filter((x) => !used.has(x.id)), seen)[0]
    if (!q) return false
    used.add(q.id)
    picked.push(q)
    return true
  }

  // 1) Câu bẫy: mỗi thì có ít nhất 1 câu, hai thì ngẫu nhiên có thêm 1 câu.
  const trapTopics = shuffle([topics[0], topics[1], topics[2], ...shuffle(topics).slice(0, 2)])
  for (const t of trapTopics.slice(0, TRAPS)) {
    pick(ENGLISH_QUESTIONS.filter((q) => q.topic === t && q.trap))
  }

  // 2) Phần còn lại: mỗi thì đủ 5 câu, theo kế hoạch độ khó 6/6/3 cho cả đề.
  const perTopic = (t: Topic) => picked.filter((q) => q.topic === t).length
  const diffCount = (d: Difficulty) => picked.filter((q) => q.difficulty === d).length
  const need: Record<Difficulty, number> = { easy: 6, medium: 6, hard: 3 }
  for (const t of shuffle(topics)) {
    while (perTopic(t) < ENGLISH_MOCK_SIZE / topics.length) {
      const wanted = (['easy', 'medium', 'hard'] as Difficulty[]).find((d) => diffCount(d) < need[d]) ?? 'easy'
      const exact = ENGLISH_QUESTIONS.filter((q) => q.topic === t && q.difficulty === wanted)
      if (!pick(exact) && !pick(ENGLISH_QUESTIONS.filter((q) => q.topic === t))) break
    }
  }
  return shuffle(picked).map(shuffleOptions)
}

/**
 * Đề thi thử Toán TIMO: 25 câu, mỗi mảng 5 câu, độ khó cả đề 10 dễ / 10 vừa / 5 khó.
 * Mỗi mảng lấy 2 dễ + 2 vừa + 1 khó; thiếu ô nào thì lấy câu bất kỳ của mảng đó. Ưu tiên câu chưa gặp.
 */
export function buildMathMockTest(seen: ReadonlySet<string>): Question[] {
  const PLAN: Difficulty[] = ['easy', 'easy', 'medium', 'medium', 'hard']
  const used = new Set<string>()
  const picked: Question[] = []
  const pick = (candidates: Question[]): boolean => {
    const q = unseenFirst(candidates.filter((x) => !used.has(x.id)), seen)[0]
    if (!q) return false
    used.add(q.id)
    picked.push(q)
    return true
  }
  for (const t of SUBJECT_TOPICS.math) {
    const pool = MATH_QUESTIONS.filter((q) => q.topic === t)
    for (const d of PLAN) {
      if (!pick(pool.filter((q) => q.difficulty === d))) pick(pool)
    }
  }
  // Đề sắp từ dễ đến khó như đề thi thật.
  const rank: Record<Difficulty, number> = { easy: 0, medium: 1, hard: 2 }
  return shuffle(picked).sort((a, b) => rank[a.difficulty] - rank[b.difficulty]).map(shuffleOptions)
}

export function buildMockFor(subject: Subject, seen: ReadonlySet<string>): Question[] {
  if (subject === 'english') return buildEnglishMockTest(seen)
  if (subject === 'math') return buildMathMockTest(seen)
  return buildMockTest(seen)
}

/** Các câu sai hoặc chưa làm, giữ nguyên thứ tự và đáp án như bé đã thấy (dùng để hiển thị ôn tập). */
export function findMissed(questions: Question[], answers: AnswerRecord[]): Question[] {
  const okIds = new Set(answers.filter((a) => a.correct).map((a) => a.questionId))
  return questions.filter((q) => !okIds.has(q.id))
}

/** Lượt làm lại: xáo cả thứ tự câu lẫn thứ tự đáp án. */
export function buildRetryQuiz(questions: Question[], answers: AnswerRecord[]): Question[] {
  return shuffle(findMissed(questions, answers)).map(shuffleOptions)
}
