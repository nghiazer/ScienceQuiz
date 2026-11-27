import Frame from './Frame'

export default function DrumSound() {
  return (
    <Frame label="Một chiếc trống trên chân, cây dùi đang đánh vào mặt trống, âm thanh lan ra xung quanh / A drum on a stand with a drumstick hitting the drumhead, sound spreading out around it">
      {/* chân trống */}
      <g stroke="#78350f" strokeWidth="7" strokeLinecap="round">
        <line x1="150" y1="180" x2="115" y2="228" />
        <line x1="250" y1="180" x2="285" y2="228" />
        <line x1="200" y1="185" x2="200" y2="230" />
      </g>
      {/* thân trống */}
      <rect x="110" y="120" width="180" height="50" fill="#dc2626" stroke="#92400e" strokeWidth="4" />
      <ellipse cx="200" cy="170" rx="90" ry="22" fill="#dc2626" stroke="#92400e" strokeWidth="4" />
      <rect x="112" y="120" width="176" height="50" fill="#dc2626" />
      <path d="M122 148 L150 166 L178 148 L206 166 L234 148 L262 166 L284 150" stroke="#fef2f2" strokeWidth="3" fill="none" opacity="0.8" strokeLinejoin="round" />
      {/* mặt trống */}
      <ellipse cx="200" cy="120" rx="90" ry="22" fill="#fde68a" stroke="#92400e" strokeWidth="4" />
      {/* cây dùi đánh vào mặt trống */}
      <line x1="308" y1="32" x2="228" y2="114" stroke="#78350f" strokeWidth="8" strokeLinecap="round" />
      <circle cx="226" cy="116" r="7" fill="#b45309" stroke="#78350f" strokeWidth="3" />
      {/* sóng âm: các cung tròn đồng tâm quanh trống */}
      <g stroke="#0ea5e9" strokeWidth="4" fill="none" strokeLinecap="round">
        <path d="M299.6 87.5 A115 115 0 0 1 299.6 202.5" />
        <path d="M321.2 75 A140 140 0 0 1 321.2 215" />
        <path d="M342.9 62.5 A165 165 0 0 1 342.9 227.5" />
        <path d="M100.4 202.5 A115 115 0 0 1 100.4 87.5" />
        <path d="M78.8 215 A140 140 0 0 1 78.8 75" />
        <path d="M57.1 227.5 A165 165 0 0 1 57.1 62.5" />
      </g>
    </Frame>
  )
}
