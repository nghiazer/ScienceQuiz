import Frame from './Frame'

const DATA = [
  { emoji: '🍎', n: 5, color: '#ef4444' },
  { emoji: '🍌', n: 3, color: '#facc15' },
  { emoji: '🍇', n: 7, color: '#8b5cf6' },
  { emoji: '🍊', n: 4, color: '#fb923c' },
]

/** Biểu đồ cột: số bạn thích mỗi loại quả. */
export default function BarChart() {
  const x0 = 60
  const base = 190
  const unit = 18
  return (
    <Frame label="Biểu đồ cột số bạn thích các loại quả: táo 5, chuối 3, nho 7, cam 4 / Bar chart of favourite fruits: apple 5, banana 3, grape 7, orange 4">
      {[0, 2, 4, 6, 8].map((v) => (
        <g key={v}>
          <line x1={x0} x2="380" y1={base - v * unit} y2={base - v * unit} stroke="#cbd5e1" strokeWidth="2" strokeDasharray={v ? '4 5' : '0'} />
          <text x={x0 - 10} y={base - v * unit + 6} textAnchor="end" fontSize="16" fontWeight="700" fill="#475569">{v}</text>
        </g>
      ))}
      {DATA.map((d, i) => {
        const x = x0 + 25 + i * 80
        return (
          <g key={d.emoji}>
            <rect x={x} y={base - d.n * unit} width="44" height={d.n * unit} rx="6" fill={d.color} />
            <text x={x + 22} y={base + 30} textAnchor="middle" fontSize="28">{d.emoji}</text>
          </g>
        )
      })}
    </Frame>
  )
}
