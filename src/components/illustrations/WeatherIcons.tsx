import Frame from './Frame'

export default function WeatherIcons() {
  return (
    <Frame label="Bốn biểu tượng thời tiết: A Mặt Trời, B mây mưa, C bông tuyết, D gió / Four weather symbols: A sun, B rain cloud, C snowflake, D wind">
      {/* A sun */}
      <g transform="translate(100 60)">
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={i} y1="-24" y2="-34" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" transform={`rotate(${i * 45})`} />
        ))}
        <circle r="18" fill="#fbbf24" />
      </g>
      {/* B rain cloud */}
      <g transform="translate(300 60)">
        <ellipse cx="0" cy="-4" rx="36" ry="16" fill="#94a3b8" />
        <ellipse cx="-16" cy="-12" rx="18" ry="14" fill="#94a3b8" />
        <ellipse cx="14" cy="-14" rx="16" ry="12" fill="#94a3b8" />
        {[-16, 0, 16].map((x) => (
          <line key={x} x1={x} y1="16" x2={x - 4} y2="30" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" />
        ))}
      </g>
      {/* C snowflake */}
      <g transform="translate(100 180)" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round">
        {[0, 60, 120].map((a) => (
          <line key={a} x1="0" y1="-30" x2="0" y2="30" transform={`rotate(${a})`} />
        ))}
      </g>
      {/* D wind */}
      <g transform="translate(300 180)" stroke="#64748b" strokeWidth="5" strokeLinecap="round" fill="none">
        <path d="M-40 -10 H20 Q34 -10 34 -22 Q34 -34 20 -34" />
        <path d="M-40 10 H30 Q44 10 44 22 Q44 34 30 34" />
      </g>
      {[['A', 40, 110], ['B', 240, 110], ['C', 40, 230], ['D', 240, 230]].map(([l, x, y]) => (
        <text key={l as string} x={x as number} y={y as number} fontSize="20" fontWeight="800" fill="#334155">{l}</text>
      ))}
    </Frame>
  )
}
