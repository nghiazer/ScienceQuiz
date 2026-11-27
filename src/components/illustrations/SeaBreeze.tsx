import Frame from './Frame'

export default function SeaBreeze() {
  return (
    <Frame label="Bờ biển ban ngày: bên trái là biển, bên phải là đất liền có Mặt Trời. Mũi tên dưới thấp chỉ từ biển vào đất liền, mũi tên trên cao chỉ từ đất liền ra biển / Seashore in the daytime: sea on the left, land with the Sun on the right. The low arrow points from the sea to the land, the high arrow points from the land back to the sea">
      <rect width="400" height="240" fill="#e0f2fe" />
      <circle cx="365" cy="34" r="20" fill="#fbbf24" />
      {/* biển */}
      <rect x="0" y="150" width="160" height="90" fill="#38bdf8" />
      <path d="M0 165 Q20 158 40 165 T80 165 T120 165 T160 165" stroke="#fff" strokeWidth="3" fill="none" />
      {/* đất liền */}
      <rect x="160" y="150" width="240" height="90" fill="#86efac" />
      <path d="M290 150 L335 108 L380 150Z" fill="#a16207" />

      {/* gió thấp: từ biển vào đất liền (xanh) */}
      <path d="M40 130 H175" stroke="#2563eb" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M172 116 L194 130 L172 144Z" fill="#2563eb" />
      {/* không khí nóng bốc lên trên đất (đỏ) */}
      <path d="M215 140 V92" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M201 94 L215 72 L229 94Z" fill="#ef4444" />
      {/* gió cao: từ đất liền ra biển (cam) */}
      <path d="M300 66 H62" stroke="#f97316" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M66 52 L44 66 L66 80Z" fill="#f97316" />
      {/* không khí chìm xuống trên biển (xanh) */}
      <path d="M40 80 V108" stroke="#2563eb" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M26 106 L40 126 L54 106Z" fill="#2563eb" />

      {/* nhãn */}
      <text x="80" y="206" textAnchor="middle" fontSize="20" fontWeight="800" fill="#0c4a6e">Biển · Sea</text>
      <text x="280" y="206" textAnchor="middle" fontSize="20" fontWeight="800" fill="#14532d">Đất liền · Land</text>
    </Frame>
  )
}
