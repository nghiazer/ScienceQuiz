import Frame from './Frame'

export default function SoilLayers() {
  return (
    <Frame label="Mặt cắt đất gồm ba lớp xếp chồng, đánh số 1, 2, 3 từ trên xuống dưới; màu sáng dần khi xuống sâu / Soil cross-section with three stacked layers numbered 1, 2, 3 from top to bottom; the colours get lighter going down">
      {/* lớp 1: sẫm nhất, nhiều mùn */}
      <rect x="80" y="15" width="260" height="62" fill="#4a2c0f" />
      {[[100, 35], [160, 58], [220, 30], [280, 55], [320, 34]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="#7c4a1d" />
      ))}
      {/* lớp 2: nâu sáng hơn */}
      <rect x="80" y="77" width="260" height="62" fill="#b4793f" />
      {[[110, 98], [170, 120], [235, 100], [300, 122]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="#d9a066" />
      ))}
      {/* lớp 3: đá gốc, sáng nhất, có vết nứt */}
      <rect x="80" y="139" width="260" height="76" fill="#d1d5db" />
      <path d="M120 160 L150 182 L138 202 M230 150 L252 174 L290 168 M300 190 L320 204" stroke="#4b5563" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="80" y="15" width="260" height="200" fill="none" stroke="#334155" strokeWidth="3" />
      {/* số 1, 2, 3 bên trái, mỗi số một kiểu như nhau */}
      {[['1', 46], ['2', 108], ['3', 177]].map(([n, y]) => (
        <g key={n}>
          <circle cx="42" cy={y as number} r="17" fill="#fff" stroke="#334155" strokeWidth="3" />
          <text x="42" y={(y as number) + 8} textAnchor="middle" fontSize="22" fontWeight="800" fill="#334155">{n}</text>
          <path d={`M60 ${y}H80`} stroke="#334155" strokeWidth="3" />
        </g>
      ))}
    </Frame>
  )
}
