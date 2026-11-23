import Frame from './Frame'

export default function DrumSound() {
  return (
    <Frame label="Trống đang được gõ: mặt trống rung và tạo ra sóng âm / A drum being hit: the drumhead vibrates and makes sound waves">
      <ellipse cx="200" cy="150" rx="90" ry="22" fill="#fde68a" stroke="#92400e" strokeWidth="4" />
      <rect x="110" y="150" width="180" height="50" fill="#dc2626" stroke="#92400e" strokeWidth="4" />
      <ellipse cx="200" cy="200" rx="90" ry="22" fill="#b91c1c" stroke="#92400e" strokeWidth="4" />
      <path d="M125 160 L275 190 M275 160 L125 190" stroke="#fef2f2" strokeWidth="3" opacity="0.7" />
      {/* vibration lines on skin */}
      <path d="M140 146 q10 -6 20 0 t20 0 t20 0 t20 0 t20 0" stroke="#f97316" strokeWidth="3" fill="none" />
      {/* sticks */}
      <line x1="60" y1="40" x2="170" y2="130" stroke="#78350f" strokeWidth="8" strokeLinecap="round" />
      <line x1="340" y1="40" x2="230" y2="130" stroke="#78350f" strokeWidth="8" strokeLinecap="round" />
      {/* sound waves */}
      <g stroke="#0ea5e9" strokeWidth="4" fill="none" strokeLinecap="round">
        <path d="M300 95 q12 15 0 30" />
        <path d="M318 83 q22 27 0 54" />
        <path d="M100 95 q-12 15 0 30" />
        <path d="M82 83 q-22 27 0 54" />
      </g>
    </Frame>
  )
}
