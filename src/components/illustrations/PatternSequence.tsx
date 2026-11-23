import Frame from './Frame'

export default function PatternSequence() {
  const nums = ['2', '4', '6', '8']
  return (
    <Frame label="Dãy số 2, 4, 6, 8 và một ô trống ở cuối / The sequence 2, 4, 6, 8 with an empty box at the end">
      {nums.map((n, i) => (
        <g key={n} transform={`translate(${30 + i * 88} 80)`}>
          <rect width="70" height="70" rx="14" fill="#dbeafe" stroke="#2563eb" strokeWidth="3" />
          <text x="35" y="50" textAnchor="middle" fontSize="36" fontWeight="800" fill="#1e3a8a">{n}</text>
        </g>
      ))}
      <g transform="translate(294 80)">
        <rect width="70" height="70" rx="14" fill="#fff" stroke="#94a3b8" strokeWidth="3" strokeDasharray="8 6" />
        <text x="35" y="50" textAnchor="middle" fontSize="36" fontWeight="800" fill="#94a3b8">?</text>
      </g>
      <path d="M118 115 H130 M206 115 H218" stroke="#f97316" strokeWidth="4" />
    </Frame>
  )
}
