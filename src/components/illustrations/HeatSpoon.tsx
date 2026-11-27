import Frame from './Frame'

export default function HeatSpoon() {
  return (
    <Frame label="Muỗng kim loại đặt trong cốc nước nóng; nhiệt truyền dọc theo muỗng tới tay cầm / A metal spoon in a hot cup; heat travels along the spoon to the handle">
      <path d="M120 90 L140 220 H260 L280 90Z" fill="#fff7ed" stroke="#c2410c" strokeWidth="4" strokeLinejoin="round" />
      <path d="M128 130 H272 L262 220 H138Z" fill="#fb923c" opacity="0.85" />
      {/* muỗng: cán và bát là một nét liền, bát chìm trong nước, cán nhô ra khỏi cốc */}
      <g transform="translate(170 175) rotate(30)">
        <path
          d="M -4 -22 C -20 -18 -20 24 0 24 C 20 24 20 -18 4 -22 L 5 -138 Q 5 -146 0 -146 Q -5 -146 -5 -138 Z"
          fill="#94a3b8"
          stroke="#475569"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </g>
      <g stroke="#ef4444" strokeWidth="4" strokeLinecap="round" fill="none">
        <path d="M130 70 q-8 -12 0 -24" /><path d="M160 60 q-8 -12 0 -24" /><path d="M190 70 q-8 -12 0 -24" />
      </g>
    </Frame>
  )
}
