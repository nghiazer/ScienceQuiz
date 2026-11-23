import type { Progress, Subject } from '../types/quiz'
import { SUBJECT_TOPICS } from './topics'

/** Số câu ĐÚNG cần có để mở thêm một váy (đếm riêng từng môn). */
export const CORRECT_PER_DRESS = 10
export const DRESSES_PER_SUBJECT = 30

export type Silhouette = 'aline' | 'empire' | 'tiered' | 'ballgown' | 'mermaid' | 'grand'
export type DressPattern =
  | 'dots' | 'hearts' | 'flowers' | 'leaves' | 'stars' | 'waves' | 'snowflakes'
  | 'notes' | 'stripes' | 'drops' | 'butterflies' | 'letters' | 'feathers'
export type Sleeves = 'none' | 'cap' | 'puff' | 'off-shoulder' | 'sheer'
export type Trim = 'ruffle' | 'lace' | 'pearls' | 'ribbon'
export type Tiara = 'simple' | 'jeweled' | 'grand'

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
  /** số lớp voan phủ ngoài (0–3) */
  layers?: number
  layerColor?: string
  trim?: Trim
  bow?: boolean
  sash?: boolean
  gems?: boolean
  sparkle?: boolean
  necklace?: boolean
  /** áo choàng (1–2 màu) */
  cape?: string[]
  train?: boolean
  /** cánh tiên (1–2 màu) */
  wings?: string[]
  /** vầng sáng phía sau */
  aura?: string
  tiara?: Tiara
}

export interface DressDef {
  id: string
  subject: Subject
  /** 1–30: thứ tự mở khóa */
  index: number
  /** 1 = dễ thương, 2 = lộng lẫy, 3 = dạ hội hoàng gia */
  tier: 1 | 2 | 3
  name_vi: string
  name_en: string
  look: DressLook
}

const make = (subject: Subject, prefix: string) => (index: number, name_vi: string, name_en: string, look: DressLook): DressDef => ({
  id: `${prefix}-${String(index).padStart(2, '0')}`,
  subject,
  index,
  tier: index <= 10 ? 1 : index <= 20 ? 2 : 3,
  name_vi,
  name_en,
  look,
})

const sci = make('science', 'sci-dress')
const eng = make('english', 'eng-dress')

/** Khoa học: từ thiên nhiên quanh bé đến đại dương, bầu trời và vũ trụ. */
const SCIENCE_DRESSES: DressDef[] = [
  sci(1, 'Hoa Cúc Trắng', 'White Daisy', {
    silhouette: 'aline', bodice: '#fde68a', skirt: ['#fffbeb'], accent: '#f59e0b',
    pattern: 'flowers', patternColor: '#facc15', sleeves: 'puff',
  }),
  sci(2, 'Bọ Rùa Đỏ', 'Little Ladybug', {
    silhouette: 'aline', bodice: '#dc2626', skirt: ['#ef4444'], accent: '#1f2937',
    pattern: 'dots', patternColor: '#1f2937', sleeves: 'cap',
  }),
  sci(3, 'Lá Non', 'Fresh Leaf', {
    silhouette: 'empire', bodice: '#4ade80', skirt: ['#bbf7d0'], accent: '#16a34a',
    pattern: 'leaves', patternColor: '#22c55e', sleeves: 'cap', sash: true,
  }),
  sci(4, 'Giọt Mưa', 'Raindrop', {
    silhouette: 'aline', bodice: '#60a5fa', skirt: ['#bfdbfe'], accent: '#2563eb',
    pattern: 'drops', patternColor: '#3b82f6', sleeves: 'puff',
  }),
  sci(5, 'Hoa Hướng Dương', 'Sunflower', {
    silhouette: 'empire', bodice: '#facc15', skirt: ['#fef08a'], accent: '#92400e',
    pattern: 'flowers', patternColor: '#f59e0b', sleeves: 'puff', bow: true,
  }),
  sci(6, 'Đám Mây Hồng', 'Pink Cloud', {
    silhouette: 'tiered', bodice: '#f9a8d4', skirt: ['#fbcfe8'], accent: '#ec4899',
    tierColors: ['#fce7f3', '#fbcfe8', '#f9a8d4'], pattern: 'dots', patternColor: '#ffffff', sleeves: 'cap',
  }),
  sci(7, 'Cầu Vồng Nhỏ', 'Little Rainbow', {
    silhouette: 'tiered', bodice: '#f87171', skirt: ['#fde047'], accent: '#8b5cf6',
    tierColors: ['#fca5a5', '#fde68a', '#93c5fd'], sleeves: 'puff', bow: true,
  }),
  sci(8, 'Ong Mật', 'Honey Bee', {
    silhouette: 'aline', bodice: '#fbbf24', skirt: ['#fcd34d'], accent: '#78350f',
    pattern: 'stripes', patternColor: '#92400e', sleeves: 'puff', sash: true,
  }),
  sci(9, 'Vỏ Sò', 'Seashell', {
    silhouette: 'empire', bodice: '#fda4af', skirt: ['#ffe4e6'], accent: '#fb7185',
    pattern: 'waves', patternColor: '#fb7185', sleeves: 'cap', trim: 'pearls',
  }),
  sci(10, 'Cánh Đồng Oải Hương', 'Lavender Field', {
    silhouette: 'aline', bodice: '#a78bfa', skirt: ['#ddd6fe'], accent: '#7c3aed',
    pattern: 'flowers', patternColor: '#8b5cf6', sleeves: 'puff', trim: 'ruffle', bow: true,
  }),

  sci(11, 'Cánh Bướm', 'Butterfly Wing', {
    silhouette: 'ballgown', bodice: '#fb923c', skirt: ['#fed7aa', '#f472b6'], accent: '#db2777',
    pattern: 'butterflies', patternColor: '#ffffff', sleeves: 'puff', layers: 1, layerColor: '#ffffff', trim: 'lace', tiara: 'simple',
  }),
  sci(12, 'Hoa Sen', 'Lotus Blossom', {
    silhouette: 'ballgown', bodice: '#f472b6', skirt: ['#fdf2f8', '#f9a8d4'], accent: '#16a34a',
    sleeves: 'cap', layers: 2, layerColor: '#fbcfe8', trim: 'ruffle', sash: true,
  }),
  sci(13, 'Đại Dương Xanh', 'Ocean Blue', {
    silhouette: 'mermaid', bodice: '#0ea5e9', skirt: ['#38bdf8', '#1e40af'], accent: '#e0f2fe',
    pattern: 'waves', patternColor: '#e0f2fe', sleeves: 'none', trim: 'pearls', necklace: true,
  }),
  sci(14, 'Rạn San Hô', 'Coral Reef', {
    silhouette: 'tiered', bodice: '#fb7185', skirt: ['#fdba74'], accent: '#f97316',
    tierColors: ['#fecdd3', '#fda4af', '#fb923c'], pattern: 'dots', patternColor: '#ffffff', sleeves: 'off-shoulder', trim: 'ruffle',
  }),
  sci(15, 'Rừng Mùa Xuân', 'Spring Forest', {
    silhouette: 'ballgown', bodice: '#22c55e', skirt: ['#dcfce7', '#4ade80'], accent: '#15803d',
    pattern: 'leaves', patternColor: '#166534', sleeves: 'puff', trim: 'lace', bow: true,
  }),
  sci(16, 'Hoa Anh Đào', 'Cherry Blossom', {
    silhouette: 'ballgown', bodice: '#f9a8d4', skirt: ['#fff1f2', '#fbcfe8'], accent: '#e11d48',
    pattern: 'flowers', patternColor: '#f472b6', sleeves: 'off-shoulder', layers: 2, layerColor: '#ffffff', tiara: 'simple',
  }),
  sci(17, 'Bông Tuyết', 'Snowflake', {
    silhouette: 'ballgown', bodice: '#bae6fd', skirt: ['#f0f9ff', '#7dd3fc'], accent: '#0284c7',
    pattern: 'snowflakes', patternColor: '#ffffff', sleeves: 'sheer', layers: 2, layerColor: '#e0f2fe', trim: 'lace',
  }),
  sci(18, 'Mặt Trời Mọc', 'Sunrise', {
    silhouette: 'empire', bodice: '#fbbf24', skirt: ['#fde047', '#fb923c', '#f472b6'], accent: '#ea580c',
    sleeves: 'puff', sash: true, trim: 'ribbon', tiara: 'simple',
  }),
  sci(19, 'Đồng Cỏ Hoa', 'Flower Meadow', {
    silhouette: 'tiered', bodice: '#c4b5fd', skirt: ['#fde68a'], accent: '#a855f7',
    tierColors: ['#fbcfe8', '#ddd6fe', '#bbf7d0'], pattern: 'flowers', patternColor: '#ffffff', sleeves: 'puff', bow: true, trim: 'lace',
  }),
  sci(20, 'Chim Công', 'Peacock', {
    silhouette: 'mermaid', bodice: '#0d9488', skirt: ['#2dd4bf', '#1d4ed8'], accent: '#fbbf24',
    pattern: 'feathers', patternColor: '#fde68a', sleeves: 'none', train: true, tiara: 'simple', necklace: true,
  }),

  sci(21, 'Pha Lê Băng Giá', 'Ice Crystal', {
    silhouette: 'ballgown', bodice: '#a5f3fc', skirt: ['#ffffff', '#67e8f9'], accent: '#0891b2',
    pattern: 'snowflakes', patternColor: '#ffffff', sleeves: 'sheer', layers: 2, layerColor: '#ecfeff',
    gems: true, sparkle: true, cape: ['#cffafe', '#a5f3fc'], tiara: 'jeweled',
  }),
  sci(22, 'Ngọc Trai Biển Sâu', 'Deep-Sea Pearl', {
    silhouette: 'mermaid', bodice: '#0f766e', skirt: ['#14b8a6', '#1e3a8a'], accent: '#f8fafc',
    pattern: 'waves', patternColor: '#99f6e4', sleeves: 'off-shoulder', trim: 'pearls', necklace: true,
    sparkle: true, train: true, tiara: 'jeweled',
  }),
  sci(23, 'Tiên Bướm', 'Butterfly Fairy', {
    silhouette: 'ballgown', bodice: '#c084fc', skirt: ['#f5d0fe', '#f472b6'], accent: '#a21caf',
    pattern: 'butterflies', patternColor: '#ffffff', sleeves: 'sheer', layers: 3, layerColor: '#fdf4ff',
    wings: ['#f0abfc', '#93c5fd'], sparkle: true, tiara: 'jeweled',
  }),
  sci(24, 'Cực Quang', 'Northern Lights', {
    silhouette: 'grand', bodice: '#34d399', skirt: ['#6ee7b7', '#22d3ee', '#a78bfa'], accent: '#7c3aed',
    sleeves: 'off-shoulder', layers: 1, layerColor: '#ecfeff', gems: true, sparkle: true, aura: '#a7f3d0', tiara: 'jeweled',
  }),
  sci(25, 'Mặt Trăng Bạc', 'Silver Moon', {
    silhouette: 'ballgown', bodice: '#cbd5e1', skirt: ['#f8fafc', '#a5b4fc'], accent: '#4338ca',
    pattern: 'stars', patternColor: '#fef9c3', sleeves: 'sheer', gems: true, sparkle: true,
    cape: ['#312e81', '#1e1b4b'], necklace: true, tiara: 'jeweled',
  }),
  sci(26, 'Hoàng Hôn Rực Rỡ', 'Golden Sunset', {
    silhouette: 'grand', bodice: '#f59e0b', skirt: ['#fde047', '#fb923c', '#e11d48'], accent: '#b45309',
    sleeves: 'off-shoulder', layers: 2, layerColor: '#fef3c7', trim: 'lace', gems: true, sparkle: true, train: true, tiara: 'jeweled',
  }),
  sci(27, 'Tinh Vân', 'Nebula', {
    silhouette: 'grand', bodice: '#a855f7', skirt: ['#f0abfc', '#8b5cf6', '#1e3a8a'], accent: '#f0abfc',
    pattern: 'stars', patternColor: '#ffffff', sleeves: 'sheer', layers: 1, layerColor: '#f5d0fe',
    sparkle: true, aura: '#e9d5ff', cape: ['#7e22ce', '#312e81'], tiara: 'jeweled',
  }),
  sci(28, 'Dải Ngân Hà', 'Milky Way', {
    silhouette: 'grand', bodice: '#1e3a8a', skirt: ['#6366f1', '#312e81', '#0f172a'], accent: '#fde68a',
    pattern: 'stars', patternColor: '#fef08a', sleeves: 'off-shoulder', gems: true, sparkle: true, necklace: true,
    cape: ['#1e1b4b', '#0f172a'], train: true, tiara: 'grand',
  }),
  sci(29, 'Nữ Thần Mặt Trời', 'Sun Goddess', {
    silhouette: 'grand', bodice: '#facc15', skirt: ['#fef9c3', '#fbbf24', '#f97316'], accent: '#b45309',
    pattern: 'feathers', patternColor: '#fff7ed', sleeves: 'sheer', layers: 2, layerColor: '#fffbeb', trim: 'lace',
    gems: true, sparkle: true, aura: '#fde68a', wings: ['#fde68a', '#fb923c'], train: true, tiara: 'grand',
  }),
  sci(30, 'Nữ Hoàng Vũ Trụ', 'Queen of the Universe', {
    silhouette: 'grand', bodice: '#7c3aed', skirt: ['#f0abfc', '#6366f1', '#0f172a'], accent: '#fde047',
    pattern: 'stars', patternColor: '#fef08a', sleeves: 'sheer', layers: 2, layerColor: '#e0e7ff', trim: 'pearls',
    gems: true, sparkle: true, necklace: true, aura: '#c4b5fd', wings: ['#c4b5fd', '#67e8f9'],
    cape: ['#4c1d95', '#0f172a'], train: true, tiara: 'grand',
  }),
]

/** Tiếng Anh: tiệc trà, vườn hồng, truyện cổ tích, ba-lê và dạ vũ hoàng gia. */
const ENGLISH_DRESSES: DressDef[] = [
  eng(1, 'Tiệc Trà Hồng', 'Pink Tea Party', {
    silhouette: 'aline', bodice: '#f9a8d4', skirt: ['#fce7f3'], accent: '#ec4899',
    pattern: 'dots', patternColor: '#f472b6', sleeves: 'puff',
  }),
  eng(2, 'Hoa Hồng Nhỏ', 'Little Rose', {
    silhouette: 'empire', bodice: '#e11d48', skirt: ['#fecdd3'], accent: '#be123c',
    pattern: 'flowers', patternColor: '#f43f5e', sleeves: 'cap', sash: true,
  }),
  eng(3, 'Bánh Kem Dâu', 'Strawberry Cake', {
    silhouette: 'tiered', bodice: '#fb7185', skirt: ['#fff1f2'], accent: '#e11d48',
    tierColors: ['#fff7ed', '#fecdd3', '#fda4af'], pattern: 'dots', patternColor: '#ffffff', sleeves: 'puff',
  }),
  eng(4, 'Kẹo Bạc Hà', 'Mint Candy', {
    silhouette: 'aline', bodice: '#6ee7b7', skirt: ['#d1fae5'], accent: '#059669',
    pattern: 'stripes', patternColor: '#ffffff', sleeves: 'puff', bow: true,
  }),
  eng(5, 'Sách Truyện', 'Storybook', {
    silhouette: 'aline', bodice: '#fcd34d', skirt: ['#fef3c7'], accent: '#b45309',
    pattern: 'letters', patternColor: '#d97706', sleeves: 'cap', sash: true,
  }),
  eng(6, 'Bong Bóng Xà Phòng', 'Soap Bubbles', {
    silhouette: 'empire', bodice: '#c4b5fd', skirt: ['#ede9fe'], accent: '#8b5cf6',
    pattern: 'dots', patternColor: '#a5f3fc', sleeves: 'puff',
  }),
  eng(7, 'Nốt Nhạc Vui', 'Happy Music', {
    silhouette: 'aline', bodice: '#38bdf8', skirt: ['#e0f2fe'], accent: '#0369a1',
    pattern: 'notes', patternColor: '#0284c7', sleeves: 'cap', sash: true,
  }),
  eng(8, 'Trái Tim Ngọt Ngào', 'Sweetheart', {
    silhouette: 'tiered', bodice: '#f43f5e', skirt: ['#ffe4e6'], accent: '#be123c',
    tierColors: ['#ffe4e6', '#fecdd3', '#fda4af'], pattern: 'hearts', patternColor: '#e11d48', sleeves: 'puff',
  }),
  eng(9, 'Vườn Tulip', 'Tulip Garden', {
    silhouette: 'empire', bodice: '#f97316', skirt: ['#ffedd5'], accent: '#c2410c',
    pattern: 'flowers', patternColor: '#ef4444', sleeves: 'puff', bow: true,
  }),
  eng(10, 'Ba-lê Hồng', 'Pink Ballet', {
    silhouette: 'aline', bodice: '#f9a8d4', skirt: ['#fdf2f8'], accent: '#db2777',
    sleeves: 'none', layers: 2, layerColor: '#fbcfe8', trim: 'ruffle', bow: true,
  }),

  eng(11, 'Điệu Valse Tuyết', 'Snowy Waltz', {
    silhouette: 'ballgown', bodice: '#e0f2fe', skirt: ['#ffffff', '#bae6fd'], accent: '#0284c7',
    pattern: 'snowflakes', patternColor: '#7dd3fc', sleeves: 'sheer', layers: 2, layerColor: '#f0f9ff',
  }),
  eng(12, 'Vườn Hồng', 'Rose Garden', {
    silhouette: 'ballgown', bodice: '#f43f5e', skirt: ['#ffe4e6', '#fb7185'], accent: '#16a34a',
    pattern: 'flowers', patternColor: '#be123c', sleeves: 'puff', trim: 'lace', tiara: 'simple',
  }),
  eng(13, 'Thiên Nga Trắng', 'White Swan', {
    silhouette: 'ballgown', bodice: '#f8fafc', skirt: ['#ffffff', '#e2e8f0'], accent: '#94a3b8',
    pattern: 'feathers', patternColor: '#cbd5e1', sleeves: 'off-shoulder', layers: 3, layerColor: '#ffffff',
  }),
  eng(14, 'Lâu Đài Mây', 'Cloud Castle', {
    silhouette: 'tiered', bodice: '#7dd3fc', skirt: ['#e0f2fe'], accent: '#0ea5e9',
    tierColors: ['#f0f9ff', '#bae6fd', '#93c5fd'], sleeves: 'puff', trim: 'ruffle', bow: true,
  }),
  eng(15, 'Đèn Lồng Đêm', 'Lantern Night', {
    silhouette: 'empire', bodice: '#1e3a8a', skirt: ['#3730a3', '#1e1b4b'], accent: '#fbbf24',
    pattern: 'stars', patternColor: '#fde68a', sleeves: 'cap', sash: true, trim: 'ribbon',
  }),
  eng(16, 'Hoa Mộc Lan', 'Magnolia', {
    silhouette: 'ballgown', bodice: '#fbcfe8', skirt: ['#fffbeb', '#fbcfe8'], accent: '#be185d',
    sleeves: 'off-shoulder', layers: 1, layerColor: '#ffffff', trim: 'lace', bow: true,
  }),
  eng(17, 'Vũ Hội Mùa Thu', 'Autumn Ball', {
    silhouette: 'ballgown', bodice: '#b45309', skirt: ['#fbbf24', '#9f1239'], accent: '#78350f',
    pattern: 'leaves', patternColor: '#fde68a', sleeves: 'sheer', sash: true, tiara: 'simple',
  }),
  eng(18, 'Kẹo Bông', 'Cotton Candy', {
    silhouette: 'tiered', bodice: '#f0abfc', skirt: ['#fce7f3'], accent: '#c026d3',
    tierColors: ['#fbcfe8', '#ddd6fe', '#bae6fd'], sleeves: 'puff', layers: 1, layerColor: '#ffffff', bow: true, trim: 'ruffle',
  }),
  eng(19, 'Quý Cô Ngọc Lục Bảo', 'Emerald Lady', {
    silhouette: 'mermaid', bodice: '#047857', skirt: ['#10b981', '#064e3b'], accent: '#f8fafc',
    sleeves: 'none', trim: 'pearls', necklace: true, train: true, tiara: 'simple',
  }),
  eng(20, 'Bình Minh Tím', 'Violet Dawn', {
    silhouette: 'ballgown', bodice: '#8b5cf6', skirt: ['#ede9fe', '#a78bfa'], accent: '#6d28d9',
    pattern: 'hearts', patternColor: '#ffffff', sleeves: 'off-shoulder', layers: 1, layerColor: '#f5f3ff', tiara: 'simple',
  }),

  eng(21, 'Nhung Hoàng Gia', 'Royal Velvet', {
    silhouette: 'ballgown', bodice: '#9f1239', skirt: ['#e11d48', '#881337'], accent: '#fbbf24',
    sleeves: 'sheer', trim: 'lace', gems: true, sparkle: true, cape: ['#fde68a', '#b45309'], necklace: true, tiara: 'jeweled',
  }),
  eng(22, 'Dạ Vũ Nửa Đêm', 'Midnight Ball', {
    silhouette: 'grand', bodice: '#1e3a8a', skirt: ['#3b82f6', '#1e3a8a', '#0f172a'], accent: '#e0e7ff',
    pattern: 'stars', patternColor: '#e0f2fe', sleeves: 'off-shoulder', gems: true, sparkle: true, train: true, tiara: 'jeweled',
  }),
  eng(23, 'Công Chúa Hoa Hồng', 'Rose Princess', {
    silhouette: 'grand', bodice: '#f43f5e', skirt: ['#fff1f2', '#fb7185', '#be123c'], accent: '#fbbf24',
    pattern: 'flowers', patternColor: '#ffe4e6', sleeves: 'puff', layers: 2, layerColor: '#ffe4e6',
    sparkle: true, train: true, tiara: 'jeweled',
  }),
  eng(24, 'Pha Lê Hồng', 'Pink Crystal', {
    silhouette: 'ballgown', bodice: '#f472b6', skirt: ['#fdf2f8', '#f9a8d4', '#ec4899'], accent: '#ffffff',
    sleeves: 'sheer', layers: 2, layerColor: '#ffffff', trim: 'pearls', gems: true, sparkle: true, aura: '#fbcfe8', tiara: 'jeweled',
  }),
  eng(25, 'Tiên Kể Chuyện', 'Story Fairy', {
    silhouette: 'ballgown', bodice: '#a78bfa', skirt: ['#ede9fe', '#7dd3fc'], accent: '#6d28d9',
    pattern: 'letters', patternColor: '#ffffff', sleeves: 'sheer', layers: 2, layerColor: '#f5f3ff',
    wings: ['#c4b5fd', '#a5f3fc'], sparkle: true, tiara: 'jeweled',
  }),
  eng(26, 'Hoàng Hậu Ngọc Trai', 'Pearl Queen', {
    silhouette: 'mermaid', bodice: '#fef3c7', skirt: ['#fffbeb', '#fbcfe8'], accent: '#ffffff',
    sleeves: 'off-shoulder', trim: 'pearls', gems: true, necklace: true, sparkle: true,
    cape: ['#fce7f3', '#f9a8d4'], train: true, tiara: 'jeweled',
  }),
  eng(27, 'Lông Vũ Vàng', 'Golden Feather', {
    silhouette: 'grand', bodice: '#eab308', skirt: ['#fef9c3', '#facc15', '#ca8a04'], accent: '#92400e',
    pattern: 'feathers', patternColor: '#fffbeb', sleeves: 'sheer', layers: 1, layerColor: '#fef9c3',
    gems: true, sparkle: true, aura: '#fef08a', train: true, tiara: 'jeweled',
  }),
  eng(28, 'Đêm Pháo Hoa', 'Firework Night', {
    silhouette: 'grand', bodice: '#7e22ce', skirt: ['#c026d3', '#6d28d9', '#1e1b4b'], accent: '#fde047',
    pattern: 'stars', patternColor: '#fde047', sleeves: 'off-shoulder', gems: true, sparkle: true, necklace: true,
    cape: ['#581c87', '#1e1b4b'], train: true, tiara: 'grand',
  }),
  eng(29, 'Vũ Điệu Ánh Trăng', 'Moonlight Dance', {
    silhouette: 'grand', bodice: '#c7d2fe', skirt: ['#f8fafc', '#a5b4fc', '#4338ca'], accent: '#e0e7ff',
    pattern: 'snowflakes', patternColor: '#ffffff', sleeves: 'sheer', layers: 2, layerColor: '#eef2ff', trim: 'lace',
    sparkle: true, aura: '#e0e7ff', wings: ['#e0e7ff', '#a5b4fc'], train: true, tiara: 'grand',
  }),
  eng(30, 'Nữ Hoàng Cổ Tích', 'Queen of Fairy Tales', {
    silhouette: 'grand', bodice: '#db2777', skirt: ['#fdf2f8', '#f472b6', '#7e22ce'], accent: '#fde047',
    pattern: 'hearts', patternColor: '#fef08a', sleeves: 'puff', layers: 2, layerColor: '#fce7f3', trim: 'pearls',
    gems: true, sparkle: true, necklace: true, aura: '#fbcfe8', wings: ['#fbcfe8', '#c4b5fd'],
    cape: ['#fde68a', '#be185d'], train: true, tiara: 'grand',
  }),
]

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
