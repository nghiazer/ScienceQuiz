import { shortDate, weekdayIndex, type DayTotal } from '../../utils/parentStats'

const WEEKDAY = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']
const WEEKDAY_LONG = ['Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy', 'Chủ nhật']

/** Màu ô lịch theo số phút học trong ngày. */
const HEAT_LEVELS = [
  { min: 30, fill: '#15803d', label: '30+ phút' },
  { min: 15, fill: '#22c55e', label: '15–29' },
  { min: 5, fill: '#86efac', label: '5–14' },
  { min: 0, fill: '#dcfce7', label: '<5' },
]
const heatFill = (seconds: number) => (seconds <= 0 ? '#f1f5f9' : (HEAT_LEVELS.find((l) => seconds / 60 >= l.min)?.fill ?? '#dcfce7'))

/** Lịch học: mỗi cột một tuần (Thứ Hai → Chủ nhật), màu theo số phút. */
export function Heatmap({ weeks, byDate, today }: { weeks: string[][]; byDate: Map<string, DayTotal>; today: string }) {
  const cell = 28
  const gap = 4
  const left = 26
  const top = 16
  const width = left + weeks.length * (cell + gap)
  const height = top + 7 * (cell + gap)
  return (
    <div>
      <svg viewBox={`0 0 ${width} ${height}`} className="mx-auto w-full max-w-sm" role="img" aria-label="Lịch học 8 tuần gần nhất">
        {WEEKDAY.map((d, i) => (
          <text key={d} x={left - 6} y={top + i * (cell + gap) + cell / 2 + 3} textAnchor="end" fontSize="9" fontWeight="700" fill="#64748b">{d}</text>
        ))}
        {weeks.map((week, w) => (
          <g key={week[0]}>
            <text x={left + w * (cell + gap) + cell / 2} y={10} textAnchor="middle" fontSize="8" fontWeight="700" fill="#64748b">{shortDate(week[0])}</text>
            {week.map((date, d) => {
              if (date > today) return null
              const t = byDate.get(date)
              const minutes = t ? Math.round(t.seconds / 60) : 0
              return (
                <rect
                  key={date}
                  x={left + w * (cell + gap)}
                  y={top + d * (cell + gap)}
                  width={cell}
                  height={cell}
                  rx={7}
                  fill={heatFill(t?.seconds ?? 0)}
                  stroke={date === today ? '#334155' : 'none'}
                  strokeWidth={2}
                >
                  <title>{`${WEEKDAY_LONG[weekdayIndex(date)]} ${shortDate(date)}: ${minutes} phút · ${t?.questions ?? 0} câu`}</title>
                </rect>
              )
            })}
          </g>
        ))}
      </svg>
      <div className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] font-bold text-slate-500">
        <span className="flex items-center gap-1"><i className="inline-block size-3 rounded bg-slate-100 ring-1 ring-slate-200" />0</span>
        {[...HEAT_LEVELS].reverse().map((l) => (
          <span key={l.label} className="flex items-center gap-1"><i className="inline-block size-3 rounded" style={{ backgroundColor: l.fill }} />{l.label}</span>
        ))}
      </div>
    </div>
  )
}

/** Cột số phút học mỗi ngày. */
export function MinutesChart({ days, byDate }: { days: string[]; byDate: Map<string, DayTotal> }) {
  const step = 23
  const left = 30
  const plotH = 100
  const top = 18
  const width = left + days.length * step
  const height = top + plotH + 28
  const minutes = days.map((d) => Math.round((byDate.get(d)?.seconds ?? 0) / 60))
  const peak = Math.max(...minutes, 0)
  const max = Math.max(10, Math.ceil(peak / 10) * 10)
  const y = (v: number) => top + plotH - (v / max) * plotH
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full" role="img" aria-label="Số phút học mỗi ngày trong 14 ngày gần nhất">
      {[0, max / 2, max].map((v) => (
        <g key={v}>
          <line x1={left} x2={width} y1={y(v)} y2={y(v)} stroke="#e2e8f0" strokeWidth={1} />
          <text x={left - 4} y={y(v) + 3} textAnchor="end" fontSize="9" fontWeight="700" fill="#64748b">{v}</text>
        </g>
      ))}
      <text x={left - 4} y={10} textAnchor="end" fontSize="8" fontWeight="700" fill="#94a3b8">phút</text>
      {days.map((d, i) => {
        const x = left + i * step + 3
        const m = minutes[i]
        const q = byDate.get(d)?.questions ?? 0
        return (
          <g key={d}>
            {m > 0 && <rect x={x} y={y(m)} width={step - 6} height={top + plotH - y(m)} rx={4} fill="#22c55e" />}
            <rect x={x} y={top} width={step - 6} height={plotH} fill="transparent">
              <title>{`${WEEKDAY_LONG[weekdayIndex(d)]} ${shortDate(d)}: ${m} phút · ${q} câu`}</title>
            </rect>
            {m > 0 && <text x={x + (step - 6) / 2} y={y(m) - 3} textAnchor="middle" fontSize="9" fontWeight="800" fill="#166534">{m}</text>}
            <text x={x + (step - 6) / 2} y={top + plotH + 11} textAnchor="middle" fontSize="8" fontWeight="700" fill="#64748b">{WEEKDAY[weekdayIndex(d)]}</text>
            <text x={x + (step - 6) / 2} y={top + plotH + 21} textAnchor="middle" fontSize="8" fontWeight="700" fill="#94a3b8">{d.slice(8)}</text>
          </g>
        )
      })}
    </svg>
  )
}

export interface LineSeries {
  name: string
  color: string
  /** giá trị 0–100 theo từng mốc trục x; null = không có dữ liệu ở mốc đó */
  points: (number | null)[]
}

/** Biểu đồ đường 0–100%: nhiều đường dùng chung trục x. */
export function LineChart({ series, xLabels, ariaLabel, showValues = false }: { series: LineSeries[]; xLabels: string[]; ariaLabel: string; showValues?: boolean }) {
  const width = 360
  const height = 190
  const left = 32
  const right = 12
  const top = 16
  const bottom = 30
  const plotW = width - left - right
  const plotH = height - top - bottom
  const n = xLabels.length
  const x = (i: number) => left + (n === 1 ? plotW / 2 : (i / (n - 1)) * plotW)
  const y = (v: number) => top + plotH - (v / 100) * plotH
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full" role="img" aria-label={ariaLabel}>
      {[0, 25, 50, 75, 100].map((v) => (
        <g key={v}>
          <line x1={left} x2={width - right} y1={y(v)} y2={y(v)} stroke="#e2e8f0" strokeWidth={1} />
          <text x={left - 5} y={y(v) + 3} textAnchor="end" fontSize="9" fontWeight="700" fill="#64748b">{v}%</text>
        </g>
      ))}
      {xLabels.map((l, i) => (
        <text key={`${l}-${i}`} x={x(i)} y={height - 12} textAnchor="middle" fontSize="9" fontWeight="700" fill="#64748b">{l}</text>
      ))}
      {series.map((s) => {
        const pts = s.points.map((v, i) => (v === null ? null : { i, v })).filter((p): p is { i: number; v: number } => p !== null)
        return (
          <g key={s.name}>
            {pts.length > 1 && <polyline points={pts.map((p) => `${x(p.i)},${y(p.v)}`).join(' ')} fill="none" stroke={s.color} strokeWidth={3} strokeLinejoin="round" strokeLinecap="round" />}
            {pts.map((p) => (
              <g key={p.i}>
                <circle cx={x(p.i)} cy={y(p.v)} r={4.5} fill="#fff" stroke={s.color} strokeWidth={2.5}>
                  <title>{`${s.name} · ${xLabels[p.i]}: ${p.v}%`}</title>
                </circle>
                {showValues && <text x={x(p.i)} y={y(p.v) - 8} textAnchor="middle" fontSize="9" fontWeight="800" fill={s.color}>{p.v}</text>}
              </g>
            ))}
          </g>
        )
      })}
    </svg>
  )
}
