import Frame from './Frame'

const BW = 80
const BH = 46

/** Tháp số 4 tầng, mỗi viên = tổng hai viên ngay bên dưới. Đáy 2, 5, 3, 4 → 7, 8, 7 → 15, 15 → ? (= 30). */
const ROWS: { y: number; x0: number; vals: string[] }[] = [
  { y: 168, x0: 40, vals: ['2', '5', '3', '4'] },
  { y: 122, x0: 80, vals: ['7', '8', '7'] },
  { y: 76, x0: 120, vals: ['15', '15'] },
  { y: 30, x0: 160, vals: ['?'] },
]

export default function MaNumberPyramid() {
  return (
    <Frame label="Tháp số 4 tầng, mỗi viên gạch bằng tổng hai viên ngay bên dưới; hàng dưới cùng 2, 5, 3, 4; viên trên cùng là dấu hỏi / A 4-row number pyramid where each brick is the sum of the two bricks below it; bottom row 2, 5, 3, 4; the top brick is a question mark">
      {[...ROWS].reverse().map((r) => r.vals.map((v, i) => {
        const q = v === '?'
        return (
          <g key={`${r.y}-${i}`}>
            <rect x={r.x0 + i * BW} y={r.y} width={BW} height={BH} fill={q ? '#fff' : '#fed7aa'} stroke={q ? '#94a3b8' : '#c2410c'} strokeWidth="4" strokeDasharray={q ? '8 6' : undefined} strokeLinejoin="round" />
            <text x={r.x0 + i * BW + BW / 2} y={r.y + BH / 2} textAnchor="middle" dominantBaseline="central" fontSize="24" fontWeight="800" fill={q ? '#64748b' : '#7c2d12'}>{v}</text>
          </g>
        )
      }))}
    </Frame>
  )
}
