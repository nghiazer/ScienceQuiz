import Frame from './Frame'

export default function Constellation() {
  const big = [[70, 90], [110, 100], [150, 110], [180, 130], [190, 170], [150, 175], [125, 150]]
  const stars = [[300, 60], [340, 150], [60, 200], [260, 200], [360, 210], [230, 40], [20, 40]]
  return (
    <Frame label="Chòm sao Gấu Lớn và sao Bắc Cực sáng ở một góc trời / The Big Dipper constellation and the bright North Star in one part of the sky">
      <rect width="400" height="240" fill="#0f172a" />
      {stars.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="2" fill="#e2e8f0" />)}
      <polyline points={big.map((p) => p.join(',')).join(' ')} fill="none" stroke="#93c5fd" strokeWidth="2" />
      {big.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="5" fill="#fef9c3" />)}
      <circle cx="320" cy="60" r="10" fill="#fff" opacity="0.25" />
      <circle cx="320" cy="60" r="5" fill="#fff" />
    </Frame>
  )
}
