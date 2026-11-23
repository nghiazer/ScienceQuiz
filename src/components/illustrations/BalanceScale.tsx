import Frame from './Frame'

export default function BalanceScale() {
  return (
    <Frame label="Cân đĩa: bên trái thấp hơn vì vật bên trái nặng hơn / Balance scale: the left side is lower because its object is heavier">
      <line x1="200" y1="70" x2="200" y2="210" stroke="#64748b" strokeWidth="6" />
      <path d="M170 210 H230 L220 222 H180Z" fill="#64748b" />
      <polygon points="200,60 188,82 212,82" fill="#334155" />
      {/* beam tilted: left lower */}
      <line x1="110" y1="100" x2="290" y2="60" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
      {/* strings and pans */}
      <g stroke="#475569" strokeWidth="2">
        <line x1="110" y1="100" x2="88" y2="150" /><line x1="110" y1="100" x2="132" y2="150" />
        <line x1="290" y1="60" x2="268" y2="110" /><line x1="290" y1="60" x2="312" y2="110" />
      </g>
      <path d="M78 150 H142 L134 162 H86Z" fill="#fbbf24" stroke="#92400e" strokeWidth="2" />
      <path d="M258 110 H322 L314 122 H266Z" fill="#fbbf24" stroke="#92400e" strokeWidth="2" />
      {/* heavy object on left */}
      <circle cx="110" cy="132" r="16" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
      {/* light object on right */}
      <circle cx="290" cy="92" r="8" fill="#22c55e" stroke="#166534" strokeWidth="2" />
    </Frame>
  )
}
