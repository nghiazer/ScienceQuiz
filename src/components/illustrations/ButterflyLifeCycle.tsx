import Frame from './Frame'

function Arrow({ d }: { d: string }) {
  return <path d={d} stroke="#94a3b8" strokeWidth="4" fill="none" strokeLinecap="round" markerEnd="url(#ah)" />
}

export default function ButterflyLifeCycle() {
  return (
    <Frame label="Vòng đời của bướm: trứng, sâu bướm, nhộng, bướm / Butterfly life cycle: egg, caterpillar, pupa, butterfly" viewBox="0 -14 400 276">
      <defs>
        <marker id="ah" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" refX="9" refY="7" orient="auto">
          <path d="M0 0 L14 7 L0 14 z" fill="#94a3b8" />
        </marker>
      </defs>
      {/* 1 Trứng */}
      <g transform="translate(100 55)">
        <circle r="38" fill="#dcfce7" />
        <path d="M-40 25 Q0 5 40 25 L40 40 L-40 40Z" fill="#4ade80" opacity="0.6" />
        <circle cx="-8" cy="2" r="7" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
        <circle cx="8" cy="8" r="7" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
        <circle cx="-2" cy="-10" r="6" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
      </g>
      {/* 2 Sâu */}
      <g transform="translate(300 55)">
        <circle r="38" fill="#fef3c7" />
        {[-24, -12, 0, 12, 24].map((x, i) => (
          <circle key={x} cx={x} cy={i % 2 ? 3 : 7} r="9" fill={i % 2 ? '#65a30d' : '#84cc16'} stroke="#3f6212" strokeWidth="1.5" />
        ))}
        <circle cx="-30" cy="4" r="3" fill="#1e293b" />
        <path d="M-30 -4 l-4 -8 M-26 -4 l2 -8" stroke="#3f6212" strokeWidth="2" strokeLinecap="round" />
      </g>
      {/* 3 Nhộng */}
      <g transform="translate(300 195)">
        <circle r="38" fill="#ede9fe" />
        <path d="M0 -42 V-25" stroke="#78716c" strokeWidth="3" />
        <ellipse cx="0" cy="3" rx="14" ry="26" fill="#a3a38c" stroke="#57534e" strokeWidth="2" />
        <path d="M-12 -4 H12 M-13 6 H13 M-10 16 H10" stroke="#57534e" strokeWidth="2" />
      </g>
      {/* 4 Bướm */}
      <g transform="translate(100 195)">
        <circle r="38" fill="#fce7f3" />
        <ellipse cx="-16" cy="-8" rx="18" ry="22" fill="#f472b6" stroke="#be185d" strokeWidth="2" transform="rotate(-20 -16 -8)" />
        <ellipse cx="16" cy="-8" rx="18" ry="22" fill="#f472b6" stroke="#be185d" strokeWidth="2" transform="rotate(20 16 -8)" />
        <ellipse cx="-12" cy="14" rx="12" ry="14" fill="#fb923c" stroke="#be185d" strokeWidth="2" />
        <ellipse cx="12" cy="14" rx="12" ry="14" fill="#fb923c" stroke="#be185d" strokeWidth="2" />
        <rect x="-3" y="-16" width="6" height="40" rx="3" fill="#1e293b" />
      </g>
      <Arrow d="M145 55 H250" />
      <Arrow d="M300 100 V145" />
      <Arrow d="M255 195 H150" />
      <Arrow d="M100 150 V105" />
      {[['1', 100, 8], ['2', 300, 8], ['3', 300, 248], ['4', 100, 248]].map(([n, x, y]) => (
        <text key={n as string} x={x as number} y={y as number} textAnchor="middle" fontSize="20" fontWeight="800" fill="#475569">{n}</text>
      ))}
    </Frame>
  )
}
