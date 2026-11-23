import Frame from './Frame'

function Arrow({ x }: { x: number }) {
  return <path d={`M${x} 120 H${x + 36}`} stroke="#f97316" strokeWidth="6" strokeLinecap="round" markerEnd="url(#fc)" />
}

export default function FoodChain() {
  return (
    <Frame label="Chuỗi thức ăn đồng cỏ: cỏ, châu chấu, ếch, rắn, đại bàng / Grassland food chain: grass, grasshopper, frog, snake, eagle" viewBox="0 0 500 240">
      <defs>
        <marker id="fc" markerUnits="userSpaceOnUse" markerWidth="16" markerHeight="16" refX="10" refY="8" orient="auto">
          <path d="M0 0 L16 8 L0 16 z" fill="#f97316" />
        </marker>
      </defs>
      <rect y="170" width="500" height="70" fill="#bbf7d0" opacity="0.5" />
      <g fontSize="46" textAnchor="middle">
        <text x="45" y="140">🌿</text>
        <text x="145" y="140">🦗</text>
        <text x="245" y="140">🐸</text>
        <text x="345" y="140">🐍</text>
        <text x="445" y="140">🦅</text>
      </g>
      {[72, 172, 272, 372].map((x) => <Arrow key={x} x={x} />)}
      <g fontSize="22" fontWeight="800" fill="#475569" textAnchor="middle">
        {['1', '2', '3', '4', '5'].map((n, i) => <text key={n} x={45 + i * 100} y="190">{n}</text>)}
      </g>
    </Frame>
  )
}
