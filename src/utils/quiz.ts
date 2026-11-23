import { QUESTIONS, TOPIC_ORDER } from '../data/questions'
import type { AnswerRecord, Question, Topic } from '../types/quiz'

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

export function buildTopicQuiz(topic: Topic): Question[] {
  return shuffle(QUESTIONS.filter((q) => q.topic === topic))
}

/** 15 câu: 4 chủ đề, mỗi chủ đề ít nhất 3 câu (3 chủ đề ngẫu nhiên nhận 4 câu, 1 chủ đề nhận 3). */
export function buildMockTest(): Question[] {
  const topics = shuffle(TOPIC_ORDER)
  const picked: Question[] = []
  topics.forEach((t, i) => {
    const count = i === 0 ? MOCK_SIZE - 4 * 3 : 4
    picked.push(...shuffle(QUESTIONS.filter((q) => q.topic === t)).slice(0, count))
  })
  return shuffle(picked)
}

/** Các câu sai hoặc chưa làm, giữ nguyên thứ tự để bé luyện lại. */
export function buildRetryQuiz(questions: Question[], answers: AnswerRecord[]): Question[] {
  const okIds = new Set(answers.filter((a) => a.correct).map((a) => a.questionId))
  return shuffle(questions.filter((q) => !okIds.has(q.id)))
}
