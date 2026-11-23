import Frame from './Frame'

export default function PushPull() {
  return (
    <Frame label="Lực số 1 đẩy hộp sang phải, lực số 2 kéo hộp sang trái / Force 1 pushes a box to the right, force 2 pulls a box to the left">
      <defs>
        <marker id="pp" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" refX="10" refY="7" orient="auto">
          <path d="M0 0 L14 7 L0 14 z" fill="#f97316" />
        </marker>
      </defs>
      {/* left box, pushed right */}
      <rect x="40" y="120" width="90" height="70" rx="8" fill="#fbbf24" stroke="#92400e" strokeWidth="4" />
      <line x1="140" y1="150" x2="210" y2="150" stroke="#f97316" strokeWidth="8" markerEnd="url(#pp)" />
      <circle cx="170" cy="92" r="18" fill="#f97316" />
      <text x="170" y="99" textAnchor="middle" fontSize="22" fontWeight="800" fill="#fff">1</text>
      {/* right box, pulled left */}
      <rect x="270" y="120" width="90" height="70" rx="8" fill="#a78bfa" stroke="#5b21b6" strokeWidth="4" />
      <line x1="260" y1="150" x2="190" y2="150" stroke="#f97316" strokeWidth="8" markerEnd="url(#pp)" />
      <circle cx="230" cy="92" r="18" fill="#f97316" />
      <text x="230" y="99" textAnchor="middle" fontSize="22" fontWeight="800" fill="#fff">2</text>
      <line x1="0" y1="200" x2="400" y2="200" stroke="#94a3b8" strokeWidth="4" />
    </Frame>
  )
}
