import Frame from './Frame'

export default function SimpleMachines() {
  return (
    <Frame label="Ba máy đơn giản: mặt phẳng nghiêng, đòn bẩy bập bênh và ròng rọc cố định / Three simple machines: inclined plane, seesaw lever and fixed pulley">
      {/* mặt đất */}
      <rect y="212" width="400" height="28" fill="#d9f99d" />
      <line x1="0" y1="212" x2="400" y2="212" stroke="#65a30d" strokeWidth="3" />
      {/* mặt phẳng nghiêng 45 độ, khối hộp nằm trên mặt dốc */}
      <path d="M20 212 L120 212 L120 112 Z" fill="#fde68a" stroke="#92400e" strokeWidth="4" strokeLinejoin="round" />
      <rect x="55.8" y="130.8" width="30" height="24" rx="3" fill="#f97316" stroke="#c2410c" strokeWidth="3" transform="rotate(-45 70.8 142.8)" />
      {/* bập bênh: điểm tựa chạm thanh, em nặng ngồi đầu thấp, em nhẹ ngồi đầu cao, cùng khoảng cách tới điểm tựa */}
      <polygon points="200,170 182,212 218,212" fill="#64748b" />
      <line x1="145" y1="158" x2="255" y2="182" stroke="#334155" strokeWidth="8" strokeLinecap="round" />
      <ellipse cx="156" cy="150" rx="7" ry="9" fill="#f97316" />
      <circle cx="156" cy="136" r="6.5" fill="#fdba74" stroke="#c2410c" strokeWidth="2" />
      <ellipse cx="246" cy="164" rx="11" ry="14" fill="#8b5cf6" />
      <circle cx="246" cy="142" r="10" fill="#ddd6fe" stroke="#6d28d9" strokeWidth="2" />
      {/* ròng rọc cố định treo trên giá */}
      <rect x="290" y="14" width="80" height="8" rx="3" fill="#94a3b8" />
      <line x1="330" y1="22" x2="330" y2="38" stroke="#334155" strokeWidth="4" />
      <circle cx="330" cy="60" r="22" fill="#cbd5e1" stroke="#334155" strokeWidth="4" />
      <circle cx="330" cy="60" r="4" fill="#334155" />
      <line x1="308" y1="60" x2="308" y2="190" stroke="#334155" strokeWidth="3" />
      <circle cx="308" cy="192" r="5" fill="#334155" />
      <line x1="352" y1="60" x2="352" y2="120" stroke="#334155" strokeWidth="3" />
      <rect x="330" y="120" width="44" height="40" rx="4" fill="#fbbf24" stroke="#92400e" strokeWidth="3" />
    </Frame>
  )
}
