import Frame from './Frame'

const ROWS: Array<[string, number]> = [['Lan', 4], ['Minh', 6], ['Hoa', 4]]

export default function Pictograph() {
  return (
    <Frame label="Bảng hình: Lan có 4 quả, Minh có 6 quả, Hoa có 4 quả / Picture table: Lan has 4 fruits, Minh has 6, Hoa has 4">
      {ROWS.map(([name, n], r) => (
        <g key={name} transform={`translate(0 ${30 + r * 62})`}>
          <text x="20" y="34" fontSize="20" fontWeight="800" fill="#334155">{name}</text>
          {Array.from({ length: n }).map((_, i) => (
            <circle key={i} cx={110 + i * 40} cy="26" r="14" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
          ))}
        </g>
      ))}
    </Frame>
  )
}
