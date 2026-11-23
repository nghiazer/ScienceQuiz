import Frame from './Frame'

export default function SunShadow() {
  return (
    <Frame label="Mặt Trời ở trên cao và bóng của cái cây trên mặt đất / The Sun high in the sky and a tree's shadow on the ground">
      <rect width="400" height="240" fill="#e0f2fe" />
      <rect y="180" width="400" height="60" fill="#86efac" />
      {/* Mặt Trời */}
      <g transform="translate(300 55)">
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={i} x1="0" y1="-38" x2="0" y2="-52" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" transform={`rotate(${i * 30})`} />
        ))}
        <circle r="30" fill="#fbbf24" />
        <circle cx="-9" cy="-4" r="3" fill="#92400e" />
        <circle cx="9" cy="-4" r="3" fill="#92400e" />
        <path d="M-9 8 Q0 15 9 8" stroke="#92400e" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
      {/* Cây */}
      <rect x="95" y="115" width="16" height="70" rx="4" fill="#92400e" />
      <circle cx="103" cy="95" r="38" fill="#16a34a" />
      <circle cx="80" cy="110" r="24" fill="#22c55e" />
      <circle cx="128" cy="110" r="24" fill="#22c55e" />
      {/* Bóng — nằm về phía đối diện Mặt Trời (bên trái) */}
      <ellipse cx="56" cy="196" rx="46" ry="8" fill="#14532d" opacity="0.4" />
      {/* Tia nắng */}
      <line x1="270" y1="80" x2="140" y2="135" stroke="#fbbf24" strokeWidth="3" strokeDasharray="8 8" />
    </Frame>
  )
}
