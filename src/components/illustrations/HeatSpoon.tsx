import Frame from './Frame'

export default function HeatSpoon() {
  return (
    <Frame label="Muỗng kim loại đặt trong cốc nước nóng; nhiệt truyền dọc theo muỗng tới tay cầm / A metal spoon in a hot cup; heat travels along the spoon to the handle">
      <path d="M120 90 L140 220 H260 L280 90Z" fill="#fff7ed" stroke="#c2410c" strokeWidth="4" strokeLinejoin="round" />
      <path d="M128 130 H272 L262 220 H138Z" fill="#fb923c" opacity="0.85" />
      <line x1="200" y1="40" x2="275" y2="110" stroke="#64748b" strokeWidth="8" strokeLinecap="round" />
      <ellipse cx="200" cy="140" rx="10" ry="18" transform="rotate(-35 200 140)" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
      <g stroke="#ef4444" strokeWidth="4" strokeLinecap="round" fill="none">
        <path d="M150 70 q-8 -12 0 -24" /><path d="M185 60 q-8 -12 0 -24" /><path d="M220 70 q-8 -12 0 -24" />
      </g>
    </Frame>
  )
}
