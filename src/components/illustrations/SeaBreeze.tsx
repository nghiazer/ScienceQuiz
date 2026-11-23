import Frame from './Frame'

export default function SeaBreeze() {
  return (
    <Frame label="Ban ngày: đất nóng nhanh, không khí nóng bốc lên, gió biển thổi từ biển vào đất liền / Daytime: land heats up, warm air rises, and the sea breeze blows in from the sea">
      <rect width="400" height="240" fill="#e0f2fe" />
      <circle cx="350" cy="45" r="22" fill="#fbbf24" />
      <rect x="0" y="150" width="160" height="90" fill="#38bdf8" />
      <path d="M0 165 Q20 158 40 165 T80 165 T120 165 T160 165" stroke="#fff" strokeWidth="3" fill="none" />
      <rect x="160" y="150" width="240" height="90" fill="#86efac" />
      <path d="M230 150 L270 110 L310 150Z" fill="#a16207" />
      <path d="M140 150 H110" stroke="#2563eb" strokeWidth="8" markerEnd="url(#sb)" />
      <defs>
        <marker id="sb" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="8" refY="6" orient="auto">
          <path d="M0 0 L12 6 L0 12 z" fill="#2563eb" />
        </marker>
      </defs>
      <path d="M200 140 Q205 100 200 60" stroke="#ef4444" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M205 62 L199 50 L193 62" stroke="#ef4444" strokeWidth="4" fill="none" />
      <path d="M100 120 H180" stroke="#2563eb" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M170 110 L185 120 L170 130" stroke="#2563eb" strokeWidth="6" fill="none" strokeLinecap="round" />
    </Frame>
  )
}
