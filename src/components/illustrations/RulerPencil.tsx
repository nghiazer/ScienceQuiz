import Frame from './Frame'

export default function RulerPencil() {
  const x0 = 40
  const unit = 30
  return (
    <Frame label="Bút chì nằm trên thước, dài 7 cm, đầu bút chì nằm ở vạch 7 / A pencil lies along a ruler, 7 cm long, ending at the 7 mark">
      <rect x={x0} y="150" width={10 * unit} height="40" fill="#fef3c7" stroke="#a16207" strokeWidth="3" />
      {Array.from({ length: 11 }).map((_, i) => (
        <g key={i}>
          <line x1={x0 + i * unit} y1="150" x2={x0 + i * unit} y2={i % 5 === 0 ? 120 : 135} stroke="#78350f" strokeWidth="2" />
          <text x={x0 + i * unit} y="208" textAnchor="middle" fontSize="16" fontWeight="700" fill="#334155">{i}</text>
        </g>
      ))}
      {/* pencil: eraser at 0, tip at 7 */}
      <rect x={x0} y="92" width={7 * unit - 16} height="22" fill="#facc15" stroke="#854d0e" strokeWidth="2" />
      <rect x={x0} y="92" width="16" height="22" fill="#f472b6" stroke="#854d0e" strokeWidth="2" />
      <polygon points={`${x0 + 7 * unit - 16},92 ${x0 + 7 * unit},103 ${x0 + 7 * unit - 16},114`} fill="#fde68a" stroke="#854d0e" strokeWidth="2" />
      <text x="20" y="80" fontSize="18" fontWeight="800" fill="#334155">cm</text>
    </Frame>
  )
}
