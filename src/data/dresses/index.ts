import type { Progress, Subject } from '../../types/quiz'
import { SUBJECT_TOPICS } from '../topics'
import { CORRECT_PER_DRESS, DRESSES_PER_SUBJECT, type DressDef, type DressLook } from './types'
import { SCIENCE_DRESSES } from './science'
import { ENGLISH_DRESSES } from './english'
import { MATH_DRESSES } from './math'

export * from './types'

/** Váy mặc định khi bé chưa chọn váy nào: một chiếc váy ngủ trắng giản dị. */
export const PLAIN_LOOK: DressLook = {
  silhouette: 'aline', bodice: '#f1f5f9', skirt: ['#f8fafc'], accent: '#cbd5e1', sleeves: 'cap',
}

export const DRESSES: Record<Subject, DressDef[]> = {
  science: SCIENCE_DRESSES,
  english: ENGLISH_DRESSES,
  math: MATH_DRESSES,
}

export const ALL_DRESSES: DressDef[] = [...SCIENCE_DRESSES, ...ENGLISH_DRESSES, ...MATH_DRESSES]

export const dressById = (id: string | null | undefined): DressDef | undefined =>
  id ? ALL_DRESSES.find((d) => d.id === id) : undefined

/** Thứ tự môn khi xen kẽ váy trong tủ chung. */
const SUBJECT_ORDER: Subject[] = ['science', 'english', 'math']

/**
 * Tủ váy chung của cả ba môn: xếp theo cấp (1 → 5); trong cùng cấp, váy của ba môn xen kẽ
 * theo thứ tự (Khoa học 1, Tiếng Anh 1, Toán 1, Khoa học 2, …). Mở lần lượt từ đầu tủ.
 */
export const WARDROBE: DressDef[] = [...ALL_DRESSES].sort(
  (a, b) => a.tier - b.tier || a.index - b.index || SUBJECT_ORDER.indexOf(a.subject) - SUBJECT_ORDER.indexOf(b.subject),
)
export const WARDROBE_SIZE = WARDROBE.length

const ORDER = new Map(WARDROBE.map((d, i) => [d.id, i + 1]))
/** Số thứ tự của váy trong tủ chung (1…WARDROBE_SIZE). */
export const orderOf = (d: DressDef): number => ORDER.get(d.id) ?? 0

/** Tổng số câu đúng của một môn (tính từ thống kê đã lưu). */
export function correctFor(p: Pick<Progress, 'topicStats'>, subject: Subject): number {
  return SUBJECT_TOPICS[subject].reduce((sum, t) => sum + (p.topicStats[t]?.correct ?? 0), 0)
}

/** Tổng số câu đúng của cả ba môn. */
export function totalCorrect(p: Pick<Progress, 'topicStats'>): number {
  return SUBJECT_ORDER.reduce((sum, s) => sum + correctFor(p, s), 0)
}

/**
 * Luật cũ nhất (mỗi môn có tủ riêng, 10 câu đúng của môn đó mở 1 váy của môn đó).
 * Chỉ dùng khi nạp tiến độ cũ, để bé giữ đúng những chiếc váy đã mở.
 */
export function legacyUnlockedIds(p: Pick<Progress, 'topicStats'>): string[] {
  return SUBJECT_ORDER.flatMap((s) =>
    DRESSES[s].slice(0, Math.min(DRESSES_PER_SUBJECT, Math.floor(correctFor(p, s) / CORRECT_PER_DRESS))).map((d) => d.id),
  )
}

/**
 * Luật tủ chung trước đây (cứ 10 câu đúng cộng dồn ở bất kỳ môn nào thì mở 1 váy), cộng các váy giữ lại từ luật cũ nhất.
 * Chỉ dùng một lần khi nạp tiến độ chưa có `unlockedDresses`, để chuyển sang luật chuỗi đúng mà không mất váy.
 */
export function pooledUnlockedIds(p: Pick<Progress, 'topicStats'> & Partial<Pick<Progress, 'keptDresses'>>): Set<string> {
  const earned = Math.min(WARDROBE_SIZE, Math.floor(totalCorrect(p) / CORRECT_PER_DRESS))
  const ids = new Set((p.keptDresses ?? []).filter((id) => ORDER.has(id)))
  for (const d of WARDROBE) {
    if (ids.size >= earned) break
    ids.add(d.id)
  }
  return ids
}

type DressProgress = Pick<Progress, 'unlockedDresses'>

/** Các váy đã mở trong tủ chung (lưu trực tiếp trong tiến độ). */
export function unlockedIds(p: DressProgress): Set<string> {
  return new Set(p.unlockedDresses.filter((id) => ORDER.has(id)))
}

/** Số váy đã mở trong tủ chung. */
export function unlockedCount(p: DressProgress): number {
  return unlockedIds(p).size
}

/** Chiếc váy sẽ mở tiếp theo theo thứ tự tủ chung (undefined nếu đã mở hết). */
export function nextDress(p: DressProgress): DressDef | undefined {
  const ids = unlockedIds(p)
  return WARDROBE.find((d) => !ids.has(d.id))
}

/** Số câu đúng LIÊN TIẾP của môn `subject` còn thiếu để mở váy kế tiếp (0 nếu đã mở hết). */
export function nextDressIn(p: DressProgress & Pick<Progress, 'correctRun'>, subject: Subject): number {
  if (!nextDress(p)) return 0
  return Math.max(1, CORRECT_PER_DRESS - (p.correctRun[subject] ?? 0))
}

export const isUnlocked = (p: DressProgress, d: DressDef): boolean => unlockedIds(p).has(d.id)
