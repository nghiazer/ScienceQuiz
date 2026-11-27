import Frame from './Frame'

/** Phép tính que diêm sai "6 + 4 = 4" (chữ số kiểu 7 đoạn). */
type Seg = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g'

const TOP = 70
const MID = 120
const BOT = 170
const W = 50
const GAP = 9

/** Đầu que (chấm đỏ): que ngang ở đầu bên phải, que dọc ở đầu dưới. */
function Stick({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#d97706" strokeWidth="8" strokeLinecap="round" />
      <circle cx={x2} cy={y2} r="5" fill="#dc2626" />
    </g>
  )
}

function seg(x: number, s: Seg) {
  switch (s) {
    case 'a': return { x1: x + GAP, y1: TOP, x2: x + W - GAP, y2: TOP }
    case 'b': return { x1: x + W, y1: TOP + GAP, x2: x + W, y2: MID - GAP }
    case 'c': return { x1: x + W, y1: MID + GAP, x2: x + W, y2: BOT - GAP }
    case 'd': return { x1: x + GAP, y1: BOT, x2: x + W - GAP, y2: BOT }
    case 'e': return { x1: x, y1: MID + GAP, x2: x, y2: BOT - GAP }
    case 'f': return { x1: x, y1: TOP + GAP, x2: x, y2: MID - GAP }
    case 'g': return { x1: x + GAP, y1: MID, x2: x + W - GAP, y2: MID }
  }
}

const SIX: Seg[] = ['a', 'f', 'g', 'e', 'd', 'c']
const FOUR: Seg[] = ['f', 'g', 'b', 'c']

function Digit({ x, segs }: { x: number; segs: Seg[] }) {
  return <g>{segs.map((s) => <Stick key={s} {...seg(x, s)} />)}</g>
}

export default function MaMatchsticks() {
  return (
    <Frame label="Phép tính xếp bằng que diêm: 6 + 4 = 4 / A sum made of matchsticks: 6 + 4 = 4">
      <rect x="10" y="45" width="380" height="150" rx="16" fill="#f1f5f9" />
      <Digit x={25} segs={SIX} />
      {/* dấu + */}
      <Stick x1={102} y1={MID} x2={148} y2={MID} />
      <Stick x1={125} y1={97} x2={125} y2={143} />
      <Digit x={175} segs={FOUR} />
      {/* dấu = */}
      <Stick x1={252} y1={107} x2={298} y2={107} />
      <Stick x1={252} y1={133} x2={298} y2={133} />
      <Digit x={325} segs={FOUR} />
    </Frame>
  )
}
