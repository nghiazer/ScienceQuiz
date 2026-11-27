import Frame from './Frame'

/** Lưới 3×3 ô vuông bằng nhau: tổng cộng 14 hình vuông (9 + 4 + 1). */
export default function MaCountSquares() {
  const lines = [0, 1, 2, 3]
  return (
    <Frame label="Một lưới ô vuông 3 hàng, 3 cột / A grid of squares with 3 rows and 3 columns">
      <rect x="125" y="45" width="150" height="150" fill="#e0f2fe" />
      <g stroke="#0369a1" strokeWidth="5" strokeLinecap="round">
        {lines.map((i) => (
          <g key={i}>
            <line x1={125 + i * 50} y1="45" x2={125 + i * 50} y2="195" />
            <line x1="125" y1={45 + i * 50} x2="275" y2={45 + i * 50} />
          </g>
        ))}
      </g>
    </Frame>
  )
}
