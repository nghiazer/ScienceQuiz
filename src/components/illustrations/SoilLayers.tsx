import Frame from './Frame'

export default function SoilLayers() {
  return (
    <Frame label="Mặt cắt đất: lớp 1 là đất mặt sẫm màu, lớp 2 là cát vàng, lớp 3 là đá / Soil cross-section: layer 1 is dark topsoil, layer 2 is yellow sand, layer 3 is rock">
      <rect x="60" y="20" width="240" height="60" fill="#78350f" />
      {[[80, 40], [140, 56], [200, 34], [250, 62]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="#a16207" />
      ))}
      <rect x="60" y="80" width="240" height="60" fill="#fde68a" />
      {[[90, 100], [160, 120], [230, 104], [270, 124]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="#eab308" />
      ))}
      <rect x="60" y="140" width="240" height="70" fill="#9ca3af" />
      <path d="M100 160 L130 180 L120 195 M220 150 L240 170 L268 165" stroke="#4b5563" strokeWidth="3" fill="none" />
      {[['1', 30, 55], ['2', 30, 115], ['3', 30, 180]].map(([n, x, y]) => (
        <text key={n} x={x as number} y={y as number} fontSize="24" fontWeight="800" fill="#334155">{n}</text>
      ))}
      <path d="M305 50 H330 M305 110 H330 M305 175 H330" stroke="#334155" strokeWidth="2" />
    </Frame>
  )
}
