import Frame from './Frame'

export default function AnimalTeeth() {
  return (
    <Frame label="A: hàng răng hàm bằng phẳng để nghiền cỏ. B: hai răng nanh nhọn để giữ và xé thịt / A: flat back teeth for grinding grass. B: sharp canine teeth for gripping and tearing meat">
      <rect x="10" y="20" width="180" height="200" rx="16" fill="#f0fdf4" stroke="#86efac" strokeWidth="3" />
      <rect x="210" y="20" width="180" height="200" rx="16" fill="#fef2f2" stroke="#fca5a5" strokeWidth="3" />
      <rect x="30" y="90" width="140" height="60" rx="10" fill="#fff" stroke="#94a3b8" strokeWidth="3" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={38 + i * 26} y="98" width="22" height="44" rx="5" fill="#fef9c3" stroke="#a16207" strokeWidth="2" />
      ))}
      <path d="M250 80 H350 V120 H250Z" fill="#fff" stroke="#94a3b8" strokeWidth="3" />
      <path d="M262 80 L272 130 L282 80Z" fill="#fff" stroke="#b91c1c" strokeWidth="3" strokeLinejoin="round" />
      <path d="M318 80 L328 130 L338 80Z" fill="#fff" stroke="#b91c1c" strokeWidth="3" strokeLinejoin="round" />
      <text x="100" y="200" textAnchor="middle" fontSize="28" fontWeight="800" fill="#334155">A</text>
      <text x="300" y="200" textAnchor="middle" fontSize="28" fontWeight="800" fill="#334155">B</text>
    </Frame>
  )
}
