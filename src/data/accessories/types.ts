/** Bốn ô phụ kiện; mỗi ô bé đeo tối đa một món. */
export type AccessorySlot = 'head' | 'jewelry' | 'feet' | 'hand'
export const ACCESSORY_SLOTS: AccessorySlot[] = ['head', 'jewelry', 'feet', 'hand']

/** Giá cố định theo ô (xu); cả bộ 4 món = SET_PRICE. */
export const SLOT_PRICE: Record<AccessorySlot, number> = { head: 6, jewelry: 6, feet: 4, hand: 4 }
export const SET_PRICE = 20

/** Đồ đội đầu: nơ, kẹp hoa, băng đô, vương miện nhỏ, vương miện lớn (theo cấp váy). */
export type HeadKind = 'bow' | 'flower' | 'headband' | 'tiara' | 'crown'
/** Kiểu vòng cổ: chuỗi hạt, dây chuyền mặt đá, chuỗi ngọc trai, vòng cổ đá quý. */
export type NecklaceKind = 'beads' | 'pendant' | 'pearls' | 'collar'
export type EarringKind = 'stud' | 'drop' | 'hoop'
/** Giày búp bê, giày dạ hội có quai, giày pha lê. */
export type ShoeKind = 'flats' | 'heels' | 'glass'
/** Đồ cầm tay phải. */
export type HandKind = 'fan' | 'handbag' | 'wand' | 'bouquet' | 'parasol'
/** Màu kim loại của vương miện, dây chuyền, cán đũa… */
export type Metal = 'gold' | 'silver' | 'rose'
/** Họa tiết nhỏ lấy theo hoa văn của váy (mặt dây chuyền, đầu đũa thần, giữa vương miện). */
export type Motif = 'heart' | 'star' | 'flower' | 'gem'

export const HEAD_KINDS: HeadKind[] = ['bow', 'flower', 'headband', 'tiara', 'crown']
export const NECKLACE_KINDS: NecklaceKind[] = ['beads', 'pendant', 'pearls', 'collar']
export const EARRING_KINDS: EarringKind[] = ['stud', 'drop', 'hoop']
export const SHOE_KINDS: ShoeKind[] = ['flats', 'heels', 'glass']
export const HAND_KINDS: HandKind[] = ['fan', 'handbag', 'wand', 'bouquet', 'parasol']
export const METALS: Metal[] = ['gold', 'silver', 'rose']
export const MOTIFS: Motif[] = ['heart', 'star', 'flower', 'gem']

interface ItemBase {
  /** `acc-<dressId>-<slot>` */
  id: string
  /** `acc-<dressId>` */
  setId: string
  dressId: string
  name_vi: string
  name_en: string
  /** tên ngắn chỉ loại món (vd. "Vương miện" / "Crown"), dùng trên ô nhỏ trong cửa hàng */
  label_vi: string
  label_en: string
  price: number
}

/** Màu đều là hex 6 chữ số (check-data kiểm tra). */
export interface HeadItem extends ItemBase {
  slot: 'head'
  kind: HeadKind
  motif: Motif
  metal: Metal
  main: string
  second: string
  gem: string
}

export interface JewelryItem extends ItemBase {
  slot: 'jewelry'
  kind: NecklaceKind
  earrings: EarringKind
  /** vòng tay ở cổ tay trái */
  bracelet: boolean
  motif: Motif
  metal: Metal
  main: string
  gem: string
}

export interface FeetItem extends ItemBase {
  slot: 'feet'
  kind: ShoeKind
  shoe: string
  /** màu nơ/quai/viền giày và viền găng */
  trim: string
  /** màu găng tay dài; không có = không đeo găng */
  gloves?: string
}

export interface HandItem extends ItemBase {
  slot: 'hand'
  kind: HandKind
  motif: Motif
  metal: Metal
  main: string
  second: string
  gem: string
}

export type AccessoryItem = HeadItem | JewelryItem | FeetItem | HandItem

/** Món đang hiện trên người công chúa, theo từng ô (dùng khi vẽ). */
export interface WornAccessories {
  head?: HeadItem
  jewelry?: JewelryItem
  feet?: FeetItem
  hand?: HandItem
}

/** Một bộ phụ kiện đi kèm một chiếc váy (cùng thứ tự với tủ váy chung). */
export interface AccessorySet {
  id: string
  dressId: string
  /** vị trí 1…300, trùng với số thứ tự của váy trong tủ chung */
  index: number
  name_vi: string
  name_en: string
  items: { head: HeadItem; jewelry: JewelryItem; feet: FeetItem; hand: HandItem }
}
