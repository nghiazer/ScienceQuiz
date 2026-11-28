import { useId, type ReactNode } from 'react'
import type { DressLook, DressPattern, Neckline, Silhouette } from '../../data/dresses'
import type { Metal, WornAccessories } from '../../data/accessories'
import { Bracelet, Earrings, HeadPiece, HeldItem, HeldItemBack, MetalDefs, Necklace, ShoeDecor } from './AccessoryParts'
import { Bow, Gem } from './svgParts'

const CX = 120
const SKIN = '#ffe2cc'
const SKIN_SHADE = '#f4bfa0'
const HAIR = '#5b3425'
const GOLD = '#fcd34d'
const GOLD_DARK = '#d97706'

/** Mép gấu váy: y ở hai đầu, nửa bề rộng, độ phình ở giữa (b > 0 phình xuống, b < 0 hõm lên). */
interface Hem { y: number; hw: number; b: number }

const HEM: Record<Silhouette, Hem> = {
  aline: { y: 255, hw: 52, b: 6.5 },
  empire: { y: 255, hw: 50, b: 6.5 },
  tiered: { y: 262, hw: 74, b: 7 },
  ballgown: { y: 288, hw: 78, b: 9 },
  mermaid: { y: 296, hw: 58, b: 6 },
  grand: { y: 294, hw: 102, b: 11 },
  princess: { y: 272, hw: 68, b: 9 },
  cascade: { y: 290, hw: 86, b: 10 },
  hilo: { y: 268, hw: 70, b: -17 },
  petal: { y: 286, hw: 84, b: 9 },
  bustle: { y: 292, hw: 94, b: 10 },
  crystal: { y: 288, hw: 86, b: 4 },
}

/** Gấu váy cánh hoa: các vòng cung phồng xuống giữa hai điểm (x từ phải sang trái). */
function petalHem(hw: number, y: number, n: number, depth: number): string {
  let d = ''
  for (let i = n; i > 0; i--) {
    const x1 = CX - hw + ((2 * hw) * (i - 1)) / n
    const xm = CX - hw + ((2 * hw) * (i - 0.5)) / n
    d += ` Q${xm.toFixed(1)} ${(y + depth).toFixed(1)} ${x1.toFixed(1)} ${y}`
  }
  return d
}

/** Gấu váy cắt kim cương: răng cưa nhọn xuống. */
function crystalHem(hw: number, y: number, n: number, depth: number): string {
  let d = ''
  for (let i = n; i > 0; i--) {
    const x1 = CX - hw + ((2 * hw) * (i - 1)) / n
    const xm = CX - hw + ((2 * hw) * (i - 0.5)) / n
    d += ` L${xm.toFixed(1)} ${(y + (i % 2 ? depth : depth * 0.6)).toFixed(1)} L${x1.toFixed(1)} ${y}`
  }
  return d
}

const SKIRT_PATH: Record<Exclude<Silhouette, 'tiered'>, string> = {
  aline: 'M101 148 H139 L172 255 Q120 268 68 255 Z',
  empire: 'M104 128 H136 L170 255 Q120 268 70 255 Z',
  ballgown: 'M101 148 H139 C150 190 190 230 198 288 Q120 306 42 288 C50 230 90 190 101 148 Z',
  mermaid: 'M101 148 H139 C146 190 148 230 152 250 C170 270 176 285 178 296 Q120 308 62 296 C64 285 70 270 88 250 C92 230 94 190 101 148 Z',
  grand: 'M101 148 H139 C155 190 205 235 222 294 Q120 316 18 294 C35 235 85 190 101 148 Z',
  princess: 'M101 148 H139 C148 185 178 225 188 272 Q120 290 52 272 C62 225 92 185 101 148 Z',
  cascade: 'M101 148 H139 C152 190 196 232 206 290 Q120 310 34 290 C44 232 88 190 101 148 Z',
  hilo: 'M101 148 H139 C148 185 178 220 190 268 Q120 234 50 268 C62 220 92 185 101 148 Z',
  petal: `M101 148 H139 C150 188 192 228 204 282${petalHem(84, 282, 7, 14)} C48 228 90 188 101 148 Z`,
  bustle: 'M101 148 H139 C160 170 192 196 196 214 C206 240 212 266 214 292 Q120 312 26 292 C28 266 34 240 44 214 C48 196 80 170 101 148 Z',
  crystal: `M101 148 H139 C152 190 196 232 206 284${crystalHem(86, 284, 10, 12)} C44 232 88 190 101 148 Z`,
}

const TIERS = [
  'M101 148 H139 L158 190 Q120 200 82 190 Z',
  'M90 172 H150 L176 226 Q120 238 64 226 Z',
  'M80 205 H160 L194 262 Q120 276 46 262 Z',
]
const TIER_HEMS: Hem[] = [
  { y: 190, hw: 38, b: 5 },
  { y: 226, hw: 56, b: 6 },
  { y: 262, hw: 74, b: 7 },
]

/** Cấu hình nếp váy: các vị trí t (-1…1) từ eo xuống gấu, điểm cuối (y, nửa bề rộng). */
const FOLDS: Record<Silhouette, { t: number[]; endY: number; endHw: number }> = {
  aline: { t: [-0.8, -0.4, 0, 0.4, 0.8], endY: 250, endHw: 46 },
  empire: { t: [-0.8, -0.4, 0, 0.4, 0.8], endY: 250, endHw: 44 },
  tiered: { t: [-0.75, -0.35, 0.35, 0.75], endY: 256, endHw: 66 },
  princess: { t: [-0.85, -0.55, -0.28, 0, 0.28, 0.55, 0.85], endY: 266, endHw: 60 },
  ballgown: { t: [-0.85, -0.55, -0.28, 0, 0.28, 0.55, 0.85], endY: 282, endHw: 68 },
  mermaid: { t: [-0.7, -0.35, 0, 0.35, 0.7], endY: 285, endHw: 44 },
  grand: { t: [-0.9, -0.7, -0.5, -0.3, -0.1, 0.1, 0.3, 0.5, 0.7, 0.9], endY: 288, endHw: 92 },
  cascade: { t: [-0.8, -0.5, -0.25, 0, 0.25, 0.5, 0.8], endY: 284, endHw: 76 },
  hilo: { t: [-0.8, -0.45, -0.15, 0.15, 0.45, 0.8], endY: 252, endHw: 62 },
  petal: { t: [-0.86, -0.57, -0.29, 0, 0.29, 0.57, 0.86], endY: 280, endHw: 74 },
  bustle: { t: [-0.85, -0.6, -0.35, -0.12, 0.12, 0.35, 0.6, 0.85], endY: 286, endHw: 84 },
  crystal: { t: [-0.8, -0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6, 0.8], endY: 282, endHw: 78 },
}

/** Dáng váy xòe rộng (lấp lánh nhiều hơn, lớp voan nới ít hơn). */
const WIDE = new Set<Silhouette>(['grand', 'cascade', 'bustle', 'petal', 'crystal'])

type Pt = [number, number]

function edgePoints(h: Hem, n: number, lift = 0): Pt[] {
  return Array.from({ length: n }, (_, i) => {
    const dx = (i / (n - 1)) * 2 * h.hw - h.hw
    return [CX + dx, h.y + h.b * (1 - (dx / h.hw) ** 2) - lift]
  })
}

/** Dải viền có mép dưới lượn sóng (mỗi đoạn giữa hai điểm là một nửa vòng cung). */
function scallopBand(pts: Pt[], depth: number, bandH: number): string {
  const top = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${(y - bandH).toFixed(1)}`).join(' ')
  const last = pts[pts.length - 1]
  let d = `${top} L${last[0].toFixed(1)} ${last[1].toFixed(1)}`
  for (let i = pts.length - 1; i > 0; i--) {
    const [x1, y1] = pts[i]
    const [x0, y0] = pts[i - 1]
    d += ` Q${((x0 + x1) / 2).toFixed(1)} ${((y0 + y1) / 2 + depth).toFixed(1)} ${x0.toFixed(1)} ${y0.toFixed(1)}`
  }
  return `${d} Z`
}

function linePoints(a: Pt, b: Pt, n: number): Pt[] {
  return Array.from({ length: n }, (_, i) => [a[0] + ((b[0] - a[0]) * i) / (n - 1), a[1] + ((b[1] - a[1]) * i) / (n - 1)])
}

const SPARKLES: Pt[] = [
  [62, 128], [182, 134], [72, 205], [172, 212], [120, 258], [38, 262], [204, 266], [88, 24], [152, 20], [30, 160], [210, 170],
]

const NECK_TOP: Record<Neckline, string> = {
  scoop: 'M96 110 Q120 124 144 110',
  sweetheart: 'M96 112 Q108 103 120 117 Q132 103 144 112',
  square: 'M97 112 L107 112 L107 120 L133 120 L133 112 L143 112',
  v: 'M96 110 L120 130 L144 110',
  halter: 'M99 121 Q120 129 141 121',
}

function PatternDef({ id, kind, color }: { id: string; kind: DressPattern; color: string }) {
  const line = { fill: 'none', stroke: color, strokeLinecap: 'round' as const }
  const shapes: Record<DressPattern, ReactNode> = {
    dots: <><circle cx="6" cy="6" r="2.4" /><circle cx="18" cy="18" r="2.4" /></>,
    hearts: <path d="M12 19 C3 12 5 6 9 6 C11 6 12 8 12 8 C12 8 13 6 15 6 C19 6 21 12 12 19Z" />,
    flowers: (
      <>
        {[0, 72, 144, 216, 288].map((a) => (
          <circle key={a} cx={12 + 4 * Math.cos((a * Math.PI) / 180)} cy={12 + 4 * Math.sin((a * Math.PI) / 180)} r="2.6" />
        ))}
        <circle cx="12" cy="12" r="1.8" fill="#fde047" />
      </>
    ),
    leaves: <ellipse cx="12" cy="12" rx="3.2" ry="7" transform="rotate(35 12 12)" />,
    stars: <path d="M12 3 L14 10 L21 12 L14 14 L12 21 L10 14 L3 12 L10 10Z" />,
    waves: <path d="M0 12 Q6 5 12 12 T24 12" {...line} strokeWidth="2" />,
    snowflakes: <path d="M12 3V21M4 7.5L20 16.5M4 16.5L20 7.5" {...line} strokeWidth="1.6" />,
    notes: <><circle cx="8" cy="17" r="3" /><path d="M11 17V5Q16 6 17 10" {...line} strokeWidth="1.8" /></>,
    stripes: <rect x="0" y="9" width="24" height="5" />,
    drops: <path d="M12 3 Q18 12 12 18 Q6 12 12 3Z" />,
    butterflies: (
      <>
        <ellipse cx="8" cy="9" rx="4.5" ry="3.4" /><ellipse cx="16" cy="9" rx="4.5" ry="3.4" />
        <ellipse cx="9" cy="16" rx="3.2" ry="2.6" /><ellipse cx="15" cy="16" rx="3.2" ry="2.6" />
      </>
    ),
    letters: <text x="12" y="16" fontSize="12" fontWeight="800" textAnchor="middle" fontFamily="Nunito, sans-serif">A</text>,
    feathers: <path d="M12 2 Q20 12 12 22 Q4 12 12 2Z M12 5V20" fillRule="evenodd" />,
    damask: (
      <>
        <path d="M12 2 C17 7 17 10 12 12 C7 10 7 7 12 2Z M12 22 C17 17 17 14 12 12 C7 14 7 17 12 22Z" />
        <path d="M2 12 C7 7 10 7 12 12 C10 17 7 17 2 12Z M22 12 C17 7 14 7 12 12 C14 17 17 17 22 12Z" opacity="0.7" />
        <circle cx="12" cy="12" r="1.6" fill="#fff" />
      </>
    ),
    roses: (
      <>
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="3.6" fill="none" stroke="#fff" strokeWidth="1" strokeOpacity="0.55" />
        <circle cx="12" cy="12" r="1.4" fill="#fff" fillOpacity="0.6" />
        <ellipse cx="4" cy="20" rx="2.6" ry="1.2" fill="#16a34a" transform="rotate(-30 4 20)" />
        <ellipse cx="20" cy="4" rx="2.6" ry="1.2" fill="#16a34a" transform="rotate(-30 20 4)" />
      </>
    ),
    lace: (
      <>
        <circle cx="6" cy="6" r="3.2" {...line} strokeWidth="1.2" />
        <circle cx="18" cy="18" r="3.2" {...line} strokeWidth="1.2" />
        <circle cx="18" cy="6" r="1.1" /><circle cx="6" cy="18" r="1.1" />
      </>
    ),
    sequins: (
      <>
        {[[4, 4], [12, 4], [20, 4], [8, 12], [16, 12], [4, 20], [12, 20], [20, 20]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 2 ? 1.5 : 1.1} />
        ))}
      </>
    ),
    swirls: <path d="M3 17 C3 8 15 8 15 14 C15 18 9 18 9 14 M17 5 C21 5 21 10 17 10" {...line} strokeWidth="1.6" />,
    diamonds: (
      <>
        <path d="M12 2 L18 12 L12 22 L6 12 Z" {...line} strokeWidth="1.2" />
        <path d="M12 7 L15 12 L12 17 L9 12 Z" />
      </>
    ),
    hexagons: <path d="M8 3 H16 L20 10 L16 17 H8 L4 10 Z M12 17 V24" {...line} strokeWidth="1.2" />,
    numbers: (
      <>
        <text x="6" y="10" fontSize="8" fontWeight="800" textAnchor="middle" fontFamily="Nunito, sans-serif">1</text>
        <text x="18" y="10" fontSize="8" fontWeight="800" textAnchor="middle" fontFamily="Nunito, sans-serif">+</text>
        <text x="6" y="22" fontSize="8" fontWeight="800" textAnchor="middle" fontFamily="Nunito, sans-serif">π</text>
        <text x="18" y="22" fontSize="8" fontWeight="800" textAnchor="middle" fontFamily="Nunito, sans-serif">7</text>
      </>
    ),
    filigree: (
      <>
        <path d="M12 2 C6 6 6 10 12 12 C18 10 18 6 12 2 M12 12 C8 16 4 15 2 20 M12 12 C16 16 20 15 22 20" {...line} strokeWidth="1" />
        <circle cx="12" cy="12" r="1.4" />
        <circle cx="2" cy="20" r="1" /><circle cx="22" cy="20" r="1" />
      </>
    ),
    crystals: (
      <>
        <path d="M6 4 L9 9 L6 16 L3 9 Z" />
        <path d="M17 10 L20 14 L17 21 L14 14 Z" opacity="0.7" />
        <path d="M6 4 L6 16 M17 10 L17 21" stroke="#fff" strokeOpacity="0.6" strokeWidth="0.6" />
      </>
    ),
  }
  return (
    <pattern id={id} width="24" height="24" patternUnits="userSpaceOnUse">
      <g fill={color} opacity="0.85">{shapes[kind]}</g>
    </pattern>
  )
}

function Sparkle({ x, y, s = 1, delay = 0, still }: { x: number; y: number; s?: number; delay?: number; still?: boolean }) {
  return (
    <path
      className={still ? undefined : 'twinkle'}
      d="M0 -6 L1.6 -1.6 L6 0 L1.6 1.6 L0 6 L-1.6 1.6 L-6 0 L-1.6 -1.6Z"
      transform={`translate(${x} ${y}) scale(${s})`}
      fill="#fff"
      stroke={GOLD}
      strokeWidth="0.6"
      style={still ? undefined : { animationDelay: `${delay}s` }}
    />
  )
}

/** Viền gấu váy (hoặc viền đáy từng tầng) theo kiểu `look.trim`. */
function HemTrim({ h, look }: { h: Hem; look: DressLook }) {
  const trim = look.trim
  if (!trim) return null
  const acc = look.accent
  const n = Math.max(5, Math.round(h.hw / 8))
  switch (trim) {
    case 'ruffle':
      return (
        <g>
          <path d={scallopBand(edgePoints(h, n, 11), 6, 8)} fill="#fff" fillOpacity="0.55" stroke={acc} strokeOpacity="0.5" strokeWidth="0.8" />
          <path d={scallopBand(edgePoints(h, n + 1, 1), 8, 10)} fill="#fff" fillOpacity="0.9" stroke={acc} strokeOpacity="0.8" strokeWidth="1" />
        </g>
      )
    case 'lace': {
      const pts = edgePoints(h, n + 1, 1)
      return (
        <g>
          <path d={scallopBand(pts, 6, 9)} fill="#fff" fillOpacity="0.95" stroke={acc} strokeOpacity="0.55" strokeWidth="0.8" />
          {pts.slice(0, -1).map(([x, y], i) => (
            <circle key={i} cx={(x + pts[i + 1][0]) / 2} cy={(y + pts[i + 1][1]) / 2 + 1} r="1.8" fill={acc} fillOpacity="0.35" />
          ))}
          <path d={edgePoints(h, 12, 12).map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`).join(' ')} fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="1.5 3" strokeLinecap="round" opacity="0.9" />
        </g>
      )
    }
    case 'scallop':
      return <path d={scallopBand(edgePoints(h, n, 0), 6, 7)} fill={acc} stroke="#fff" strokeWidth="1" strokeOpacity="0.85" />
    case 'pearls': {
      const pts = edgePoints(h, Math.max(8, Math.round(h.hw / 4.5)), 2)
      return (
        <g>
          {pts.map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="3" fill="#fff" stroke="#cbd5e1" strokeWidth="0.8" />
              <circle cx={x - 0.9} cy={y - 0.9} r="0.9" fill="#fff" stroke="#e2e8f0" strokeWidth="0.4" />
            </g>
          ))}
        </g>
      )
    }
    case 'ribbon': {
      const pts = edgePoints(h, 14, 8)
      const d = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`).join(' ')
      return (
        <g>
          <path d={d} fill="none" stroke={acc} strokeWidth="6" strokeLinecap="round" />
          <path d={d} fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
        </g>
      )
    }
    case 'embroidery': {
      const pts = edgePoints(h, Math.max(7, Math.round(h.hw / 7)), 9)
      return (
        <g>
          <path d={pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`).join(' ')} fill="none" stroke="#fff" strokeOpacity="0.8" strokeWidth="1.2" strokeDasharray="2 2" />
          {pts.map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r={i % 2 ? 2 : 2.8} fill={i % 2 ? GOLD : acc} stroke="#fff" strokeWidth="0.7" />
              {!(i % 2) && <ellipse cx={x} cy={y + 5} rx="1.4" ry="2.6" fill={look.patternColor ?? '#16a34a'} opacity="0.8" />}
            </g>
          ))}
        </g>
      )
    }
    case 'sequins': {
      const rows = [edgePoints(h, Math.max(10, Math.round(h.hw / 4)), 3), edgePoints(h, Math.max(9, Math.round(h.hw / 4.6)), 10)]
      const cols = [GOLD, '#fff', '#f9a8d4', '#a5f3fc']
      return (
        <g>
          {rows.map((pts, r) => pts.map(([x, y], i) => <circle key={`${r}-${i}`} cx={x} cy={y} r={r ? 1.8 : 2.2} fill={cols[(i + r) % 4]} stroke="#fff" strokeWidth="0.4" />))}
        </g>
      )
    }
  }
}

interface PrincessProps {
  look: DressLook
  className?: string
  title?: string
  still?: boolean
  /**
   * Phụ kiện đang đeo theo từng ô. Ô nào có món thì món đó THAY phần tương ứng của váy:
   * đầu → vương miện/nơ tóc; trang sức → vòng cổ + hoa tai (+ vòng tay); chân → màu giày + găng tay; tay → quyền trượng.
   * Không truyền (hoặc rỗng) thì hình vẽ giữ nguyên như váy gốc.
   */
  accessories?: WornAccessories
}

/** Công chúa mặc váy `look`, vẽ bằng SVG (khung 240×330). `still` tắt hiệu ứng động (dùng cho thẻ nhỏ). */
export function PrincessSvg({ look, className = '', title, still = false, accessories }: PrincessProps) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '')
  const sil = look.silhouette
  const hem = HEM[sil]
  const empire = sil === 'empire'
  const waistY = empire ? 128 : 148
  const id = (k: string) => `${k}${uid}`
  const skirtFill = look.skirt.length > 1 ? `url(#${id('sk')})` : look.skirt[0]
  const lastSkirt = look.skirt[look.skirt.length - 1]
  const sparkleCount = look.sparkle ? (WIDE.has(sil) ? 11 : 8) : 0
  const neck = look.neckline ?? 'scoop'
  const bodicePath = `${NECK_TOP[neck]} L141 ${waistY} L99 ${waistY} Z`
  const skirtPaths = sil === 'tiered' ? null : SKIRT_PATH[sil]
  const layerScale = WIDE.has(sil) ? 0.025 : 0.05
  const hairColor = look.hairColor ?? HAIR
  const hairStyle = look.hair ?? 'bun'
  const sleeve = look.sleeves
  const longSleeve = sleeve === 'long' || sleeve === 'bishop'
  const fold = FOLDS[sil]
  const H = hem.y - waistY
  const acc = accessories ?? {}
  const hasAcc = Boolean(acc.head || acc.jewelry || acc.feet || acc.hand)
  const metal = (m: Metal) => `url(#${id('mt')}-${m})`
  // Găng tay: món ở ô chân quyết định (có hoặc không); không có món thì theo váy.
  const gloveColor = acc.feet ? acc.feet.gloves : look.gloves ? '#fff' : undefined
  const cuffColor = acc.feet ? acc.feet.trim : look.accent

  const clipShapes = sil === 'tiered' ? TIERS : [skirtPaths!]
  const folds = fold.t.map((t) => {
    const x0 = CX + t * 17
    const y0 = waistY + 6
    const x1 = CX + t * fold.endHw
    return `M${x0} ${y0} Q${CX + t * (17 + (fold.endHw - 17) * 0.35)} ${(y0 + fold.endY) / 2} ${x1} ${fold.endY}`
  })

  return (
    <svg viewBox="0 0 240 330" className={className} role="img" aria-label={title ?? 'Công chúa'} xmlns="http://www.w3.org/2000/svg">
      {title && <title>{title}</title>}
      <defs>
        {look.skirt.length > 1 && (
          <linearGradient id={id('sk')} x1="0" y1="0" x2="0" y2="1">
            {look.skirt.map((c, i) => <stop key={i} offset={`${(i / (look.skirt.length - 1)) * 100}%`} stopColor={c} />)}
          </linearGradient>
        )}
        {look.cape && (
          <linearGradient id={id('cp')} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={look.cape[0]} />
            <stop offset="100%" stopColor={look.cape[look.cape.length - 1]} />
          </linearGradient>
        )}
        {look.wings && (
          <linearGradient id={id('wg')} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={look.wings[0]} />
            <stop offset="100%" stopColor={look.wings[look.wings.length - 1]} />
          </linearGradient>
        )}
        {look.aura && (
          <radialGradient id={id('au')}>
            <stop offset="0%" stopColor={look.aura} stopOpacity="0.9" />
            <stop offset="60%" stopColor={look.aura} stopOpacity="0.35" />
            <stop offset="100%" stopColor={look.aura} stopOpacity="0" />
          </radialGradient>
        )}
        {look.pattern && <PatternDef id={id('pt')} kind={look.pattern} color={look.patternColor ?? '#ffffff'} />}
        {/* Đổ bóng hai bên, sáng ở giữa → vải có khối */}
        <linearGradient id={id('sh')} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#000" stopOpacity="0.24" />
          <stop offset="22%" stopColor="#000" stopOpacity="0.05" />
          <stop offset="45%" stopColor="#fff" stopOpacity="0.15" />
          <stop offset="62%" stopColor="#fff" stopOpacity="0.04" />
          <stop offset="85%" stopColor="#000" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.26" />
        </linearGradient>
        <linearGradient id={id('fd')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#000" stopOpacity="0.16" />
          <stop offset="35%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.14" />
        </linearGradient>
        <linearGradient id={id('gd')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="55%" stopColor={GOLD} />
          <stop offset="100%" stopColor={GOLD_DARK} />
        </linearGradient>
        <clipPath id={id('cl')}>
          {clipShapes.map((d, i) => <path key={i} d={d} />)}
        </clipPath>
        {hasAcc && <MetalDefs id={id('mt')} />}
      </defs>

      {/* Vầng sáng, cánh, áo choàng, đuôi váy (phía sau) */}
      {look.aura && <circle cx={CX} cy="175" r="150" fill={`url(#${id('au')})`} className={still ? undefined : 'aura-pulse'} />}
      {look.wings && (
        <g opacity="0.82" stroke="#fff" strokeWidth="1.2">
          {[false, true].map((flip) => (
            <g key={String(flip)} transform={flip ? `translate(${CX * 2} 0) scale(-1 1)` : undefined}>
              <path d="M112 112 C60 36 8 58 18 112 C26 152 80 152 112 120 Z" fill={`url(#${id('wg')})`} />
              <path d="M112 122 C72 132 40 192 68 204 C98 210 112 166 112 128 Z" fill={`url(#${id('wg')})`} opacity="0.85" />
              <path d="M110 114 C78 84 48 74 26 88 M110 118 C76 112 46 112 24 114 M108 124 C84 138 62 150 54 168" fill="none" strokeOpacity="0.55" strokeWidth="0.9" />
            </g>
          ))}
        </g>
      )}
      {look.cape && (
        <g>
          <path d="M96 108 C58 180 38 262 26 308 Q120 326 214 308 C202 262 182 180 144 108 Z" fill={`url(#${id('cp')})`} stroke={look.accent} strokeWidth="1" />
          <path d="M96 108 C58 180 38 262 26 308 Q120 326 214 308 C202 262 182 180 144 108 Z" fill={`url(#${id('sh')})`} />
          <path d="M120 120 C112 190 104 260 100 318 M120 120 C128 190 136 260 140 318" fill="none" stroke="#000" strokeOpacity="0.1" strokeWidth="2" />
        </g>
      )}
      {look.train && sil !== 'tiered' && (
        <>
          <path
            d={`M101 148 H139 L${CX + hem.hw + 6} ${hem.y + 6} Q${CX} ${hem.y + hem.b * 2 + 18} ${CX - hem.hw - 6} ${hem.y + 6} Z`}
            fill={lastSkirt}
          />
          <path
            d={`M101 148 H139 L${CX + hem.hw + 6} ${hem.y + 6} Q${CX} ${hem.y + hem.b * 2 + 18} ${CX - hem.hw - 6} ${hem.y + 6} Z`}
            fill="#000" opacity="0.14"
          />
        </>
      )}

      {look.veil && (
        <g>
          <path d="M96 44 C70 120 52 220 40 316 Q120 330 200 316 C188 220 170 120 144 44 Q120 30 96 44 Z" fill={look.veil} opacity="0.32" stroke="#fff" strokeOpacity="0.7" strokeWidth="1" />
          <path d="M104 50 C88 140 76 230 68 312 M136 50 C152 140 164 230 172 312 M120 46 V318" fill="none" stroke="#fff" strokeOpacity="0.35" strokeWidth="1.2" />
          <path d="M40 316 Q120 330 200 316" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="1.5 3" strokeLinecap="round" opacity="0.8" />
        </g>
      )}
      {sil === 'bustle' && (
        <g>
          <path d="M100 150 C40 160 22 220 30 286 Q120 300 210 286 C218 220 200 160 140 150 Z" fill={lastSkirt} />
          <path d="M100 150 C40 160 22 220 30 286 Q120 300 210 286 C218 220 200 160 140 150 Z" fill="#000" opacity="0.18" />
        </g>
      )}
      {look.petticoat && sil !== 'tiered' && (
        <path d={scallopBand(edgePoints(hem, Math.max(8, Math.round(hem.hw / 7)), -7), 5, 12)} fill={look.petticoat} stroke="#fff" strokeWidth="0.8" strokeOpacity="0.9" />
      )}

      {acc.hand && <HeldItemBack item={acc.hand} metal={metal} />}

      {/* Tóc phía sau */}
      {hairStyle === 'bun' && <circle cx={CX} cy="33" r="14" fill={hairColor} />}
      {hairStyle === 'braid' && <circle cx={CX} cy="33" r="12" fill={hairColor} />}
      {hairStyle === 'curls' && (
        <g fill={hairColor}>
          {[[88, 70], [84, 90], [88, 110], [92, 128], [152, 70], [156, 90], [152, 110], [148, 128]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="10" />
          ))}
        </g>
      )}
      <path
        d={hairStyle === 'long' ? 'M91 56 Q76 130 90 176 L150 176 Q164 130 149 56 Z' : 'M91 58 Q84 118 98 132 L142 132 Q156 118 149 58 Z'}
        fill={hairColor}
      />

      {/* Chân & giày */}
      <rect x="107" y="236" width="9" height="66" rx="4" fill={SKIN} />
      <rect x="124" y="236" width="9" height="66" rx="4" fill={SKIN} />
      <rect x="107" y="236" width="3" height="66" rx="1.5" fill={SKIN_SHADE} opacity="0.35" />
      <rect x="124" y="236" width="3" height="66" rx="1.5" fill={SKIN_SHADE} opacity="0.35" />
      <ellipse cx="110" cy="304" rx="10" ry="5.5" fill={acc.feet?.shoe ?? look.accent} />
      <ellipse cx="130" cy="304" rx="10" ry="5.5" fill={acc.feet?.shoe ?? look.accent} />
      <ellipse cx="107" cy="302.5" rx="4" ry="1.6" fill="#fff" opacity="0.4" />
      <ellipse cx="127" cy="302.5" rx="4" ry="1.6" fill="#fff" opacity="0.4" />
      {acc.feet && <ShoeDecor item={acc.feet} />}

      {/* Cổ + vai */}
      <rect x="113" y="84" width="14" height="26" rx="6" fill={SKIN} />
      <path d="M113 100 Q120 108 127 100 L127 108 Q120 114 113 108 Z" fill={SKIN_SHADE} opacity="0.4" />
      <path d="M92 112 Q94 102 112 102 L128 102 Q146 102 148 112 L148 122 L92 122 Z" fill={SKIN} />

      {/* Váy */}
      {sil === 'tiered' ? (
        <g>
          {[2, 1, 0].map((i) => (
            <g key={i}>
              <path d={TIERS[i]} fill={look.tierColors?.[i] ?? look.skirt[0]} />
              {look.pattern && <path d={TIERS[i]} fill={`url(#${id('pt')})`} />}
              <path d={TIERS[i]} fill={`url(#${id('sh')})`} />
              <path d={TIERS[i]} fill={`url(#${id('fd')})`} />
              <path d={TIERS[i]} fill="none" stroke={look.accent} strokeWidth="1" opacity="0.7" />
              <HemTrim h={TIER_HEMS[i]} look={look} />
            </g>
          ))}
        </g>
      ) : (
        <g>
          <path d={skirtPaths!} fill={skirtFill} />
          {look.pattern && <path d={skirtPaths!} fill={`url(#${id('pt')})`} />}
          {Array.from({ length: look.layers ?? 0 }, (_, i) => (
            <path
              key={i}
              d={skirtPaths!}
              fill={look.layerColor ?? '#ffffff'}
              opacity={0.28 - i * 0.05}
              stroke="#fff"
              strokeWidth="0.8"
              transform={`translate(${CX} 148) scale(${1 + layerScale * (i + 1)} ${1 + 0.03 * (i + 1)}) translate(${-CX} -148)`}
            />
          ))}
          <path d={skirtPaths!} fill={`url(#${id('sh')})`} />
          <path d={skirtPaths!} fill={`url(#${id('fd')})`} />
          <path d={skirtPaths!} fill="none" stroke={look.accent} strokeWidth="1" opacity="0.6" />
        </g>
      )}

      {/* Nếp váy, bay bổng, vệt sáng (cắt theo hình váy) */}
      <g clipPath={`url(#${id('cl')})`}>
        {folds.map((d, i) => (
          <g key={i} fill="none" strokeLinecap="round">
            <path d={d} stroke="#000" strokeOpacity="0.1" strokeWidth="2.6" />
            <path d={d} stroke="#fff" strokeOpacity="0.24" strokeWidth="1.4" transform="translate(3 0)" />
          </g>
        ))}
        <ellipse cx={CX - 10} cy={waistY + H * 0.42} rx="9" ry={H * 0.32} fill="#fff" opacity="0.13" transform={`rotate(6 ${CX - 10} ${waistY + H * 0.42})`} />
        {sil === 'cascade' &&
          [0.3, 0.52, 0.74].map((f, i) => {
            const w = 19 + f * (hem.hw - 19) * 1.02
            const pts = linePoints([CX - w, waistY + f * H + 12], [CX + w, waistY + f * H - 10], 9)
            return (
              <path key={i} d={scallopBand(pts, 8, 11)} fill="#fff" fillOpacity={0.34 - i * 0.04} stroke={look.accent} strokeOpacity="0.55" strokeWidth="0.9" />
            )
          })}
        {sil === 'petal' &&
          [-3, -2, -1, 0, 1, 2, 3].map((k) => {
            const xb = CX + (k * 84 * 2) / 7
            const w = 84 / 7
            return (
              <path
                key={k}
                d={`M${CX + k * 4} ${waistY + 4} C${xb - w * 1.3} ${waistY + H * 0.45} ${xb - w * 1.1} ${hem.y - 6} ${xb} ${hem.y + 10} C${xb + w * 1.1} ${hem.y - 6} ${xb + w * 1.3} ${waistY + H * 0.45} ${CX + k * 4} ${waistY + 4} Z`}
                fill="#fff" fillOpacity={k % 2 ? 0.16 : 0.08} stroke={look.accent} strokeOpacity="0.45" strokeWidth="0.9"
              />
            )
          })}
        {sil === 'bustle' && (
          <g fill="none" strokeLinecap="round">
            {[0.18, 0.34].map((f, i) => (
              <path key={i} d={`M${CX - 30 - f * 60} ${waistY + f * H} Q${CX} ${waistY + f * H + 26} ${CX + 30 + f * 60} ${waistY + f * H}`} stroke={look.accent} strokeOpacity="0.7" strokeWidth={7 - i * 2} />
            ))}
            {[0.18, 0.34].map((f, i) => (
              <path key={`h${i}`} d={`M${CX - 30 - f * 60} ${waistY + f * H - 2} Q${CX} ${waistY + f * H + 23} ${CX + 30 + f * 60} ${waistY + f * H - 2}`} stroke="#fff" strokeOpacity="0.45" strokeWidth="1.4" />
            ))}
          </g>
        )}
        {sil === 'crystal' && (
          <g fill="#fff" stroke="#fff" strokeOpacity="0.5" strokeWidth="0.7">
            {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((k) => {
              const x = CX + k * 19
              const y = waistY + H * (0.55 + (Math.abs(k) % 2) * 0.18)
              return <path key={k} d={`M${x} ${y - 16} L${x + 9} ${y} L${x} ${y + 16} L${x - 9} ${y} Z`} fillOpacity={k % 2 ? 0.1 : 0.2} />
            })}
          </g>
        )}
        {look.drape && (
          <g>
            <path
              d={`M101 ${waistY + 4} L139 ${waistY + 4} Q${CX + 34} ${waistY + H * 0.36} ${CX + hem.hw * 0.62} ${waistY + H * 0.66} Q${CX - 2} ${waistY + H * 0.34} 101 ${waistY + 4} Z`}
              fill={look.layerColor ?? look.accent}
              fillOpacity="0.5"
              stroke="#fff"
              strokeOpacity="0.8"
              strokeWidth="1"
            />
            <path
              d={`M110 ${waistY + 10} Q${CX + 12} ${waistY + H * 0.3} ${CX + hem.hw * 0.5} ${waistY + H * 0.6} M124 ${waistY + 10} Q${CX + 24} ${waistY + H * 0.32} ${CX + hem.hw * 0.56} ${waistY + H * 0.63}`}
              fill="none" stroke="#fff" strokeOpacity="0.55" strokeWidth="1.2"
            />
          </g>
        )}
      </g>

      {/* Viền gấu váy */}
      {sil !== 'tiered' && <HemTrim h={hem} look={look} />}
      {look.hemJewels && (
        <g>
          {edgePoints(sil === 'tiered' ? TIER_HEMS[2] : hem, 7, 16).map(([x, y], i) => (
            <Gem key={i} x={x} y={y} r={i % 2 ? 3.6 : 5} fill={i % 2 ? '#38bdf8' : look.accent} />
          ))}
        </g>
      )}

      {/* Tay */}
      <g fill="none" stroke={SKIN} strokeWidth="9" strokeLinecap="round">
        <path d="M95 112 Q78 142 88 172" />
        <path d="M145 112 Q162 142 152 172" />
      </g>
      <circle cx="88" cy="174" r="5.5" fill={SKIN} />
      <circle cx="152" cy="174" r="5.5" fill={SKIN} />
      {gloveColor && (
        <g>
          <g fill="none" stroke={gloveColor} strokeWidth="9.6" strokeLinecap="round">
            <path d="M84.5 145 Q83.5 158.5 88 172" />
            <path d="M155.5 145 Q156.5 158.5 152 172" />
          </g>
          <g fill="none" stroke={cuffColor} strokeWidth="1.4" strokeOpacity="0.55">
            <path d="M79.5 146 Q84 148 89.5 146" />
            <path d="M150.5 146 Q156 148 160.5 146" />
          </g>
          <circle cx="88" cy="174" r="5.8" fill={gloveColor} />
          <circle cx="152" cy="174" r="5.8" fill={gloveColor} />
        </g>
      )}

      {/* Thân áo */}
      {neck === 'halter' && (
        <g fill={look.bodice} stroke={look.accent} strokeWidth="0.8" strokeOpacity="0.6">
          <path d="M100 122 L112 100 L117 102 L108 124 Z" />
          <path d="M140 122 L128 100 L123 102 L132 124 Z" />
        </g>
      )}
      <path d={bodicePath} fill={look.bodice} />
      {look.pattern && <path d={bodicePath} fill={`url(#${id('pt')})`} opacity="0.7" />}
      <path d={bodicePath} fill={`url(#${id('sh')})`} />
      <path d={bodicePath} fill="none" stroke={look.accent} strokeWidth="1" opacity="0.6" />
      {/* đường may corset + bóng dưới ngực */}
      <path
        d={`M109 118 Q105 ${waistY - 14} 107 ${waistY} M131 118 Q135 ${waistY - 14} 133 ${waistY}`}
        fill="none" stroke="#000" strokeOpacity="0.14" strokeWidth="1.3"
      />
      <path d={`M99 ${waistY - 9} Q120 ${waistY - 3} 141 ${waistY - 9}`} fill="none" stroke="#000" strokeOpacity="0.1" strokeWidth="3" strokeLinecap="round" />
      {look.corset && (
        <g>
          <path
            d={Array.from({ length: 5 }, (_, i) => {
              const y = 121 + ((waistY - 125) * i) / 4
              return `M114 ${y} L126 ${y + (waistY - 125) / 8} M126 ${y} L114 ${y + (waistY - 125) / 8}`
            }).join(' ')}
            fill="none" stroke={look.accent} strokeWidth="1.4" strokeLinecap="round"
          />
          {Array.from({ length: 5 }, (_, i) => {
            const y = 121 + ((waistY - 125) * i) / 4
            return (
              <g key={i} fill="#fff" stroke={look.accent} strokeWidth="0.6">
                <circle cx="114" cy={y} r="1.3" />
                <circle cx="126" cy={y} r="1.3" />
              </g>
            )
          })}
        </g>
      )}
      <path d={NECK_TOP[neck]} fill="none" stroke="#fff" strokeWidth="2" opacity="0.7" />
      <path d={`M99 ${waistY} H141`} stroke={look.accent} strokeWidth="1.6" opacity="0.75" />

      {/* Tay áo */}
      {sleeve === 'puff' && (
        <>
          <circle cx="93" cy="116" r="12" fill={look.bodice} stroke={look.accent} strokeWidth="1" />
          <circle cx="147" cy="116" r="12" fill={look.bodice} stroke={look.accent} strokeWidth="1" />
          <path d="M83 121 Q93 127 103 121 M137 121 Q147 127 157 121" fill="none" stroke={look.accent} strokeOpacity="0.55" strokeWidth="1.2" />
          <path d="M87 108 Q93 112 99 108 M141 108 Q147 112 153 108" fill="none" stroke="#000" strokeOpacity="0.1" strokeWidth="1.2" />
          <ellipse cx="90" cy="112" rx="4" ry="3" fill="#fff" opacity="0.35" />
          <ellipse cx="144" cy="112" rx="4" ry="3" fill="#fff" opacity="0.35" />
        </>
      )}
      {sleeve === 'cap' && (
        <>
          <ellipse cx="94" cy="114" rx="8" ry="6.5" fill={look.bodice} stroke={look.accent} strokeWidth="1" />
          <ellipse cx="146" cy="114" rx="8" ry="6.5" fill={look.bodice} stroke={look.accent} strokeWidth="1" />
          <path d="M88 116 Q94 120 100 116 M140 116 Q146 120 152 116" fill="none" stroke="#000" strokeOpacity="0.12" strokeWidth="1" />
        </>
      )}
      {sleeve === 'flutter' && (
        <>
          <path d="M92 108 Q80 112 78 134 Q92 126 102 116 Z" fill={look.bodice} stroke={look.accent} strokeWidth="1" />
          <path d="M148 108 Q160 112 162 134 Q148 126 138 116 Z" fill={look.bodice} stroke={look.accent} strokeWidth="1" />
          <path d="M90 112 Q84 120 82 130 M150 112 Q156 120 158 130" fill="none" stroke="#fff" strokeOpacity="0.5" strokeWidth="1" />
        </>
      )}
      {sleeve === 'off-shoulder' && (
        <>
          <path d="M86 114 Q120 100 154 114 L152 128 Q120 116 88 128 Z" fill={look.bodice} stroke={look.accent} strokeWidth="1" />
          <path d="M86 114 Q120 100 154 114 L152 128 Q120 116 88 128 Z" fill={`url(#${id('sh')})`} />
          <path d="M88 120 Q120 108 152 120" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="3 3" opacity="0.8" />
        </>
      )}
      {sleeve === 'sheer' && (
        <>
          <g fill="none" strokeLinecap="round" stroke={look.layerColor ?? look.bodice} strokeWidth="17" opacity="0.5">
            <path d="M95 114 Q76 144 87 172" />
            <path d="M145 114 Q164 144 153 172" />
          </g>
          <g fill="none" strokeLinecap="round" stroke="#fff" strokeWidth="2" opacity="0.8">
            <path d="M89 120 Q72 146 82 170" />
            <path d="M151 120 Q168 146 158 170" />
          </g>
          <g fill="none" strokeLinecap="round" stroke="#fff" strokeWidth="1.4" strokeDasharray="1.5 2.5" opacity="0.9">
            <path d="M80 168 Q88 174 96 169" />
            <path d="M160 168 Q152 174 144 169" />
          </g>
          <ellipse cx="94" cy="114" rx="7" ry="6" fill={look.bodice} />
          <ellipse cx="146" cy="114" rx="7" ry="6" fill={look.bodice} />
        </>
      )}
      {longSleeve && (
        <g fill="none" strokeLinecap="round">
          <path d="M95 112 Q78 142 88 172" stroke={look.accent} strokeWidth="12" strokeOpacity="0.45" />
          <path d="M145 112 Q162 142 152 172" stroke={look.accent} strokeWidth="12" strokeOpacity="0.45" />
          <path d="M95 112 Q78 142 88 172" stroke={look.bodice} strokeWidth="10" />
          <path d="M145 112 Q162 142 152 172" stroke={look.bodice} strokeWidth="10" />
          <path d="M92 118 Q80 142 88 164 M148 118 Q160 142 152 164" stroke="#fff" strokeOpacity="0.3" strokeWidth="2" />
          <path d="M96 118 Q84 142 92 164 M144 118 Q156 142 148 164" stroke="#000" strokeOpacity="0.1" strokeWidth="1.6" />
          {sleeve === 'bishop' && (
            <>
              <ellipse cx="87" cy="164" rx="8.5" ry="7.5" fill={look.bodice} stroke={look.accent} strokeOpacity="0.7" strokeWidth="1" />
              <ellipse cx="153" cy="164" rx="8.5" ry="7.5" fill={look.bodice} stroke={look.accent} strokeOpacity="0.7" strokeWidth="1" />
            </>
          )}
          <path d="M82.5 170 Q88 174 94 170 M146 170 Q152 174 157.5 170" stroke="#fff" strokeWidth="3.4" />
          <ellipse cx="94" cy="114" rx="7" ry="6" fill={look.bodice} stroke="none" />
          <ellipse cx="146" cy="114" rx="7" ry="6" fill={look.bodice} stroke="none" />
        </g>
      )}

      {/* Thắt lưng, nơ, đá quý */}
      {(look.sash || empire) && (
        <g>
          <rect x="98" y={waistY - 4} width="44" height="8" rx="3" fill={look.accent} />
          <rect x="98" y={waistY - 4} width="44" height="3" rx="1.5" fill="#fff" opacity="0.28" />
        </g>
      )}
      {look.bow && <Bow x={CX} y={waistY} color={look.accent} />}
      {look.gems && (
        <>
          <Gem x={CX} y={waistY - 12} r={4.5} fill="#f472b6" />
          <Gem x={CX - 16} y={waistY + 10} fill="#38bdf8" />
          <Gem x={CX + 16} y={waistY + 10} fill="#38bdf8" />
          <Gem x={CX - 30} y={waistY + 50} r={3.6} fill="#fde047" />
          <Gem x={CX + 30} y={waistY + 50} r={3.6} fill="#fde047" />
          <Gem x={CX} y={waistY + 70} r={4.2} fill="#a78bfa" />
          <Gem x={CX - 52} y={hem.y - 20} r={3.6} fill="#f472b6" />
          <Gem x={CX + 52} y={hem.y - 20} r={3.6} fill="#f472b6" />
        </>
      )}

      {look.scepter && !acc.hand && (
        <g>
          <path d="M160 124 L150 250" stroke={`url(#${id('gd')})`} strokeWidth="4.5" strokeLinecap="round" />
          <path d="M160 124 L150 250" stroke={GOLD_DARK} strokeWidth="0.8" strokeOpacity="0.6" />
          <circle cx="161" cy="118" r="8" fill={`url(#${id('gd')})`} stroke={GOLD_DARK} strokeWidth="1" />
          <Gem x={161} y={118} r={5} fill={look.accent} />
          <path d="M155 136 Q160 132 165 137" fill="none" stroke={GOLD_DARK} strokeWidth="1.6" />
          <circle cx="152" cy="174" r="5.8" fill={gloveColor ?? SKIN} />
        </g>
      )}

      {/* Đầu */}
      <circle cx={CX} cy="64" r="27" fill={SKIN} />
      <path d="M93 66 Q96 90 120 91 Q144 90 147 66 Q140 86 120 86 Q100 86 93 66Z" fill={SKIN_SHADE} opacity="0.3" />
      <path d="M93 60 Q94 34 120 34 Q146 34 147 60 Q138 46 120 46 Q102 46 93 60Z" fill={hairColor} />
      <path d="M100 48 Q108 40 120 40" fill="none" stroke="#fff" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="109" cy="68" rx="3.4" ry="4.4" fill="#2b1a12" />
      <ellipse cx="131" cy="68" rx="3.4" ry="4.4" fill="#2b1a12" />
      <circle cx="110.2" cy="66.4" r="1.3" fill="#fff" />
      <circle cx="132.2" cy="66.4" r="1.3" fill="#fff" />
      <path d="M105.5 64 L102.5 62 M134.5 64 L137.5 62" stroke="#2b1a12" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="102" cy="77" r="5" fill="#fb7185" opacity="0.4" />
      <circle cx="138" cy="77" r="5" fill="#fb7185" opacity="0.4" />
      <path d="M113 79 Q120 86 127 79 Z" fill="#fb7185" stroke="#c2410c" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M104 60 Q109 57 114 59M126 59 Q131 57 136 60" fill="none" stroke={hairColor} strokeWidth="1.8" strokeLinecap="round" />
      <ellipse cx="120" cy="92" rx="5" ry="2" fill={SKIN_SHADE} opacity="0.5" />
      {acc.jewelry && <Earrings item={acc.jewelry} metal={metal} />}
      {look.earrings && !acc.jewelry && (
        <g stroke="#fff" strokeWidth="0.7">
          <circle cx="93" cy="74" r="2.2" fill={GOLD} />
          <circle cx="147" cy="74" r="2.2" fill={GOLD} />
          <path d="M93 76 L93 80 M147 76 L147 80" stroke={GOLD_DARK} strokeWidth="1" />
          <Gem x={93} y={84} r={3.4} fill="#f472b6" />
          <Gem x={147} y={84} r={3.4} fill="#f472b6" />
        </g>
      )}

      {/* Tóc tết / tóc xoăn phía trước */}
      {hairStyle === 'braid' && (
        <g>
          <g fill={hairColor}>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <ellipse key={i} cx={150 + (i % 2 ? 2 : -2)} cy={96 + i * 12} rx="6" ry="7" />
            ))}
          </g>
          <g fill="none" stroke="#fff" strokeOpacity="0.2" strokeWidth="1.2">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <path key={i} d={`M${145 + (i % 2 ? 2 : -2)} ${94 + i * 12} Q${150 + (i % 2 ? 2 : -2)} ${98 + i * 12} ${155 + (i % 2 ? 2 : -2)} ${94 + i * 12}`} />
            ))}
          </g>
          <Bow x={150} y={170} color={look.accent} />
        </g>
      )}

      {/* Vương miện / nơ tóc (đồ đội đầu đang đeo thì thay hẳn) */}
      {acc.head && <HeadPiece item={acc.head} metal={metal} />}
      {!acc.head && look.tiara === 'simple' && (
        <g>
          <path d="M104 44 L107 31 L114 39 L120 27 L126 39 L133 31 L136 44 Q120 49 104 44Z" fill={`url(#${id('gd')})`} stroke={GOLD_DARK} strokeWidth="1" />
          <circle cx="120" cy="36" r="2.6" fill="#f472b6" />
        </g>
      )}
      {!acc.head && look.tiara === 'jeweled' && (
        <g>
          <path d="M101 46 L104 28 L112 38 L120 22 L128 38 L136 28 L139 46 Q120 52 101 46Z" fill={`url(#${id('gd')})`} stroke={GOLD_DARK} strokeWidth="1" />
          <circle cx="104" cy="28" r="2.6" fill="#fff" stroke={GOLD_DARK} strokeWidth="0.6" />
          <circle cx="136" cy="28" r="2.6" fill="#fff" stroke={GOLD_DARK} strokeWidth="0.6" />
          <Gem x={120} y={32} r={5.5} fill="#38bdf8" />
          <Gem x={110} y={43} r={3} fill="#f472b6" />
          <Gem x={130} y={43} r={3} fill="#f472b6" />
        </g>
      )}
      {!acc.head && look.tiara === 'grand' && (
        <g>
          <path d="M97 47 L100 24 L109 36 L113 14 L120 30 L127 14 L131 36 L140 24 L143 47 Q120 54 97 47Z" fill={`url(#${id('gd')})`} stroke={GOLD_DARK} strokeWidth="1.2" />
          <circle cx="100" cy="24" r="3" fill="#fff" stroke={GOLD_DARK} strokeWidth="0.6" />
          <circle cx="140" cy="24" r="3" fill="#fff" stroke={GOLD_DARK} strokeWidth="0.6" />
          <circle cx="113" cy="14" r="3" fill="#fff" stroke={GOLD_DARK} strokeWidth="0.6" />
          <circle cx="127" cy="14" r="3" fill="#fff" stroke={GOLD_DARK} strokeWidth="0.6" />
          <Gem x={120} y={36} r={7} fill="#a855f7" />
          <Gem x={107} y={44} r={3.4} fill="#38bdf8" />
          <Gem x={133} y={44} r={3.4} fill="#38bdf8" />
        </g>
      )}
      {!acc.head && look.tiara === 'crown' && (
        <g>
          <path d="M98 48 L96 26 Q108 14 120 26 Q132 14 144 26 L142 48 Q120 55 98 48Z" fill={`url(#${id('gd')})`} stroke={GOLD_DARK} strokeWidth="1.2" />
          <path d="M100 28 Q120 8 140 28" fill="none" stroke={`url(#${id('gd')})`} strokeWidth="4" />
          <path d="M100 28 Q120 8 140 28 M120 18 V40" fill="none" stroke={GOLD_DARK} strokeWidth="0.8" />
          <path d="M98 44 Q120 50 142 44" fill="none" stroke="#fff" strokeWidth="2.6" strokeDasharray="0.1 4.5" strokeLinecap="round" />
          <circle cx="120" cy="14" r="4.5" fill={`url(#${id('gd')})`} stroke={GOLD_DARK} strokeWidth="0.8" />
          <path d="M120 9 V2 M116.5 5 H123.5" stroke={GOLD_DARK} strokeWidth="1.6" strokeLinecap="round" />
          <Gem x={120} y={32} r={6.5} fill="#ef4444" />
          <Gem x={105} y={36} r={3.6} fill="#22c55e" />
          <Gem x={135} y={36} r={3.6} fill="#22c55e" />
        </g>
      )}
      {!acc.head && !look.tiara && <Bow x={CX + 14} y={30} color={look.accent} />}

      {/* Vòng cổ */}
      {acc.jewelry && (
        <g>
          <Necklace item={acc.jewelry} metal={metal} />
          {acc.jewelry.bracelet && <Bracelet item={acc.jewelry} />}
        </g>
      )}
      {look.necklace && !acc.jewelry && (
        <g>
          <path d="M104 100 Q120 120 136 100" fill="none" stroke="#fff" strokeWidth="3" strokeDasharray="0.1 5" strokeLinecap="round" />
          <Gem x={CX} y={116} r={4.5} fill="#f472b6" />
        </g>
      )}

      {/* Đồ cầm tay: vẽ sau tóc tết để không bị nơ đuôi tóc che */}
      {acc.hand && <HeldItem item={acc.hand} metal={metal} handFill={gloveColor ?? SKIN} />}

      {/* Lấp lánh */}
      {SPARKLES.slice(0, sparkleCount).map(([x, y], i) => (
        <Sparkle key={i} x={x} y={y} s={0.9 + (i % 3) * 0.35} delay={(i * 0.37) % 2} still={still} />
      ))}
    </svg>
  )
}
