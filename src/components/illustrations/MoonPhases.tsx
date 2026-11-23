import Frame from './Frame'

/** 4 pha Mặt Trăng: trăng non (lưỡi liềm), tròn, khuyết, ... mỗi pha vẽ bằng clipPath. */
function Moon({ cx, lit }: { cx: number; lit: 'new' | 'right' | 'full' | 'left' }) {
  const r = 34
  const id = `m-${cx}`
  return (
    <g>
      <circle cx={cx} cy="105" r={r} fill="#1e293b" />
      {lit === 'full' && <circle cx={cx} cy="105" r={r} fill="#fef9c3" />}
      {lit === 'right' && <path d={`M${cx} ${105 - r} A${r} ${r} 0 0 1 ${cx} ${105 + r} A${r * 0.55} ${r} 0 0 0 ${cx} ${105 - r}Z`} fill="#fef9c3" />}
      {lit === 'left' && <path d={`M${cx} ${105 - r} A${r} ${r} 0 0 0 ${cx} ${105 + r} A${r * 0.55} ${r} 0 0 1 ${cx} ${105 - r}Z`} fill="#fef9c3" />}
      <circle cx={cx} cy="105" r={r} fill="none" stroke="#94a3b8" strokeWidth="2" id={id} />
    </g>
  )
}

export default function MoonPhases() {
  const phases: Array<'new' | 'right' | 'full' | 'left'> = ['new', 'right', 'full', 'left']
  return (
    <Frame label="Bốn hình dạng của Mặt Trăng: trăng tối, lưỡi liềm, trăng tròn, lưỡi liềm ngược / Four Moon shapes: new, crescent, full, waning crescent">
      <rect width="400" height="240" fill="#0f172a" />
      {[[30, 30], [120, 20], [250, 35], [360, 28], [60, 205], [330, 210]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2" fill="#fde68a" />
      ))}
      {phases.map((p, i) => <Moon key={p} cx={55 + i * 96} lit={p} />)}
      {['A', 'B', 'C', 'D'].map((l, i) => (
        <text key={l} x={55 + i * 96} y="180" textAnchor="middle" fontSize="24" fontWeight="800" fill="#fff">{l}</text>
      ))}
    </Frame>
  )
}
