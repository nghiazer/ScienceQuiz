import Frame from './Frame'

/** Hai bạn nhỏ trò chuyện: thẻ hội thoại 2 nhân vật. */
export default function KidsDialogue() {
  return (
    <Frame label="Hai bạn nhỏ đang trò chuyện, mỗi bạn một lượt lời / Two children having a short conversation, one turn each">
      <rect width="400" height="240" fill="#f0f9ff" />
      <rect y="200" width="400" height="40" fill="#bbf7d0" />
      {/* bạn A */}
      <g>
        <rect x="52" y="140" width="52" height="62" rx="18" fill="#0ea5e9" />
        <circle cx="78" cy="118" r="26" fill="#fde68a" />
        <path d="M54 112 Q78 82 102 112 Q90 100 78 100 Q66 100 54 112 Z" fill="#78350f" />
        <circle cx="69" cy="120" r="3" fill="#78350f" />
        <circle cx="87" cy="120" r="3" fill="#78350f" />
        <path d="M70 130 Q78 137 86 130" stroke="#92400e" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
      {/* bạn B */}
      <g>
        <rect x="296" y="140" width="52" height="62" rx="18" fill="#f43f5e" />
        <circle cx="322" cy="118" r="26" fill="#fcd34d" />
        <path d="M296 118 Q300 86 322 90 Q346 86 348 118 Q340 100 322 100 Q304 100 296 118 Z" fill="#451a03" />
        <circle cx="313" cy="120" r="3" fill="#78350f" />
        <circle cx="331" cy="120" r="3" fill="#78350f" />
        <path d="M314 130 Q322 137 330 130" stroke="#92400e" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
      {/* bong bóng A */}
      <path d="M40 24 h150 a16 16 0 0 1 16 16 v34 a16 16 0 0 1 -16 16 h-78 l-22 18 l4 -18 h-54 a16 16 0 0 1 -16 -16 v-34 a16 16 0 0 1 16 -16 z" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="4" />
      <text x="115" y="64" textAnchor="middle" fontSize="30" fontWeight="900" fill="#0369a1" fontFamily="Nunito, system-ui, sans-serif">A: ?</text>
      {/* bong bóng B */}
      <path d="M210 70 h150 a16 16 0 0 1 16 16 v34 a16 16 0 0 1 -16 16 h-18 l4 18 l-22 -18 h-114 a16 16 0 0 1 -16 -16 v-34 a16 16 0 0 1 16 -16 z" fill="#ffe4e6" stroke="#f43f5e" strokeWidth="4" />
      <text x="290" y="110" textAnchor="middle" fontSize="30" fontWeight="900" fill="#be123c" fontFamily="Nunito, system-ui, sans-serif">B: ___</text>
    </Frame>
  )
}
