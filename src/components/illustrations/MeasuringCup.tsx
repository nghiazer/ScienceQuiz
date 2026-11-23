import Frame from './Frame'

export default function MeasuringCup() {
  return (
    <Frame label="Ca đong có vạch 200 ml, nước đầy đến vạch đó / A measuring jug with a 200 ml mark, filled up to that mark">
      <path d="M140 40 H260 L250 220 H150Z" fill="#e0f2fe" stroke="#0369a1" strokeWidth="5" strokeLinejoin="round" />
      <path d="M144 120 H256 L250 220 H150Z" fill="#38bdf8" opacity="0.8" />
      {[80, 120, 160, 200].map((y, i) => (
        <g key={y}>
          <line x1="150" y1={y + 20} x2="172" y2={y + 20} stroke="#334155" strokeWidth="3" />
          <text x="182" y={y + 26} fontSize="16" fill="#334155">{(4 - i) * 50} ml</text>
        </g>
      ))}
      <line x1="150" y1="120" x2="250" y2="120" stroke="#dc2626" strokeWidth="3" strokeDasharray="6 4" />
    </Frame>
  )
}
