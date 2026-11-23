import { DRESSES, unlockedCount } from '../data/dresses'
import type { AnswerRecord, Progress, Question, QuizKind, Subject, Topic } from '../types/quiz'

const KEY = 'asmo-quiz-progress-v1'

const emptyStats = () => ({ correct: 0, total: 0 })

export const defaultProgress = (): Progress => ({
  totalStars: 0,
  streak: 0,
  lastPlayedDate: null,
  quizzesCompleted: 0,
  mockCompleted: 0,
  englishMockCompleted: 0,
  perfectCount: 0,
  topicStats: {
    living: emptyStats(),
    physical: emptyStats(),
    earth: emptyStats(),
    inquiry: emptyStats(),
    'present-simple': emptyStats(),
    'present-continuous': emptyStats(),
    'past-simple': emptyStats(),
  },
  seenIds: [],
})

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return defaultProgress()
    const parsed = JSON.parse(raw) as Partial<Progress>
    const base = defaultProgress()
    return {
      ...base,
      ...parsed,
      topicStats: { ...base.topicStats, ...(parsed.topicStats ?? {}) },
      seenIds: Array.isArray(parsed.seenIds) ? parsed.seenIds : [],
    }
  } catch {
    return defaultProgress()
  }
}

export function saveProgress(p: Progress): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(p))
  } catch {
    /* localStorage bị chặn (chế độ riêng tư…) – bỏ qua */
  }
}

/** Ngày theo giờ địa phương dạng YYYY-MM-DD. */
export function todayStr(d = new Date()): string {
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${m}-${day}`
}

function daysBetween(a: string, b: string): number {
  const [ay, am, ad] = a.split('-').map(Number)
  const [by, bm, bd] = b.split('-').map(Number)
  const ta = Date.UTC(ay, am - 1, ad)
  const tb = Date.UTC(by, bm - 1, bd)
  return Math.round((tb - ta) / 86_400_000)
}

/** Streak hiển thị: nếu đã bỏ lỡ hơn 1 ngày thì coi như về 0. */
export function currentStreak(p: Progress, today = todayStr()): number {
  if (!p.lastPlayedDate) return 0
  return daysBetween(p.lastPlayedDate, today) <= 1 ? p.streak : 0
}

export interface RecordInput {
  kind: QuizKind
  subject: Subject
  questions: Question[]
  answers: AnswerRecord[]
}

export interface RecordOutput {
  progress: Progress
  stars: number
  percent: number
  /** id các váy vừa mở khóa */
  newDresses: string[]
}

/** Số sao nhận được = số câu đúng (+ thưởng 3 sao nếu đạt từ 90%). */
export function computeStars(correct: number, total: number): number {
  if (total === 0) return 0
  return correct + (correct / total >= 0.9 ? 3 : 0)
}

export function recordQuizResult(prev: Progress, input: RecordInput, today = todayStr()): RecordOutput {
  const total = input.questions.length
  const correct = input.answers.filter((a) => a.correct).length
  const percent = total === 0 ? 0 : Math.round((correct / total) * 100)
  const stars = computeStars(correct, total)

  // Thống kê tách riêng theo từng chuyên đề (và do đó theo từng môn); sao và streak dùng chung.
  const topicStats = Object.fromEntries(
    Object.entries(prev.topicStats).map(([k, v]) => [k, { ...v }]),
  ) as Progress['topicStats']
  const byId = new Map(input.questions.map((q) => [q.id, q]))
  for (const a of input.answers) {
    const q = byId.get(a.questionId)
    if (!q) continue
    const t: Topic = q.topic
    topicStats[t].total += 1
    if (a.correct) topicStats[t].correct += 1
  }

  let streak = prev.streak
  if (prev.lastPlayedDate === null) streak = 1
  else {
    const gap = daysBetween(prev.lastPlayedDate, today)
    if (gap === 0) streak = Math.max(prev.streak, 1)
    else if (gap === 1) streak = prev.streak + 1
    else streak = 1
  }

  const next: Progress = {
    ...prev,
    totalStars: prev.totalStars + stars,
    streak,
    lastPlayedDate: today,
    quizzesCompleted: prev.quizzesCompleted + 1,
    mockCompleted: prev.mockCompleted + (input.kind === 'mock' && input.subject === 'science' ? 1 : 0),
    englishMockCompleted: prev.englishMockCompleted + (input.kind === 'mock' && input.subject === 'english' ? 1 : 0),
    perfectCount: prev.perfectCount + (percent === 100 && total > 0 ? 1 : 0),
    topicStats,
    seenIds: Array.from(new Set([
      ...prev.seenIds,
      ...input.answers.filter((a) => a.selectedIndex !== null).map((a) => a.questionId),
    ])),
  }

  // Cứ 10 câu đúng của một môn thì mở thêm một váy của môn đó.
  const before = unlockedCount(prev, input.subject)
  const after = unlockedCount(next, input.subject)
  const newDresses = DRESSES[input.subject].slice(before, after).map((d) => d.id)
  saveProgress(next)
  return { progress: next, stars, percent, newDresses }
}
