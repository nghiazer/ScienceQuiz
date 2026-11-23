import Frame from './Frame'

/** Bốn hoạt động hằng ngày: thức dậy, đánh răng, đi học, đi ngủ. */
export default function DailyRoutine() {
  const font = 'Nunito, system-ui, sans-serif'
  return (
    <Frame label="Các việc làm hằng ngày: thức dậy, đánh răng, đi học bằng xe buýt, đi ngủ / Daily routine: get up, brush teeth, go to school by bus, go to bed">
      <rect width="400" height="240" fill="#fefce8" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={12 + i * 96} y="20" width="88" height="200" rx="18" fill="#fff" stroke="#fde68a" strokeWidth="4" />
      ))}
      {/* 1. mặt trời mọc / thức dậy */}
      <g transform="translate(56 82)">
        <circle r="22" fill="#fbbf24" />
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={i} x1="0" y1="-30" x2="0" y2="-38" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" transform={`rotate(${i * 45})`} />
        ))}
      </g>
      <text x="56" y="150" textAnchor="middle" fontSize="26" fontWeight="900" fill="#b45309" fontFamily={font}>7:00</text>
      <text x="56" y="188" textAnchor="middle" fontSize="14" fontWeight="800" fill="#92400e" fontFamily={font}>get up</text>
      {/* 2. bàn chải */}
      <g transform="translate(152 82) rotate(-20)">
        <rect x="-8" y="-6" width="64" height="12" rx="6" fill="#38bdf8" transform="translate(-24 0)" />
        <rect x="26" y="-14" width="14" height="28" rx="4" fill="#fff" stroke="#0ea5e9" strokeWidth="3" transform="translate(-24 0)" />
      </g>
      <text x="152" y="150" textAnchor="middle" fontSize="26" fontWeight="900" fill="#0369a1" fontFamily={font}>7:15</text>
      <text x="152" y="188" textAnchor="middle" fontSize="14" fontWeight="800" fill="#0c4a6e" fontFamily={font}>brush teeth</text>
      {/* 3. xe buýt */}
      <g transform="translate(248 82)">
        <rect x="-32" y="-20" width="64" height="38" rx="9" fill="#f97316" />
        <rect x="-26" y="-14" width="16" height="14" rx="3" fill="#fff7ed" />
        <rect x="-6" y="-14" width="16" height="14" rx="3" fill="#fff7ed" />
        <rect x="14" y="-14" width="12" height="14" rx="3" fill="#fff7ed" />
        <circle cx="-17" cy="19" r="7" fill="#334155" />
        <circle cx="17" cy="19" r="7" fill="#334155" />
      </g>
      <text x="248" y="150" textAnchor="middle" fontSize="26" fontWeight="900" fill="#c2410c" fontFamily={font}>7:45</text>
      <text x="248" y="188" textAnchor="middle" fontSize="14" fontWeight="800" fill="#9a3412" fontFamily={font}>go to school</text>
      {/* 4. trăng / đi ngủ */}
      <g transform="translate(344 82)">
        <path d="M10 -26 A28 28 0 1 0 24 14 A22 22 0 0 1 10 -26 Z" fill="#818cf8" />
        <circle cx="22" cy="-18" r="3" fill="#fde047" />
        <circle cx="30" cy="-2" r="2" fill="#fde047" />
      </g>
      <text x="344" y="150" textAnchor="middle" fontSize="26" fontWeight="900" fill="#4338ca" fontFamily={font}>9:00</text>
      <text x="344" y="188" textAnchor="middle" fontSize="14" fontWeight="800" fill="#3730a3" fontFamily={font}>go to bed</text>
    </Frame>
  )
}
