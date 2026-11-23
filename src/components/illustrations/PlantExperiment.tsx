import Frame from './Frame'

function Pot({ x, sun, healthy }: { x: number; sun: boolean; healthy: boolean }) {
  return (
    <g transform={`translate(${x} 0)`}>
      {sun ? (
        <g transform="translate(0 40)">
          <circle r="20" fill="#fbbf24" />
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={i} y1="-26" y2="-36" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" transform={`rotate(${i * 45})`} />
          ))}
        </g>
      ) : (
        <g>
          <rect x="-50" y="10" width="100" height="105" rx="10" fill="#475569" opacity="0.85" />
          <text y="70" textAnchor="middle" fontSize="28">🌑</text>
        </g>
      )}
      {healthy ? (
        <g>
          <path d="M0 190 V140" stroke="#15803d" strokeWidth="6" />
          <ellipse cx="-18" cy="140" rx="18" ry="10" fill="#22c55e" transform="rotate(-25 -18 140)" />
          <ellipse cx="18" cy="130" rx="18" ry="10" fill="#22c55e" transform="rotate(25 18 130)" />
          <ellipse cx="0" cy="115" rx="10" ry="18" fill="#4ade80" />
        </g>
      ) : (
        <g>
          <path d="M0 190 V165 Q0 155 12 152" stroke="#a16207" strokeWidth="5" fill="none" strokeLinecap="round" />
          <ellipse cx="14" cy="152" rx="10" ry="6" fill="#ca8a04" />
        </g>
      )}
      <path d="M-35 190 H35 L28 232 H-28 Z" fill="#c2410c" />
      <rect x="-38" y="186" width="76" height="10" rx="4" fill="#ea580c" />
    </g>
  )
}

export default function PlantExperiment() {
  return (
    <Frame viewBox="0 0 400 262" label="Thí nghiệm hai chậu cây: chậu A đặt chỗ có nắng, chậu B đặt trong hộp tối / Two pots: A in sunlight, B in a dark box">
      <Pot x={100} sun healthy />
      <Pot x={300} sun={false} healthy={false} />
      <text x="100" y="256" textAnchor="middle" fontSize="22" fontWeight="800" fill="#334155">A</text>
      <text x="300" y="256" textAnchor="middle" fontSize="22" fontWeight="800" fill="#334155">B</text>
    </Frame>
  )
}
