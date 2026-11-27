import Frame from './Frame'

const S = 50
const X0 = 125
const Y0 = 20

/** Hình khai triển chữ thập của hình lập phương; mặt đối nhau: 1–5, 2–4, 3–6. */
const FACES: { n: string; col: number; row: number }[] = [
  { n: '1', col: 1, row: 0 },
  { n: '2', col: 0, row: 1 },
  { n: '3', col: 1, row: 1 },
  { n: '4', col: 2, row: 1 },
  { n: '5', col: 1, row: 2 },
  { n: '6', col: 1, row: 3 },
]

export default function MaCubeNet() {
  return (
    <Frame label="Hình khai triển của hình lập phương gồm 6 ô vuông hình chữ thập, đánh số từ 1 đến 6 / A cross-shaped net of a cube made of 6 squares numbered 1 to 6">
      {FACES.map((f) => (
        <g key={f.n}>
          <rect x={X0 + f.col * S} y={Y0 + f.row * S} width={S} height={S} fill="#fde68a" stroke="#b45309" strokeWidth="4" strokeLinejoin="round" />
          <text x={X0 + f.col * S + S / 2} y={Y0 + f.row * S + S / 2} textAnchor="middle" dominantBaseline="central" fontSize="26" fontWeight="800" fill="#78350f">{f.n}</text>
        </g>
      ))}
    </Frame>
  )
}
