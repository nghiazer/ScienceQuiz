import Frame from './Frame'

/** Tam giác lớn + 1 đoạn từ đỉnh xuống đáy + 1 đoạn ngang song song với đáy: 6 tam giác, 3 hình thang. */
export default function MaCountTriangles() {
  return (
    <Frame label="Một tam giác lớn có một đoạn thẳng từ đỉnh xuống cạnh đáy và một đoạn thẳng nằm ngang cắt qua giữa / A big triangle with one line from the top corner down to the base and one horizontal line across the middle">
      <polygon points="200,25 50,215 350,215" fill="#fef3c7" stroke="#b45309" strokeWidth="5" strokeLinejoin="round" />
      <g stroke="#b45309" strokeWidth="5" strokeLinecap="round">
        <line x1="200" y1="25" x2="230" y2="215" />
        <line x1="125" y1="120" x2="275" y2="120" />
      </g>
    </Frame>
  )
}
