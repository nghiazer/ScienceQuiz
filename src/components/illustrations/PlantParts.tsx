import Frame from './Frame'

// Số đặt cạnh bộ phận (không đè lên lá hay hoa), nối bằng một đường ngắn.
const BADGES: [string, number, number, number, number][] = [
  // [số, tâm x, tâm y, điểm chỉ x, điểm chỉ y]
  ['1', 100, 216, 150, 215],
  ['2', 262, 172, 207, 172],
  ['3', 70, 118, 139, 152],
  ['4', 290, 50, 232, 68],
]

export default function PlantParts() {
  return (
    <Frame label="Cây có rễ, thân, lá và hoa. Số 1 là rễ, 2 là thân, 3 là lá, 4 là hoa / Plant with roots, stem, leaf and flower; 1 root, 2 stem, 3 leaf, 4 flower">
      <rect y="195" width="400" height="45" fill="#92400e" />
      <path d="M200 195 Q180 205 150 215 M200 200 Q215 210 245 220 M200 205 Q190 215 180 232" stroke="#fde68a" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M200 195 V105" stroke="#15803d" strokeWidth="9" strokeLinecap="round" />
      <ellipse cx="160" cy="150" rx="36" ry="17" fill="#22c55e" transform="rotate(-25 160 150)" />
      <ellipse cx="240" cy="128" rx="36" ry="17" fill="#16a34a" transform="rotate(25 240 128)" />
      {[0, 72, 144, 216, 288].map((a) => (
        <circle key={a} cx={200 + 16 * Math.cos((a * Math.PI) / 180)} cy={75 + 16 * Math.sin((a * Math.PI) / 180)} r="12" fill="#f472b6" />
      ))}
      <circle cx="200" cy="75" r="9" fill="#facc15" />
      {BADGES.map(([n, x, y, px, py]) => (
        <g key={n}>
          <line x1={x} y1={y} x2={px} y2={py} stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx={x} cy={y} r="16" fill="#fff" stroke="#334155" strokeWidth="3" />
          <text x={x} y={y + 7} textAnchor="middle" fontSize="22" fontWeight="800" fill="#334155">{n}</text>
        </g>
      ))}
    </Frame>
  )
}
