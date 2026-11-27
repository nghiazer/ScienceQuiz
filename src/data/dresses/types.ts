import type { Subject } from '../../types/quiz'

/** Số câu ĐÚNG cần có để mở thêm một váy (đếm riêng từng môn). */
export const CORRECT_PER_DRESS = 10
export const DRESSES_PER_SUBJECT = 100

export type Silhouette =
  | 'aline' | 'empire' | 'tiered' | 'ballgown' | 'mermaid' | 'grand'
  | 'princess' | 'cascade' | 'hilo'
  /** dáng cao cấp (dòng váy Toán): váy cánh hoa, phồng sau kiểu hoàng gia, gấu cắt kim cương */
  | 'petal' | 'bustle' | 'crystal'
export type DressPattern =
  | 'dots' | 'hearts' | 'flowers' | 'leaves' | 'stars' | 'waves' | 'snowflakes'
  | 'notes' | 'stripes' | 'drops' | 'butterflies' | 'letters' | 'feathers'
  | 'damask' | 'roses' | 'lace' | 'sequins' | 'swirls'
  | 'diamonds' | 'hexagons' | 'numbers' | 'filigree' | 'crystals'
export type Sleeves = 'none' | 'cap' | 'puff' | 'off-shoulder' | 'sheer' | 'long' | 'flutter' | 'bishop'
export type Trim = 'ruffle' | 'lace' | 'pearls' | 'ribbon' | 'scallop' | 'embroidery' | 'sequins'
/** 'crown' = vương miện hoàng đế khép kín có vòm và quả cầu */
export type Tiara = 'simple' | 'jeweled' | 'grand' | 'crown'
export type Neckline = 'scoop' | 'sweetheart' | 'square' | 'v' | 'halter'
export type Hair = 'bun' | 'long' | 'braid' | 'curls'

/** Tham số để vẽ váy bằng SVG (xem components/wardrobe/DressSvg.tsx). */
export interface DressLook {
  silhouette: Silhouette
  bodice: string
  /** 1 màu = trơn; 2–3 màu = chuyển màu từ eo xuống gấu váy */
  skirt: string[]
  /** màu viền, thắt lưng, nơ, giày */
  accent: string
  pattern?: DressPattern
  patternColor?: string
  /** màu từng tầng (chỉ dùng cho dáng 'tiered', từ trên xuống) */
  tierColors?: string[]
  sleeves: Sleeves
  /** kiểu cổ áo (mặc định 'scoop') */
  neckline?: Neckline
  /** số lớp voan phủ ngoài (0–3) */
  layers?: number
  layerColor?: string
  /** dải vải vắt chéo / gom nếp ở váy */
  drape?: boolean
  trim?: Trim
  bow?: boolean
  sash?: boolean
  gems?: boolean
  sparkle?: boolean
  necklace?: boolean
  /** găng tay dài */
  gloves?: boolean
  earrings?: boolean
  /** áo choàng (1–2 màu) */
  cape?: string[]
  train?: boolean
  /** cánh tiên (1–2 màu) */
  wings?: string[]
  /** vầng sáng phía sau */
  aura?: string
  tiara?: Tiara
  /** khăn voan dài sau đầu (màu) */
  veil?: string
  /** quyền trượng cầm tay phải */
  scepter?: boolean
  /** dây đan chéo kiểu corset trên thân áo */
  corset?: boolean
  /** hàng đá quý lớn dọc gấu váy */
  hemJewels?: boolean
  /** lớp váy lót ren lộ dưới gấu (màu) */
  petticoat?: string
  /** kiểu tóc (mặc định 'bun') và màu tóc */
  hair?: Hair
  hairColor?: string
}

/** 1 = dễ thương, 2 = lộng lẫy, 3 = dạ hội hoàng gia, 4 = dạ hội ánh sao, 5 = nữ hoàng */
export type DressTier = 1 | 2 | 3 | 4 | 5

export interface DressDef {
  id: string
  subject: Subject
  /** thứ tự mở khóa, 1…DRESSES_PER_SUBJECT */
  index: number
  tier: DressTier
  name_vi: string
  name_en: string
  look: DressLook
}

/** Cấp độ theo thứ tự: 1–10 → 1, 11–20 → 2, 21–40 → 3, 41–70 → 4, 71+ → 5. */
export const tierOf = (index: number): DressTier =>
  index <= 10 ? 1 : index <= 20 ? 2 : index <= 40 ? 3 : index <= 70 ? 4 : 5

const make = (subject: Subject, prefix: string) => (index: number, name_vi: string, name_en: string, look: DressLook): DressDef => ({
  id: `${prefix}-${String(index).padStart(2, '0')}`,
  subject,
  index,
  tier: tierOf(index),
  name_vi,
  name_en,
  look,
})

export const sci = make('science', 'sci-dress')
export const eng = make('english', 'eng-dress')
export const mth = make('math', 'math-dress')
