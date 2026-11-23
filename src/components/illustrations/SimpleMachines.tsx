import Frame from './Frame'

export default function SimpleMachines() {
  return (
    <Frame label="Ba máy đơn giản: mặt phẳng nghiêng, đòn bẩy bập bênh và ròng rọc cố định / Three simple machines: inclined plane, seesaw lever and fixed pulley">
      {/* ramp */}
      <path d="M20 200 L120 200 L120 110 Z" fill="#fde68a" stroke="#92400e" strokeWidth="4" strokeLinejoin="round" />
      <rect x="70" y="120" width="30" height="24" fill="#f97316" transform="rotate(-42 85 132)" />
      {/* seesaw */}
      <polygon points="200,200 185,220 215,220" fill="#64748b" />
      <line x1="150" y1="170" x2="250" y2="150" stroke="#334155" strokeWidth="8" strokeLinecap="round" />
      <circle cx="158" cy="162" r="10" fill="#f97316" />
      <circle cx="244" cy="146" r="14" fill="#8b5cf6" />
      {/* pulley */}
      <circle cx="330" cy="60" r="22" fill="#cbd5e1" stroke="#334155" strokeWidth="4" />
      <line x1="308" y1="60" x2="308" y2="180" stroke="#334155" strokeWidth="3" />
      <line x1="352" y1="60" x2="352" y2="120" stroke="#334155" strokeWidth="3" />
      <rect x="330" y="120" width="44" height="40" rx="4" fill="#fbbf24" stroke="#92400e" strokeWidth="3" />
      <rect x="290" y="180" width="50" height="10" fill="#94a3b8" />
    </Frame>
  )
}
