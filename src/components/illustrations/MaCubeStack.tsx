import Frame from './Frame'

const S = 50
const D = 24
const X0 = 113
const BASE = 215

/** Bậc thang 6 khối lập phương: hàng dưới 3, giữa 2, trên 1 — không có khối bị che. */
const CUBES: [number, number][] = [[0, 0], [1, 0], [2, 0], [0, 1], [1, 1], [0, 2]]

function Cube({ col, row }: { col: number; row: number }) {
  const x = X0 + col * S
  const y = BASE - (row + 1) * S
  return (
    <g stroke="#1e3a8a" strokeWidth="3" strokeLinejoin="round">
      <polygon points={`${x + S},${y} ${x + S + D},${y - D} ${x + S + D},${y + S - D} ${x + S},${y + S}`} fill="#3b82f6" />
      <polygon points={`${x},${y} ${x + D},${y - D} ${x + S + D},${y - D} ${x + S},${y}`} fill="#bfdbfe" />
      <rect x={x} y={y} width={S} height={S} fill="#93c5fd" />
    </g>
  )
}

export default function MaCubeStack() {
  return (
    <Frame label="Các khối lập phương nhỏ xếp thành bậc thang: hàng dưới, hàng giữa và hàng trên / Small cubes stacked like stairs: a bottom row, a middle row and a top row">
      {CUBES.map(([c, r]) => <Cube key={`${c}-${r}`} col={c} row={r} />)}
    </Frame>
  )
}
