import Frame from './Frame'

/** "Look!" và "Listen!": dấu hiệu của hành động đang diễn ra ngay lúc nói. */
export default function LookListen() {
  const font = 'Nunito, system-ui, sans-serif'
  return (
    <Frame label="Con mắt (Look!) và cái tai (Listen!): nhìn và nghe điều đang xảy ra ngay lúc này / An eye (Look!) and an ear (Listen!): something is happening right now">
      <rect width="400" height="240" fill="#fff7ed" />
      <line x1="200" y1="24" x2="200" y2="216" stroke="#fed7aa" strokeWidth="4" strokeDasharray="8 8" />
      {/* mắt */}
      <g transform="translate(100 108)">
        <path d="M-62 0 Q0 -52 62 0 Q0 52 -62 0 Z" fill="#fff" stroke="#f97316" strokeWidth="6" />
        <circle r="24" fill="#0ea5e9" />
        <circle r="11" fill="#0f172a" />
        <circle cx="-7" cy="-8" r="5" fill="#fff" />
        {[-40, 0, 40].map((x) => (
          <line key={x} x1={x} y1="-62" x2={x * 1.3} y2="-76" stroke="#f97316" strokeWidth="5" strokeLinecap="round" />
        ))}
      </g>
      <text x="100" y="204" textAnchor="middle" fontSize="30" fontWeight="900" fill="#c2410c" fontFamily={font}>Look!</text>
      {/* tai */}
      <g transform="translate(300 106)">
        <path d="M-6 -50 C-48 -50 -52 4 -30 18 C-18 26 -26 52 -4 54 C24 54 30 20 30 -4 C30 -34 14 -50 -6 -50 Z" fill="#fcd34d" stroke="#f97316" strokeWidth="6" strokeLinejoin="round" />
        <path d="M-6 -28 C-26 -28 -26 -2 -12 4" stroke="#f97316" strokeWidth="5" fill="none" strokeLinecap="round" />
        {[0, 1, 2].map((i) => (
          <path key={i} d={`M${52 + i * 14} ${-20 - i * 4} Q${64 + i * 14} 0 ${52 + i * 14} ${20 + i * 4}`} stroke="#f43f5e" strokeWidth="5" fill="none" strokeLinecap="round" opacity={1 - i * 0.25} />
        ))}
      </g>
      <text x="300" y="204" textAnchor="middle" fontSize="30" fontWeight="900" fill="#be123c" fontFamily={font}>Listen!</text>
    </Frame>
  )
}
