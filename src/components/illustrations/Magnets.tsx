import Frame from './Frame'

function Bar({ x, left, right }: { x: number; left: 'N' | 'S'; right: 'N' | 'S' }) {
  const c = (p: 'N' | 'S') => (p === 'N' ? '#ef4444' : '#3b82f6')
  return (
    <g transform={`translate(${x} 95)`}>
      <rect width="80" height="50" rx="8" fill={c(left)} />
      <rect x="80" width="80" height="50" rx="8" fill={c(right)} />
      <rect x="70" width="20" height="50" fill={c(left)} opacity="0" />
      <text x="40" y="35" textAnchor="middle" fontSize="28" fontWeight="800" fill="#fff">{left}</text>
      <text x="120" y="35" textAnchor="middle" fontSize="28" fontWeight="800" fill="#fff">{right}</text>
    </g>
  )
}

export default function Magnets() {
  return (
    <Frame label="Hai thanh nam châm đặt gần nhau, hai cực N đối diện nhau / Two bar magnets with N poles facing">
      <Bar x={20} left="S" right="N" />
      <Bar x={220} left="N" right="S" />
      <text x="200" y="70" textAnchor="middle" fontSize="40">❓</text>
    </Frame>
  )
}
