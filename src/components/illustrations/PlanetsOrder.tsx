import Frame from './Frame'

/** Mặt Trời + 4 hành tinh đánh số 1-4 (xa dần); mỗi số cùng một kiểu, đặt đều phía dưới từng hành tinh. */
export default function PlanetsOrder() {
  const planets = [
    { x: 120, r: 12, fill: '#a8a29e', n: '1' },
    { x: 189, r: 17, fill: '#fde68a', n: '2' },
    { x: 262, r: 18, fill: '#38bdf8', n: '3' },
    { x: 335, r: 13, fill: '#f87171', n: '4' },
  ]
  return (
    <Frame label="Mặt Trời ở bên trái, rồi bốn hành tinh đánh số 1, 2, 3, 4 theo thứ tự xa dần Mặt Trời / The Sun on the left, then four planets numbered 1, 2, 3, 4 in order of distance from the Sun">
      <circle cx="38" cy="110" r="32" fill="#fbbf24" />
      <line x1="72" y1="110" x2="385" y2="110" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" />
      {planets.map((p) => (
        <g key={p.n}>
          <circle cx={p.x} cy="110" r={p.r} fill={p.fill} stroke="#475569" strokeWidth="2" />
          <circle cx={p.x} cy="170" r="18" fill="#fff" stroke="#475569" strokeWidth="2" />
          <text x={p.x} y="178" textAnchor="middle" fontSize="22" fontWeight="800" fill="#334155">{p.n}</text>
        </g>
      ))}
    </Frame>
  )
}
