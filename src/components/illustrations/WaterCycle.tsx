import Frame from './Frame'

export default function WaterCycle() {
  return (
    <Frame label="Vòng tuần hoàn nước: nước bốc hơi từ biển, tạo thành mây, rồi rơi xuống thành mưa / Water cycle: evaporation, clouds, rain">
      <rect width="400" height="240" fill="#e0f2fe" />
      <rect y="170" width="400" height="70" fill="#38bdf8" />
      <circle cx="340" cy="42" r="26" fill="#fbbf24" />
      <g fill="#fff" stroke="#94a3b8" strokeWidth="2">
        <ellipse cx="170" cy="55" rx="55" ry="26" />
        <ellipse cx="135" cy="68" rx="35" ry="20" />
        <ellipse cx="210" cy="68" rx="38" ry="20" />
      </g>
      <g stroke="#f97316" strokeWidth="5" strokeLinecap="round" fill="none">
        <path d="M60 165 C50 140 70 125 60 100" markerEnd="url(#wc)" />
        <path d="M100 165 C90 140 110 125 100 100" markerEnd="url(#wc)" />
      </g>
      <defs>
        <marker id="wc" markerUnits="userSpaceOnUse" markerWidth="16" markerHeight="16" refX="8" refY="8" orient="auto">
          <path d="M0 0 L16 8 L0 16 z" fill="#f97316" />
        </marker>
      </defs>
      {[150, 175, 200, 225].map((x, i) => (
        <path key={x} d={`M${x} ${100 + (i % 2) * 14} l-5 16`} stroke="#2563eb" strokeWidth="5" strokeLinecap="round" />
      ))}
      <path d="M300 170 L340 110 L380 170Z" fill="#a3a3a3" />
    </Frame>
  )
}
