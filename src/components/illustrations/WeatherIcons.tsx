import Frame from './Frame'

const CARDS: [string, number, number][] = [
  ['A', 105, 8],
  ['B', 295, 8],
  ['C', 105, 128],
  ['D', 295, 128],
]

export default function WeatherIcons() {
  return (
    <Frame label="Bốn biểu tượng thời tiết: A Mặt Trời, B mây mưa, C bông tuyết, D gió / Four weather symbols: A sun, B rain cloud, C snowflake, D wind">
      {/* thẻ nền + chữ A/B/C/D ở dưới mỗi hình */}
      {CARDS.map(([l, cx, y]) => (
        <g key={l}>
          <rect x={cx - 90} y={y} width="180" height="104" rx="14" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
          <text x={cx} y={y + 96} textAnchor="middle" fontSize="24" fontWeight="800" fill="#334155">{l}</text>
        </g>
      ))}
      {/* A sun */}
      <g transform="translate(105 46) scale(0.85)">
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={i} y1="-24" y2="-34" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" transform={`rotate(${i * 45})`} />
        ))}
        <circle r="18" fill="#fbbf24" />
      </g>
      {/* B rain cloud */}
      <g transform="translate(295 44) scale(0.9)">
        <ellipse cx="0" cy="-4" rx="36" ry="16" fill="#94a3b8" />
        <ellipse cx="-16" cy="-12" rx="18" ry="14" fill="#94a3b8" />
        <ellipse cx="14" cy="-14" rx="16" ry="12" fill="#94a3b8" />
        {[-16, 0, 16].map((x) => (
          <line key={x} x1={x} y1="16" x2={x - 4} y2="30" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" />
        ))}
      </g>
      {/* C snowflake */}
      <g transform="translate(105 168) scale(0.95)" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" fill="none">
        {[0, 60, 120].map((a) => (
          <g key={a} transform={`rotate(${a})`}>
            <line x1="0" y1="-30" x2="0" y2="30" />
            <path d="M-7 -21 L0 -28 L7 -21" />
            <path d="M-7 21 L0 28 L7 21" />
          </g>
        ))}
      </g>
      {/* D wind */}
      <g transform="translate(295 170) scale(0.85)" stroke="#64748b" strokeWidth="5" strokeLinecap="round" fill="none">
        <path d="M-40 -10 H20 Q34 -10 34 -22 Q34 -34 20 -34" />
        <path d="M-40 10 H30 Q44 10 44 22 Q44 34 30 34" />
      </g>
    </Frame>
  )
}
