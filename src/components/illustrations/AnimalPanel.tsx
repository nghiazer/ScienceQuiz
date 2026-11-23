import Frame from './Frame'

export default function AnimalPanel() {
  return (
    <Frame label="Bốn con vật: A là cá, B là chim, C là mèo, D là bướm / Four animals: A fish, B bird, C cat, D butterfly">
      <g fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2">
        <rect x="10" y="10" width="180" height="104" rx="14" />
        <rect x="210" y="10" width="180" height="104" rx="14" />
        <rect x="10" y="126" width="180" height="104" rx="14" />
        <rect x="210" y="126" width="180" height="104" rx="14" />
      </g>
      {/* A: cá */}
      <g transform="translate(100 62)">
        <ellipse rx="42" ry="24" fill="#38bdf8" />
        <path d="M36 0 L62 -20 L62 20Z" fill="#0ea5e9" />
        <circle cx="-22" cy="-6" r="4" fill="#fff" />
        <path d="M-6 -24 Q4 -34 14 -24" fill="#0284c7" />
      </g>
      {/* B: chim */}
      <g transform="translate(300 62)">
        <ellipse cx="0" cy="4" rx="34" ry="24" fill="#f97316" />
        <circle cx="-24" cy="-16" r="16" fill="#fb923c" />
        <path d="M-38 -16 L-52 -12 L-38 -8Z" fill="#facc15" />
        <circle cx="-28" cy="-20" r="3" fill="#1e293b" />
        <path d="M-6 0 Q10 -22 26 -4 Q10 12 -6 0Z" fill="#c2410c" />
        <path d="M-6 28 V38 M4 28 V38" stroke="#92400e" strokeWidth="3" />
      </g>
      {/* C: mèo */}
      <g transform="translate(100 178)">
        <ellipse cx="0" cy="10" rx="30" ry="22" fill="#94a3b8" />
        <circle cx="0" cy="-22" r="18" fill="#cbd5e1" />
        <path d="M-16 -32 L-20 -48 L-4 -38Z M16 -32 L20 -48 L4 -38Z" fill="#cbd5e1" />
        <circle cx="-6" cy="-24" r="3" fill="#1e293b" />
        <circle cx="6" cy="-24" r="3" fill="#1e293b" />
        <path d="M-30 14 Q-52 6 -46 -14" stroke="#94a3b8" strokeWidth="6" fill="none" strokeLinecap="round" />
      </g>
      {/* D: bướm */}
      <g transform="translate(300 178)">
        <ellipse cx="-18" cy="-12" rx="20" ry="24" fill="#a855f7" transform="rotate(-20 -18 -12)" />
        <ellipse cx="18" cy="-12" rx="20" ry="24" fill="#a855f7" transform="rotate(20 18 -12)" />
        <ellipse cx="-14" cy="18" rx="12" ry="14" fill="#f9a8d4" />
        <ellipse cx="14" cy="18" rx="12" ry="14" fill="#f9a8d4" />
        <rect x="-3" y="-24" width="6" height="50" rx="3" fill="#1e293b" />
      </g>
      {[['A', 22, 30], ['B', 222, 30], ['C', 22, 146], ['D', 222, 146]].map(([l, x, y]) => (
        <text key={l as string} x={x as number} y={y as number} fontSize="22" fontWeight="800" fill="#334155">{l}</text>
      ))}
    </Frame>
  )
}
