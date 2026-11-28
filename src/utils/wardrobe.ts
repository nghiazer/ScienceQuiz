import { useSyncExternalStore } from 'react'
import { ACCESSORY_SLOTS, itemById, type AccessorySlot } from '../data/accessories'

const KEY = 'princess-wardrobe-v1'

/** Cứ 15 phút làm bài thì được cộng 5 phút chơi tủ quần áo (cộng dồn). */
export const STUDY_BLOCK_SECONDS = 15 * 60
export const REWARD_SECONDS = 5 * 60

export interface WardrobeState {
  /** giây học dở dang trong khối 15 phút hiện tại (0 – 899) */
  studySeconds: number
  /** giây chơi tủ còn lại (đã cộng dồn) */
  bankSeconds: number
  /** váy công chúa đang mặc (tủ chung của cả ba môn) */
  wornId: string | null
  /** phụ kiện đang đeo theo từng ô (dùng chung cho mọi váy); món chưa mua thì giao diện bỏ qua */
  equipped: Partial<Record<AccessorySlot, string>>
}

const initial = (): WardrobeState => ({ studySeconds: 0, bankSeconds: 0, wornId: null, equipped: {} })

/** Chỉ giữ những ô có id phụ kiện còn tồn tại và đúng ô của món đó (bản lưu cũ chưa có → rỗng). */
function parseEquipped(v: unknown): WardrobeState['equipped'] {
  if (!v || typeof v !== 'object' || Array.isArray(v)) return {}
  const saved = v as Record<string, unknown>
  const out: WardrobeState['equipped'] = {}
  for (const slot of ACCESSORY_SLOTS) {
    const id = saved[slot]
    if (typeof id === 'string' && itemById(id)?.slot === slot) out[slot] = id
  }
  return out
}

/** Dữ liệu cũ lưu váy đang mặc theo từng môn: lấy chiếc đầu tiên còn có. */
function legacyWorn(worn: unknown): string | null {
  if (!worn || typeof worn !== 'object') return null
  const w = worn as Record<string, unknown>
  for (const k of ['science', 'english', 'math']) if (typeof w[k] === 'string') return w[k] as string
  return null
}

function load(): WardrobeState {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return initial()
    const p = JSON.parse(raw) as Partial<WardrobeState> & { worn?: unknown }
    return {
      studySeconds: Number.isFinite(p.studySeconds) ? Math.max(0, p.studySeconds as number) : 0,
      bankSeconds: Number.isFinite(p.bankSeconds) ? Math.max(0, p.bankSeconds as number) : 0,
      wornId: typeof p.wornId === 'string' ? p.wornId : legacyWorn(p.worn),
      equipped: parseEquipped(p.equipped),
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

/**
 * Chỉ đọc một phần của tủ váy: component chỉ vẽ lại khi giá trị chọn ra đổi (so bằng Object.is),
 * nên đồng hồ trừ giây mỗi giây không làm cả tủ vẽ lại.
 * `select` phải trả về số/chuỗi/boolean hoặc một tham chiếu có sẵn trong state (vd. `s.equipped`), không tạo object mới.
 */
export function useWardrobeSelector<T>(select: (s: WardrobeState) => T): T {
  return useSyncExternalStore(subscribe, () => select(state))
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

export function wearDress(dressId: string): void {
  commit({ ...state, wornId: dressId })
}

/** Đeo món `itemId` vào ô `slot` (null = tháo ra). */
export function equipItem(slot: AccessorySlot, itemId: string | null): void {
  const equipped = { ...state.equipped }
  if (itemId && itemById(itemId)?.slot === slot) equipped[slot] = itemId
  else delete equipped[slot]
  commit({ ...state, equipped })
}

export function formatClock(seconds: number): string {
  const s = Math.max(0, Math.round(seconds))
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
}
