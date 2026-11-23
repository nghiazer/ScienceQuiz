import Frame from './Frame'

export default function Landforms() {
  return (
    <Frame label="Địa hình: núi cao, sông chảy từ núi xuống đồng bằng rồi ra biển / Landforms: a high mountain, a river flowing from the mountain across a plain to the sea">
      <rect width="400" height="240" fill="#e0f2fe" />
      <path d="M0 240 L100 60 L200 240Z" fill="#78716c" />
      <path d="M100 60 L115 90 L104 92 L95 80Z" fill="#fff" opacity="0.9" />
      <path d="M100 75 Q130 120 160 150 Q190 180 200 230" stroke="#38bdf8" strokeWidth="8" fill="none" strokeLinecap="round" />
      <rect x="200" y="140" width="200" height="100" fill="#86efac" />
      <rect x="320" y="200" width="80" height="40" fill="#0369a1" />
      <path d="M200 140 Q260 120 300 140" fill="none" stroke="#166534" strokeWidth="3" />
    </Frame>
  )
}
