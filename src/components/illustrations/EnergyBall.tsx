import Frame from './Frame'

export default function EnergyBall() {
  return (
    <Frame label="Quả bóng ở trên cao có thế năng; khi rơi, thế năng chuyển thành động năng / A ball high up has potential energy; as it falls, potential energy turns into kinetic energy">
      <line x1="60" y1="210" x2="150" y2="210" stroke="#94a3b8" strokeWidth="4" />
      <circle cx="100" cy="50" r="22" fill="#f97316" />
      <path d="M100 80 V150" stroke="#64748b" strokeWidth="4" strokeDasharray="6 6" markerEnd="url(#eb)" />
      <defs>
        <marker id="eb" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#64748b" />
        </marker>
      </defs>
      <circle cx="100" cy="186" r="22" fill="#f97316" />
      <text x="100" y="236" textAnchor="middle" fontSize="18" fontWeight="800" fill="#334155">1</text>
      <line x1="230" y1="210" x2="350" y2="210" stroke="#94a3b8" strokeWidth="4" />
      <circle cx="290" cy="150" r="22" fill="#f97316" />
      <path d="M270 140 L250 128 M270 160 L250 172" stroke="#2563eb" strokeWidth="5" strokeLinecap="round" />
      <text x="290" y="236" textAnchor="middle" fontSize="18" fontWeight="800" fill="#334155">2</text>
    </Frame>
  )
}
