import Frame from './Frame'

function Cup({ x, children, label }: { x: number; children: React.ReactNode; label: string }) {
  return (
    <g transform={`translate(${x} 0)`}>
      <path d="M-50 40 L-40 210 H40 L50 40Z" fill="#e0f2fe" stroke="#0369a1" strokeWidth="4" strokeLinejoin="round" />
      {children}
      <text y="236" textAnchor="middle" fontSize="22" fontWeight="800" fill="#334155">{label}</text>
    </g>
  )
}

export default function DissolveCup() {
  return (
    <Frame label="Cốc A: đường tan hết, nước trong suốt. Cốc B: cát lắng xuống đáy. Cốc C: dầu nổi trên mặt nước / Cup A: sugar fully dissolved, clear water. Cup B: sand settled at the bottom. Cup C: oil floats on top">
      <Cup x={70} label="A">
        <path d="M-46 110 H46 L40 210 H-40Z" fill="#7dd3fc" opacity="0.7" />
      </Cup>
      <Cup x={200} label="B">
        <path d="M-46 110 H46 L40 210 H-40Z" fill="#fde68a" opacity="0.7" />
        <rect x="-40" y="185" width="80" height="25" rx="6" fill="#a16207" />
      </Cup>
      <Cup x={330} label="C">
        <path d="M-46 110 H46 L40 210 H-40Z" fill="#7dd3fc" opacity="0.7" />
        <rect x="-44" y="88" width="88" height="22" rx="8" fill="#facc15" opacity="0.9" />
      </Cup>
    </Frame>
  )
}
