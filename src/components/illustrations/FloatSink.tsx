import Frame from './Frame'

export default function FloatSink() {
  return (
    <Frame label="Cốc A: khối gỗ nổi trên mặt nước. Cốc B: hòn đá chìm xuống đáy / Cup A: wooden block floats. Cup B: stone sinks to the bottom">
      {/* cup A */}
      <path d="M30 60 L50 210 H170 L190 60Z" fill="#e0f2fe" stroke="#0369a1" strokeWidth="4" strokeLinejoin="round" />
      <path d="M36 110 H184 L172 210 H48Z" fill="#7dd3fc" opacity="0.8" />
      <rect x="80" y="96" width="60" height="22" rx="4" fill="#a16207" stroke="#78350f" strokeWidth="2" />
      <text x="110" y="234" textAnchor="middle" fontSize="22" fontWeight="800" fill="#334155">A</text>
      {/* cup B */}
      <path d="M220 60 L240 210 H360 L380 60Z" fill="#e0f2fe" stroke="#0369a1" strokeWidth="4" strokeLinejoin="round" />
      <path d="M226 110 H374 L362 210 H238Z" fill="#7dd3fc" opacity="0.8" />
      <ellipse cx="300" cy="190" rx="22" ry="16" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
      <text x="300" y="234" textAnchor="middle" fontSize="22" fontWeight="800" fill="#334155">B</text>
    </Frame>
  )
}
