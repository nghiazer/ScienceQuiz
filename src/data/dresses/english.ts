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

  // ── 31–40 · Cổ tích (cấp 3) ──
  eng(31, 'Lâu Đài Cổ Tích', 'Fairy Tale Castle', {
    silhouette: 'princess', bodice: '#f9a8d4', skirt: ['#fdf2f8', '#f472b6'], accent: '#be185d',
    pattern: 'hearts', patternColor: '#ffffff', sleeves: 'puff', neckline: 'sweetheart', trim: 'scallop',
    sparkle: true, tiara: 'simple', hair: 'long',
  }),
  eng(32, 'Hạt Đậu Thần', 'Magic Beanstalk', {
    silhouette: 'ballgown', bodice: '#22c55e', skirt: ['#dcfce7', '#16a34a'], accent: '#166534',
    pattern: 'leaves', patternColor: '#14532d', sleeves: 'flutter', neckline: 'v', trim: 'embroidery',
    gems: true, tiara: 'simple', hair: 'braid', hairColor: '#4a2c1a',
  }),
  eng(33, 'Gương Thần', 'Magic Mirror', {
    silhouette: 'cascade', bodice: '#e2e8f0', skirt: ['#ffffff', '#cbd5e1'], accent: '#94a3b8',
    pattern: 'sequins', patternColor: '#ffffff', sleeves: 'sheer', neckline: 'square', trim: 'sequins',
    gems: true, sparkle: true, necklace: true, tiara: 'jeweled', hair: 'curls', hairColor: '#1f2937',
  }),
  eng(34, 'Giày Thủy Tinh', 'Glass Slipper', {
    silhouette: 'ballgown', bodice: '#bfdbfe', skirt: ['#eff6ff', '#93c5fd'], accent: '#3b82f6',
    pattern: 'snowflakes', patternColor: '#ffffff', sleeves: 'off-shoulder', neckline: 'sweetheart', layers: 2, layerColor: '#eff6ff', trim: 'lace',
    gloves: true, earrings: true, sparkle: true, tiara: 'jeweled', hair: 'bun', hairColor: '#fde68a',
  }),
  eng(35, 'Tiên Rừng Xanh', 'Forest Fairy', {
    silhouette: 'hilo', bodice: '#4ade80', skirt: ['#bbf7d0', '#15803d'], accent: '#166534',
    pattern: 'flowers', patternColor: '#fef9c3', sleeves: 'flutter', neckline: 'halter', layers: 2, layerColor: '#f0fdf4',
    wings: ['#bbf7d0', '#a5f3fc'], sparkle: true, tiara: 'simple', hair: 'long', hairColor: '#7c4a1d',
  }),
  eng(36, 'Rồng Con Hiền Lành', 'Gentle Dragon', {
    silhouette: 'princess', bodice: '#7c3aed', skirt: ['#c4b5fd', '#6d28d9'], accent: '#fbbf24',
    pattern: 'dots', patternColor: '#ddd6fe', sleeves: 'cap', neckline: 'scoop', trim: 'scallop',
    wings: ['#a78bfa', '#ddd6fe'], tiara: 'simple', earrings: true, hair: 'braid',
  }),
  eng(37, 'Vườn Hoa Phép Thuật', 'Enchanted Garden', {
    silhouette: 'cascade', bodice: '#f472b6', skirt: ['#fce7f3', '#a78bfa'], accent: '#7e22ce',
    pattern: 'roses', patternColor: '#fff1f2', sleeves: 'puff', neckline: 'sweetheart', trim: 'ruffle',
    necklace: true, sparkle: true, tiara: 'jeweled', hair: 'curls',
  }),
  eng(38, 'Thảm Bay', 'Flying Carpet', {
    silhouette: 'ballgown', bodice: '#dc2626', skirt: ['#fde68a', '#be123c'], accent: '#fbbf24',
    pattern: 'damask', patternColor: '#fef3c7', sleeves: 'bishop', neckline: 'square', trim: 'embroidery',
    drape: true, layerColor: '#f59e0b', gems: true, tiara: 'jeweled', hair: 'long', hairColor: '#1f1410',
  }),
  eng(39, 'Ngôi Sao Ước Nguyện', 'Wishing Star', {
    silhouette: 'princess', bodice: '#1e3a8a', skirt: ['#3b82f6', '#1e1b4b'], accent: '#fde047',
    pattern: 'stars', patternColor: '#fef08a', sleeves: 'long', neckline: 'v', trim: 'sequins',
    gloves: true, gems: true, sparkle: true, necklace: true, tiara: 'jeweled', hair: 'braid',
  }),
  eng(40, 'Đêm Hội Cổ Tích', 'Fairy Tale Night', {
    silhouette: 'cascade', bodice: '#c084fc', skirt: ['#f5d0fe', '#a855f7', '#4c1d95'], accent: '#fde047',
    pattern: 'butterflies', patternColor: '#ffffff', sleeves: 'flutter', neckline: 'sweetheart', layers: 2, layerColor: '#fdf4ff', trim: 'lace',
    gems: true, sparkle: true, earrings: true, tiara: 'jeweled', hair: 'long',
  }),

  // ── 41–50 · Du lịch vòng quanh thế giới (cấp 4) ──
  eng(41, 'Đêm Paris', 'Paris Night', {
    silhouette: 'ballgown', bodice: '#1e1b4b', skirt: ['#6366f1', '#1e1b4b'], accent: '#fbbf24',
    pattern: 'stars', patternColor: '#fde68a', sleeves: 'off-shoulder', neckline: 'sweetheart', trim: 'pearls',
    gems: true, sparkle: true, necklace: true, cape: ['#312e81', '#0f172a'], tiara: 'jeweled', hair: 'bun', hairColor: '#2b1b17',
  }),
  eng(42, 'Hoa Anh Đào Kyoto', 'Kyoto Cherry Blossom', {
    silhouette: 'princess', bodice: '#fbcfe8', skirt: ['#fff1f2', '#f9a8d4'], accent: '#be185d',
    pattern: 'flowers', patternColor: '#f472b6', sleeves: 'bishop', neckline: 'v', trim: 'ribbon', sash: true,
    earrings: true, train: true, tiara: 'jeweled', hair: 'bun', hairColor: '#111827',
  }),
  eng(43, 'Lễ Hội Hóa Trang Venice', 'Venice Carnival', {
    silhouette: 'grand', bodice: '#7e22ce', skirt: ['#f0abfc', '#7e22ce', '#fbbf24'], accent: '#fbbf24',
    pattern: 'damask', patternColor: '#fef3c7', sleeves: 'sheer', neckline: 'sweetheart', layers: 2, layerColor: '#fae8ff', trim: 'embroidery',
    gems: true, sparkle: true, gloves: true, cape: ['#a21caf', '#4a044e'], train: true, tiara: 'jeweled', hair: 'curls',
  }),
  eng(44, 'Đèn Lồng Hội An', 'Hoi An Lantern', {
    silhouette: 'cascade', bodice: '#f97316', skirt: ['#fde68a', '#ef4444'], accent: '#7c2d12',
    pattern: 'dots', patternColor: '#fff7ed', sleeves: 'cap', neckline: 'square', trim: 'scallop',
    gems: true, sparkle: true, aura: '#fed7aa', tiara: 'jeweled', hair: 'long', hairColor: '#111827',
  }),
  eng(45, 'Nữ Hoàng Kim Tự Tháp', 'Pyramid Queen', {
    silhouette: 'mermaid', bodice: '#d97706', skirt: ['#fde68a', '#0e7490'], accent: '#fbbf24',
    pattern: 'swirls', patternColor: '#fef3c7', sleeves: 'none', neckline: 'v', trim: 'pearls',
    necklace: true, earrings: true, gems: true, train: true, tiara: 'grand', hair: 'long', hairColor: '#111827',
  }),
  eng(46, 'Rừng Amazon Xanh', 'Amazon Rainforest', {
    silhouette: 'ballgown', bodice: '#15803d', skirt: ['#86efac', '#14532d'], accent: '#fde047',
    pattern: 'feathers', patternColor: '#bbf7d0', sleeves: 'flutter', neckline: 'sweetheart', layers: 2, layerColor: '#dcfce7', trim: 'embroidery',
    wings: ['#4ade80', '#fde047'], gems: true, tiara: 'jeweled', hair: 'braid',
  }),
  eng(47, 'Cực Quang Na Uy', 'Norwegian Aurora', {
    silhouette: 'grand', bodice: '#34d399', skirt: ['#a7f3d0', '#22d3ee', '#818cf8'], accent: '#0f766e',
    pattern: 'swirls', patternColor: '#ecfeff', sleeves: 'long', neckline: 'v', layers: 3, layerColor: '#f0fdfa',
    gloves: true, gems: true, sparkle: true, aura: '#a7f3d0', train: true, tiara: 'jeweled', hair: 'long', hairColor: '#fde68a',
  }),
  eng(48, 'Cánh Đồng Tulip Hà Lan', 'Dutch Tulip Fields', {
    silhouette: 'tiered', bodice: '#ef4444', skirt: ['#fecaca'], accent: '#15803d',
    tierColors: ['#fde047', '#f472b6', '#ef4444'], pattern: 'flowers', patternColor: '#fff1f2', sleeves: 'puff', neckline: 'square',
    trim: 'ruffle', bow: true, sparkle: true, cape: ['#fecdd3', '#fb7185'], tiara: 'jeweled', hair: 'braid', hairColor: '#facc15',
  }),
  eng(49, 'Vịnh Hạ Long Ngọc', 'Ha Long Jade Bay', {
    silhouette: 'princess', bodice: '#0d9488', skirt: ['#99f6e4', '#0f766e'], accent: '#f0fdfa',
    pattern: 'waves', patternColor: '#ccfbf1', sleeves: 'off-shoulder', neckline: 'sweetheart', trim: 'sequins',
    necklace: true, aura: '#99f6e4', train: true, tiara: 'jeweled', hair: 'long',
  }),
  eng(50, 'Hoàng Hôn Hawaii', 'Hawaiian Sunset', {
    silhouette: 'hilo', bodice: '#f43f5e', skirt: ['#fde047', '#fb923c', '#be185d'], accent: '#fbbf24',
    pattern: 'flowers', patternColor: '#fff7ed', sleeves: 'flutter', neckline: 'halter', layers: 2, layerColor: '#ffedd5', trim: 'ruffle',
    earrings: true, sparkle: true, aura: '#fed7aa', tiara: 'simple', hair: 'long', hairColor: '#7c2d12',
  }),

  // ── 51–60 · Âm nhạc và vũ điệu (cấp 4) ──
  eng(51, 'Điệu Valse Vienna', 'Vienna Waltz', {
    silhouette: 'ballgown', bodice: '#e0e7ff', skirt: ['#ffffff', '#a5b4fc'], accent: '#4f46e5',
    pattern: 'lace', patternColor: '#c7d2fe', sleeves: 'off-shoulder', neckline: 'sweetheart', layers: 3, layerColor: '#eef2ff', trim: 'lace',
    gloves: true, gems: true, sparkle: true, necklace: true, tiara: 'jeweled', hair: 'bun',
  }),
  eng(52, 'Tango Đỏ', 'Red Tango', {
    silhouette: 'mermaid', bodice: '#b91c1c', skirt: ['#ef4444', '#450a0a'], accent: '#fbbf24',
    pattern: 'roses', patternColor: '#fecaca', sleeves: 'none', neckline: 'v', trim: 'ruffle',
    earrings: true, gems: true, train: true, tiara: 'jeweled', hair: 'bun', hairColor: '#1f1410',
  }),
  eng(53, 'Nhà Hát Opera', 'Royal Opera', {
    silhouette: 'grand', bodice: '#9f1239', skirt: ['#fb7185', '#9f1239', '#450a0a'], accent: '#fbbf24',
    pattern: 'damask', patternColor: '#fde68a', sleeves: 'puff', neckline: 'sweetheart', trim: 'pearls',
    gems: true, sparkle: true, necklace: true, earrings: true, cape: ['#881337', '#2a0a14'], train: true, tiara: 'jeweled', hair: 'curls',
  }),
  eng(54, 'Vũ Điệu Flamenco', 'Flamenco Fire', {
    silhouette: 'cascade', bodice: '#e11d48', skirt: ['#fecdd3', '#e11d48', '#be123c'], accent: '#111827',
    pattern: 'dots', patternColor: '#ffffff', sleeves: 'flutter', neckline: 'sweetheart', layers: 2, layerColor: '#ffe4e6', trim: 'ruffle',
    earrings: true, sparkle: true, aura: '#fda4af', tiara: 'jeweled', hair: 'bun', hairColor: '#111827',
  }),
  eng(55, 'Hồ Thiên Nga', 'Swan Lake', {
    silhouette: 'princess', bodice: '#ffffff', skirt: ['#ffffff', '#e2e8f0'], accent: '#94a3b8',
    pattern: 'feathers', patternColor: '#e2e8f0', sleeves: 'none', neckline: 'sweetheart', layers: 3, layerColor: '#ffffff', trim: 'ruffle',
    sparkle: true, wings: ['#ffffff', '#e0f2fe'], tiara: 'grand', hair: 'bun',
  }),
  eng(56, 'Đàn Hạc Vàng', 'Golden Harp', {
    silhouette: 'ballgown', bodice: '#fcd34d', skirt: ['#fffbeb', '#f59e0b'], accent: '#92400e',
    pattern: 'swirls', patternColor: '#fef3c7', sleeves: 'sheer', neckline: 'scoop', trim: 'embroidery',
    gems: true, sparkle: true, necklace: true, aura: '#fde68a', tiara: 'jeweled', hair: 'long', hairColor: '#b45309',
  }),
  eng(57, 'Dàn Nhạc Giao Hưởng', 'Grand Symphony', {
    silhouette: 'grand', bodice: '#1e293b', skirt: ['#334155', '#0f172a', '#020617'], accent: '#f8fafc',
    pattern: 'notes', patternColor: '#e2e8f0', sleeves: 'off-shoulder', neckline: 'v', trim: 'sequins',
    gloves: true, gems: true, sparkle: true, cape: ['#1e293b', '#020617'], train: true, tiara: 'jeweled', hair: 'long', hairColor: '#111827',
  }),
  eng(58, 'Điệu Múa Quạt Lụa', 'Silk Fan Dance', {
    silhouette: 'princess', bodice: '#fb923c', skirt: ['#fef3c7', '#f43f5e'], accent: '#be123c',
    pattern: 'flowers', patternColor: '#fff7ed', sleeves: 'bishop', neckline: 'square', trim: 'ribbon', sash: true,
    earrings: true, wings: ['#fde68a', '#fda4af'], tiara: 'jeweled', hair: 'bun', hairColor: '#111827',
  }),
  eng(59, 'Giai Điệu Cầu Vồng', 'Rainbow Melody', {
    silhouette: 'cascade', bodice: '#38bdf8', skirt: ['#fca5a5', '#fde047', '#86efac'], accent: '#7c3aed',
    pattern: 'notes', patternColor: '#ffffff', sleeves: 'puff', neckline: 'sweetheart', layers: 2, layerColor: '#ffffff', trim: 'scallop',
    sparkle: true, aura: '#fef9c3', tiara: 'jeweled', hair: 'curls',
  }),
  eng(60, 'Nữ Hoàng Giai Điệu', 'Melody Queen', {
    silhouette: 'grand', bodice: '#7c3aed', skirt: ['#f0abfc', '#a855f7', '#312e81'], accent: '#fde047',
    pattern: 'notes', patternColor: '#fef9c3', sleeves: 'sheer', neckline: 'sweetheart', layers: 2, layerColor: '#f5d0fe', trim: 'pearls',
    gems: true, sparkle: true, necklace: true, earrings: true, aura: '#e9d5ff', cape: ['#6d28d9', '#1e1b4b'], train: true,
    tiara: 'grand', hair: 'long',
  }),

  // ── 61–70 · Bánh ngọt và tiệc trà (cấp 4) ──
  eng(61, 'Bánh Macaron', 'Macaron Dream', {
    silhouette: 'tiered', bodice: '#f9a8d4', skirt: ['#fbcfe8'], accent: '#be185d',
    tierColors: ['#fef3c7', '#fbcfe8', '#a7f3d0'], pattern: 'dots', patternColor: '#ffffff', sleeves: 'puff', neckline: 'sweetheart',
    trim: 'scallop', bow: true, sparkle: true, aura: '#fce7f3', tiara: 'jeweled', hair: 'curls',
  }),
  eng(62, 'Bánh Kem Hoàng Gia', 'Royal Cake', {
    silhouette: 'ballgown', bodice: '#fffbeb', skirt: ['#fff7ed', '#fda4af'], accent: '#e11d48',
    pattern: 'hearts', patternColor: '#fb7185', sleeves: 'puff', neckline: 'square', trim: 'pearls', layers: 2, layerColor: '#ffffff',
    bow: true, gems: true, sparkle: true, cape: ['#ffe4e6', '#fecdd3'], tiara: 'jeweled', hair: 'bun',
  }),
  eng(63, 'Trà Chiều Nước Anh', 'English Afternoon Tea', {
    silhouette: 'princess', bodice: '#a7f3d0', skirt: ['#f0fdf4', '#86efac'], accent: '#166534',
    pattern: 'roses', patternColor: '#fda4af', sleeves: 'flutter', neckline: 'scoop', trim: 'lace',
    gloves: true, earrings: true, train: true, tiara: 'jeweled', hair: 'bun', hairColor: '#7c4a1d',
  }),
  eng(64, 'Kem Dâu Mùa Hè', 'Strawberry Sundae', {
    silhouette: 'cascade', bodice: '#fb7185', skirt: ['#fff1f2', '#fda4af', '#f43f5e'], accent: '#be123c',
    pattern: 'dots', patternColor: '#fef2f2', sleeves: 'cap', neckline: 'sweetheart', layers: 2, layerColor: '#fff1f2', trim: 'ruffle',
    sparkle: true, aura: '#fecdd3', tiara: 'jeweled', hair: 'braid',
  }),
  eng(65, 'Sô-cô-la Nóng', 'Hot Chocolate', {
    silhouette: 'ballgown', bodice: '#78350f', skirt: ['#a16207', '#451a03'], accent: '#fef3c7',
    pattern: 'swirls', patternColor: '#fde68a', sleeves: 'long', neckline: 'v', trim: 'scallop', drape: true, layerColor: '#fef3c7',
    gems: true, cape: ['#92400e', '#451a03'], train: true, tiara: 'jeweled', hair: 'long', hairColor: '#3f1d0b',
  }),
  eng(66, 'Bánh Quy Gừng', 'Gingerbread', {
    silhouette: 'hilo', bodice: '#b45309', skirt: ['#fcd34d', '#92400e'], accent: '#fef3c7',
    pattern: 'dots', patternColor: '#ffffff', sleeves: 'puff', neckline: 'square', trim: 'embroidery', bow: true,
    sparkle: true, aura: '#fde68a', tiara: 'simple', hair: 'braid', hairColor: '#7c2d12',
  }),
  eng(67, 'Tháp Cupcake', 'Cupcake Tower', {
    silhouette: 'tiered', bodice: '#c084fc', skirt: ['#f5d0fe'], accent: '#7e22ce',
    tierColors: ['#fde68a', '#f9a8d4', '#a5f3fc'], pattern: 'sequins', patternColor: '#ffffff', sleeves: 'flutter', neckline: 'sweetheart',
    trim: 'ruffle', gems: true, sparkle: true, cape: ['#f5d0fe', '#c084fc'], tiara: 'jeweled', hair: 'curls',
  }),
  eng(68, 'Mứt Cam Ngọt', 'Orange Marmalade', {
    silhouette: 'princess', bodice: '#f97316', skirt: ['#fed7aa', '#ea580c'], accent: '#7c2d12',
    pattern: 'leaves', patternColor: '#15803d', sleeves: 'bishop', neckline: 'scoop', trim: 'pearls',
    necklace: true, earrings: true, wings: ['#fdba74', '#fef3c7'], tiara: 'jeweled', hair: 'bun',
  }),
  eng(69, 'Bánh Trái Cây Nhiệt Đới', 'Tropical Fruit Tart', {
    silhouette: 'cascade', bodice: '#facc15', skirt: ['#fef08a', '#fb923c', '#ec4899'], accent: '#be185d',
    pattern: 'flowers', patternColor: '#fff7ed', sleeves: 'flutter', neckline: 'halter', layers: 2, layerColor: '#fefce8', trim: 'sequins',
    gems: true, sparkle: true, aura: '#fef08a', train: true, tiara: 'jeweled', hair: 'long',
  }),
  eng(70, 'Nữ Hoàng Tiệc Trà', 'Tea Party Queen', {
    silhouette: 'grand', bodice: '#f472b6', skirt: ['#fdf2f8', '#f9a8d4', '#a78bfa'], accent: '#fde047',
    pattern: 'roses', patternColor: '#fff1f2', sleeves: 'puff', neckline: 'sweetheart', layers: 2, layerColor: '#fce7f3', trim: 'pearls',
    gems: true, sparkle: true, necklace: true, earrings: true, gloves: true, aura: '#fbcfe8', cape: ['#fbcfe8', '#c084fc'], train: true,
    tiara: 'grand', hair: 'curls',
  }),

  // ── 71–80 · Lễ hội bốn mùa (cấp 5) ──
  eng(71, 'Hội Hoa Xuân', 'Spring Flower Festival', {
    silhouette: 'grand', bodice: '#f9a8d4', skirt: ['#fdf2f8', '#86efac', '#f472b6'], accent: '#15803d',
    pattern: 'flowers', patternColor: '#ffffff', sleeves: 'flutter', neckline: 'sweetheart', layers: 2, layerColor: '#fce7f3', trim: 'embroidery',
    gems: true, sparkle: true, necklace: true, earrings: true, aura: '#fbcfe8', wings: ['#bbf7d0', '#fbcfe8'], train: true, tiara: 'grand', hair: 'braid',
  }),
  eng(72, 'Lễ Hội Thả Diều', 'Kite Festival', {
    silhouette: 'cascade', bodice: '#38bdf8', skirt: ['#fde047', '#f472b6', '#38bdf8'], accent: '#7c3aed',
    pattern: 'stripes', patternColor: '#ffffff', sleeves: 'puff', neckline: 'v', trim: 'ribbon', layers: 2, layerColor: '#e0f2fe',
    gems: true, sparkle: true, aura: '#bae6fd', cape: ['#7dd3fc', '#fbcfe8'], train: true, tiara: 'grand', hair: 'long',
  }),
  eng(73, 'Đêm Hè Đom Đóm', 'Summer Firefly Night', {
    silhouette: 'ballgown', bodice: '#065f46', skirt: ['#10b981', '#064e3b', '#022c22'], accent: '#fde047',
    pattern: 'sequins', patternColor: '#fef08a', sleeves: 'sheer', neckline: 'sweetheart', layers: 3, layerColor: '#d1fae5', trim: 'sequins',
    gems: true, sparkle: true, necklace: true, aura: '#fef08a', wings: ['#bbf7d0', '#fef08a'], train: true, tiara: 'grand', hair: 'curls',
  }),
  eng(74, 'Đèn Lồng Trung Thu', 'Mid-Autumn Lanterns', {
    silhouette: 'grand', bodice: '#dc2626', skirt: ['#fde047', '#f97316', '#b91c1c'], accent: '#fbbf24',
    pattern: 'dots', patternColor: '#fff7ed', sleeves: 'off-shoulder', neckline: 'square', layers: 2, layerColor: '#fef3c7', trim: 'embroidery',
    gems: true, sparkle: true, earrings: true, aura: '#fed7aa', cape: ['#b91c1c', '#7f1d1d'], train: true, tiara: 'grand', hair: 'bun', hairColor: '#111827',
  }),
  eng(75, 'Lễ Hội Lá Phong', 'Maple Leaf Festival', {
    silhouette: 'princess', bodice: '#ea580c', skirt: ['#fbbf24', '#dc2626', '#7f1d1d'], accent: '#fde68a',
    pattern: 'leaves', patternColor: '#fef3c7', sleeves: 'bishop', neckline: 'sweetheart', trim: 'scallop', drape: true, layerColor: '#fb923c',
    gems: true, sparkle: true, necklace: true, aura: '#fdba74', cape: ['#c2410c', '#7c2d12'], train: true, tiara: 'grand', hair: 'braid',
  }),
  eng(76, 'Giáng Sinh Lấp Lánh', 'Sparkling Christmas', {
    silhouette: 'grand', bodice: '#15803d', skirt: ['#fef2f2', '#dc2626', '#14532d'], accent: '#fde047',
    pattern: 'snowflakes', patternColor: '#ffffff', sleeves: 'puff', neckline: 'sweetheart', layers: 2, layerColor: '#f0fdf4', trim: 'pearls',
    bow: true, gems: true, sparkle: true, earrings: true, aura: '#fecaca', cape: ['#b91c1c', '#7f1d1d'], train: true, tiara: 'grand', hair: 'long',
  }),
  eng(77, 'Hội Hoa Đăng', 'Floating Lantern Festival', {
    silhouette: 'mermaid', bodice: '#f59e0b', skirt: ['#fef9c3', '#fb923c', '#1e3a8a'], accent: '#fde047',
    pattern: 'waves', patternColor: '#fffbeb', sleeves: 'off-shoulder', neckline: 'sweetheart', trim: 'sequins',
    gems: true, sparkle: true, necklace: true, aura: '#fde68a', wings: ['#fde68a', '#fdba74'], train: true, tiara: 'grand', hair: 'long', hairColor: '#111827',
  }),
  eng(78, 'Lễ Hội Tuyết Trắng', 'Snow Festival', {
    silhouette: 'cascade', bodice: '#e0f2fe', skirt: ['#ffffff', '#bae6fd', '#818cf8'], accent: '#3b82f6',
    pattern: 'snowflakes', patternColor: '#ffffff', sleeves: 'sheer', neckline: 'v', layers: 3, layerColor: '#ffffff', trim: 'lace',
    gloves: true, gems: true, sparkle: true, aura: '#e0f2fe', cape: ['#e0f2fe', '#93c5fd'], train: true, tiara: 'grand', hair: 'long', hairColor: '#e5e7eb',
  }),
  eng(79, 'Pháo Hoa Năm Mới', 'New Year Fireworks', {
    silhouette: 'grand', bodice: '#be123c', skirt: ['#fde047', '#e11d48', '#4c1d95'], accent: '#fde047',
    pattern: 'stars', patternColor: '#fef08a', sleeves: 'sheer', neckline: 'sweetheart', layers: 3, layerColor: '#ffe4e6', trim: 'sequins',
    gems: true, sparkle: true, necklace: true, earrings: true, aura: '#fda4af', wings: ['#fde047', '#f472b6'], cape: ['#be185d', '#312e81'],
    train: true, tiara: 'grand', hair: 'curls',
  }),
  eng(80, 'Nữ Hoàng Bốn Mùa', 'Queen of Four Seasons', {
    silhouette: 'grand', bodice: '#8b5cf6', skirt: ['#fbcfe8', '#86efac', '#fbbf24'], accent: '#fde047',
    pattern: 'flowers', patternColor: '#ffffff', sleeves: 'flutter', neckline: 'sweetheart', layers: 3, layerColor: '#faf5ff', drape: true, trim: 'embroidery',
    gems: true, sparkle: true, necklace: true, earrings: true, gloves: true, aura: '#ddd6fe', wings: ['#fbcfe8', '#fde68a'], cape: ['#a78bfa', '#38bdf8'],
    train: true, tiara: 'grand', hair: 'long',
  }),

  // ── 81–90 · Cung điện và châu báu (cấp 5) ──
  eng(81, 'Sảnh Gương Lộng Lẫy', 'Hall of Mirrors', {
    silhouette: 'grand', bodice: '#fef3c7', skirt: ['#ffffff', '#fde68a', '#d97706'], accent: '#b45309',
    pattern: 'damask', patternColor: '#fde68a', sleeves: 'off-shoulder', neckline: 'sweetheart', layers: 2, layerColor: '#fffbeb', trim: 'pearls',
    gems: true, sparkle: true, necklace: true, earrings: true, aura: '#fef3c7', cape: ['#fde68a', '#b45309'], train: true, tiara: 'grand', hair: 'bun',
  }),
  eng(82, 'Cung Điện Mùa Đông', 'Winter Palace', {
    silhouette: 'cascade', bodice: '#bfdbfe', skirt: ['#f0f9ff', '#93c5fd', '#3b82f6'], accent: '#1d4ed8',
    pattern: 'snowflakes', patternColor: '#ffffff', sleeves: 'long', neckline: 'square', layers: 2, layerColor: '#eff6ff', trim: 'lace',
    gloves: true, gems: true, sparkle: true, necklace: true, aura: '#dbeafe', cape: ['#dbeafe', '#60a5fa'], train: true, tiara: 'grand', hair: 'long',
  }),
  eng(83, 'Vương Miện Ngọc Bích', 'Sapphire Crown', {
    silhouette: 'grand', bodice: '#1d4ed8', skirt: ['#60a5fa', '#1e40af', '#172554'], accent: '#fde047',
    pattern: 'sequins', patternColor: '#dbeafe', sleeves: 'sheer', neckline: 'v', layers: 2, layerColor: '#dbeafe', trim: 'embroidery',
    gems: true, sparkle: true, necklace: true, earrings: true, aura: '#93c5fd', cape: ['#1e3a8a', '#0f172a'], train: true, tiara: 'grand', hair: 'curls',
  }),
  eng(84, 'Kho Báu Của Rồng', 'Dragon Treasure', {
    silhouette: 'ballgown', bodice: '#b45309', skirt: ['#fde047', '#f59e0b', '#7c2d12'], accent: '#fef3c7',
    pattern: 'sequins', patternColor: '#fef9c3', sleeves: 'bishop', neckline: 'sweetheart', layers: 2, layerColor: '#fef3c7', trim: 'sequins', drape: true,
    gems: true, sparkle: true, necklace: true, aura: '#fcd34d', wings: ['#dc2626', '#f59e0b'], train: true, tiara: 'grand', hair: 'braid', hairColor: '#7c2d12',
  }),
  eng(85, 'Chuỗi Trân Châu', 'Pearl Necklace Gown', {
    silhouette: 'mermaid', bodice: '#fdf2f8', skirt: ['#ffffff', '#fbcfe8', '#c4b5fd'], accent: '#ffffff',
    pattern: 'lace', patternColor: '#ffffff', sleeves: 'sheer', neckline: 'sweetheart', trim: 'pearls',
    gems: true, sparkle: true, necklace: true, earrings: true, aura: '#fce7f3', cape: ['#fdf2f8', '#f9a8d4'], train: true, tiara: 'grand', hair: 'bun',
  }),
  eng(86, 'Ngai Vàng', 'Golden Throne', {
    silhouette: 'grand', bodice: '#eab308', skirt: ['#fef9c3', '#facc15', '#a16207'], accent: '#78350f',
    pattern: 'damask', patternColor: '#fffbeb', sleeves: 'puff', neckline: 'square', layers: 3, layerColor: '#fefce8', trim: 'pearls',
    gems: true, sparkle: true, necklace: true, earrings: true, gloves: true, aura: '#fef08a', cape: ['#ca8a04', '#713f12'], train: true, tiara: 'grand', hair: 'curls',
  }),
  eng(87, 'Cổng Thành Bạc', 'Silver Gate', {
    silhouette: 'princess', bodice: '#cbd5e1', skirt: ['#f8fafc', '#94a3b8', '#475569'], accent: '#f8fafc',
    pattern: 'swirls', patternColor: '#ffffff', sleeves: 'long', neckline: 'v', trim: 'sequins',
    gloves: true, gems: true, sparkle: true, necklace: true, aura: '#e2e8f0', cape: ['#94a3b8', '#334155'], train: true, tiara: 'grand', hair: 'long', hairColor: '#374151',
  }),
  eng(88, 'Phòng Ngọc Trai', 'Pearl Chamber', {
    silhouette: 'cascade', bodice: '#e9d5ff', skirt: ['#ffffff', '#f5d0fe', '#a5b4fc'], accent: '#a855f7',
    pattern: 'dots', patternColor: '#ffffff', sleeves: 'flutter', neckline: 'sweetheart', layers: 3, layerColor: '#faf5ff', trim: 'pearls',
    gems: true, sparkle: true, necklace: true, earrings: true, aura: '#f3e8ff', wings: ['#f5d0fe', '#bae6fd'], train: true, tiara: 'grand', hair: 'long',
  }),
  eng(89, 'Vườn Hoàng Cung', 'Royal Garden Gown', {
    silhouette: 'ballgown', bodice: '#be185d', skirt: ['#fbcfe8', '#4ade80', '#166534'], accent: '#fde047',
    pattern: 'roses', patternColor: '#fff1f2', sleeves: 'off-shoulder', neckline: 'sweetheart', layers: 2, layerColor: '#fce7f3', trim: 'embroidery',
    gems: true, sparkle: true, necklace: true, earrings: true, aura: '#fbcfe8', wings: ['#bbf7d0', '#fbcfe8'], cape: ['#f9a8d4', '#15803d'],
    train: true, tiara: 'grand', hair: 'braid',
  }),
  eng(90, 'Công Chúa Hoàng Cung', 'Palace Princess', {
    silhouette: 'grand', bodice: '#6366f1', skirt: ['#e0e7ff', '#818cf8', '#3730a3'], accent: '#fde047',
    pattern: 'stars', patternColor: '#ffffff', sleeves: 'puff', neckline: 'sweetheart', layers: 3, layerColor: '#eef2ff', drape: true, trim: 'pearls',
    gems: true, sparkle: true, necklace: true, earrings: true, gloves: true, aura: '#c7d2fe', cape: ['#6366f1', '#1e1b4b'], train: true, tiara: 'grand', hair: 'bun',
  }),

  // ── 91–100 · Nữ hoàng truyện kể (cấp 5) ──
  eng(91, 'Nữ Hoàng Trang Sách', 'Queen of Pages', {
    silhouette: 'grand', bodice: '#fef3c7', skirt: ['#fffbeb', '#fde68a', '#b45309'], accent: '#92400e',
    pattern: 'letters', patternColor: '#b45309', sleeves: 'sheer', neckline: 'sweetheart', layers: 3, layerColor: '#fffbeb', trim: 'lace',
    gems: true, sparkle: true, necklace: true, earrings: true, aura: '#fef3c7', wings: ['#fde68a', '#fed7aa'], cape: ['#fcd34d', '#92400e'],
    train: true, tiara: 'grand', hair: 'long', hairColor: '#7a4a1d',
  }),
  eng(92, 'Nữ Hoàng Mực Vàng', 'Golden Ink Queen', {
    silhouette: 'mermaid', bodice: '#1e1b4b', skirt: ['#312e81', '#fbbf24', '#1e1b4b'], accent: '#fbbf24',
    pattern: 'swirls', patternColor: '#fde68a', sleeves: 'off-shoulder', neckline: 'sweetheart', trim: 'sequins',
    gems: true, sparkle: true, necklace: true, earrings: true, aura: '#fde68a', cape: ['#312e81', '#0f172a'], train: true, tiara: 'grand', hair: 'long', hairColor: '#111827',
  }),
  eng(93, 'Nữ Hoàng Thư Viện', 'Library Queen', {
    silhouette: 'ballgown', bodice: '#7c2d12', skirt: ['#fde68a', '#92400e', '#451a03'], accent: '#fbbf24',
    pattern: 'letters', patternColor: '#fef3c7', sleeves: 'bishop', neckline: 'square', layers: 2, layerColor: '#fef3c7', trim: 'embroidery', drape: true,
    gems: true, sparkle: true, necklace: true, gloves: true, aura: '#fcd34d', cape: ['#92400e', '#451a03'], train: true, tiara: 'grand', hair: 'bun', hairColor: '#3f1d0b',
  }),
  eng(94, 'Nữ Hoàng Những Giấc Mơ', 'Dream Queen', {
    silhouette: 'cascade', bodice: '#a78bfa', skirt: ['#e9d5ff', '#818cf8', '#1e1b4b'], accent: '#fde047',
    pattern: 'stars', patternColor: '#ffffff', sleeves: 'sheer', neckline: 'sweetheart', layers: 3, layerColor: '#f5f3ff', trim: 'pearls',
    gems: true, sparkle: true, necklace: true, earrings: true, aura: '#c4b5fd', wings: ['#c4b5fd', '#a5f3fc'], train: true, tiara: 'grand', hair: 'long',
  }),
  eng(95, 'Nữ Hoàng Thơ Ca', 'Poetry Queen', {
    silhouette: 'princess', bodice: '#fbcfe8', skirt: ['#fdf2f8', '#f9a8d4', '#a21caf'], accent: '#a21caf',
    pattern: 'hearts', patternColor: '#fff1f2', sleeves: 'flutter', neckline: 'sweetheart', trim: 'lace',
    gems: true, sparkle: true, necklace: true, earrings: true, aura: '#fbcfe8', cape: ['#f9a8d4', '#a21caf'], train: true, tiara: 'grand', hair: 'curls',
  }),
  eng(96, 'Nữ Hoàng Phiêu Lưu', 'Adventure Queen', {
    silhouette: 'grand', bodice: '#0f766e', skirt: ['#5eead4', '#0d9488', '#134e4a'], accent: '#fde047',
    pattern: 'waves', patternColor: '#ccfbf1', sleeves: 'long', neckline: 'v', layers: 2, layerColor: '#ccfbf1', trim: 'scallop',
    gloves: true, gems: true, sparkle: true, necklace: true, aura: '#99f6e4', wings: ['#5eead4', '#fde68a'], cape: ['#0f766e', '#042f2e'],
    train: true, tiara: 'grand', hair: 'braid', hairColor: '#7c2d12',
  }),
  eng(97, 'Nữ Hoàng Bảng Chữ Cái', 'Alphabet Queen', {
    silhouette: 'grand', bodice: '#ef4444', skirt: ['#fde047', '#4ade80', '#3b82f6'], accent: '#7c3aed',
    pattern: 'letters', patternColor: '#ffffff', sleeves: 'puff', neckline: 'sweetheart', layers: 2, layerColor: '#ffffff', trim: 'ribbon',
    bow: true, gems: true, sparkle: true, necklace: true, earrings: true, aura: '#fef9c3', cape: ['#f87171', '#60a5fa'], train: true, tiara: 'grand', hair: 'curls',
  }),
  eng(98, 'Nữ Hoàng Lời Ước', 'Wish Queen', {
    silhouette: 'ballgown', bodice: '#38bdf8', skirt: ['#ffffff', '#bae6fd', '#a78bfa'], accent: '#fde047',
    pattern: 'snowflakes', patternColor: '#ffffff', sleeves: 'off-shoulder', neckline: 'sweetheart', layers: 3, layerColor: '#f0f9ff', trim: 'sequins', drape: true,
    gems: true, sparkle: true, necklace: true, earrings: true, aura: '#bae6fd', wings: ['#e0f2fe', '#ddd6fe'], train: true, tiara: 'grand', hair: 'long', hairColor: '#fde68a',
  }),
  eng(99, 'Nữ Hoàng Hồi Kết Có Hậu', 'Happy Ending Queen', {
    silhouette: 'grand', bodice: '#f43f5e', skirt: ['#fff1f2', '#fb7185', '#fbbf24'], accent: '#fde047',
    pattern: 'hearts', patternColor: '#ffffff', sleeves: 'sheer', neckline: 'sweetheart', layers: 3, layerColor: '#ffe4e6', trim: 'pearls',
    gems: true, sparkle: true, necklace: true, earrings: true, gloves: true, aura: '#fecdd3', wings: ['#fecdd3', '#fde68a'], cape: ['#fda4af', '#be123c'],
    train: true, tiara: 'grand', hair: 'long',
  }),
  eng(100, 'Nữ Hoàng Ngàn Lẻ Một Câu Chuyện', 'Queen of a Thousand Tales', {
    silhouette: 'grand', bodice: '#7e22ce', skirt: ['#fde047', '#c026d3', '#312e81'], accent: '#fde047',
    pattern: 'damask', patternColor: '#fef9c3', sleeves: 'puff', neckline: 'sweetheart', layers: 3, layerColor: '#fdf4ff', drape: true, trim: 'embroidery',
    gems: true, sparkle: true, necklace: true, earrings: true, gloves: true, aura: '#f0abfc', wings: ['#fde047', '#e879f9'], cape: ['#fde68a', '#6b21a8'],
    train: true, tiara: 'grand', hair: 'curls', hairColor: '#fbbf24',
  }),
]
