import { QUESTIONS, TOPIC_ORDER } from '../data/questions'
import type { AnswerRecord, Difficulty, Question, Topic } from '../types/quiz'

export function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
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
  return unseenFirst(pool, seen).slice(0, TOPIC_SESSION_SIZE)
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
  return shuffle(picked)
}

/** Các câu sai hoặc chưa làm, xáo trộn thứ tự để bé luyện lại. */
export function buildRetryQuiz(questions: Question[], answers: AnswerRecord[]): Question[] {
  const okIds = new Set(answers.filter((a) => a.correct).map((a) => a.questionId))
  return shuffle(questions.filter((q) => !okIds.has(q.id)))
}
