import Frame from './Frame'

export default function LineGraph() {
  const pts: Array<[number, number, string, number]> = [[90, 100, 'Sáng', 20], [200, 50, 'Trưa', 30], [310, 80, 'Tối', 24]]
  return (
    <Frame label="Biểu đồ đường nhiệt độ: sáng 20 °C, trưa 30 °C, tối 24 °C / Line graph of temperature: morning 20 °C, midday 30 °C, evening 24 °C">
      <line x1="50" y1="200" x2="370" y2="200" stroke="#334155" strokeWidth="3" />
      <line x1="50" y1="30" x2="50" y2="200" stroke="#334155" strokeWidth="3" />
      {[0, 10, 20, 30].map((v) => (
        <g key={v}>
          <line x1="44" y1={200 - v * 5.5} x2="54" y2={200 - v * 5.5} stroke="#334155" strokeWidth="2" />
          <text x="36" y={205 - v * 5.5} textAnchor="end" fontSize="14" fill="#475569">{v}</text>
        </g>
      ))}
      <polyline points={pts.map(([x, , , v]) => `${x},${200 - v * 5.5}`).join(' ')} fill="none" stroke="#f97316" strokeWidth="5" strokeLinejoin="round" />
      {pts.map(([x, , label, v]) => (
        <g key={label}>
          <circle cx={x} cy={200 - v * 5.5} r="7" fill="#f97316" />
          <text x={x} y="222" textAnchor="middle" fontSize="16" fontWeight="700" fill="#334155">{label}</text>
        </g>
      ))}
    </Frame>
  )
}
