import type { Progress, Subject } from '../../types/quiz'
import { SUBJECT_TOPICS } from '../topics'
import { CORRECT_PER_DRESS, DRESSES_PER_SUBJECT, type DressDef, type DressLook } from './types'
import { SCIENCE_DRESSES } from './science'
import { ENGLISH_DRESSES } from './english'

export * from './types'

/** Váy mặc định khi bé chưa chọn váy nào: một chiếc váy ngủ trắng giản dị. */
export const PLAIN_LOOK: DressLook = {
  silhouette: 'aline', bodice: '#f1f5f9', skirt: ['#f8fafc'], accent: '#cbd5e1', sleeves: 'cap',
}

export const DRESSES: Record<Subject, DressDef[]> = {
  science: SCIENCE_DRESSES,
  english: ENGLISH_DRESSES,
}

export const ALL_DRESSES: DressDef[] = [...SCIENCE_DRESSES, ...ENGLISH_DRESSES]

export const dressById = (id: string | null | undefined): DressDef | undefined =>
  id ? ALL_DRESSES.find((d) => d.id === id) : undefined

/** Tổng số câu đúng của một môn (tính từ thống kê đã lưu, nên tiến độ cũ được tính luôn). */
export function correctFor(p: Pick<Progress, 'topicStats'>, subject: Subject): number {
  return SUBJECT_TOPICS[subject].reduce((sum, t) => sum + p.topicStats[t].correct, 0)
}

/** Số váy đã mở của một môn. */
export function unlockedCount(p: Pick<Progress, 'topicStats'>, subject: Subject): number {
  return Math.min(DRESSES_PER_SUBJECT, Math.floor(correctFor(p, subject) / CORRECT_PER_DRESS))
}

/** Số câu đúng còn thiếu để mở váy kế tiếp (0 nếu đã mở hết). */
export function nextDressIn(p: Pick<Progress, 'topicStats'>, subject: Subject): number {
  if (unlockedCount(p, subject) >= DRESSES_PER_SUBJECT) return 0
  return CORRECT_PER_DRESS - (correctFor(p, subject) % CORRECT_PER_DRESS)
}

export const isUnlocked = (p: Pick<Progress, 'topicStats'>, d: DressDef): boolean => d.index <= unlockedCount(p, d.subject)
