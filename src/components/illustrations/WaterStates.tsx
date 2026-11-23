import Frame from './Frame'

export default function WaterStates() {
  return (
    <Frame label="Ba thể của nước: A là đá rắn, B là nước lỏng, C là hơi nước / Three states of water: A solid ice, B liquid water, C water vapour">
      {/* A: ice cube */}
      <g transform="translate(100 115)">
        <rect x="-42" y="-42" width="84" height="84" rx="10" fill="#e0f2fe" stroke="#0284c7" strokeWidth="4" />
        <path d="M-26 -22 L-10 -34" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
      </g>
      {/* B: water in glass */}
      <g transform="translate(200 115)">
        <path d="M-40 -48 L-32 48 H32 L40 -48Z" fill="#e0f2fe" stroke="#0369a1" strokeWidth="4" strokeLinejoin="round" />
        <path d="M-37 -10 H37 L32 48 H-32Z" fill="#38bdf8" opacity="0.8" />
      </g>
      {/* C: steam */}
      <g transform="translate(300 115)">
        <path d="M-40 10 Q-30 -10 -20 10 T0 10 T20 10 T40 10" stroke="#94a3b8" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M-40 -15 Q-30 -35 -20 -15 T0 -15 T20 -15 T40 -15" stroke="#cbd5e1" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M-40 35 Q-30 15 -20 35 T0 35 T20 35 T40 35" stroke="#cbd5e1" strokeWidth="5" fill="none" strokeLinecap="round" />
      </g>
      {[['A', 100], ['B', 200], ['C', 300]].map(([l, x]) => (
        <text key={l} x={x as number} y="205" textAnchor="middle" fontSize="24" fontWeight="800" fill="#334155">{l}</text>
      ))}
    </Frame>
  )
}
