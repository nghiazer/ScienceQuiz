import Frame from './Frame'

export default function EnergyBall() {
  return (
    <Frame label="Vị trí 1: quả bóng được tay giữ ở trên cao so với mặt đất. Vị trí 2: quả bóng đang rơi xuống, có các vạch chuyển động phía sau / Position 1: a ball held high above the ground by a hand. Position 2: the ball is falling, with motion lines behind it">
      {/* vị trí 1: bóng được giữ cao */}
      <line x1="40" y1="210" x2="160" y2="210" stroke="#94a3b8" strokeWidth="5" strokeLinecap="round" />
      <line x1="14" y1="84" x2="80" y2="84" stroke="#fdba74" strokeWidth="16" strokeLinecap="round" />
      <circle cx="104" cy="50" r="22" fill="#f97316" stroke="#c2410c" strokeWidth="3" />
      <ellipse cx="104" cy="78" rx="30" ry="9" fill="#fdba74" stroke="#ea580c" strokeWidth="3" />
      <ellipse cx="80" cy="60" rx="7" ry="13" fill="#fdba74" stroke="#ea580c" strokeWidth="3" transform="rotate(-20 80 60)" />
      <text x="104" y="236" textAnchor="middle" fontSize="22" fontWeight="800" fill="#334155">1</text>

      {/* vị trí 2: bóng đang rơi, vạch chuyển động ở phía trên bóng */}
      <line x1="230" y1="210" x2="350" y2="210" stroke="#94a3b8" strokeWidth="5" strokeLinecap="round" />
      <path d="M276 76 V104 M290 56 V104 M304 76 V104" stroke="#2563eb" strokeWidth="5" strokeLinecap="round" />
      <circle cx="290" cy="140" r="22" fill="#f97316" stroke="#c2410c" strokeWidth="3" />
      <text x="290" y="236" textAnchor="middle" fontSize="22" fontWeight="800" fill="#334155">2</text>
    </Frame>
  )
}
