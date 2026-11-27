import Frame from './Frame'

const SKIN = '#fcd9b6'
const INK = '#92400e'

/** Mũi tên đặc hướng sang phải, đầu mũi tên chạm đúng x = tipX. */
function Arrow({ fromX, tipX, y }: { fromX: number; tipX: number; y: number }) {
  return (
    <g>
      <line x1={fromX} y1={y} x2={tipX - 18} y2={y} stroke="#f97316" strokeWidth="8" />
      <polygon points={`${tipX - 20},${y - 12} ${tipX},${y} ${tipX - 20},${y + 12}`} fill="#f97316" />
    </g>
  )
}

function Badge({ n, y }: { n: string; y: number }) {
  return (
    <g>
      <circle cx="30" cy={y} r="17" fill="#f97316" />
      <text x="30" y={y + 8} textAnchor="middle" fontSize="24" fontWeight="800" fill="#fff">{n}</text>
    </g>
  )
}

export default function PushPull() {
  return (
    <Frame label="Hai hình. Hình 1: bàn tay chạm vào mặt trái của hộp, mũi tên chỉ sang phải. Hình 2: bàn tay cầm sợi dây nối với mặt phải của hộp, mũi tên trên hộp chỉ sang phải / Two pictures. Picture 1: a hand touches the left side of a box, arrow points right. Picture 2: a hand holds a string tied to the right side of a box, arrow points right">
      {/* khung 1: tay chạm trực tiếp vào hộp */}
      <rect x="6" y="6" width="388" height="110" rx="12" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="3" />
      <Badge n="1" y={32} />
      <line x1="16" y1="100" x2="384" y2="100" stroke="#94a3b8" strokeWidth="4" />
      <rect x="170" y="40" width="80" height="60" rx="8" fill="#fbbf24" stroke={INK} strokeWidth="4" />
      <rect x="40" y="66" width="62" height="26" rx="6" fill="#60a5fa" stroke="#1e3a8a" strokeWidth="3" />
      <rect x="98" y="62" width="70" height="34" rx="14" fill={SKIN} stroke={INK} strokeWidth="3" />
      <path d="M142 74 H160 M142 80 H160 M142 86 H160" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
      <Arrow fromX={100} tipX={168} y={50} />

      {/* khung 2: tay cầm dây nối với hộp */}
      <rect x="6" y="124" width="388" height="110" rx="12" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="3" />
      <Badge n="2" y={150} />
      <line x1="16" y1="218" x2="384" y2="218" stroke="#94a3b8" strokeWidth="4" />
      <rect x="70" y="158" width="80" height="60" rx="8" fill="#fbbf24" stroke={INK} strokeWidth="4" />
      <line x1="152" y1="190" x2="272" y2="190" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
      <circle cx="152" cy="190" r="5" fill="#78350f" />
      <rect x="296" y="178" width="76" height="26" rx="6" fill="#60a5fa" stroke="#1e3a8a" strokeWidth="3" />
      <rect x="258" y="172" width="46" height="38" rx="16" fill={SKIN} stroke={INK} strokeWidth="3" />
      <path d="M266 182 V198" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
      <Arrow fromX={162} tipX={232} y={170} />
    </Frame>
  )
}
