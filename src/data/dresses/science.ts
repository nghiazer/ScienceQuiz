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

  // ── 31–40 · Vườn và côn trùng (cấp 3) ──
  sci(31, 'Chuồn Chuồn Lam', 'Blue Dragonfly', {
    silhouette: 'princess', bodice: '#0ea5e9', skirt: ['#e0f2fe', '#38bdf8'], accent: '#0369a1',
    pattern: 'lace', patternColor: '#ffffff', sleeves: 'flutter', neckline: 'sweetheart', trim: 'scallop',
    wings: ['#bae6fd', '#e0f2fe'], sparkle: true, tiara: 'simple', hair: 'long',
  }),
  sci(32, 'Đom Đóm Lấp Lánh', 'Glowing Firefly', {
    silhouette: 'ballgown', bodice: '#1e293b', skirt: ['#334155', '#facc15'], accent: '#facc15',
    pattern: 'sequins', patternColor: '#fde047', sleeves: 'off-shoulder', neckline: 'square', trim: 'sequins',
    gems: true, sparkle: true, aura: '#fef08a', tiara: 'simple', hair: 'curls', hairColor: '#2b1b17',
  }),
  sci(33, 'Phong Lan Tím', 'Purple Orchid', {
    silhouette: 'mermaid', bodice: '#a21caf', skirt: ['#f5d0fe', '#a21caf'], accent: '#86198f',
    pattern: 'flowers', patternColor: '#fae8ff', sleeves: 'none', neckline: 'v', trim: 'lace',
    necklace: true, earrings: true, tiara: 'jeweled', hair: 'braid', hairColor: '#7c2d12',
  }),
  sci(34, 'Chim Ruồi Xanh', 'Hummingbird', {
    silhouette: 'hilo', bodice: '#10b981', skirt: ['#6ee7b7', '#ec4899'], accent: '#be185d',
    pattern: 'feathers', patternColor: '#d1fae5', sleeves: 'cap', neckline: 'halter', bow: true,
    layers: 1, layerColor: '#ecfdf5', earrings: true, hair: 'long', hairColor: '#a16207',
  }),
  sci(35, 'Bướm Hoàng Đế', 'Monarch Butterfly', {
    silhouette: 'cascade', bodice: '#f97316', skirt: ['#fdba74', '#ea580c'], accent: '#1f2937',
    pattern: 'butterflies', patternColor: '#1f2937', sleeves: 'flutter', neckline: 'sweetheart', trim: 'scallop',
    wings: ['#fb923c', '#fde68a'], gems: true, sparkle: true, tiara: 'jeweled',
  }),
  sci(36, 'Hoa Súng Hồ Xanh', 'Water Lily', {
    silhouette: 'ballgown', bodice: '#f9a8d4', skirt: ['#fdf2f8', '#86efac'], accent: '#15803d',
    pattern: 'flowers', patternColor: '#ffffff', sleeves: 'sheer', layers: 3, layerColor: '#fce7f3', trim: 'ruffle',
    drape: true, tiara: 'simple', hair: 'braid', hairColor: '#4a2c1a',
  }),
  sci(37, 'Mạng Nhện Sương Mai', 'Dewy Spiderweb', {
    silhouette: 'princess', bodice: '#e2e8f0', skirt: ['#f8fafc', '#94a3b8'], accent: '#475569',
    pattern: 'lace', patternColor: '#ffffff', sleeves: 'long', neckline: 'v', trim: 'embroidery',
    gloves: true, sparkle: true, tiara: 'simple', hair: 'curls', hairColor: '#1f2937',
  }),
  sci(38, 'Ong Chúa', 'Queen Bee', {
    silhouette: 'ballgown', bodice: '#facc15', skirt: ['#fde047', '#78350f'], accent: '#78350f',
    pattern: 'stripes', patternColor: '#78350f', sleeves: 'puff', neckline: 'square', trim: 'pearls',
    necklace: true, wings: ['#fef9c3', '#fde68a'], tiara: 'jeweled', hair: 'bun', hairColor: '#3f2a14',
  }),
  sci(39, 'Kén Tơ Vàng', 'Golden Silk Cocoon', {
    silhouette: 'princess', bodice: '#fef3c7', skirt: ['#fffbeb', '#fcd34d'], accent: '#b45309',
    pattern: 'swirls', patternColor: '#f59e0b', sleeves: 'bishop', trim: 'lace', drape: true,
    layers: 2, layerColor: '#fffbeb', tiara: 'jeweled', hair: 'long', hairColor: '#7a4a1d',
  }),
  sci(40, 'Khu Vườn Bí Mật', 'Secret Garden', {
    silhouette: 'cascade', bodice: '#16a34a', skirt: ['#bbf7d0', '#15803d'], accent: '#166534',
    pattern: 'roses', patternColor: '#f43f5e', sleeves: 'flutter', neckline: 'sweetheart', trim: 'embroidery',
    necklace: true, gems: true, sparkle: true, tiara: 'jeweled', hair: 'curls',
  }),

  // ── 41–50 · Thời tiết và bốn mùa (cấp 4) ──
  sci(41, 'Sấm Chớp Đêm Bão', 'Thunderstorm', {
    silhouette: 'grand', bodice: '#1e1b4b', skirt: ['#4338ca', '#1e1b4b', '#0f172a'], accent: '#fde047',
    pattern: 'swirls', patternColor: '#a5b4fc', sleeves: 'off-shoulder', neckline: 'sweetheart',
    gems: true, sparkle: true, cape: ['#312e81', '#0f172a'], train: true, tiara: 'jeweled', hair: 'long', hairColor: '#1f2937',
  }),
  sci(42, 'Sương Mù Bạc', 'Silver Mist', {
    silhouette: 'cascade', bodice: '#cbd5e1', skirt: ['#f1f5f9', '#94a3b8', '#64748b'], accent: '#475569',
    pattern: 'lace', patternColor: '#ffffff', sleeves: 'sheer', layers: 3, layerColor: '#f8fafc', trim: 'ruffle',
    aura: '#e2e8f0', tiara: 'jeweled', hair: 'curls', hairColor: '#9ca3af',
  }),
  sci(43, 'Lá Phong Đỏ', 'Red Maple', {
    silhouette: 'ballgown', bodice: '#dc2626', skirt: ['#fca5a5', '#b91c1c', '#7f1d1d'], accent: '#fbbf24',
    pattern: 'leaves', patternColor: '#fde68a', sleeves: 'puff', neckline: 'v', trim: 'scallop',
    drape: true, layerColor: '#fb923c', train: true, tiara: 'jeweled', hair: 'braid', hairColor: '#7c2d12',
  }),
  sci(44, 'Bông Tuyết Pha Lê', 'Crystal Snowflake', {
    silhouette: 'princess', bodice: '#e0f2fe', skirt: ['#ffffff', '#7dd3fc', '#0284c7'], accent: '#0369a1',
    pattern: 'snowflakes', patternColor: '#ffffff', sleeves: 'long', neckline: 'square', trim: 'sequins',
    gloves: true, gems: true, sparkle: true, cape: ['#e0f2fe', '#7dd3fc'], tiara: 'jeweled', hair: 'long', hairColor: '#fde68a',
  }),
  sci(45, 'Hoa Đào Xuân', 'Peach Blossom Spring', {
    silhouette: 'ballgown', bodice: '#fb7185', skirt: ['#ffe4e6', '#fda4af', '#f43f5e'], accent: '#be123c',
    pattern: 'flowers', patternColor: '#fff1f2', sleeves: 'flutter', neckline: 'sweetheart', trim: 'lace',
    layers: 2, layerColor: '#fff1f2', wings: ['#fecdd3', '#fff1f2'], tiara: 'jeweled', earrings: true, hair: 'bun', hairColor: '#3b2314',
  }),
  sci(46, 'Nắng Hè Rực Rỡ', 'Summer Sunshine', {
    silhouette: 'grand', bodice: '#f59e0b', skirt: ['#fef08a', '#fb923c', '#f97316'], accent: '#b45309',
    pattern: 'stars', patternColor: '#fff7ed', sleeves: 'off-shoulder', trim: 'ribbon', sash: true,
    gems: true, sparkle: true, aura: '#fde68a', train: true, tiara: 'jeweled', hair: 'long', hairColor: '#92400e',
  }),
  sci(47, 'Cầu Vồng Kép', 'Double Rainbow', {
    silhouette: 'cascade', bodice: '#c084fc', skirt: ['#fca5a5', '#fde047', '#93c5fd'], accent: '#8b5cf6',
    sleeves: 'puff', neckline: 'sweetheart', layers: 2, layerColor: '#ffffff', trim: 'ruffle',
    sparkle: true, aura: '#fef9c3', tiara: 'jeweled', hair: 'curls',
  }),
  sci(48, 'Mưa Thu Vàng', 'Golden Autumn Rain', {
    silhouette: 'princess', bodice: '#b45309', skirt: ['#fcd34d', '#92400e', '#78350f'], accent: '#fde68a',
    pattern: 'drops', patternColor: '#bfdbfe', sleeves: 'bishop', trim: 'embroidery',
    cape: ['#78350f', '#451a03'], tiara: 'jeweled', hair: 'braid',
  }),
  sci(49, 'Bão Tuyết Trắng', 'White Blizzard', {
    silhouette: 'grand', bodice: '#f8fafc', skirt: ['#ffffff', '#bae6fd', '#38bdf8'], accent: '#0ea5e9',
    pattern: 'snowflakes', patternColor: '#e0f2fe', sleeves: 'sheer', neckline: 'v', layers: 3, layerColor: '#ffffff', trim: 'lace',
    gems: true, sparkle: true, aura: '#e0f2fe', train: true, tiara: 'jeweled', hair: 'long', hairColor: '#cbd5e1',
  }),
  sci(50, 'Mùa Gặt Vàng', 'Golden Harvest', {
    silhouette: 'ballgown', bodice: '#ca8a04', skirt: ['#fef08a', '#d97706'], accent: '#78350f',
    pattern: 'leaves', patternColor: '#854d0e', sleeves: 'puff', neckline: 'square', trim: 'pearls',
    drape: true, layerColor: '#fde68a', necklace: true, cape: ['#fde68a', '#b45309'], tiara: 'jeweled', hair: 'braid',
  }),

  // ── 51–60 · Đại dương (cấp 4) ──
  sci(51, 'Sứa Biển Phát Sáng', 'Glowing Jellyfish', {
    silhouette: 'cascade', bodice: '#a78bfa', skirt: ['#e9d5ff', '#22d3ee'], accent: '#06b6d4',
    pattern: 'dots', patternColor: '#a5f3fc', sleeves: 'sheer', neckline: 'sweetheart', layers: 3, layerColor: '#f5d0fe',
    sparkle: true, aura: '#c4b5fd', tiara: 'jeweled', hair: 'long', hairColor: '#6d28d9',
  }),
  sci(52, 'Sao Biển Cam', 'Orange Starfish', {
    silhouette: 'princess', bodice: '#fb923c', skirt: ['#fed7aa', '#ea580c'], accent: '#9a3412',
    pattern: 'stars', patternColor: '#fff7ed', sleeves: 'cap', neckline: 'halter', trim: 'scallop', sash: true,
    tiara: 'jeweled', earrings: true, hair: 'bun',
  }),
  sci(53, 'Cá Heo Xanh', 'Blue Dolphin', {
    silhouette: 'mermaid', bodice: '#0284c7', skirt: ['#7dd3fc', '#0c4a6e'], accent: '#e0f2fe',
    pattern: 'waves', patternColor: '#bae6fd', sleeves: 'off-shoulder', trim: 'pearls',
    necklace: true, train: true, tiara: 'jeweled', hair: 'long', hairColor: '#1e293b',
  }),
  sci(54, 'Rùa Biển Ngọc Bích', 'Jade Sea Turtle', {
    silhouette: 'ballgown', bodice: '#059669', skirt: ['#6ee7b7', '#065f46'], accent: '#fcd34d',
    pattern: 'damask', patternColor: '#a7f3d0', sleeves: 'flutter', neckline: 'square', trim: 'scallop',
    drape: true, layerColor: '#34d399', gems: true, cape: ['#047857', '#064e3b'], tiara: 'jeweled', hair: 'braid', hairColor: '#422006',
  }),
  sci(55, 'San Hô Hồng', 'Pink Coral', {
    silhouette: 'cascade', bodice: '#f43f5e', skirt: ['#fecdd3', '#fb7185', '#e11d48'], accent: '#9f1239',
    pattern: 'swirls', patternColor: '#fff1f2', sleeves: 'puff', neckline: 'sweetheart', trim: 'embroidery',
    necklace: true, wings: ['#fda4af', '#fecdd3'], tiara: 'jeweled', hair: 'curls',
  }),
  sci(56, 'Nàng Tiên Cá Vàng', 'Golden Mermaid', {
    silhouette: 'mermaid', bodice: '#f59e0b', skirt: ['#fde68a', '#14b8a6'], accent: '#0f766e',
    pattern: 'waves', patternColor: '#fffbeb', sleeves: 'none', neckline: 'sweetheart', trim: 'sequins',
    gems: true, sparkle: true, train: true, tiara: 'jeweled', hair: 'long', hairColor: '#b45309',
  }),
  sci(57, 'Cá Ngựa Chanh', 'Lime Seahorse', {
    silhouette: 'hilo', bodice: '#a3e635', skirt: ['#d9f99d', '#4d7c0f'], accent: '#3f6212',
    pattern: 'dots', patternColor: '#ecfccb', sleeves: 'flutter', neckline: 'v', bow: true,
    layers: 2, layerColor: '#f7fee7', aura: '#d9f99d', tiara: 'simple', hair: 'braid',
  }),
  sci(58, 'Xà Cừ Ngọc Trai', 'Mother of Pearl', {
    silhouette: 'ballgown', bodice: '#fbcfe8', skirt: ['#ffffff', '#c4b5fd', '#7dd3fc'], accent: '#a78bfa',
    pattern: 'sequins', patternColor: '#ffffff', sleeves: 'off-shoulder', trim: 'pearls', layers: 2, layerColor: '#fdf4ff',
    necklace: true, earrings: true, gems: true, sparkle: true, tiara: 'jeweled',
  }),
  sci(59, 'Vực Sâu Huỳnh Quang', 'Glowing Abyss', {
    silhouette: 'grand', bodice: '#0f172a', skirt: ['#1e3a8a', '#06b6d4', '#0f172a'], accent: '#22d3ee',
    pattern: 'dots', patternColor: '#67e8f9', sleeves: 'sheer', neckline: 'sweetheart', layers: 2, layerColor: '#164e63',
    gems: true, sparkle: true, aura: '#22d3ee', train: true, tiara: 'jeweled', hair: 'long', hairColor: '#164e63',
  }),
  sci(60, 'Nữ Hoàng Đại Dương', 'Ocean Queen', {
    silhouette: 'grand', bodice: '#0369a1', skirt: ['#38bdf8', '#0ea5e9', '#1e3a8a'], accent: '#fde047',
    pattern: 'waves', patternColor: '#e0f2fe', sleeves: 'off-shoulder', neckline: 'sweetheart', trim: 'pearls',
    gems: true, sparkle: true, necklace: true, earrings: true, aura: '#7dd3fc', cape: ['#075985', '#0c4a6e'], train: true,
    tiara: 'grand', hair: 'long', hairColor: '#164e63',
  }),

  // ── 61–70 · Đất và đá quý (cấp 4) ──
  sci(61, 'Thạch Anh Tím', 'Amethyst', {
    silhouette: 'ballgown', bodice: '#8b5cf6', skirt: ['#ddd6fe', '#7c3aed'], accent: '#5b21b6',
    pattern: 'damask', patternColor: '#ede9fe', sleeves: 'flutter', neckline: 'square', trim: 'sequins',
    gems: true, sparkle: true, necklace: true, tiara: 'jeweled', hair: 'curls',
  }),
  sci(62, 'Hồng Ngọc', 'Ruby', {
    silhouette: 'princess', bodice: '#be123c', skirt: ['#fb7185', '#881337'], accent: '#fde68a',
    pattern: 'lace', patternColor: '#fecdd3', sleeves: 'long', neckline: 'sweetheart', trim: 'embroidery',
    gloves: true, gems: true, cape: ['#9f1239', '#4c0519'], tiara: 'jeweled', hair: 'long',
  }),
  sci(63, 'Lục Bảo', 'Emerald', {
    silhouette: 'mermaid', bodice: '#047857', skirt: ['#34d399', '#064e3b'], accent: '#fcd34d',
    pattern: 'damask', patternColor: '#a7f3d0', sleeves: 'off-shoulder', neckline: 'v', trim: 'pearls',
    necklace: true, earrings: true, train: true, tiara: 'jeweled', hair: 'braid', hairColor: '#4a2c1a',
  }),
  sci(64, 'Ngọc Bích Xanh', 'Sapphire', {
    silhouette: 'grand', bodice: '#1d4ed8', skirt: ['#93c5fd', '#2563eb', '#1e3a8a'], accent: '#e0e7ff',
    pattern: 'stars', patternColor: '#dbeafe', sleeves: 'sheer', layers: 2, layerColor: '#dbeafe',
    gems: true, sparkle: true, necklace: true, train: true, tiara: 'jeweled', hair: 'bun',
  }),
  sci(65, 'Kim Cương', 'Diamond', {
    silhouette: 'cascade', bodice: '#f1f5f9', skirt: ['#ffffff', '#e0f2fe', '#c7d2fe'], accent: '#94a3b8',
    pattern: 'sequins', patternColor: '#ffffff', sleeves: 'flutter', neckline: 'halter', trim: 'sequins',
    gems: true, sparkle: true, aura: '#e0e7ff', tiara: 'grand', hair: 'long',
  }),
  sci(66, 'Hổ Phách Vàng', 'Amber', {
    silhouette: 'ballgown', bodice: '#d97706', skirt: ['#fde68a', '#b45309'], accent: '#78350f',
    pattern: 'swirls', patternColor: '#fef3c7', sleeves: 'puff', neckline: 'square', trim: 'scallop',
    drape: true, layerColor: '#fbbf24', gems: true, cape: ['#f59e0b', '#78350f'], tiara: 'jeweled', hair: 'curls', hairColor: '#7c2d12',
  }),
  sci(67, 'Hang Pha Lê', 'Crystal Cave', {
    silhouette: 'grand', bodice: '#67e8f9', skirt: ['#cffafe', '#22d3ee', '#7c3aed'], accent: '#0e7490',
    pattern: 'snowflakes', patternColor: '#ffffff', sleeves: 'sheer', neckline: 'v', layers: 3, layerColor: '#ecfeff',
    gems: true, sparkle: true, aura: '#a5f3fc', train: true, tiara: 'jeweled', hair: 'long',
  }),
  sci(68, 'Núi Lửa Rực Lửa', 'Blazing Volcano', {
    silhouette: 'cascade', bodice: '#dc2626', skirt: ['#fbbf24', '#ea580c', '#450a0a'], accent: '#fde047',
    pattern: 'swirls', patternColor: '#fde68a', sleeves: 'off-shoulder', neckline: 'sweetheart', trim: 'ribbon',
    gems: true, sparkle: true, aura: '#fdba74', cape: ['#b91c1c', '#450a0a'], tiara: 'jeweled', hair: 'braid', hairColor: '#1f1410',
  }),
  sci(69, 'Rừng Nguyên Sinh', 'Ancient Forest', {
    silhouette: 'grand', bodice: '#15803d', skirt: ['#86efac', '#16a34a', '#14532d'], accent: '#fde047',
    pattern: 'leaves', patternColor: '#dcfce7', sleeves: 'flutter', neckline: 'square', layers: 2, layerColor: '#bbf7d0', trim: 'embroidery',
    necklace: true, wings: ['#4ade80', '#bbf7d0'], train: true, tiara: 'jeweled', hair: 'long', hairColor: '#3f2a14',
  }),
  sci(70, 'Nữ Hoàng Khoáng Vật', 'Mineral Queen', {
    silhouette: 'grand', bodice: '#7c3aed', skirt: ['#fde68a', '#a78bfa', '#4c1d95'], accent: '#fde047',
    pattern: 'damask', patternColor: '#fef3c7', sleeves: 'off-shoulder', neckline: 'sweetheart', trim: 'pearls',
    layers: 1, layerColor: '#ede9fe', gems: true, sparkle: true, necklace: true, earrings: true, aura: '#ddd6fe',
    cape: ['#5b21b6', '#2e1065'], train: true, tiara: 'grand', hair: 'curls',
  }),

  // ── 71–80 · Bầu trời (cấp 5) ──
  sci(71, 'Bình Minh Hồng', 'Pink Dawn', {
    silhouette: 'grand', bodice: '#fb7185', skirt: ['#fde68a', '#fb923c', '#f472b6'], accent: '#be185d',
    pattern: 'swirls', patternColor: '#fff7ed', sleeves: 'flutter', neckline: 'sweetheart', layers: 2, layerColor: '#ffedd5', trim: 'ruffle',
    gems: true, sparkle: true, earrings: true, aura: '#fed7aa', wings: ['#fecdd3', '#fde68a'], train: true, tiara: 'grand',
    hair: 'long', hairColor: '#b45309',
  }),
  sci(72, 'Vương Quốc Mây', 'Cloud Kingdom', {
    silhouette: 'cascade', bodice: '#bae6fd', skirt: ['#ffffff', '#e0f2fe', '#bfdbfe'], accent: '#38bdf8',
    pattern: 'lace', patternColor: '#ffffff', sleeves: 'sheer', layers: 3, layerColor: '#ffffff', trim: 'ruffle',
    gems: true, sparkle: true, necklace: true, aura: '#e0f2fe', wings: ['#ffffff', '#bae6fd'], tiara: 'grand', hair: 'curls', hairColor: '#c58b4a',
  }),
  sci(73, 'Cầu Vồng Hoàng Gia', 'Royal Rainbow', {
    silhouette: 'grand', bodice: '#a855f7', skirt: ['#fca5a5', '#fde047', '#67e8f9'], accent: '#db2777',
    pattern: 'stars', patternColor: '#ffffff', sleeves: 'puff', neckline: 'sweetheart', layers: 2, layerColor: '#fdf4ff', trim: 'pearls',
    gems: true, sparkle: true, aura: '#fbcfe8', cape: ['#f0abfc', '#a5f3fc'], train: true, tiara: 'grand', hair: 'braid',
  }),
  sci(74, 'Sao Chổi Xanh', 'Blue Comet', {
    silhouette: 'princess', bodice: '#1e40af', skirt: ['#93c5fd', '#4f46e5', '#0f172a'], accent: '#fef08a',
    pattern: 'sequins', patternColor: '#fef9c3', sleeves: 'long', neckline: 'v', trim: 'sequins',
    gloves: true, gems: true, sparkle: true, aura: '#bfdbfe', cape: ['#312e81', '#0f172a'], train: true, tiara: 'grand',
    hair: 'long', hairColor: '#111827',
  }),
  sci(75, 'Mưa Sao Băng', 'Meteor Shower', {
    silhouette: 'grand', bodice: '#312e81', skirt: ['#6366f1', '#1e1b4b', '#020617'], accent: '#fde047',
    pattern: 'stars', patternColor: '#fef08a', sleeves: 'off-shoulder', neckline: 'sweetheart', layers: 2, layerColor: '#c7d2fe', trim: 'embroidery',
    gems: true, sparkle: true, necklace: true, aura: '#a5b4fc', wings: ['#c7d2fe', '#fde68a'], train: true, tiara: 'grand', hair: 'curls',
  }),
  sci(76, 'Phượng Hoàng Lửa', 'Fire Phoenix', {
    silhouette: 'cascade', bodice: '#ea580c', skirt: ['#fde047', '#f97316', '#be123c'], accent: '#fef08a',
    pattern: 'feathers', patternColor: '#fff7ed', sleeves: 'flutter', neckline: 'sweetheart', trim: 'scallop',
    gems: true, sparkle: true, earrings: true, aura: '#fdba74', wings: ['#fb923c', '#fde047'], train: true, tiara: 'grand',
    hair: 'long', hairColor: '#7c2d12',
  }),
  sci(77, 'Hoàng Hôn Tím', 'Violet Dusk', {
    silhouette: 'mermaid', bodice: '#6d28d9', skirt: ['#f0abfc', '#7c3aed', '#312e81'], accent: '#fde68a',
    pattern: 'swirls', patternColor: '#f5d0fe', sleeves: 'off-shoulder', neckline: 'sweetheart', trim: 'sequins',
    gems: true, sparkle: true, necklace: true, aura: '#ddd6fe', cape: ['#7e22ce', '#1e1b4b'], train: true, tiara: 'grand', hair: 'braid',
  }),
  sci(78, 'Cung Điện Gió', 'Wind Palace', {
    silhouette: 'ballgown', bodice: '#99f6e4', skirt: ['#f0fdfa', '#5eead4', '#a5b4fc'], accent: '#0d9488',
    pattern: 'swirls', patternColor: '#ffffff', sleeves: 'flutter', neckline: 'square', layers: 3, layerColor: '#f0fdfa', drape: true, trim: 'lace',
    gems: true, sparkle: true, aura: '#ccfbf1', wings: ['#99f6e4', '#e0e7ff'], tiara: 'grand', hair: 'long',
  }),
  sci(79, 'Đêm Trăng Rằm', 'Full Moon Night', {
    silhouette: 'grand', bodice: '#e2e8f0', skirt: ['#f8fafc', '#a5b4fc', '#312e81'], accent: '#fde68a',
    pattern: 'stars', patternColor: '#fef9c3', sleeves: 'sheer', layers: 2, layerColor: '#f1f5f9', trim: 'pearls',
    gems: true, sparkle: true, necklace: true, earrings: true, aura: '#e0e7ff', cape: ['#1e1b4b', '#0f172a'], train: true,
    tiara: 'grand', hair: 'long', hairColor: '#111827',
  }),
  sci(80, 'Nữ Hoàng Bầu Trời', 'Queen of the Sky', {
    silhouette: 'grand', bodice: '#38bdf8', skirt: ['#ffffff', '#7dd3fc', '#2563eb'], accent: '#fde047',
    pattern: 'feathers', patternColor: '#e0f2fe', sleeves: 'puff', neckline: 'sweetheart', layers: 2, layerColor: '#f0f9ff', trim: 'pearls',
    gems: true, sparkle: true, necklace: true, earrings: true, aura: '#bae6fd', wings: ['#e0f2fe', '#fde68a'],
    cape: ['#bae6fd', '#2563eb'], train: true, tiara: 'grand', hair: 'curls',
  }),

  // ── 81–90 · Hành tinh (cấp 5) ──
  sci(81, 'Sao Thủy Bạc', 'Silver Mercury', {
    silhouette: 'princess', bodice: '#94a3b8', skirt: ['#e2e8f0', '#64748b'], accent: '#f8fafc',
    pattern: 'dots', patternColor: '#475569', sleeves: 'cap', neckline: 'scoop', trim: 'scallop',
    gems: true, sparkle: true, necklace: true, aura: '#cbd5e1', cape: ['#64748b', '#334155'], train: true, tiara: 'grand', hair: 'bun',
  }),
  sci(82, 'Sao Kim Dịu Dàng', 'Gentle Venus', {
    silhouette: 'ballgown', bodice: '#fbbf24', skirt: ['#fef3c7', '#f59e0b', '#b45309'], accent: '#7c2d12',
    pattern: 'swirls', patternColor: '#fffbeb', sleeves: 'bishop', neckline: 'sweetheart', layers: 2, layerColor: '#fef3c7', trim: 'embroidery',
    gems: true, sparkle: true, aura: '#fde68a', train: true, tiara: 'grand', hair: 'long', hairColor: '#92400e',
  }),
  sci(83, 'Trái Đất Xanh', 'Blue Earth', {
    silhouette: 'grand', bodice: '#2563eb', skirt: ['#86efac', '#3b82f6', '#1e3a8a'], accent: '#f0fdf4',
    pattern: 'waves', patternColor: '#bfdbfe', sleeves: 'off-shoulder', neckline: 'v', trim: 'pearls',
    gems: true, sparkle: true, earrings: true, aura: '#93c5fd', wings: ['#dcfce7', '#bfdbfe'], cape: ['#1d4ed8', '#14532d'],
    train: true, tiara: 'grand', hair: 'braid',
  }),
  sci(84, 'Sao Hỏa Đỏ', 'Red Mars', {
    silhouette: 'cascade', bodice: '#b91c1c', skirt: ['#fdba74', '#c2410c', '#7c2d12'], accent: '#fde68a',
    pattern: 'dots', patternColor: '#fed7aa', sleeves: 'long', neckline: 'square', trim: 'scallop',
    gloves: true, gems: true, sparkle: true, aura: '#fca5a5', cape: ['#9a3412', '#431407'], train: true, tiara: 'grand', hair: 'braid',
  }),
  sci(85, 'Sao Mộc Khổng Lồ', 'Giant Jupiter', {
    silhouette: 'grand', bodice: '#d97706', skirt: ['#fed7aa', '#fb923c', '#92400e'], accent: '#fff7ed',
    pattern: 'stripes', patternColor: '#b45309', sleeves: 'puff', neckline: 'sweetheart', layers: 2, layerColor: '#ffedd5', trim: 'ruffle',
    gems: true, sparkle: true, necklace: true, aura: '#fdba74', train: true, tiara: 'grand', hair: 'curls',
  }),
  sci(86, 'Sao Thổ Vành Đai', 'Ringed Saturn', {
    silhouette: 'ballgown', bodice: '#facc15', skirt: ['#fef9c3', '#eab308', '#a16207'], accent: '#fde68a',
    pattern: 'lace', patternColor: '#fffbeb', sleeves: 'off-shoulder', neckline: 'sweetheart', drape: true, layerColor: '#fde047', trim: 'pearls',
    gems: true, sparkle: true, earrings: true, aura: '#fef08a', cape: ['#fde68a', '#a16207'], train: true, tiara: 'grand',
  }),
  sci(87, 'Sao Thiên Vương Băng', 'Icy Uranus', {
    silhouette: 'princess', bodice: '#22d3ee', skirt: ['#cffafe', '#06b6d4', '#155e75'], accent: '#ecfeff',
    pattern: 'snowflakes', patternColor: '#ffffff', sleeves: 'flutter', neckline: 'halter', trim: 'sequins',
    gems: true, sparkle: true, aura: '#a5f3fc', wings: ['#a5f3fc', '#e0f2fe'], train: true, tiara: 'grand', hair: 'long',
  }),
  sci(88, 'Sao Hải Vương Biếc', 'Deep Neptune', {
    silhouette: 'mermaid', bodice: '#1d4ed8', skirt: ['#60a5fa', '#1e40af', '#172554'], accent: '#93c5fd',
    pattern: 'waves', patternColor: '#bfdbfe', sleeves: 'sheer', neckline: 'sweetheart', trim: 'pearls',
    gems: true, sparkle: true, necklace: true, aura: '#60a5fa', cape: ['#1e3a8a', '#0f172a'], train: true, tiara: 'grand', hair: 'long',
  }),
  sci(89, 'Vành Đai Tiểu Hành Tinh', 'Asteroid Belt', {
    silhouette: 'cascade', bodice: '#78716c', skirt: ['#d6d3d1', '#57534e', '#292524'], accent: '#fcd34d',
    pattern: 'sequins', patternColor: '#fde68a', sleeves: 'bishop', neckline: 'v', trim: 'sequins',
    gems: true, sparkle: true, aura: '#e7e5e4', cape: ['#44403c', '#1c1917'], train: true, tiara: 'grand', hair: 'curls',
  }),
  sci(90, 'Hệ Mặt Trời Rực Rỡ', 'Radiant Solar System', {
    silhouette: 'grand', bodice: '#f59e0b', skirt: ['#fef08a', '#3b82f6', '#7c3aed'], accent: '#fde047',
    pattern: 'dots', patternColor: '#ffffff', sleeves: 'sheer', neckline: 'sweetheart', layers: 3, layerColor: '#fff7ed', trim: 'embroidery',
    gems: true, sparkle: true, necklace: true, earrings: true, aura: '#fde68a', wings: ['#fde68a', '#93c5fd'], cape: ['#f97316', '#4c1d95'],
    train: true, tiara: 'grand', hair: 'long',
  }),

  // ── 91–100 · Nữ hoàng vũ trụ (cấp 5) ──
  sci(91, 'Siêu Tân Tinh', 'Supernova', {
    silhouette: 'grand', bodice: '#f43f5e', skirt: ['#fde047', '#f43f5e', '#4c1d95'], accent: '#fef08a',
    pattern: 'stars', patternColor: '#ffffff', sleeves: 'flutter', neckline: 'sweetheart', layers: 2, layerColor: '#ffe4e6', trim: 'sequins',
    gems: true, sparkle: true, necklace: true, earrings: true, aura: '#fda4af', wings: ['#fde047', '#fb7185'], train: true, tiara: 'grand',
    hair: 'long', hairColor: '#7f1d1d',
  }),
  sci(92, 'Nhật Thực Vàng', 'Golden Eclipse', {
    silhouette: 'grand', bodice: '#0f172a', skirt: ['#1e293b', '#fbbf24', '#0f172a'], accent: '#fbbf24',
    pattern: 'swirls', patternColor: '#fde68a', sleeves: 'sheer', neckline: 'v', layers: 2, layerColor: '#334155', trim: 'pearls',
    gems: true, sparkle: true, necklace: true, aura: '#fde68a', cape: ['#020617', '#451a03'], train: true, tiara: 'grand', hair: 'braid', hairColor: '#111827',
  }),
  sci(93, 'Hố Đen Huyền Bí', 'Mysterious Black Hole', {
    silhouette: 'cascade', bodice: '#111827', skirt: ['#312e81', '#000000', '#4c1d95'], accent: '#c4b5fd',
    pattern: 'swirls', patternColor: '#a78bfa', sleeves: 'long', neckline: 'sweetheart', trim: 'embroidery',
    gloves: true, gems: true, sparkle: true, aura: '#8b5cf6', cape: ['#1e1b4b', '#000000'], train: true, tiara: 'grand', hair: 'long', hairColor: '#0f172a',
  }),
  sci(94, 'Thiên Hà Xoắn Ốc', 'Spiral Galaxy', {
    silhouette: 'grand', bodice: '#7c3aed', skirt: ['#f0abfc', '#6366f1', '#0ea5e9'], accent: '#fde047',
    pattern: 'swirls', patternColor: '#ffffff', sleeves: 'off-shoulder', neckline: 'sweetheart', layers: 3, layerColor: '#ede9fe', drape: true, trim: 'sequins',
    gems: true, sparkle: true, necklace: true, earrings: true, aura: '#e9d5ff', wings: ['#c4b5fd', '#67e8f9'], cape: ['#6d28d9', '#1e3a8a'],
    train: true, tiara: 'grand', hair: 'curls',
  }),
  sci(95, 'Chòm Sao Thiên Nga', 'Swan Constellation', {
    silhouette: 'ballgown', bodice: '#e0e7ff', skirt: ['#ffffff', '#c7d2fe', '#4338ca'], accent: '#6366f1',
    pattern: 'feathers', patternColor: '#e0e7ff', sleeves: 'flutter', neckline: 'sweetheart', layers: 3, layerColor: '#ffffff', trim: 'lace',
    gems: true, sparkle: true, necklace: true, aura: '#c7d2fe', wings: ['#ffffff', '#c7d2fe'], train: true, tiara: 'grand', hair: 'bun', hairColor: '#1f2937',
  }),
  sci(96, 'Quasar Rực Rỡ', 'Brilliant Quasar', {
    silhouette: 'princess', bodice: '#06b6d4', skirt: ['#a5f3fc', '#2563eb', '#7c3aed'], accent: '#fef08a',
    pattern: 'sequins', patternColor: '#ffffff', sleeves: 'bishop', neckline: 'v', trim: 'sequins',
    gems: true, sparkle: true, earrings: true, aura: '#67e8f9', cape: ['#0e7490', '#312e81'], train: true, tiara: 'grand', hair: 'long',
  }),
  sci(97, 'Cổng Không Gian', 'Cosmic Gateway', {
    silhouette: 'mermaid', bodice: '#4c1d95', skirt: ['#a78bfa', '#2e1065', '#0c4a6e'], accent: '#67e8f9',
    pattern: 'stars', patternColor: '#a5f3fc', sleeves: 'off-shoulder', neckline: 'sweetheart', trim: 'pearls',
    gems: true, sparkle: true, necklace: true, earrings: true, aura: '#a78bfa', wings: ['#67e8f9', '#c4b5fd'], cape: ['#312e81', '#0f172a'],
    train: true, tiara: 'grand', hair: 'braid',
  }),
  sci(98, 'Vườn Sao Thiên Hà', 'Galactic Star Garden', {
    silhouette: 'cascade', bodice: '#ec4899', skirt: ['#fbcfe8', '#a855f7', '#1e3a8a'], accent: '#fde047',
    pattern: 'roses', patternColor: '#fdf4ff', sleeves: 'flutter', neckline: 'sweetheart', layers: 2, layerColor: '#fce7f3', trim: 'embroidery',
    gems: true, sparkle: true, necklace: true, earrings: true, aura: '#f5d0fe', wings: ['#f9a8d4', '#a5b4fc'], train: true, tiara: 'grand', hair: 'curls',
  }),
  sci(99, 'Công Chúa Ngân Hà', 'Galaxy Princess', {
    silhouette: 'grand', bodice: '#1e3a8a', skirt: ['#818cf8', '#4c1d95', '#020617'], accent: '#fde68a',
    pattern: 'stars', patternColor: '#fef9c3', sleeves: 'sheer', neckline: 'sweetheart', layers: 2, layerColor: '#c7d2fe', trim: 'pearls',
    gems: true, sparkle: true, necklace: true, earrings: true, gloves: true, aura: '#c7d2fe', cape: ['#312e81', '#020617'],
    wings: ['#e0e7ff', '#a5b4fc'], train: true, tiara: 'grand', hair: 'long',
  }),
  sci(100, 'Nữ Thần Sáng Thế Vì Sao', 'Goddess of Creation', {
    silhouette: 'grand', bodice: '#fde047', skirt: ['#ffffff', '#f0abfc', '#6366f1'], accent: '#b45309',
    pattern: 'damask', patternColor: '#fef9c3', sleeves: 'puff', neckline: 'sweetheart', layers: 3, layerColor: '#fffbeb', drape: true, trim: 'pearls',
    gems: true, sparkle: true, necklace: true, earrings: true, gloves: true, aura: '#fef08a', wings: ['#fef9c3', '#c4b5fd'],
    cape: ['#fde68a', '#7c3aed'], train: true, tiara: 'grand', hair: 'long', hairColor: '#fbbf24',
  }),
]
