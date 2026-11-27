import Frame from './Frame'

// Thang đo: 0 ml ở đáy (y=200), 200 ml ở y=40, mỗi 50 ml cách nhau 40px.
const yOf = (ml: number) => 200 - ml * 0.8

export default function MeasuringCup() {
  return (
    <Frame label="Cốc đong trong suốt hình trụ có vạch chia 0, 50, 100, 150, 200 ml, bên trong có nước / A clear cylinder measuring cup with marks at 0, 50, 100, 150 and 200 ml, with some water inside">
      {/* quai cốc */}
      <path d="M108 70 Q70 70 70 110 Q70 150 108 150" fill="none" stroke="#0369a1" strokeWidth="5" strokeLinecap="round" />
      {/* thủy tinh trong suốt phía trên mặt nước */}
      <rect x="110.5" y="30" width="95" height={yOf(150) - 30} fill="#e0f2fe" />
      {/* nước: mặt nước đúng vạch 150 ml (y=80) */}
      <rect x="110.5" y={yOf(150)} width="95" height={200 - yOf(150)} fill="#38bdf8" />
      <line x1="110.5" y1={yOf(150)} x2="205.5" y2={yOf(150)} stroke="#0369a1" strokeWidth="3" />
      {/* thân cốc: lòng cốc từ y=30 đến đáy y=200 */}
      <path d="M108 30 V202.5 H208 V30" fill="none" stroke="#0369a1" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" />
      {/* vạch chia và số */}
      {[0, 50, 100, 150, 200].map(ml => (
        <g key={ml}>
          <line x1="190" y1={yOf(ml)} x2="224" y2={yOf(ml)} stroke="#1e293b" strokeWidth="3" />
          <text x="232" y={yOf(ml) + 6} fontSize="18" fontWeight="700" fill="#1e293b">{ml} ml</text>
        </g>
      ))}
    </Frame>
  )
}
