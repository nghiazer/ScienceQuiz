import { eng, type DressDef } from './types'

/** Tiếng Anh: tiệc trà, vườn hồng, truyện cổ tích, ba-lê và dạ vũ hoàng gia. */
export const ENGLISH_DRESSES: DressDef[] = [
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
