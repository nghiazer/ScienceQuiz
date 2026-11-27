import { CORRECT_PER_DRESS, legacyUnlockedIds, nextDress, pooledUnlockedIds } from '../data/dresses'
import type { AnswerRecord, Difficulty, MistakeRecord, OptionIndex, Progress, Question, QuizKind, SessionRecord, Subject, Topic, TopicStat } from '../types/quiz'
import { originalIndex } from './quiz'

const KEY = 'asmo-quiz-progress-v1'

/** Số lượt làm bài tối đa giữ trong lịch sử (cũ nhất bị bỏ trước). */
export const HISTORY_CAP = 300
/** Số câu sai gần đây tối đa giữ lại. */
export const MISTAKES_CAP = 30
/** Thời lượng một lượt làm bài tối đa tính vào lịch sử (giây): bỏ máy mở treo không tính là học. */
export const MAX_SESSION_SEC = 3600

const SUBJECT_IDS: Subject[] = ['science', 'english', 'math']
const DIFFICULTIES: Difficulty[] = ['easy', 'medium', 'hard']
const KINDS: QuizKind[] = ['topic', 'mock', 'retry']

const emptyStats = () => ({ correct: 0, total: 0 })
const emptyDifficultyStats = (): Record<Difficulty, TopicStat> => ({ easy: emptyStats(), medium: emptyStats(), hard: emptyStats() })

export const defaultProgress = (): Progress => ({
  totalStars: 0,
  streak: 0,
  lastPlayedDate: null,
  quizzesCompleted: 0,
  mockCompleted: 0,
  englishMockCompleted: 0,
  mathMockCompleted: 0,
  perfectCount: 0,
  topicStats: {
    living: emptyStats(),
    physical: emptyStats(),
    earth: emptyStats(),
    inquiry: emptyStats(),
    'present-simple': emptyStats(),
    'present-continuous': emptyStats(),
    'past-simple': emptyStats(),
    logic: emptyStats(),
    arithmetic: emptyStats(),
    'number-theory': emptyStats(),
    geometry: emptyStats(),
    combinatorics: emptyStats(),
  },
  seenIds: [],
  keptDresses: [],
  unlockedDresses: [],
  correctRun: { science: 0, english: 0, math: 0 },
  history: [],
  subtopicStats: {},
  difficultyStats: { science: emptyDifficultyStats(), english: emptyDifficultyStats(), math: emptyDifficultyStats() },
  recentMistakes: [],
})

/** Chỉ nhận số nguyên không âm cho chuỗi đúng; dữ liệu hỏng thì về 0. */
const runOf = (v: unknown): number => (Number.isInteger(v) && (v as number) >= 0 ? (v as number) : 0)

const asRecord = (v: unknown): Record<string, unknown> =>
  typeof v === 'object' && v !== null && !Array.isArray(v) ? (v as Record<string, unknown>) : {}

const isCount = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v) && v >= 0

/** Thống kê hợp lệ: hai số không âm, số đúng không vượt quá tổng; hỏng thì về 0. */
function statOf(v: unknown): TopicStat {
  const o = asRecord(v)
  const total = isCount(o.total) ? o.total : 0
  return { correct: isCount(o.correct) ? Math.min(o.correct, total) : 0, total }
}

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/

/** Lịch sử từ bản lưu cũ/hỏng: bỏ bản ghi sai dạng, giữ tối đa HISTORY_CAP bản mới nhất. */
function parseHistory(v: unknown, topics: Record<string, unknown>): SessionRecord[] {
  if (!Array.isArray(v)) return []
  const out: SessionRecord[] = []
  for (const item of v) {
    const o = asRecord(item)
    if (typeof o.at !== 'string' || typeof o.date !== 'string' || !DATE_RE.test(o.date)) continue
    if (!SUBJECT_IDS.includes(o.subject as Subject) || !KINDS.includes(o.kind as QuizKind)) continue
    if (!isCount(o.total) || !isCount(o.correct) || !isCount(o.durationSec)) continue
    const rec: SessionRecord = {
      at: o.at,
      date: o.date,
      subject: o.subject as Subject,
      kind: o.kind as QuizKind,
      total: o.total,
      correct: Math.min(o.correct, o.total),
      durationSec: Math.min(o.durationSec, MAX_SESSION_SEC),
    }
    if (typeof o.topic === 'string' && o.topic in topics) rec.topic = o.topic as Topic
    out.push(rec)
  }
  return out.slice(-HISTORY_CAP)
}

function parseSubtopicStats(v: unknown): Record<string, TopicStat> {
  return Object.fromEntries(Object.entries(asRecord(v)).map(([k, st]) => [k, statOf(st)]))
}

function parseDifficultyStats(v: unknown): Progress['difficultyStats'] {
  const saved = asRecord(v)
  const pick = (s: Subject) => {
    const bySubject = asRecord(saved[s])
    return { easy: statOf(bySubject.easy), medium: statOf(bySubject.medium), hard: statOf(bySubject.hard) }
  }
  return { science: pick('science'), english: pick('english'), math: pick('math') }
}

function parseMistakes(v: unknown): MistakeRecord[] {
  if (!Array.isArray(v)) return []
  const seen = new Set<string>()
  const out: MistakeRecord[] = []
  for (const item of v) {
    const o = asRecord(item)
    if (typeof o.id !== 'string' || typeof o.at !== 'string' || seen.has(o.id)) continue
    const sel = o.selectedIndex
    if (sel !== null && sel !== 0 && sel !== 1 && sel !== 2 && sel !== 3) continue
    seen.add(o.id)
    out.push({ id: o.id, at: o.at, selectedIndex: sel })
  }
  return out.slice(0, MISTAKES_CAP)
}

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return defaultProgress()
    const parsed = JSON.parse(raw) as Partial<Progress>
    const base = defaultProgress()
    const topicStats = { ...base.topicStats, ...(parsed.topicStats ?? {}) }
    // Tiến độ từ trước khi gộp tủ váy: ghi lại những váy bé đã mở theo luật cũ để không mất váy nào.
    const keptDresses = Array.isArray(parsed.keptDresses) ? parsed.keptDresses : legacyUnlockedIds({ topicStats })
    const savedRun = (parsed.correctRun ?? {}) as Partial<Record<Subject, unknown>>
    return {
      ...base,
      ...parsed,
      topicStats,
      seenIds: Array.isArray(parsed.seenIds) ? parsed.seenIds : [],
      keptDresses,
      // Tiến độ từ trước luật chuỗi đúng: chốt lại đúng những váy bé đang có (luật cộng dồn cũ), từ nay lưu trực tiếp.
      unlockedDresses: Array.isArray(parsed.unlockedDresses)
        ? parsed.unlockedDresses
        : [...pooledUnlockedIds({ topicStats, keptDresses })],
      correctRun: { science: runOf(savedRun.science), english: runOf(savedRun.english), math: runOf(savedRun.math) },
      // Số liệu cho phụ huynh: bản lưu cũ chưa có thì bắt đầu rỗng, mọi dữ liệu cũ giữ nguyên.
      history: parseHistory(parsed.history, base.topicStats),
      subtopicStats: parseSubtopicStats(parsed.subtopicStats),
      difficultyStats: parseDifficultyStats(parsed.difficultyStats),
      recentMistakes: parseMistakes(parsed.recentMistakes),
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
  /** chuyên đề của bài luyện theo chủ đề */
  topic?: Topic
  questions: Question[]
  answers: AnswerRecord[]
  /** thời điểm bắt đầu bài (Date.now()); thiếu thì thời lượng ghi là 0 */
  startedAt?: number
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

export function recordQuizResult(prev: Progress, input: RecordInput, today = todayStr(), now = new Date()): RecordOutput {
  const total = input.questions.length
  const correct = input.answers.filter((a) => a.correct).length
  const percent = total === 0 ? 0 : Math.round((correct / total) * 100)
  const stars = computeStars(correct, total)

  // Thống kê tách riêng theo từng chuyên đề (và do đó theo từng môn); sao và streak dùng chung.
  const topicStats = Object.fromEntries(
    Object.entries(prev.topicStats).map(([k, v]) => [k, { ...v }]),
  ) as Progress['topicStats']
  const subtopicStats: Progress['subtopicStats'] = Object.fromEntries(
    Object.entries(prev.subtopicStats).map(([k, v]) => [k, { ...v }]),
  )
  const difficultyStats: Progress['difficultyStats'] = {
    science: { ...prev.difficultyStats.science },
    english: { ...prev.difficultyStats.english },
    math: { ...prev.difficultyStats.math },
  }
  for (const s of SUBJECT_IDS) for (const d of DIFFICULTIES) difficultyStats[s][d] = { ...difficultyStats[s][d] }
  const byId = new Map(input.questions.map((q) => [q.id, q]))
  for (const a of input.answers) {
    const q = byId.get(a.questionId)
    if (!q) continue
    const t: Topic = q.topic
    topicStats[t] ??= emptyStats()
    topicStats[t].total += 1
    if (a.correct) topicStats[t].correct += 1
    // Câu bỏ trống tính vào tổng nhưng không tính đúng.
    const sub = (subtopicStats[q.subtopic] ??= emptyStats())
    sub.total += 1
    if (a.correct) sub.correct += 1
    const diff = difficultyStats[q.subject][q.difficulty]
    diff.total += 1
    if (a.correct) diff.correct += 1
  }

  // Câu sai gần đây: câu mới sai đứng đầu, câu đã có thì chuyển lên đầu thay vì thêm bản trùng;
  // bé làm đúng lại câu nào thì câu đó được xóa khỏi danh sách.
  const at = now.toISOString()
  let recentMistakes = prev.recentMistakes
  for (const a of input.answers) {
    const q = byId.get(a.questionId)
    if (!q) continue
    if (a.correct) {
      recentMistakes = recentMistakes.filter((m) => m.id !== q.id)
      continue
    }
    const selectedIndex: OptionIndex | null = a.selectedIndex === null ? null : originalIndex(q, a.selectedIndex)
    recentMistakes = [{ id: q.id, at, selectedIndex }, ...recentMistakes.filter((m) => m.id !== q.id)]
  }
  recentMistakes = recentMistakes.slice(0, MISTAKES_CAP)

  const durationSec = input.startedAt === undefined ? 0 : Math.max(0, Math.min(Math.round((now.getTime() - input.startedAt) / 1000), MAX_SESSION_SEC))
  const session: SessionRecord = { at, date: today, subject: input.subject, kind: input.kind, total, correct, durationSec }
  if (input.topic) session.topic = input.topic

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
    mathMockCompleted: prev.mathMockCompleted + (input.kind === 'mock' && input.subject === 'math' ? 1 : 0),
    perfectCount: prev.perfectCount + (percent === 100 && total > 0 ? 1 : 0),
    topicStats,
    subtopicStats,
    difficultyStats,
    recentMistakes,
    history: [...prev.history, session].slice(-HISTORY_CAP),
    seenIds: Array.from(new Set([
      ...prev.seenIds,
      ...input.answers.filter((a) => a.selectedIndex !== null).map((a) => a.questionId),
    ])),
  }

  // Tủ váy chung: cứ 10 câu đúng LIÊN TIẾP trong cùng một môn thì mở thêm một váy (theo thứ tự tủ).
  // Mỗi môn có chuỗi riêng, giữ qua các lượt làm bài; trả lời sai hoặc bỏ trống thì chuỗi của môn đó về 0.
  const correctRun = { ...prev.correctRun }
  const unlocked = [...prev.unlockedDresses]
  const newDresses: string[] = []
  for (const a of input.answers) {
    const s = byId.get(a.questionId)?.subject ?? input.subject
    if (!a.correct) {
      correctRun[s] = 0
      continue
    }
    correctRun[s] = (correctRun[s] ?? 0) + 1
    if (correctRun[s] >= CORRECT_PER_DRESS) {
      correctRun[s] = 0
      const d = nextDress({ unlockedDresses: unlocked })
      if (d) {
        unlocked.push(d.id)
        newDresses.push(d.id)
      }
    }
  }
  next.correctRun = correctRun
  next.unlockedDresses = unlocked
  saveProgress(next)
  return { progress: next, stars, percent, newDresses }
}
