import Frame from './Frame'

export default function SeriesCircuit() {
  return (
    <Frame label="Mạch nối tiếp: pin và ba bóng đèn nối thành một vòng; bóng giữa bị đứt nên mạch hở / Series circuit: battery and three bulbs in one loop; the middle bulb is broken, so the circuit is open">
      <path d="M40 60 H150 M250 60 H360 V180 H40 V60" fill="none" stroke="#334155" strokeWidth="6" strokeLinejoin="round" />
      <path d="M150 60 H170 M230 60 H250" fill="none" stroke="#ef4444" strokeWidth="6" strokeDasharray="6 6" />
      <rect x="28" y="100" width="24" height="50" fill="#fbbf24" stroke="#334155" strokeWidth="3" />
      <circle cx="120" cy="180" r="16" fill="#fde047" stroke="#334155" strokeWidth="3" />
      <circle cx="200" cy="180" r="16" fill="#e2e8f0" stroke="#334155" strokeWidth="3" />
      <circle cx="280" cy="180" r="16" fill="#fde047" stroke="#334155" strokeWidth="3" />
      <path d="M190 170 L210 190 M210 170 L190 190" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" />
    </Frame>
  )
}
