import Frame from './Frame'

export default function MeltingIce() {
  return (
    <Frame label="Hai cốc đá lạnh: cốc ở nơi nắng nóng tan nhanh, cốc trong bóng râm tan chậm / Two cups of ice: one in the sun, one in the shade">
      <rect y="195" width="400" height="45" fill="#fde68a" />
      {/* Cốc 1: nắng */}
      <g transform="translate(95 0)">
        <circle cx="0" cy="38" r="22" fill="#fbbf24" />
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={i} x1="0" y1="-18" x2="0" y2="-30" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" transform={`translate(0 38) rotate(${i * 45})`} />
        ))}
        <path d="M-45 90 H45 L35 195 H-35 Z" fill="#e0f2fe" stroke="#0369a1" strokeWidth="4" strokeLinejoin="round" />
        <path d="M-40 150 H40 L36 190 H-36 Z" fill="#7dd3fc" opacity="0.85" />
        <rect x="-18" y="130" width="22" height="22" rx="4" fill="#fff" stroke="#7dd3fc" strokeWidth="2" />
        <rect x="6" y="138" width="18" height="16" rx="4" fill="#fff" stroke="#7dd3fc" strokeWidth="2" />
        <text x="0" y="222" textAnchor="middle" fontSize="20" fontWeight="800" fill="#92400e">A</text>
      </g>
      {/* Cốc 2: bóng râm */}
      <g transform="translate(305 0)">
        <path d="M-28 70 Q-40 52 -20 48 Q-18 28 4 30 Q28 24 32 46 Q50 52 36 70 Z" fill="#94a3b8" />
        <path d="M-45 90 H45 L35 195 H-35 Z" fill="#e0f2fe" stroke="#0369a1" strokeWidth="4" strokeLinejoin="round" />
        <path d="M-37 182 H37 L36 190 H-36 Z" fill="#7dd3fc" opacity="0.85" />
        <rect x="-28" y="115" width="26" height="26" rx="4" fill="#fff" stroke="#7dd3fc" strokeWidth="2" />
        <rect x="0" y="120" width="26" height="26" rx="4" fill="#fff" stroke="#7dd3fc" strokeWidth="2" />
        <rect x="-14" y="147" width="26" height="26" rx="4" fill="#fff" stroke="#7dd3fc" strokeWidth="2" />
        <text x="0" y="222" textAnchor="middle" fontSize="20" fontWeight="800" fill="#475569">B</text>
      </g>
    </Frame>
  )
}
