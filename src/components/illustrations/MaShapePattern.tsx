import Frame from './Frame'

/** Dãy 11 hình lặp lại chu kỳ ▲ ● ● ■ (bắt đầu bằng ▲), vị trí thứ 12 là "?" (= ■). */
const CYCLE = ['tri', 'cir', 'cir', 'sq'] as const

function Shape({ kind, x, y }: { kind: (typeof CYCLE)[number] | 'q'; x: number; y: number }) {
  switch (kind) {
    case 'tri':
      return <polygon points={`${x},${y - 22} ${x - 24},${y + 20} ${x + 24},${y + 20}`} fill="#fb923c" stroke="#c2410c" strokeWidth="3" strokeLinejoin="round" />
    case 'cir':
      return <circle cx={x} cy={y} r="21" fill="#60a5fa" stroke="#1d4ed8" strokeWidth="3" />
    case 'sq':
      return <rect x={x - 20} y={y - 20} width="40" height="40" fill="#4ade80" stroke="#15803d" strokeWidth="3" />
    case 'q':
      return (
        <g>
          <rect x={x - 23} y={y - 23} width="46" height="46" rx="8" fill="#fff" stroke="#94a3b8" strokeWidth="3" strokeDasharray="7 5" />
          <text x={x} y={y} textAnchor="middle" dominantBaseline="central" fontSize="30" fontWeight="800" fill="#94a3b8">?</text>
        </g>
      )
  }
}

export default function MaShapePattern() {
  const items = Array.from({ length: 12 }, (_, i) => (i < 11 ? CYCLE[i % 4] : 'q'))
  return (
    <Frame label="Dãy hình lặp lại: tam giác, tròn, tròn, vuông, ... gồm 11 hình đánh số 1 đến 11, vị trí số 12 là dấu hỏi / A repeating pattern: triangle, circle, circle, square, ... 11 shapes numbered 1 to 11, and position 12 is a question mark">
      {items.map((k, i) => {
        const x = 50 + (i % 6) * 60
        const y = i < 6 ? 72 : 168
        return (
          <g key={i}>
            <Shape kind={k} x={x} y={y} />
            <text x={x} y={y + 44} textAnchor="middle" fontSize="16" fontWeight="700" fill="#64748b">{i + 1}</text>
          </g>
        )
      })}
    </Frame>
  )
}
