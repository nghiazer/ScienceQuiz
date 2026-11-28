import type { DressDef, DressLook, DressPattern } from '../dresses/types'
import {
  SLOT_PRICE,
  type AccessorySet, type EarringKind, type FeetItem, type HandItem, type HandKind, type HeadItem, type HeadKind,
  type JewelryItem, type Metal, type Motif, type NecklaceKind, type ShoeKind,
} from './types'

/* Sinh bộ phụ kiện từ váy: tất cả đều suy ra từ `look`, cấp và vị trí trong tủ, nên luôn giống nhau mỗi lần chạy. */

interface Hsl { h: number; s: number; l: number; chroma: number }

function hsl(hex: string): Hsl {
  const n = parseInt(hex.slice(1), 16)
  const r = ((n >> 16) & 255) / 255
  const g = ((n >> 8) & 255) / 255
  const b = (n & 255) / 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const l = (max + min) / 2
  const chroma = max - min
  let h = 0
  if (chroma > 0) {
    if (max === r) h = ((g - b) / chroma + 6) % 6
    else if (max === g) h = (b - r) / chroma + 2
    else h = (r - g) / chroma + 4
    h *= 60
  }
  const s = chroma === 0 ? 0 : chroma / (1 - Math.abs(2 * l - 1))
  return { h, s, l, chroma }
}

const lower = (c: string) => c.toLowerCase()

/** Màu đá quý: màu rực nhất của váy, khác màu nhấn; váy toàn màu nhạt thì lấy màu nhấn. */
function gemColor(look: DressLook): string {
  const pool = [look.bodice, ...look.skirt, look.patternColor, ...(look.tierColors ?? []), look.layerColor, ...(look.cape ?? []), ...(look.wings ?? [])]
    .filter((c): c is string => Boolean(c) && lower(c!) !== lower(look.accent))
  let best = look.accent
  let bestChroma = 0.3
  for (const c of pool) {
    const ch = hsl(c).chroma
    if (ch > bestChroma) {
      best = c
      bestChroma = ch
    }
  }
  return lower(best)
}

/** Màu sáng nhất của váy (ngọc trai, găng tay, giày pha lê). */
function lightColor(look: DressLook): string {
  const pool = [look.skirt[0], look.patternColor, look.bodice, ...look.skirt].filter((c): c is string => Boolean(c))
  const best = pool.reduce((a, c) => (hsl(c).l > hsl(a).l ? c : a))
  return hsl(best).l >= 0.86 ? lower(best) : '#ffffff'
}

/** Màu thứ hai: thân áo, nếu trùng màu nhấn thì lấy màu váy. */
function secondColor(look: DressLook): string {
  const c = lower(look.bodice) !== lower(look.accent) ? look.bodice : look.skirt[look.skirt.length - 1]
  return lower(c)
}

/** Kim loại theo sắc màu nhấn: xanh/tím/xám → bạc, hồng → vàng hồng, còn lại → vàng. */
function metalOf(look: DressLook): Metal {
  const { h, chroma } = hsl(look.accent)
  if (chroma < 0.15 || (h >= 170 && h < 285)) return 'silver'
  if (h >= 285 && h < 350) return 'rose'
  return 'gold'
}

const MOTIF_OF: Partial<Record<DressPattern, Motif>> = {
  hearts: 'heart',
  stars: 'star', snowflakes: 'star', sequins: 'star', crystals: 'star', notes: 'star', numbers: 'star',
  flowers: 'flower', roses: 'flower', leaves: 'flower', butterflies: 'flower', lace: 'flower', feathers: 'flower',
}

/** Đồ đội đầu theo cấp: 1 nơ/kẹp hoa → 2 kẹp hoa/băng đô → 3 băng đô/vương miện nhỏ → 4 vương miện nhỏ → 5 vương miện. */
function headKind(tier: number, n: number): HeadKind {
  const odd = n % 2 === 1
  if (tier === 1) return odd ? 'bow' : 'flower'
  if (tier === 2) return odd ? 'flower' : 'headband'
  if (tier === 3) return odd ? 'headband' : 'tiara'
  return tier === 4 ? 'tiara' : 'crown'
}

function necklaceKind(tier: number, n: number): NecklaceKind {
  if (tier === 1) return 'beads'
  if (tier === 2) return n % 2 ? 'pendant' : 'beads'
  if (tier === 3) return n % 2 ? 'pearls' : 'pendant'
  if (tier === 4) return n % 2 ? 'pendant' : 'pearls'
  return 'collar'
}

function earringKind(tier: number, n: number): EarringKind {
  if (tier <= 2) return 'stud'
  return n % 3 === 0 ? 'hoop' : 'drop'
}

const shoeKind = (tier: number): ShoeKind => (tier <= 2 ? 'flats' : tier === 5 ? 'glass' : 'heels')

/** Theo chủ đề hoa văn nếu có, còn lại xoay vòng theo vị trí để đủ cả năm loại. */
const HAND_BY_PATTERN: Partial<Record<DressPattern, HandKind>> = {
  flowers: 'bouquet', roses: 'bouquet', leaves: 'bouquet',
  stars: 'wand', snowflakes: 'wand', crystals: 'wand',
  waves: 'parasol', drops: 'parasol',
  notes: 'fan', feathers: 'fan',
}
const HAND_ROTATION: HandKind[] = ['fan', 'handbag', 'wand', 'bouquet', 'parasol']

const HEAD_NAME: Record<HeadKind, [string, string]> = {
  bow: ['Nơ cài tóc', 'hair bow'],
  flower: ['Kẹp hoa', 'flower clip'],
  headband: ['Băng đô', 'headband'],
  tiara: ['Vương miện nhỏ', 'tiara'],
  crown: ['Vương miện', 'crown'],
}
const NECKLACE_NAME: Record<NecklaceKind, [string, string]> = {
  beads: ['Chuỗi hạt', 'bead necklace'],
  pendant: ['Dây chuyền', 'pendant necklace'],
  pearls: ['Chuỗi ngọc trai', 'pearl necklace'],
  collar: ['Vòng cổ đá quý', 'jewel collar'],
}
const SHOE_NAME: Record<ShoeKind, [string, string]> = {
  flats: ['Giày búp bê', 'ballet flats'],
  heels: ['Giày dạ hội', 'party shoes'],
  glass: ['Giày pha lê', 'glass slippers'],
}
const HAND_NAME: Record<HandKind, [string, string]> = {
  fan: ['Quạt xòe', 'fan'],
  handbag: ['Túi xách nhỏ', 'little handbag'],
  wand: ['Đũa thần', 'magic wand'],
  bouquet: ['Bó hoa', 'bouquet'],
  parasol: ['Ô che nắng', 'parasol'],
}

/** Bộ phụ kiện thứ `n` (1…300) đi kèm váy `d`. */
export function makeSet(d: DressDef, n: number): AccessorySet {
  const look = d.look
  const setId = `acc-${d.id}`
  const base = (slot: string, vi: string, en: string) => ({
    id: `${setId}-${slot}`,
    setId,
    dressId: d.id,
    name_vi: `${vi} ${d.name_vi}`,
    name_en: `${d.name_en} ${en}`,
    label_vi: vi,
    label_en: en.charAt(0).toUpperCase() + en.slice(1),
  })
  const main = lower(look.accent)
  const second = secondColor(look)
  const gem = gemColor(look)
  const metal = metalOf(look)
  const motif = (look.pattern && MOTIF_OF[look.pattern]) ?? 'gem'

  const hk = headKind(d.tier, n)
  const head: HeadItem = { ...base('head', ...HEAD_NAME[hk]), price: SLOT_PRICE.head, slot: 'head', kind: hk, motif, metal, main, second, gem }

  const nk = necklaceKind(d.tier, n)
  const jewelry: JewelryItem = {
    ...base('jewelry', ...NECKLACE_NAME[nk]),
    price: SLOT_PRICE.jewelry, slot: 'jewelry', kind: nk, earrings: earringKind(d.tier, n), bracelet: d.tier >= 3 || n % 2 === 0, motif, metal, main, gem,
  }

  const sk = shoeKind(d.tier)
  // Găng tay dài: từ cấp 3, khi váy vốn có găng hoặc xen kẽ theo vị trí.
  const withGloves = d.tier >= 3 && (Boolean(look.gloves) || n % 2 === 0)
  const [shoeVi, shoeEn] = SHOE_NAME[sk]
  const feet: FeetItem = {
    ...base('feet', withGloves ? `${shoeVi} và găng tay` : shoeVi, withGloves ? `${shoeEn} and gloves` : shoeEn),
    price: SLOT_PRICE.feet, slot: 'feet', kind: sk, shoe: sk === 'glass' ? lightColor(look) : main, trim: sk === 'glass' ? gem : second,
  }
  if (withGloves) feet.gloves = lightColor(look)

  const hand_k = (look.pattern && HAND_BY_PATTERN[look.pattern]) ?? HAND_ROTATION[n % HAND_ROTATION.length]
  const hand: HandItem = { ...base('hand', ...HAND_NAME[hand_k]), price: SLOT_PRICE.hand, slot: 'hand', kind: hand_k, motif, metal, main, second, gem }

  return {
    id: setId,
    dressId: d.id,
    index: n,
    name_vi: `Bộ phụ kiện ${d.name_vi}`,
    name_en: `${d.name_en} accessory set`,
    items: { head, jewelry, feet, hand },
  }
}
