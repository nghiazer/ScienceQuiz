import Frame from './Frame'

const WIRE = '#334155'

/** Bóng đèn đang TẮT: nền xám nhạt, tóc đèn xám, không có tia sáng. */
function OffBulb({ cx, n }: { cx: number; n: string }) {
  return (
    <g>
      <circle cx={cx} cy="70" r="22" fill="#e2e8f0" stroke="#64748b" strokeWidth="4" />
      <path d={`M${cx - 10} 78 L${cx - 5} 62 L${cx} 78 L${cx + 5} 62 L${cx + 10} 78`} fill="none" stroke="#94a3b8" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
      <text x={cx} y="38" textAnchor="middle" fontSize="26" fontWeight="800" fill={WIRE}>{n}</text>
    </g>
  )
}

export default function SeriesCircuit() {
  return (
    <Frame label="Mạch điện nối tiếp: pin ở bên trái, ba bóng đèn 1, 2, 3 nối trên một vòng dây; dây bị đứt giữa bóng 2 và bóng 3, cả ba bóng đều tắt / Series circuit: a battery on the left and three bulbs 1, 2, 3 in one loop; the wire is broken between bulb 2 and bulb 3, and all three bulbs are off">
      {/* vòng dây, hở một khe giữa bóng 2 và bóng 3 */}
      <path d="M220 70 H40 V200 H360 V70 H260" fill="none" stroke={WIRE} strokeWidth="6" strokeLinejoin="round" />
      <circle cx="220" cy="70" r="6" fill={WIRE} />
      <circle cx="260" cy="70" r="6" fill={WIRE} />
      {/* chữ X đánh dấu chỗ đứt */}
      <path d="M231 61 L249 79 M249 61 L231 79" stroke="#dc2626" strokeWidth="5" strokeLinecap="round" />
      {/* pin */}
      <rect x="32" y="130" width="16" height="9" fill="#94a3b8" stroke={WIRE} strokeWidth="3" />
      <rect x="22" y="138" width="36" height="52" rx="4" fill="#fbbf24" stroke={WIRE} strokeWidth="4" />
      <path d="M22 160 H58" stroke={WIRE} strokeWidth="4" />
      {/* ba bóng đèn, đều tắt */}
      <OffBulb cx={95} n="1" />
      <OffBulb cx={170} n="2" />
      <OffBulb cx={310} n="3" />
    </Frame>
  )
}
