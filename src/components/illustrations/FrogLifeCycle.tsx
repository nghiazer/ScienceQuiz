import Frame from './Frame'

export default function FrogLifeCycle() {
  return (
    <Frame label="Vòng đời ếch: trứng, nòng nọc, ếch con có chân, ếch trưởng thành / Frog life cycle: egg, tadpole, froglet, adult frog">
      <rect y="170" width="400" height="70" fill="#bae6fd" />
      {/* 1 Trứng */}
      <g transform="translate(55 105)">
        <circle r="40" fill="#e0f2fe" />
        {[[-12, -8], [8, -10], [-2, 8], [12, 6], [-14, 10]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="7" fill="#fef9c3" stroke="#a16207" strokeWidth="1.5" />
        ))}
      </g>
      {/* 2 Nòng nọc */}
      <g transform="translate(150 105)">
        <circle r="40" fill="#ecfccb" />
        <ellipse cx="-4" cy="0" rx="16" ry="11" fill="#4d7c0f" />
        <path d="M12 0 Q28 -10 34 0 Q28 10 12 0Z" fill="#65a30d" />
        <circle cx="-12" cy="-3" r="2" fill="#fff" />
      </g>
      {/* 3 Ếch con */}
      <g transform="translate(250 105)">
        <circle r="40" fill="#fef3c7" />
        <ellipse cx="0" cy="2" rx="14" ry="10" fill="#4ade80" />
        <path d="M-10 8 L-22 16 M10 8 L22 16" stroke="#15803d" strokeWidth="4" strokeLinecap="round" />
        <circle cx="-6" cy="-8" r="3.5" fill="#fff" />
        <circle cx="6" cy="-8" r="3.5" fill="#fff" />
      </g>
      {/* 4 Ếch trưởng thành */}
      <g transform="translate(345 105)">
        <circle r="40" fill="#ede9fe" />
        <ellipse cx="0" cy="2" rx="18" ry="13" fill="#16a34a" />
        <path d="M-14 10 L-28 2 M14 10 L28 2" stroke="#15803d" strokeWidth="5" strokeLinecap="round" />
        <circle cx="-8" cy="-10" r="5" fill="#fff" />
        <circle cx="8" cy="-10" r="5" fill="#fff" />
        <circle cx="-8" cy="-10" r="2" fill="#1e293b" />
        <circle cx="8" cy="-10" r="2" fill="#1e293b" />
      </g>
      {[['1', 55], ['2', 150], ['3', 250], ['4', 345]].map(([n, x]) => (
        <text key={n} x={x as number} y="172" textAnchor="middle" fontSize="20" fontWeight="800" fill="#334155">{n}</text>
      ))}
      <g stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" fill="none">
        <path d="M100 105 H108" /><path d="M195 105 H203" /><path d="M292 105 H300" />
      </g>
    </Frame>
  )
}
