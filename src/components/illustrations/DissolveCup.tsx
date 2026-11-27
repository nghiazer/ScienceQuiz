import Frame from './Frame'

// Cốc thủy tinh (x tâm cốc). Nước và chất bên trong được cắt theo thành cốc bằng clipPath.
function Cup({ x, id, label, children }: { x: number; id: string; label: string; children?: React.ReactNode }) {
  const outline = 'M-50 40 L-40 210 H40 L50 40Z'
  return (
    <g transform={`translate(${x} 0)`}>
      <clipPath id={id}>
        <path d={outline} />
      </clipPath>
      <path d={outline} fill="#f0f9ff" />
      <g clipPath={`url(#${id})`}>
        {/* nước: cả ba cốc cùng mực nước y = 90 */}
        <rect x="-60" y="90" width="120" height="120" fill="#7dd3fc" />
        {children}
      </g>
      <path d={outline} fill="none" stroke="#0369a1" strokeWidth="4" strokeLinejoin="round" />
      <text y="236" textAnchor="middle" fontSize="22" fontWeight="800" fill="#334155">{label}</text>
    </g>
  )
}

export default function DissolveCup() {
  return (
    <Frame label="Ba cốc thủy tinh đều có nước. Cốc A: nước trong suốt, không thấy hạt nào. Cốc B: lớp cát nâu lắng dưới đáy. Cốc C: lớp dầu vàng nổi trên mặt nước / Three glass cups of water. Cup A: clear water, no bits visible. Cup B: a brown layer of sand settled at the bottom. Cup C: a yellow layer of oil floating on top">
      <Cup x={70} id="dc-a" label="A" />
      <Cup x={200} id="dc-b" label="B">
        <path d="M-60 184 Q-40 176 -20 184 T20 184 T60 184 V210 H-60Z" fill="#a16207" />
        <circle cx="-26" cy="196" r="3" fill="#713f12" />
        <circle cx="-4" cy="202" r="3" fill="#d97706" />
        <circle cx="14" cy="194" r="3" fill="#713f12" />
        <circle cx="28" cy="203" r="3" fill="#d97706" />
        <circle cx="-14" cy="190" r="2.5" fill="#d97706" />
      </Cup>
      <Cup x={330} id="dc-c" label="C">
        <rect x="-60" y="90" width="120" height="24" fill="#facc15" />
        <line x1="-60" y1="114" x2="60" y2="114" stroke="#ca8a04" strokeWidth="3" />
        <ellipse cx="-14" cy="132" rx="6" ry="4" fill="#facc15" />
        <ellipse cx="18" cy="148" rx="5" ry="3.5" fill="#facc15" />
      </Cup>
    </Frame>
  )
}
