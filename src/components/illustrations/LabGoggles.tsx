import Frame from './Frame'

export default function LabGoggles() {
  return (
    <Frame label="Kính bảo hộ đeo khi làm thí nghiệm để bảo vệ mắt / Safety goggles worn during experiments to protect the eyes">
      <path d="M90 90 Q200 40 310 90" stroke="#334155" strokeWidth="8" fill="none" strokeLinecap="round" />
      <rect x="90" y="90" width="90" height="60" rx="26" fill="#bae6fd" fillOpacity="0.7" stroke="#0369a1" strokeWidth="6" />
      <rect x="220" y="90" width="90" height="60" rx="26" fill="#bae6fd" fillOpacity="0.7" stroke="#0369a1" strokeWidth="6" />
      <path d="M180 110 H220" stroke="#0369a1" strokeWidth="6" />
      <path d="M90 90 L40 70 M310 90 L360 70" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
      <path d="M200 200 L230 210 L170 210Z" fill="#facc15" stroke="#854d0e" strokeWidth="3" strokeLinejoin="round" />
      <text x="200" y="208" textAnchor="middle" fontSize="18" fontWeight="800" fill="#854d0e">!</text>
    </Frame>
  )
}
