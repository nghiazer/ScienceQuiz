import { useSyncExternalStore } from 'react'
import type { Subject } from '../types/quiz'

const KEY = 'princess-wardrobe-v1'

/** Cứ 15 phút làm bài thì được cộng 5 phút chơi tủ quần áo (cộng dồn). */
export const STUDY_BLOCK_SECONDS = 15 * 60
export const REWARD_SECONDS = 5 * 60

export interface WardrobeState {
  /** giây học dở dang trong khối 15 phút hiện tại (0 – 899) */
  studySeconds: number
  /** giây chơi tủ còn lại (đã cộng dồn) */
  bankSeconds: number
  /** váy đang mặc theo từng môn */
  worn: Record<Subject, string | null>
}

const initial = (): WardrobeState => ({ studySeconds: 0, bankSeconds: 0, worn: { science: null, english: null } })

function load(): WardrobeState {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return initial()
    const p = JSON.parse(raw) as Partial<WardrobeState>
    const base = initial()
    return {
      studySeconds: Number.isFinite(p.studySeconds) ? Math.max(0, p.studySeconds as number) : 0,
      bankSeconds: Number.isFinite(p.bankSeconds) ? Math.max(0, p.bankSeconds as number) : 0,
      worn: { ...base.worn, ...(p.worn ?? {}) },
    }
  } catch {
    return initial()
  }
}

let state: WardrobeState = load()
const listeners = new Set<() => void>()

function commit(next: WardrobeState): void {
  state = next
  try {
    localStorage.setItem(KEY, JSON.stringify(next))
  } catch {
    /* localStorage bị chặn – bỏ qua */
  }
  listeners.forEach((l) => l())
}

export const getWardrobe = (): WardrobeState => state

function subscribe(cb: () => void): () => void {
  listeners.add(cb)
  return () => listeners.delete(cb)
}

export function useWardrobe(): WardrobeState {
  return useSyncExternalStore(subscribe, getWardrobe)
}

/** Cộng giây học; trả về số khối 15 phút vừa hoàn thành (mỗi khối thưởng 5 phút tủ). */
export function addStudySeconds(n: number): number {
  const total = state.studySeconds + n
  const blocks = Math.floor(total / STUDY_BLOCK_SECONDS)
  commit({
    ...state,
    studySeconds: total % STUDY_BLOCK_SECONDS,
    bankSeconds: state.bankSeconds + blocks * REWARD_SECONDS,
  })
  return blocks
}

/** Trừ giây chơi tủ; trả về số giây còn lại. */
export function spendBankSeconds(n: number): number {
  commit({ ...state, bankSeconds: Math.max(0, state.bankSeconds - n) })
  return state.bankSeconds
}

export function wearDress(subject: Subject, dressId: string): void {
  commit({ ...state, worn: { ...state.worn, [subject]: dressId } })
}

export function formatClock(seconds: number): string {
  const s = Math.max(0, Math.round(seconds))
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
}
