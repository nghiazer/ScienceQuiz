import Frame from './Frame'

export default function Rainbow() {
  const colors = ['#ef4444', '#f97316', '#facc15', '#22c55e', '#3b82f6', '#8b5cf6']
  return (
    <Frame label="Cầu vồng: ánh sáng Mặt Trời bị tách thành nhiều màu khi đi qua các giọt nước / A rainbow: sunlight splits into colours as it passes through water droplets">
      <rect width="400" height="240" fill="#e0f2fe" />
      <circle cx="30" cy="40" r="20" fill="#fbbf24" />
      {colors.map((c, i) => (
        <path key={c} d={`M${90 - i * 8} 220 A${130 - i * 8} ${130 - i * 8} 0 0 1 ${310 + i * 8} 220`} stroke={c} strokeWidth="9" fill="none" />
      ))}
      <g fill="#60a5fa" opacity="0.8">
        <path d="M30 140 q-5 8 0 12 q5 -4 0 -12" />
        <path d="M60 160 q-5 8 0 12 q5 -4 0 -12" />
        <path d="M360 150 q-5 8 0 12 q5 -4 0 -12" />
      </g>
    </Frame>
  )
}
