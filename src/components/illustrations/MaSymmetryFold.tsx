import Frame from './Frame'

/** Tờ giấy vuông gấp đôi theo chiều dọc, cắt nửa hình trái tim ở mép gấp; mở ra sẽ được 1 lỗ hình trái tim nguyên vẹn ở giữa. */
export default function MaSymmetryFold() {
  return (
    <Frame label="Tờ giấy vuông gấp đôi, mép gấp là đường nét đứt, có nửa hình trái tim bị cắt ở mép gấp; mũi tên chỉ tới dấu hỏi: mở ra sẽ thấy gì? / A square paper folded in half; the fold is the dashed line and half a heart is cut out at the fold; an arrow points to a question mark: what do you see when you unfold it?">
      <defs>
        <marker id="ma-sf-arr" markerUnits="userSpaceOnUse" markerWidth="18" markerHeight="18" refX="10" refY="9" orient="auto">
          <path d="M0 0 L18 9 L0 18 z" fill="#f97316" />
        </marker>
      </defs>
      {/* nửa tờ giấy đã gấp: mép gấp ở bên phải (x = 150) */}
      <rect x="70" y="40" width="80" height="160" fill="#fbcfe8" stroke="#be185d" strokeWidth="4" strokeLinejoin="round" />
      {/* nửa trái tim bị cắt sát mép gấp */}
      <path d="M150 95 C142 78 108 78 108 106 C108 130 132 146 150 165 Z" fill="#ffffff" stroke="#be185d" strokeWidth="3" strokeLinejoin="round" />
      <line x1="150" y1="30" x2="150" y2="210" stroke="#334155" strokeWidth="4" strokeDasharray="10 7" />
      <path d="M172 120 H222" stroke="#f97316" strokeWidth="6" strokeLinecap="round" markerEnd="url(#ma-sf-arr)" />
      <rect x="248" y="50" width="140" height="140" rx="10" fill="#fff" stroke="#94a3b8" strokeWidth="3" strokeDasharray="8 6" />
      <text x="318" y="122" textAnchor="middle" dominantBaseline="central" fontSize="56" fontWeight="800" fill="#94a3b8">?</text>
    </Frame>
  )
}
