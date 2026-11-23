import Frame from './Frame'

export default function Compass() {
  return (
    <Frame label="La bàn: kim nam châm đỏ chỉ hướng Bắc, còn đầu trắng chỉ hướng Nam / A compass: the red needle points north and the white end points south">
      <circle cx="200" cy="120" r="95" fill="#f8fafc" stroke="#334155" strokeWidth="6" />
      <text x="200" y="45" textAnchor="middle" fontSize="26" fontWeight="800" fill="#334155">N</text>
      <text x="200" y="210" textAnchor="middle" fontSize="26" fontWeight="800" fill="#334155">S</text>
      <text x="62" y="128" textAnchor="middle" fontSize="26" fontWeight="800" fill="#334155">W</text>
      <text x="338" y="128" textAnchor="middle" fontSize="26" fontWeight="800" fill="#334155">E</text>
      <polygon points="200,50 212,120 188,120" fill="#ef4444" />
      <polygon points="200,190 212,120 188,120" fill="#e2e8f0" stroke="#334155" strokeWidth="2" />
      <circle cx="200" cy="120" r="7" fill="#334155" />
    </Frame>
  )
}
