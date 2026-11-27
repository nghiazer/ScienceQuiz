import Frame from './Frame'

const CX = 200
const CY = 120

/** Đồng hồ kim chỉ đúng 3 giờ: kim giờ chỉ số 3, kim phút chỉ số 12. */
export default function MaClock() {
  const nums = Array.from({ length: 12 }, (_, i) => i + 1)
  return (
    <Frame label="Đồng hồ có kim giờ chỉ số 3 và kim phút chỉ số 12 / A clock with the hour hand on 3 and the minute hand on 12">
      <circle cx={CX} cy={CY} r="108" fill="#fff7ed" stroke="#c2410c" strokeWidth="6" />
      {Array.from({ length: 60 }, (_, i) => {
        const a = (i * 6 * Math.PI) / 180
        const big = i % 5 === 0
        const r1 = big ? 92 : 97
        return (
          <line key={i} x1={CX + r1 * Math.sin(a)} y1={CY - r1 * Math.cos(a)} x2={CX + 102 * Math.sin(a)} y2={CY - 102 * Math.cos(a)}
            stroke="#9a3412" strokeWidth={big ? 4 : 2} strokeLinecap="round" />
        )
      })}
      <g fontSize="20" fontWeight="800" fill="#7c2d12" textAnchor="middle" dominantBaseline="central">
        {nums.map((n) => {
          const a = (n * 30 * Math.PI) / 180
          return <text key={n} x={CX + 76 * Math.sin(a)} y={CY - 76 * Math.cos(a)}>{n}</text>
        })}
      </g>
      {/* kim giờ -> 3, kim phút -> 12 */}
      <line x1={CX} y1={CY} x2={CX + 50} y2={CY} stroke="#1e293b" strokeWidth="9" strokeLinecap="round" />
      <line x1={CX} y1={CY} x2={CX} y2={CY - 58} stroke="#2563eb" strokeWidth="5" strokeLinecap="round" />
      <circle cx={CX} cy={CY} r="8" fill="#1e293b" />
    </Frame>
  )
}
