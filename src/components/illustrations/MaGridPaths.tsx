import Frame from './Frame'

const B = 80
const X0 = 60
const Y0 = 40

/** Lưới phố 3 ô ngang × 2 ô dọc; A góc dưới trái, B góc trên phải; chỉ đi sang phải hoặc lên trên: 10 đường ngắn nhất. */
export default function MaGridPaths() {
  return (
    <Frame label="Bản đồ phố hình lưới gồm 3 ô ngang và 2 ô dọc; điểm A ở góc dưới bên trái, điểm B ở góc trên bên phải; mũi tên: chỉ được đi sang phải hoặc đi lên / A street grid 3 blocks wide and 2 blocks tall; A is at the bottom left, B is at the top right; arrows: you may only go right or up">
      <defs>
        <marker id="ma-gp-arr" markerUnits="userSpaceOnUse" markerWidth="16" markerHeight="16" refX="9" refY="8" orient="auto">
          <path d="M0 0 L16 8 L0 16 z" fill="#f97316" />
        </marker>
      </defs>
      {/* các khu nhà */}
      {[0, 1, 2].map((c) => [0, 1].map((r) => (
        <rect key={`${c}-${r}`} x={X0 + c * B + 9} y={Y0 + r * B + 9} width={B - 18} height={B - 18} rx="8" fill="#bbf7d0" />
      )))}
      {/* đường phố */}
      <g stroke="#475569" strokeWidth="6" strokeLinecap="round">
        {[0, 1, 2, 3].map((i) => <line key={`v${i}`} x1={X0 + i * B} y1={Y0} x2={X0 + i * B} y2={Y0 + 2 * B} />)}
        {[0, 1, 2].map((i) => <line key={`h${i}`} x1={X0} y1={Y0 + i * B} x2={X0 + 3 * B} y2={Y0 + i * B} />)}
      </g>
      <circle cx={X0} cy={Y0 + 2 * B} r="13" fill="#ef4444" stroke="#7f1d1d" strokeWidth="3" />
      <text x={X0 - 22} y={Y0 + 2 * B + 22} textAnchor="middle" fontSize="24" fontWeight="800" fill="#b91c1c">A</text>
      <circle cx={X0 + 3 * B} cy={Y0} r="13" fill="#2563eb" stroke="#1e3a8a" strokeWidth="3" />
      <text x={X0 + 3 * B + 22} y={Y0 - 6} textAnchor="middle" fontSize="24" fontWeight="800" fill="#1d4ed8">B</text>
      {/* gợi ý hướng đi: sang phải, lên trên */}
      <g stroke="#f97316" strokeWidth="6" strokeLinecap="round">
        <path d="M336 190 H378" markerEnd="url(#ma-gp-arr)" />
        <path d="M350 160 V112" markerEnd="url(#ma-gp-arr)" />
      </g>
    </Frame>
  )
}
