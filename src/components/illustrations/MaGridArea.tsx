import Frame from './Frame'

const C = 40
const X0 = 40
const Y0 = 20

/** Lưới 8×5 ô; A: hình chữ L 5 ô, B: hình chữ nhật 3×2 = 6 ô, C: hình chữ T 4 ô. */
const SHAPES = [
  { name: 'A', fill: '#fca5a5', stroke: '#b91c1c', cells: [[0, 1], [0, 2], [0, 3], [0, 4], [1, 4]], d: 'M40 60 H80 V180 H120 V220 H40 Z', lx: 60, ly: 120 },
  { name: 'B', fill: '#93c5fd', stroke: '#1d4ed8', cells: [[3, 0], [4, 0], [5, 0], [3, 1], [4, 1], [5, 1]], d: 'M160 20 H280 V100 H160 Z', lx: 220, ly: 40 },
  { name: 'C', fill: '#86efac', stroke: '#15803d', cells: [[5, 3], [6, 3], [7, 3], [6, 4]], d: 'M240 140 H360 V180 H320 V220 H280 V180 H240 Z', lx: 300, ly: 160 },
]

export default function MaGridArea() {
  return (
    <Frame label="Lưới ô vuông 8 cột, 5 hàng với ba hình tô màu A, B, C ghép từ các ô vuông / A square grid 8 wide and 5 tall with three coloured shapes A, B and C made of whole squares">
      <rect x={X0} y={Y0} width={8 * C} height={5 * C} fill="#fff" />
      {SHAPES.map((s) => s.cells.map(([cx, cy]) => (
        <rect key={`${s.name}${cx}-${cy}`} x={X0 + cx * C} y={Y0 + cy * C} width={C} height={C} fill={s.fill} />
      )))}
      <g stroke="#94a3b8" strokeWidth="2">
        {Array.from({ length: 9 }, (_, i) => <line key={`v${i}`} x1={X0 + i * C} y1={Y0} x2={X0 + i * C} y2={Y0 + 5 * C} />)}
        {Array.from({ length: 6 }, (_, i) => <line key={`h${i}`} x1={X0} y1={Y0 + i * C} x2={X0 + 8 * C} y2={Y0 + i * C} />)}
      </g>
      {SHAPES.map((s) => (
        <g key={s.name}>
          <path d={s.d} fill="none" stroke={s.stroke} strokeWidth="5" strokeLinejoin="round" />
          <text x={s.lx} y={s.ly} textAnchor="middle" dominantBaseline="central" fontSize="26" fontWeight="800" fill={s.stroke}>{s.name}</text>
        </g>
      ))}
    </Frame>
  )
}
