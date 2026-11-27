import Frame from './Frame'

// Hình A: hàm răng hàm rộng, mặt phẳng (để nghiền cỏ). Hình B: răng nanh dài, nhọn (để xé thịt).
const GUM = '#fda4af'
const GUM_LINE = '#e11d48'
const TOOTH = '#ffffff'
const TOOTH_LINE = '#475569'

export default function AnimalTeeth() {
  return (
    <Frame label="A: hàm răng hàm rộng, mặt phẳng, để nghiền cỏ. B: hàm răng có hai răng nanh dài, nhọn, để giữ và xé thịt / A: broad flat back teeth for grinding grass. B: long sharp canine teeth for gripping and tearing meat">
      <rect x="10" y="12" width="180" height="216" rx="16" fill="#f0fdf4" stroke="#86efac" strokeWidth="3" />
      <rect x="210" y="12" width="180" height="216" rx="16" fill="#fef2f2" stroke="#fca5a5" strokeWidth="3" />

      {/* A: răng hàm phẳng, hàm trên và hàm dưới ép vào nhau */}
      <rect x="28" y="50" width="144" height="30" rx="10" fill={GUM} stroke={GUM_LINE} strokeWidth="3" />
      <rect x="28" y="142" width="144" height="30" rx="10" fill={GUM} stroke={GUM_LINE} strokeWidth="3" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={30 + i * 36} y="76" width="32" height="34" rx="6" fill={TOOTH} stroke={TOOTH_LINE} strokeWidth="3" />
          <rect x={30 + i * 36} y="112" width="32" height="34" rx="6" fill={TOOTH} stroke={TOOTH_LINE} strokeWidth="3" />
        </g>
      ))}

      {/* B: hai răng nanh dài ở hàm trên, răng nhỏ nhọn ở giữa */}
      <rect x="228" y="50" width="144" height="30" rx="10" fill={GUM} stroke={GUM_LINE} strokeWidth="3" />
      <rect x="228" y="142" width="144" height="30" rx="10" fill={GUM} stroke={GUM_LINE} strokeWidth="3" />
      <path d="M232 78 L244 140 L256 78Z" fill={TOOTH} stroke={TOOTH_LINE} strokeWidth="3" strokeLinejoin="round" />
      <path d="M344 78 L356 140 L368 78Z" fill={TOOTH} stroke={TOOTH_LINE} strokeWidth="3" strokeLinejoin="round" />
      {[0, 1, 2].map((i) => (
        <path key={i} d={`M${260 + i * 28} 78 L${272 + i * 28} 106 L${284 + i * 28} 78Z`} fill={TOOTH} stroke={TOOTH_LINE} strokeWidth="3" strokeLinejoin="round" />
      ))}
      {[0, 1, 2].map((i) => (
        <path key={i} d={`M${262 + i * 26} 144 L${274 + i * 26} 120 L${286 + i * 26} 144Z`} fill={TOOTH} stroke={TOOTH_LINE} strokeWidth="3" strokeLinejoin="round" />
      ))}

      <text x="100" y="212" textAnchor="middle" fontSize="28" fontWeight="800" fill="#334155">A</text>
      <text x="300" y="212" textAnchor="middle" fontSize="28" fontWeight="800" fill="#334155">B</text>
    </Frame>
  )
}
