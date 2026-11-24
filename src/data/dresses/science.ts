import { sci, type DressDef } from './types'

/** Khoa học: từ thiên nhiên quanh bé đến đại dương, bầu trời và vũ trụ. */
export const SCIENCE_DRESSES: DressDef[] = [
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
