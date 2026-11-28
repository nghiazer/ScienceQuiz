/** Hình nhỏ dùng chung cho váy và phụ kiện (toạ độ trong khung 240×330 của công chúa). */

export function Gem({ x, y, r = 3.2, fill }: { x: number; y: number; r?: number; fill: string }) {
  return (
    <g>
      <path d={`M${x} ${y - r} L${x + r * 0.8} ${y} L${x} ${y + r} L${x - r * 0.8} ${y} Z`} fill={fill} stroke="#fff" strokeWidth="0.8" />
      <path d={`M${x} ${y - r} L${x + r * 0.8} ${y} L${x} ${y} Z`} fill="#fff" opacity="0.4" />
    </g>
  )
}

export function Bow({ x, y, color }: { x: number; y: number; color: string }) {
  return (
    <g>
      <path d={`M${x} ${y} L${x - 13} ${y - 8} Q${x - 17} ${y} ${x - 13} ${y + 8} Z`} fill={color} />
      <path d={`M${x} ${y} L${x + 13} ${y - 8} Q${x + 17} ${y} ${x + 13} ${y + 8} Z`} fill={color} />
      <path d={`M${x} ${y} L${x - 9} ${y + 12} M${x} ${y} L${x + 9} ${y + 12}`} stroke={color} strokeWidth="3.4" strokeLinecap="round" />
      <path d={`M${x - 12} ${y - 5} L${x - 3} ${y - 1} M${x + 12} ${y - 5} L${x + 3} ${y - 1}`} stroke="#000" strokeOpacity="0.15" strokeWidth="1" />
      <circle cx={x} cy={y} r="3.4" fill={color} stroke="#fff" strokeWidth="1" />
    </g>
  )
}
