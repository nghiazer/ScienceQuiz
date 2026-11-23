import Frame from './Frame'

export default function SeedSprout() {
  return (
    <Frame label="Cây con mới nảy mầm: 1 là rễ mọc xuống đất, 2 là thân và lá vươn lên / A seedling: 1 is the root growing down, 2 is the shoot and leaves growing up">
      <rect y="165" width="400" height="75" fill="#a16207" />
      <path d="M200 165 V105" stroke="#65a30d" strokeWidth="7" strokeLinecap="round" />
      <ellipse cx="178" cy="104" rx="24" ry="12" fill="#22c55e" transform="rotate(-25 178 104)" />
      <ellipse cx="222" cy="98" rx="24" ry="12" fill="#16a34a" transform="rotate(25 222 98)" />
      <ellipse cx="200" cy="168" rx="12" ry="8" fill="#fde68a" stroke="#92400e" strokeWidth="2" />
      <path d="M200 172 Q190 198 200 220 M200 190 Q216 200 210 230 M200 200 Q184 210 190 236" stroke="#fef3c7" strokeWidth="5" fill="none" strokeLinecap="round" />
      <text x="240" y="232" fontSize="22" fontWeight="800" fill="#fff">1</text>
      <text x="250" y="110" fontSize="22" fontWeight="800" fill="#334155">2</text>
    </Frame>
  )
}
