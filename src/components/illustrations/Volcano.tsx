import Frame from './Frame'

export default function Volcano() {
  return (
    <Frame label="Núi lửa: dung nham và khí phun từ miệng núi xuống sườn núi / A volcano: lava and gas erupting from the crater down the slopes">
      <rect width="400" height="240" fill="#e0f2fe" />
      <path d="M40 220 L170 80 H230 L360 220Z" fill="#78716c" />
      <ellipse cx="200" cy="80" rx="30" ry="8" fill="#7c2d12" />
      <path d="M200 80 Q190 40 210 20" stroke="#9ca3af" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M200 80 L170 130 L185 140 L200 110 L215 140 L230 130Z" fill="#f97316" />
      <path d="M200 80 Q230 110 240 180" stroke="#ef4444" strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M160 80 Q150 110 130 130" stroke="#fb923c" strokeWidth="6" fill="none" strokeLinecap="round" />
    </Frame>
  )
}
