import Frame from './Frame'

/** Hai cân thăng bằng. Cân 1: 2 quả táo = 1 quả chuối. Cân 2: 1 quả chuối + 1 quả táo = 9 khối vuông. → 1 táo = 3 khối, 1 chuối = 6 khối. */

const BEAM_Y = 80
const ARM = 66
const PAN_Y = 150

function Apple({ x }: { x: number }) {
  const y = PAN_Y - 11
  return (
    <g>
      <line x1={x} y1={y - 10} x2={x + 2} y2={y - 16} stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx={x + 7} cy={y - 14} rx="5" ry="3" fill="#22c55e" />
      <circle cx={x} cy={y} r="11" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
    </g>
  )
}

function Banana({ x }: { x: number }) {
  const y = PAN_Y - 12
  return (
    <path d={`M${x - 16} ${y - 3} C${x - 8} ${y + 16} ${x + 8} ${y + 16} ${x + 16} ${y - 3} C${x + 8} ${y + 6} ${x - 8} ${y + 6} ${x - 16} ${y - 3} Z`}
      fill="#facc15" stroke="#a16207" strokeWidth="2" strokeLinejoin="round" />
  )
}

function Cubes({ x }: { x: number }) {
  const rows = [4, 3, 2]
  return (
    <g fill="#60a5fa" stroke="#1e3a8a" strokeWidth="2">
      {rows.map((n, r) => Array.from({ length: n }, (_, i) => (
        <rect key={`${r}-${i}`} x={x - n * 6 + i * 12} y={PAN_Y - 12 * (r + 1)} width="12" height="12" />
      )))}
    </g>
  )
}

function Scale({ cx, num, left, right }: { cx: number; num: string; left: React.ReactNode; right: React.ReactNode }) {
  const pans = [cx - ARM, cx + ARM]
  return (
    <g>
      <circle cx={cx} cy="34" r="14" fill="#e2e8f0" />
      <text x={cx} y="34" textAnchor="middle" dominantBaseline="central" fontSize="18" fontWeight="800" fill="#334155">{num}</text>
      <line x1={cx} y1={BEAM_Y} x2={cx} y2="212" stroke="#64748b" strokeWidth="6" />
      <path d={`M${cx - 30} 212 H${cx + 30} L${cx + 20} 224 H${cx - 20}Z`} fill="#64748b" />
      <polygon points={`${cx},${BEAM_Y - 8} ${cx - 12},${BEAM_Y + 14} ${cx + 12},${BEAM_Y + 14}`} fill="#334155" />
      <line x1={cx - ARM} y1={BEAM_Y} x2={cx + ARM} y2={BEAM_Y} stroke="#334155" strokeWidth="6" strokeLinecap="round" />
      <g stroke="#475569" strokeWidth="2">
        {pans.map((p) => (
          <g key={p}>
            <line x1={p} y1={BEAM_Y} x2={p - 28} y2={PAN_Y} />
            <line x1={p} y1={BEAM_Y} x2={p + 28} y2={PAN_Y} />
          </g>
        ))}
      </g>
      {pans.map((p) => (
        <path key={p} d={`M${p - 28} ${PAN_Y} H${p + 28} L${p + 20} ${PAN_Y + 12} H${p - 20}Z`} fill="#fbbf24" stroke="#92400e" strokeWidth="2" />
      ))}
      {left}
      {right}
    </g>
  )
}

export default function MaBalanceMath() {
  return (
    <Frame label="Hai cân thăng bằng. Cân 1: hai quả táo bằng một quả chuối. Cân 2: một quả chuối và một quả táo bằng 9 khối vuông nhỏ / Two balanced scales. Scale 1: two apples balance one banana. Scale 2: one banana and one apple balance 9 small cubes">
      <line x1="200" y1="20" x2="200" y2="228" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="8 6" />
      <Scale cx={98} num="1" left={<><Apple x={20} /><Apple x={44} /></>} right={<Banana x={164} />} />
      <Scale cx={302} num="2" left={<><Banana x={224} /><Apple x={253} /></>} right={<Cubes x={368} />} />
      <text x="368" y="186" textAnchor="middle" dominantBaseline="central" fontSize="22" fontWeight="800" fill="#1e3a8a">9</text>
    </Frame>
  )
}
