import { WARDROBE } from '../dresses'
import { makeSet } from './generate'
import { ACCESSORY_SLOTS, type AccessoryItem, type AccessorySet, type WornAccessories } from './types'

export * from './types'

/** 300 bộ phụ kiện, bộ thứ n đi kèm váy thứ n trong tủ chung (sinh tự động từ dáng váy). */
export const ACCESSORY_SETS: AccessorySet[] = WARDROBE.map((d, i) => makeSet(d, i + 1))

/** Tất cả món phụ kiện, theo thứ tự bộ rồi theo ô (đầu, trang sức, chân, tay). */
export const ACCESSORY_ITEMS: AccessoryItem[] = ACCESSORY_SETS.flatMap((s) => ACCESSORY_SLOTS.map((slot) => s.items[slot]))

const ITEMS = new Map(ACCESSORY_ITEMS.map((it) => [it.id, it]))
const SETS = new Map(ACCESSORY_SETS.map((s) => [s.id, s]))

export const itemById = (id: string | null | undefined): AccessoryItem | undefined => (id ? ITEMS.get(id) : undefined)
export const setById = (id: string | null | undefined): AccessorySet | undefined => (id ? SETS.get(id) : undefined)

/** Gom các món thành bộ đang đeo theo ô; món đứng sau thay món đứng trước cùng ô (vd. món đang thử). */
export function toWorn(items: (AccessoryItem | undefined)[]): WornAccessories {
  const worn: WornAccessories = {}
  for (const it of items) {
    if (!it) continue
    switch (it.slot) {
      case 'head': worn.head = it; break
      case 'jewelry': worn.jewelry = it; break
      case 'feet': worn.feet = it; break
      case 'hand': worn.hand = it; break
    }
  }
  return worn
}
