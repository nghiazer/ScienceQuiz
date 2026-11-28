import type { FeetItem, HandItem, HeadItem, JewelryItem, Metal, Motif } from '../../data/accessories'
import { Bow, Gem } from './svgParts'

/*
 * Phụ kiện vẽ bằng SVG trong toạ độ của công chúa (khung 240×330, tâm x = 120):
 * đầu ở (120, 64), tai ở x = 93/147, cổ tay trái (88, 174), tay phải (152, 174), giày ở y = 304.
 * Dùng chung cho PrincessSvg (đeo lên người) và AccessoryIcon (ảnh nhỏ trong cửa hàng).
 */

/** Trả về `url(#…)` của dải màu kim loại (xem MetalDefs). */
export type MetalFill = (m: Metal) => string

const METAL_STOPS: Record<Metal, [string, string, string]> = {
  gold: ['#fef3c7', '#fcd34d', '#d97706'],
  silver: ['#ffffff', '#cbd5e1', '#64748b'],
  rose: ['#ffe4e6', '#f9a8d4', '#be185d'],
}
const METAL_MID: Record<Metal, string> = { gold: '#fcd34d', silver: '#cbd5e1', rose: '#f9a8d4' }
const METAL_DARK: Record<Metal, string> = { gold: '#d97706', silver: '#64748b', rose: '#be185d' }
const LEAF = '#22c55e'
const STEM = '#16a34a'

/** Ba dải màu kim loại, id = `${id}-gold|silver|rose`. */
export function MetalDefs({ id }: { id: string }) {
  return (
    <>
      {(Object.keys(METAL_STOPS) as Metal[]).map((m) => (
        <linearGradient key={m} id={`${id}-${m}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={METAL_STOPS[m][0]} />
          <stop offset="55%" stopColor={METAL_STOPS[m][1]} />
          <stop offset="100%" stopColor={METAL_STOPS[m][2]} />
        </linearGradient>
      ))}
    </>
  )
}

function starPath(x: number, y: number, r: number): string {
  return Array.from({ length: 10 }, (_, i) => {
    const a = (Math.PI * i) / 5 - Math.PI / 2
    const rr = i % 2 ? r * 0.45 : r
    return `${i ? 'L' : 'M'}${(x + rr * Math.cos(a)).toFixed(1)} ${(y + rr * Math.sin(a)).toFixed(1)}`
  }).join(' ') + ' Z'
}

/** Họa tiết nhỏ (tim, sao, hoa, đá) tâm (x, y), bán kính r. */
export function MotifShape({ kind, x, y, r, fill }: { kind: Motif; x: number; y: number; r: number; fill: string }) {
  switch (kind) {
    case 'heart':
      return (
        <path
          d={`M${x} ${y + r * 0.9} C${x - r * 1.5} ${y - r * 0.1} ${x - r * 0.8} ${y - r * 1.2} ${x} ${y - r * 0.4} C${x + r * 0.8} ${y - r * 1.2} ${x + r * 1.5} ${y - r * 0.1} ${x} ${y + r * 0.9} Z`}
          fill={fill} stroke="#fff" strokeWidth="0.7"
        />
      )
    case 'star':
      return <path d={starPath(x, y, r)} fill={fill} stroke="#fff" strokeWidth="0.7" strokeLinejoin="round" />
    case 'flower':
      return (
        <g>
          {[0, 72, 144, 216, 288].map((a) => (
            <circle key={a} cx={x + r * 0.55 * Math.cos(((a - 90) * Math.PI) / 180)} cy={y + r * 0.55 * Math.sin(((a - 90) * Math.PI) / 180)} r={r * 0.48} fill={fill} stroke="#fff" strokeWidth="0.5" />
          ))}
          <circle cx={x} cy={y} r={r * 0.32} fill="#fde047" />
        </g>
      )
    case 'gem':
      return <Gem x={x} y={y} r={r} fill={fill} />
  }
}

/** Đồ đội đầu (thay cho vương miện / nơ tóc của váy). */
export function HeadPiece({ item, metal }: { item: HeadItem; metal: MetalFill }) {
  const dark = METAL_DARK[item.metal]
  switch (item.kind) {
    case 'bow':
      return (
        <g>
          <Bow x={134} y={30} color={item.main} />
          <g fill={item.second}>
            <circle cx="125" cy="27" r="1.5" /><circle cx="127" cy="34" r="1.3" />
            <circle cx="143" cy="27" r="1.5" /><circle cx="141" cy="34" r="1.3" />
          </g>
          <MotifShape kind={item.motif} x={134} y={30} r={3} fill={item.gem} />
        </g>
      )
    case 'flower':
      return (
        <g>
          <ellipse cx="128" cy="40" rx="5" ry="2.2" fill={LEAF} transform="rotate(-25 128 40)" />
          <ellipse cx="143" cy="41" rx="5" ry="2.2" fill={LEAF} transform="rotate(25 143 41)" />
          <MotifShape kind="flower" x={124} y={31} r={6} fill={item.second} />
          <MotifShape kind="flower" x={136} y={35} r={10} fill={item.main} />
          <circle cx="136" cy="35" r="3.2" fill={item.gem} stroke="#fff" strokeWidth="0.8" />
        </g>
      )
    case 'headband':
      return (
        <g>
          <path d="M94 57 Q95 33 120 33 Q145 33 146 57" fill="none" stroke={item.main} strokeWidth="6" strokeLinecap="round" />
          <path d="M97 52 Q99 36 120 36 Q141 36 143 52" fill="none" stroke="#fff" strokeOpacity="0.45" strokeWidth="1.2" strokeDasharray="2 3" />
          <circle cx="132" cy="36" r="6.5" fill={item.second} stroke={item.main} strokeWidth="1" />
          <MotifShape kind={item.motif} x={132} y={36} r={4.5} fill={item.gem} />
        </g>
      )
    case 'tiara':
      return (
        <g>
          <path d="M101 46 L104 28 L112 38 L120 22 L128 38 L136 28 L139 46 Q120 52 101 46Z" fill={metal(item.metal)} stroke={dark} strokeWidth="1" />
          <circle cx="104" cy="28" r="2.6" fill="#fff" stroke={dark} strokeWidth="0.6" />
          <circle cx="136" cy="28" r="2.6" fill="#fff" stroke={dark} strokeWidth="0.6" />
          <MotifShape kind={item.motif} x={120} y={33} r={5.5} fill={item.gem} />
          <Gem x={110} y={43} r={3} fill={item.main} />
          <Gem x={130} y={43} r={3} fill={item.main} />
        </g>
      )
    case 'crown':
      return (
        <g>
          <path d="M98 48 L96 26 Q108 14 120 26 Q132 14 144 26 L142 48 Q120 55 98 48Z" fill={metal(item.metal)} stroke={dark} strokeWidth="1.2" />
          <path d="M100 28 Q120 8 140 28" fill="none" stroke={metal(item.metal)} strokeWidth="4" />
          <path d="M100 28 Q120 8 140 28 M120 18 V40" fill="none" stroke={dark} strokeWidth="0.8" />
          <path d="M98 44 Q120 50 142 44" fill="none" stroke={item.second} strokeWidth="2.6" strokeDasharray="0.1 4.5" strokeLinecap="round" />
          <circle cx="120" cy="14" r="4.5" fill={metal(item.metal)} stroke={dark} strokeWidth="0.8" />
          <path d="M120 9 V2 M116.5 5 H123.5" stroke={dark} strokeWidth="1.6" strokeLinecap="round" />
          <MotifShape kind={item.motif} x={120} y={32} r={6.5} fill={item.gem} />
          <Gem x={105} y={36} r={3.6} fill={item.main} />
          <Gem x={135} y={36} r={3.6} fill={item.main} />
        </g>
      )
  }
}

/** Điểm trên đường vòng cổ M104 100 Q120 120 136 100 tại t (0…1). */
function neckPoint(t: number, sag = 0): [number, number] {
  const u = 1 - t
  return [u * u * 104 + 2 * u * t * 120 + t * t * 136, u * u * 100 + 2 * u * t * (120 + sag) + t * t * 100]
}

/** Vòng cổ (thay cho `necklace` của váy). */
export function Necklace({ item, metal }: { item: JewelryItem; metal: MetalFill }) {
  const mid = METAL_MID[item.metal]
  switch (item.kind) {
    case 'beads':
      return (
        <g>
          {Array.from({ length: 9 }, (_, i) => {
            const [x, y] = neckPoint(i / 8)
            return <circle key={i} cx={x} cy={y} r={i === 4 ? 3.2 : 2.4} fill={i % 2 ? item.gem : item.main} stroke="#fff" strokeWidth="0.6" />
          })}
        </g>
      )
    case 'pendant':
      return (
        <g>
          <path d="M104 100 Q120 120 136 100" fill="none" stroke={mid} strokeWidth="1.4" />
          <circle cx="120" cy="110.5" r="1.6" fill={mid} />
          <MotifShape kind={item.motif} x={120} y={116} r={4.8} fill={item.gem} />
        </g>
      )
    case 'pearls':
      return (
        <g>
          {Array.from({ length: 13 }, (_, i) => {
            const [x, y] = neckPoint(i / 12)
            return <circle key={i} cx={x} cy={y} r="2.1" fill="#fff" stroke="#cbd5e1" strokeWidth="0.6" />
          })}
          <Gem x={120} y={115} r={3.4} fill={item.gem} />
        </g>
      )
    case 'collar':
      return (
        <g>
          <path d="M104 100 Q120 120 136 100" fill="none" stroke={metal(item.metal)} strokeWidth="3.4" strokeLinecap="round" />
          {[0.18, 0.34, 0.5, 0.66, 0.82].map((t, i) => {
            const [x, y] = neckPoint(t)
            return <Gem key={i} x={x} y={y + (i === 2 ? 5 : 3.5)} r={i === 2 ? 4.8 : i % 2 ? 2.8 : 2.2} fill={i % 2 ? item.main : item.gem} />
          })}
        </g>
      )
  }
}

/** Hoa tai hai bên (thay cho `earrings` của váy). */
export function Earrings({ item, metal }: { item: JewelryItem; metal: MetalFill }) {
  const mid = METAL_MID[item.metal]
  const dark = METAL_DARK[item.metal]
  return (
    <g>
      {[93, 147].map((x) => {
        switch (item.earrings) {
          case 'stud':
            return (
              <g key={x}>
                <circle cx={x} cy="75" r="2.8" fill={metal(item.metal)} stroke={dark} strokeWidth="0.5" />
                <circle cx={x} cy="75" r="1.5" fill={item.gem} />
              </g>
            )
          case 'drop':
            return (
              <g key={x}>
                <circle cx={x} cy="74" r="2.2" fill={mid} stroke="#fff" strokeWidth="0.7" />
                <path d={`M${x} 76 V80`} stroke={dark} strokeWidth="1" />
                <MotifShape kind={item.motif} x={x} y={84} r={3.4} fill={item.gem} />
              </g>
            )
          case 'hoop':
            return (
              <g key={x}>
                <circle cx={x} cy="79.5" r="4.2" fill="none" stroke={mid} strokeWidth="1.6" />
                <Gem x={x} y={83.5} r={2.2} fill={item.gem} />
              </g>
            )
        }
      })}
    </g>
  )
}

/** Vòng tay ở cổ tay trái. */
export function Bracelet({ item }: { item: JewelryItem }) {
  return (
    <g>
      <ellipse cx="88" cy="167" rx="6.4" ry="2.4" fill="none" stroke={METAL_MID[item.metal]} strokeWidth="2.2" />
      {[84, 88, 92].map((x, i) => <circle key={x} cx={x} cy={i === 1 ? 169.2 : 168.4} r="1.3" fill={item.gem} stroke="#fff" strokeWidth="0.4" />)}
    </g>
  )
}

/** Chi tiết trên giày (vẽ sau hai hình giày đã tô màu `shoe`). */
export function ShoeDecor({ item }: { item: FeetItem }) {
  switch (item.kind) {
    case 'flats':
      return (
        <g>
          {[110, 130].map((x) => (
            <g key={x} transform={`translate(${x} 301) scale(0.24)`}>
              <Bow x={0} y={0} color={item.trim} />
            </g>
          ))}
        </g>
      )
    case 'heels':
      return (
        <g>
          <path d="M103 300 Q110 296.5 117 300 M123 300 Q130 296.5 137 300" fill="none" stroke={item.trim} strokeWidth="1.8" strokeLinecap="round" />
          <Gem x={110} y={298} r={1.8} fill={item.trim} />
          <Gem x={130} y={298} r={1.8} fill={item.trim} />
        </g>
      )
    case 'glass':
      return (
        <g>
          <ellipse cx="110" cy="304" rx="10" ry="5.5" fill="none" stroke="#7dd3fc" strokeWidth="0.9" />
          <ellipse cx="130" cy="304" rx="10" ry="5.5" fill="none" stroke="#7dd3fc" strokeWidth="0.9" />
          <Gem x={113} y={303} r={2.4} fill={item.trim} />
          <Gem x={133} y={303} r={2.4} fill={item.trim} />
          <path d="M104 302 L106 300 M124 302 L126 300" stroke="#fff" strokeWidth="1" strokeLinecap="round" />
        </g>
      )
  }
}

/** Tâm và góc nghiêng của tán ô (lớp sau, vẽ trước tóc và thân). */
const PARASOL = { x: 176, y: 80, tilt: 20 }

/** Phần đồ cầm tay nằm SAU người công chúa (hiện chỉ có tán ô che nắng). */
export function HeldItemBack({ item, metal }: { item: HandItem; metal: MetalFill }) {
  if (item.kind !== 'parasol') return null
  const { x, y, tilt } = PARASOL
  const n = 6
  const hw = 36
  const scallops = Array.from({ length: n }, (_, i) => {
    const x1 = x + hw - ((2 * hw) * (i + 1)) / n
    const xm = x + hw - ((2 * hw) * (i + 0.5)) / n
    return `Q${xm.toFixed(1)} ${y + 7} ${x1.toFixed(1)} ${y}`
  }).join(' ')
  return (
    <g transform={`rotate(${tilt} ${x} ${y})`}>
      <path d={`M${x - hw} ${y} Q${x} ${y - 58} ${x + hw} ${y} ${scallops} Z`} fill={item.main} stroke="#fff" strokeWidth="1" />
      {[-24, -8, 8, 24].map((dx) => (
        <path key={dx} d={`M${x} ${y - 29} Q${x + dx * 0.7} ${y - 20} ${x + dx} ${y + 2}`} fill="none" stroke={item.second} strokeWidth="2" strokeOpacity="0.85" />
      ))}
      <circle cx={x} cy={y - 30} r="2.6" fill={metal(item.metal)} stroke={METAL_DARK[item.metal]} strokeWidth="0.6" />
      <MotifShape kind={item.motif} x={x} y={y - 12} r={4} fill={item.gem} />
    </g>
  )
}

/** Đồ cầm ở tay phải (thay cho quyền trượng của váy). `handFill` = màu bàn tay vẽ đè lên cán (da hoặc găng). */
export function HeldItem({ item, metal, handFill }: { item: HandItem; metal: MetalFill; handFill?: string }) {
  const dark = METAL_DARK[item.metal]
  const hand = handFill ? <circle cx="152" cy="174" r="5.8" fill={handFill} /> : null
  switch (item.kind) {
    case 'wand':
      return (
        <g>
          <path d="M147 192 L166 136" stroke={metal(item.metal)} strokeWidth="3.2" strokeLinecap="round" />
          <path d="M147 192 L166 136" stroke={dark} strokeWidth="0.7" strokeOpacity="0.6" />
          <g transform="translate(164 143) scale(0.3)">
            <Bow x={0} y={0} color={item.main} />
          </g>
          <MotifShape kind={item.motif === 'gem' ? 'star' : item.motif} x={167.5} y={129} r={8} fill={item.gem} />
          <circle cx="178" cy="124" r="1.4" fill="#fff" />
          <circle cx="174" cy="117" r="1" fill="#fff" />
          {hand}
        </g>
      )
    case 'fan': {
      const px = 152
      const py = 172
      const R = 28
      const xy = (deg: number, r = R): [number, number] => [px + r * Math.cos((deg * Math.PI) / 180), py + r * Math.sin((deg * Math.PI) / 180)]
      const pt = (deg: number, r = R): string => xy(deg, r).map((v) => v.toFixed(1)).join(' ')
      const ribs = [-90, -75, -60, -45, -30, -15]
      return (
        <g>
          <path d={`M${px} ${py} L${pt(-97)} A${R} ${R} 0 0 1 ${pt(-8)} Z`} fill={item.main} stroke="#fff" strokeWidth="1" />
          <path d={`M${pt(-97, R * 0.62)} A${R * 0.62} ${R * 0.62} 0 0 1 ${pt(-8, R * 0.62)}`} fill="none" stroke={item.second} strokeWidth="2.2" />
          {ribs.map((a) => <path key={a} d={`M${px} ${py} L${pt(a, R - 1)}`} stroke={item.second} strokeWidth="0.9" strokeOpacity="0.8" />)}
          {[-92, -77, -62, -47, -32, -17].map((a) => {
            const [cx, cy] = xy(a + 4.5)
            return <circle key={a} cx={cx} cy={cy} r="1.8" fill={item.gem} stroke="#fff" strokeWidth="0.4" />
          })}
          {hand}
          <circle cx={px} cy={py} r="2" fill={metal(item.metal)} stroke={dark} strokeWidth="0.5" />
        </g>
      )
    }
    case 'handbag':
      return (
        <g>
          <path d="M144.5 181 Q152 158 159.5 181" fill="none" stroke={metal(item.metal)} strokeWidth="2.2" />
          <path d="M141 180 H163 Q166.5 180 166 184 L165 197 Q164.6 200 161.5 200 H142.5 Q139.4 200 139 197 L138 184 Q137.5 180 141 180 Z" fill={item.main} stroke="#fff" strokeWidth="1" />
          <path d="M138.6 181 H165.4 L152 191 Z" fill={item.second} stroke="#fff" strokeWidth="0.6" />
          <MotifShape kind={item.motif} x={152} y={191} r={3.2} fill={item.gem} />
          {hand}
        </g>
      )
    case 'bouquet':
      return (
        <g>
          <path d="M152 170 L147 196 M152 170 L152 198 M152 170 L157 196" stroke={STEM} strokeWidth="1.6" strokeLinecap="round" />
          <ellipse cx="141" cy="160" rx="6" ry="2.6" fill={LEAF} transform="rotate(-35 141 160)" />
          <ellipse cx="163" cy="160" rx="6" ry="2.6" fill={LEAF} transform="rotate(35 163 160)" />
          <MotifShape kind="flower" x={145} y={160} r={7} fill={item.gem} />
          <MotifShape kind="flower" x={159} y={160} r={7} fill={item.second} />
          <MotifShape kind="flower" x={152} y={152} r={7.5} fill={item.main} />
          <MotifShape kind="flower" x={152} y={164} r={6} fill={item.main} />
          {hand}
          <g transform="translate(152 182) scale(0.36)">
            <Bow x={0} y={0} color={item.second} />
          </g>
        </g>
      )
    case 'parasol':
      return (
        <g>
          <path d={`M150 186 L${PARASOL.x} ${PARASOL.y}`} stroke={metal(item.metal)} strokeWidth="2.4" strokeLinecap="round" />
          <path d="M150 186 Q147.5 193 152.5 194" fill="none" stroke={dark} strokeWidth="2.4" strokeLinecap="round" />
          {hand}
        </g>
      )
  }
}
