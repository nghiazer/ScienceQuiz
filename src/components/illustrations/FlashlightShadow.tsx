import Frame from './Frame'

export default function FlashlightShadow() {
  return (
    <Frame label="Đèn pin chiếu vào quả bóng, bóng của quả bóng in trên tường / A torch shines on a ball, and the ball's shadow falls on the wall">
      <rect x="330" y="10" width="60" height="220" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="3" />
      <path d="M40 90 L110 75 L110 165 L40 150Z" fill="#fde68a" opacity="0.5" />
      <rect x="10" y="100" width="60" height="40" rx="8" fill="#475569" />
      <rect x="66" y="92" width="14" height="56" fill="#334155" />
      <circle cx="200" cy="120" r="34" fill="#38bdf8" stroke="#0369a1" strokeWidth="3" />
      <ellipse cx="350" cy="130" rx="38" ry="46" fill="#1e293b" opacity="0.4" />
    </Frame>
  )
}
