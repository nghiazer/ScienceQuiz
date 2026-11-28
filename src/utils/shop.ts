import { totalCorrect } from '../data/dresses'
import { ACCESSORY_SLOTS, itemById, setById, type AccessorySet, type AccessorySlot } from '../data/accessories'
import type { Progress } from '../types/quiz'
import { saveProgress } from './storage'

/* Cửa hàng phụ kiện: mỗi câu đúng (từ trước tới nay, mọi môn) = 1 xu. Hàm thuần, chỉ buyItems ghi localStorage. */

type ShopProgress = Pick<Progress, 'topicStats' | 'coinsSpent' | 'ownedAccessories'>

/** Số xu đang có = tổng số câu đúng − số xu đã tiêu (không âm). */
export function coinBalance(p: ShopProgress): number {
  return Math.max(0, totalCorrect(p) - p.coinsSpent)
}

/** Các món còn phải trả tiền trong danh sách: id có thật, chưa mua, không trùng. */
function unownedIds(p: ShopProgress, itemIds: string[]): string[] {
  const owned = new Set(p.ownedAccessories)
  return [...new Set(itemIds)].filter((id) => itemById(id) && !owned.has(id))
}

/** Giá phải trả cho các món chưa có trong danh sách. */
export function itemsCost(p: ShopProgress, itemIds: string[]): number {
  return unownedIds(p, itemIds).reduce((sum, id) => sum + (itemById(id)?.price ?? 0), 0)
}

/** Id bốn món của một bộ. */
export function setItemIds(setId: string): string[] {
  const set = setById(setId)
  return set ? ACCESSORY_SLOTS.map((slot) => set.items[slot].id) : []
}

/** Gói các ô của bộ thỏa `test` thành một số (bit i = ACCESSORY_SLOTS[i]): thẻ bộ (memo) nhận số thay vì Set/object. */
export function slotMask(set: AccessorySet, test: (slot: AccessorySlot, itemId: string) => boolean): number {
  return ACCESSORY_SLOTS.reduce((mask, slot, i) => (test(slot, set.items[slot].id) ? mask | (1 << i) : mask), 0)
}

/** Ô `slot` có trong `mask` không. */
export function inMask(mask: number, slot: AccessorySlot): boolean {
  return (mask & (1 << ACCESSORY_SLOTS.indexOf(slot))) !== 0
}

/** Mặt nạ đủ cả bốn ô. */
export const ALL_SLOTS_MASK = (1 << ACCESSORY_SLOTS.length) - 1

/** Giá "Mua cả bộ": chỉ tính những món của bộ chưa mua (0 nếu đã đủ, tối đa SET_PRICE). */
export function setCost(p: ShopProgress, setId: string): number {
  return itemsCost(p, setItemIds(setId))
}

export interface BuyOutput {
  progress: Progress
  /** id các món vừa mua (rỗng nếu không mua được gì) */
  bought: string[]
  cost: number
}

/**
 * Mua các món chưa có trong `itemIds` (bỏ qua id lạ và món đã mua, nên gọi lại không bị trừ xu hai lần).
 * Không đủ xu thì không mua gì cả. Mua được thì lưu tiến độ.
 */
export function buyItems(p: Progress, itemIds: string[]): BuyOutput {
  const ids = unownedIds(p, itemIds)
  const cost = itemsCost(p, ids)
  if (ids.length === 0 || cost > coinBalance(p)) return { progress: p, bought: [], cost: 0 }
  const next: Progress = { ...p, coinsSpent: p.coinsSpent + cost, ownedAccessories: [...p.ownedAccessories, ...ids] }
  saveProgress(next)
  return { progress: next, bought: ids, cost }
}
