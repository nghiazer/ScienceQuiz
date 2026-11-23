import { QUESTIONS, TOPIC_ORDER } from '../data/questions'
import type { AnswerRecord, Difficulty, OptionIndex, Options, Question, Topic } from '../types/quiz'

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
  const all = [...q.options_vi, ...q.options_en].map((o) => o.trim())
  return all.some((o) => LETTER_REF.test(o) || GROUPED.test(o)) || q.options_vi.every((o) => NUMERIC.test(o.trim()))
}

/** Trả về bản sao có thứ tự đáp án xáo trộn (vi và en cùng một phép hoán vị), để đáp án đúng không luôn ở cùng vị trí. */
export function shuffleOptions(q: Question): Question {
  if (isOrderSensitive(q)) return q
  const order = shuffle([0, 1, 2, 3])
  return {
    ...q,
    options_vi: order.map((i) => q.options_vi[i]) as Options,
    options_en: order.map((i) => q.options_en[i]) as Options,
    correctIndex: order.indexOf(q.correctIndex) as OptionIndex,
  }
}

export const MOCK_SIZE = 15
export const MOCK_MINUTES = 20
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
  const pool = QUESTIONS.filter((q) => q.topic === topic)
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
    const exact = QUESTIONS.filter((q) => q.topic === topic && q.difficulty === diff)
    if (exact.some((q) => !used.has(q.id))) return take(exact)
    const sameTopic = QUESTIONS.filter((q) => q.topic === topic)
    if (sameTopic.some((q) => !used.has(q.id))) return take(sameTopic)
    take(QUESTIONS)
  })
  return shuffle(picked).map(shuffleOptions)
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
