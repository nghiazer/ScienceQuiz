import Frame from './Frame'

export default function CompostCycle() {
  return (
    <Frame label="Vòng tuần hoàn: lá rụng được phân hủy thành đất, đất nuôi cây mới, cây lại rụng lá / Cycle: fallen leaves decay into soil, soil feeds new plants, plants drop leaves again">
      <defs>
        <marker id="cc" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="8" refY="6" orient="auto">
          <path d="M0 0 L12 6 L0 12 z" fill="#f97316" />
        </marker>
      </defs>
      <g transform="translate(200 55)">
        <ellipse rx="34" ry="20" fill="#f97316" transform="rotate(-20)" />
        <path d="M-30 14 Q0 -4 30 -12" stroke="#7c2d12" strokeWidth="3" fill="none" />
      </g>
      <g transform="translate(90 190)">
        <ellipse rx="50" ry="22" fill="#92400e" />
        <circle cx="-18" cy="-6" r="4" fill="#fbbf24" />
        <circle cx="10" cy="-2" r="3" fill="#fbbf24" />
      </g>
      <g transform="translate(310 190)">
        <path d="M0 20 V-20" stroke="#15803d" strokeWidth="5" />
        <ellipse cx="-14" cy="-14" rx="12" ry="7" fill="#22c55e" transform="rotate(-25 -14 -14)" />
        <ellipse cx="14" cy="-18" rx="12" ry="7" fill="#16a34a" transform="rotate(25 14 -18)" />
        <path d="M-30 26 H30" stroke="#92400e" strokeWidth="6" />
      </g>
      <path d="M160 85 Q120 130 120 160" stroke="#f97316" strokeWidth="5" fill="none" markerEnd="url(#cc)" />
      <path d="M130 190 H270" stroke="#f97316" strokeWidth="5" fill="none" markerEnd="url(#cc)" />
      <path d="M280 160 Q280 130 240 85" stroke="#f97316" strokeWidth="5" fill="none" markerEnd="url(#cc)" />
    </Frame>
  )
}
