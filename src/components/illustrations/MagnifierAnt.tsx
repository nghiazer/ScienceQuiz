import Frame from './Frame'

export default function MagnifierAnt() {
  return (
    <Frame label="Kính lúp phóng to một con kiến: kiến có ba phần cơ thể và sáu chân / A magnifying glass enlarges an ant with three body parts and six legs">
      {/* lens */}
      <circle cx="210" cy="110" r="72" fill="#e0f2fe" fillOpacity="0.6" stroke="#0369a1" strokeWidth="8" />
      {/* ant inside lens, enlarged */}
      <g transform="translate(210 110) scale(1.5)" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round">
        <ellipse cx="-16" cy="0" rx="10" ry="8" fill="#7c2d12" />
        <circle cx="0" cy="0" r="6" fill="#9a3412" />
        <ellipse cx="14" cy="0" rx="9" ry="7" fill="#7c2d12" />
        <path d="M-6 -3 L-14 -10 M-6 3 L-14 10 M0 -4 L-6 -14 M0 4 L-6 14 M4 -3 L10 -13 M4 3 L10 13" fill="none" />
        <circle cx="4" cy="-2" r="1.5" fill="#fff" />
      </g>
      {/* handle */}
      <line x1="270" y1="170" x2="350" y2="220" stroke="#334155" strokeWidth="16" strokeLinecap="round" />
      {/* small real ant on the left */}
      <g transform="translate(70 130)" stroke="#1e293b" strokeWidth="2" strokeLinecap="round">
        <ellipse cx="-8" cy="0" rx="5" ry="4" fill="#7c2d12" />
        <circle cx="0" cy="0" r="3" fill="#9a3412" />
        <ellipse cx="7" cy="0" rx="5" ry="4" fill="#7c2d12" />
        <path d="M-3 -2 L-8 -7 M-3 2 L-8 7 M0 -2 L-2 -8 M0 2 L-2 8 M3 -2 L8 -7 M3 2 L8 7" fill="none" />
      </g>
    </Frame>
  )
}
