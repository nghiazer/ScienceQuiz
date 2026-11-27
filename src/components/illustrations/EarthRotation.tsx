import Frame from './Frame'

export default function EarthRotation() {
  return (
    <Frame label="Mặt Trời chiếu sáng một nửa Trái Đất, nửa được chiếu sáng là ban ngày, nửa kia là ban đêm; mũi tên cong cho thấy Trái Đất tự quay (ngược chiều kim đồng hồ khi nhìn từ trên Cực Bắc xuống) / The Sun lights half of Earth; the lit half has day and the dark half has night; the curved arrow shows Earth spinning (counterclockwise when seen from above the North Pole)">
      <defs>
        <marker id="er" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="8" refY="6" orient="auto">
          <path d="M0 0 L12 6 L0 12 z" fill="#f97316" />
        </marker>
      </defs>
      {/* Sun */}
      <g transform="translate(60 120)">
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={i} y1="-34" y2="-46" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" transform={`rotate(${i * 36})`} />
        ))}
        <circle r="26" fill="#fbbf24" />
      </g>
      {/* Earth */}
      <g transform="translate(260 120)">
        <circle r="78" fill="#1e3a8a" />
        <path d="M0 -78 A78 78 0 0 0 0 78 Z" fill="#38bdf8" />
        <path d="M-30 -30 q14 -8 22 8 q-4 14 -14 18 q-12 -4 -8 -26Z" fill="#22c55e" opacity="0.8" />
        <path d="M20 20 q10 -4 14 8 q-4 10 -12 8 q-6 -4 -2 -16Z" fill="#22c55e" opacity="0.8" />
      </g>
      {/* mũi tên quay: ngược chiều kim đồng hồ (nhìn từ Cực Bắc), tức từ tây sang đông */}
      <path d="M347 105 A88 88 0 0 0 245 33" stroke="#f97316" strokeWidth="5" fill="none" markerEnd="url(#er)" />
    </Frame>
  )
}
