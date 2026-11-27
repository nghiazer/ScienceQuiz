import Frame from './Frame'

const S = 64
const X0 = 104
const Y0 = 24

/** Ô vuông thần kỳ 3×3 (tổng mỗi hàng, cột, đường chéo = 15): 8 1 6 / 3 5 ? / 4 9 2 — ô "?" = 7. */
const CELLS = [
  ['8', '1', '6'],
  ['3', '5', '?'],
  ['4', '9', '2'],
]

export default function MaMagicSquare() {
  return (
    <Frame label="Ô vuông 3 × 3: hàng trên 8, 1, 6; hàng giữa 3, 5, dấu hỏi; hàng dưới 4, 9, 2 / A 3 by 3 square: top row 8, 1, 6; middle row 3, 5, question mark; bottom row 4, 9, 2">
      {CELLS.map((row, r) => row.map((v, c) => {
        const q = v === '?'
        return (
          <g key={`${r}-${c}`}>
            <rect x={X0 + c * S} y={Y0 + r * S} width={S} height={S} fill={q ? '#fef9c3' : '#ede9fe'} stroke="#5b21b6" strokeWidth="4" />
            <text x={X0 + c * S + S / 2} y={Y0 + r * S + S / 2} textAnchor="middle" dominantBaseline="central" fontSize="30" fontWeight="800" fill={q ? '#ca8a04' : '#4c1d95'}>{v}</text>
          </g>
        )
      }))}
    </Frame>
  )
}
