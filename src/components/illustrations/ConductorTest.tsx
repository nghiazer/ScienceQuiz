import Frame from './Frame'

interface PanelProps {
  x: number
  y: number
  letter: string
  lit: boolean
  object: 'coin' | 'wood' | 'plastic' | 'rubber'
}

function Panel({ x, y, letter, lit, object }: PanelProps) {
  const wire = '#334155'
  const objectShape = {
    coin: <circle cx="0" cy="0" r="14" fill="#d97706" stroke="#92400e" strokeWidth="2" />,
    wood: <rect x="-16" y="-10" width="32" height="20" rx="3" fill="#a16207" />,
    plastic: <rect x="-24" y="-6" width="48" height="12" rx="3" fill="#60a5fa" />,
    rubber: <rect x="-14" y="-10" width="28" height="20" rx="4" fill="#f9a8d4" />,
  }[object]
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="-90" y="-50" width="180" height="100" rx="14" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
      <path d="M-70 -20 H-40 M-10 -20 H-14 M14 -20 H70 V25 H-70 V-20" stroke={wire} strokeWidth="4" fill="none" strokeLinejoin="round" />
      <g transform="translate(-40 -20) rotate(90)">
        <rect x="-10" y="-14" width="20" height="28" rx="3" fill="#fbbf24" stroke={wire} strokeWidth="2" />
      </g>
      <g transform="translate(40 -20)">
        {lit && <circle r="24" fill="#fde047" opacity="0.5" />}
        <circle r="13" fill={lit ? '#fde047' : '#e2e8f0'} stroke={wire} strokeWidth="3" />
      </g>
      <g transform="translate(0 -20)">{objectShape}</g>
      <text x="-74" y="-32" fontSize="16" fontWeight="800" fill="#334155">{letter}</text>
    </g>
  )
}

export default function ConductorTest() {
  return (
    <Frame label="Bốn vật thử nghiệm trong mạch điện: A đồng xu làm đèn sáng, B gỗ, C nhựa và D cao su không làm đèn sáng / Four objects tested in a circuit: A copper coin lights the bulb; B wood, C plastic and D rubber do not">
      <Panel x={100} y={60} letter="A" lit object="coin" />
      <Panel x={300} y={60} letter="B" lit={false} object="wood" />
      <Panel x={100} y={180} letter="C" lit={false} object="plastic" />
      <Panel x={300} y={180} letter="D" lit={false} object="rubber" />
    </Frame>
  )
}
