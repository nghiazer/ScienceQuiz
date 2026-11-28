import { SUBTOPICS, TOPICS, VISIBLE_SUBJECTS } from '../data/topics'
import type { Progress, SessionRecord, Subject, SubtopicId, TopicStat } from '../types/quiz'
import { todayStr } from './storage'

/** Màu đường/biểu đồ theo môn. */
export const SUBJECT_COLOR: Record<Subject, string> = { science: '#8b5cf6', english: '#14b8a6', math: '#ec4899' }

/** Số câu tối thiểu của một chuyên đề con mới được xếp hạng điểm yếu / điểm mạnh. */
export const MIN_SUBTOPIC_ANSWERS = 5

/** Phần trăm đúng (làm tròn); null nếu chưa có câu nào. */
export function pctOf(s: TopicStat): number | null {
  return s.total > 0 ? Math.round((s.correct / s.total) * 100) : null
}

/** Cộng ngày vào chuỗi YYYY-MM-DD theo lịch địa phương (an toàn khi đổi giờ). */
export function shiftDate(date: string, days: number): string {
  const [y, m, d] = date.split('-').map(Number)
  return todayStr(new Date(y, m - 1, d + days))
}

/** Thứ trong tuần, 0 = Thứ Hai … 6 = Chủ nhật. */
export function weekdayIndex(date: string): number {
  const [y, m, d] = date.split('-').map(Number)
  return (new Date(y, m - 1, d).getDay() + 6) % 7
}

/** Ngày Thứ Hai đầu tuần chứa `date`. */
export function weekStart(date: string): string {
  return shiftDate(date, -weekdayIndex(date))
}

/** "2026-11-27" → "27/11". */
export function shortDate(date: string): string {
  const [, m, d] = date.split('-')
  return `${d}/${m}`
}

/**
 * Giờ:phút địa phương dạng "07:05" — giống hệt toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
 * nhưng không gọi Intl: lần gọi Intl đầu tiên phải nạp dữ liệu ngôn ngữ, tốn ~70 ms trên máy tính bảng yếu khi mở Góc phụ huynh.
 */
export function shortTime(iso: string): string {
  const d = new Date(iso)
  // chuỗi thời gian hỏng: giữ nguyên cách hiển thị cũ
  if (Number.isNaN(d.getTime())) return d.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
}

/** Môn hiển thị cho phụ huynh: các môn đang mở, cộng thêm Toán nếu bé đã có dữ liệu Toán. */
export function parentSubjects(p: Progress): Subject[] {
  const mathUsed =
    Object.values(TOPICS).some((t) => t.subject === 'math' && p.topicStats[t.id]?.total > 0) ||
    p.history.some((h) => h.subject === 'math')
  return mathUsed && !VISIBLE_SUBJECTS.includes('math') ? [...VISIBLE_SUBJECTS, 'math'] : VISIBLE_SUBJECTS
}

/** Tổng số phút học (làm tròn) từ lịch sử. */
export function totalMinutes(history: SessionRecord[]): number {
  return Math.round(history.reduce((s, h) => s + h.durationSec, 0) / 60)
}

/** 75 → "1 giờ 15 phút"; 40 → "40 phút". */
export function formatMinutes(min: number): string {
  if (min < 60) return `${min} phút`
  const h = Math.floor(min / 60)
  const r = min % 60
  return r ? `${h} giờ ${r} phút` : `${h} giờ`
}

/** "mm:ss" cho thời lượng bài thi. */
export function formatDuration(sec: number): string {
  const m = Math.floor(sec / 60)
  return `${m}:${String(sec % 60).padStart(2, '0')}`
}

export interface DayTotal {
  seconds: number
  questions: number
}

/** Gộp lịch sử theo ngày: tổng giây học và số câu đã làm. */
export function totalsByDate(history: SessionRecord[]): Map<string, DayTotal> {
  const map = new Map<string, DayTotal>()
  for (const h of history) {
    const cur = map.get(h.date) ?? { seconds: 0, questions: 0 }
    cur.seconds += h.durationSec
    cur.questions += h.total
    map.set(h.date, cur)
  }
  return map
}

/** Lưới lịch học: `weeks` tuần kết thúc ở tuần chứa `today`, mỗi tuần 7 ngày từ Thứ Hai. */
export function heatmapWeeks(today: string, weeks = 8): string[][] {
  const first = shiftDate(weekStart(today), -7 * (weeks - 1))
  return Array.from({ length: weeks }, (_, w) => Array.from({ length: 7 }, (_, d) => shiftDate(first, w * 7 + d)))
}

/** `n` ngày gần nhất, kết thúc ở `today`, cũ trước. */
export function lastDays(today: string, n: number): string[] {
  return Array.from({ length: n }, (_, i) => shiftDate(today, i - (n - 1)))
}

export interface WeekAccuracy {
  start: string
  correct: number
  total: number
  /** null nếu tuần đó chưa làm câu nào */
  pct: number | null
}

/** Tỉ lệ đúng từng tuần (Thứ Hai–Chủ nhật) trong `weeks` tuần gần nhất, cũ trước. */
export function weeklyAccuracy(history: SessionRecord[], today: string, weeks = 8): WeekAccuracy[] {
  const starts = heatmapWeeks(today, weeks).map((w) => w[0])
  const acc = new Map(starts.map((s) => [s, { correct: 0, total: 0 }]))
  for (const h of history) {
    const a = acc.get(weekStart(h.date))
    if (!a) continue
    a.correct += h.correct
    a.total += h.total
  }
  return starts.map((start) => {
    const a = acc.get(start) ?? { correct: 0, total: 0 }
    return { start, ...a, pct: pctOf(a) }
  })
}

export interface SubtopicRank {
  id: SubtopicId
  subject: Subject
  stat: TopicStat
  pct: number
}

/** Chuyên đề con đủ câu để xếp hạng, ít chính xác nhất lên đầu (hòa thì nhiều câu hơn đứng trước). */
export function rankSubtopics(stats: Record<string, TopicStat>, subjects: Subject[]): SubtopicRank[] {
  const out: SubtopicRank[] = []
  for (const [id, stat] of Object.entries(stats)) {
    const meta = SUBTOPICS[id as SubtopicId]
    if (!meta || stat.total < MIN_SUBTOPIC_ANSWERS) continue
    const subject = TOPICS[meta.topic].subject
    if (!subjects.includes(subject)) continue
    out.push({ id: id as SubtopicId, subject, stat, pct: Math.round((stat.correct / stat.total) * 100) })
  }
  return out.sort((a, b) => a.pct - b.pct || b.stat.total - a.stat.total)
}

/** `n` bài thi thử gần nhất của một môn, cũ trước. */
export function recentMocks(history: SessionRecord[], subject: Subject, n = 10): SessionRecord[] {
  return history.filter((h) => h.kind === 'mock' && h.subject === subject).slice(-n)
}
