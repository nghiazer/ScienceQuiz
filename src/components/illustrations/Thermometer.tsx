import Frame from './Frame'

/** Nhiệt kế chỉ 30°C, thang từ 0 đến 50. */
export default function Thermometer({ value = 30 }: { value?: number }) {
  const top = 30
  const bottom = 190
  const y = bottom - ((value - 0) / 50) * (bottom - top)
  const ticks = [0, 10, 20, 30, 40, 50]
  return (
    <Frame label={`Nhiệt kế chỉ ${value} độ C / A thermometer showing ${value} degrees Celsius`}>
      <rect x="170" y="20" width="36" height="190" rx="18" fill="#f1f5f9" stroke="#475569" strokeWidth="4" />
      <circle cx="188" cy="212" r="26" fill="#ef4444" stroke="#475569" strokeWidth="4" />
      <rect x="181" y={y} width="14" height={212 - y} fill="#ef4444" />
      {ticks.map((t) => {
        const ty = bottom - (t / 50) * (bottom - top)
        return (
          <g key={t}>
            <line x1="214" y1={ty} x2="236" y2={ty} stroke="#475569" strokeWidth="3" strokeLinecap="round" />
            <text x="244" y={ty + 6} fontSize="18" fontWeight="700" fill="#334155">{t}</text>
          </g>
        )
      })}
      <text x="285" y="30" fontSize="20" fontWeight="800" fill="#334155">°C</text>
    </Frame>
  )
}

/** Nhiệt kế chỉ 12 độ C, dùng cho câu hỏi đọc số liệu. */
export function ColdThermometer() {
  return <Thermometer value={12} />
}
