import Frame from './Frame'

/** Biểu đồ đường nhiệt độ: sáng 20, trưa 30, tối 24 °C. Nhãn trục song ngữ, không ghi số lên điểm. */
export default function LineGraph() {
  const base = 185 // y của trục ngang
  const k = 4.8 // số px cho mỗi °C
  const yOf = (v: number) => base - v * k
  const pts: Array<{ x: number; vi: string; en: string; v: number }> = [
    { x: 110, vi: 'Sáng', en: 'Morning', v: 20 },
    { x: 210, vi: 'Trưa', en: 'Midday', v: 30 },
    { x: 310, vi: 'Tối', en: 'Evening', v: 24 },
  ]
  return (
    <Frame label="Biểu đồ đường nhiệt độ: sáng 20 °C, trưa 30 °C, tối 24 °C / Line graph of temperature: morning 20 °C, midday 30 °C, evening 24 °C">
      <line x1="55" y1={base} x2="370" y2={base} stroke="#334155" strokeWidth="3" />
      <line x1="55" y1="28" x2="55" y2={base} stroke="#334155" strokeWidth="3" />
      <text x="62" y="24" fontSize="16" fontWeight="800" fill="#334155">°C</text>
      {[0, 10, 20, 30].map((v) => (
        <g key={v}>
          <line x1="49" y1={yOf(v)} x2="59" y2={yOf(v)} stroke="#334155" strokeWidth="2" />
          <text x="43" y={yOf(v) + 5} textAnchor="end" fontSize="16" fill="#475569">{v}</text>
        </g>
      ))}
      <polyline points={pts.map(({ x, v }) => `${x},${yOf(v)}`).join(' ')} fill="none" stroke="#f97316" strokeWidth="5" strokeLinejoin="round" />
      {pts.map(({ x, vi, en, v }) => (
        <g key={vi}>
          <circle cx={x} cy={yOf(v)} r="7" fill="#f97316" />
          <text x={x} y={base + 22} textAnchor="middle" fontSize="16" fontWeight="700" fill="#334155">{vi}</text>
          <text x={x} y={base + 42} textAnchor="middle" fontSize="16" fontWeight="700" fill="#475569">{en}</text>
        </g>
      ))}
    </Frame>
  )
}
