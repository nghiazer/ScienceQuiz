import Frame from './Frame'

export default function PlanetsOrder() {
  const planets = [
    { x: 110, r: 12, fill: '#a8a29e', n: '1' },
    { x: 165, r: 17, fill: '#fde68a', n: '2' },
    { x: 230, r: 18, fill: '#38bdf8', n: '3' },
    { x: 290, r: 13, fill: '#f87171', n: '4' },
  ]
  return (
    <Frame label="Mặt Trời ở bên trái, rồi các hành tinh 1 Sao Thủy, 2 Sao Kim, 3 Trái Đất, 4 Sao Hỏa theo thứ tự xa dần / The Sun on the left, then planets 1 Mercury, 2 Venus, 3 Earth, 4 Mars in order of distance">
      <circle cx="30" cy="120" r="34" fill="#fbbf24" />
      <line x1="66" y1="120" x2="380" y2="120" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" />
      {planets.map((p) => (
        <g key={p.n}>
          <circle cx={p.x} cy="120" r={p.r} fill={p.fill} stroke="#475569" strokeWidth="2" />
          <text x={p.x} y="170" textAnchor="middle" fontSize="22" fontWeight="800" fill="#334155">{p.n}</text>
        </g>
      ))}
      <circle cx="355" cy="120" r="22" fill="#fdba74" stroke="#475569" strokeWidth="2" />
    </Frame>
  )
}
