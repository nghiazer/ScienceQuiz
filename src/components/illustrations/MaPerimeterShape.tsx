import Frame from './Frame'

/** Hình chữ L (hình chữ nhật 8 cm × 5 cm bị cắt góc 3 cm × 2 cm): chu vi 26 cm, diện tích 34 cm². */
export default function MaPerimeterShape() {
  return (
    <Frame label="Một hình chữ L, mỗi cạnh đều ghi độ dài: 5 cm, 2 cm, 3 cm, 3 cm, 8 cm, 5 cm / An L-shape with every side length written: 5 cm, 2 cm, 3 cm, 3 cm, 8 cm, 5 cm">
      <path d="M80 45 H230 V105 H320 V195 H80 Z" fill="#ddd6fe" stroke="#6d28d9" strokeWidth="5" strokeLinejoin="round" />
      <g fontSize="18" fontWeight="800" fill="#4c1d95">
        <text x="155" y="35" textAnchor="middle">5 cm</text>
        <text x="238" y="78" textAnchor="start">2 cm</text>
        <text x="290" y="97" textAnchor="middle">3 cm</text>
        <text x="330" y="156" textAnchor="start">3 cm</text>
        <text x="200" y="219" textAnchor="middle">8 cm</text>
        <text x="70" y="126" textAnchor="end">5 cm</text>
      </g>
    </Frame>
  )
}
