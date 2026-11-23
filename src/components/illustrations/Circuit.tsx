import Frame from './Frame'

interface Props {
  closed: boolean
}

/** Mạch điện đơn giản: pin – công tắc – bóng đèn. */
export default function Circuit({ closed }: Props) {
  const wire = '#334155'
  return (
    <Frame
      label={
        closed
          ? 'Mạch điện kín: pin, công tắc đóng, bóng đèn sáng / Closed circuit: battery, closed switch, lit bulb'
          : 'Mạch điện hở: pin, công tắc mở, bóng đèn tắt / Open circuit: battery, open switch, unlit bulb'
      }
    >
      <g stroke={wire} strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M70 70 H150 M250 70 H330 V180 H70 V70" />
      </g>
      {/* Pin */}
      <g transform="translate(40 125)">
        <rect x="0" y="0" width="60" height="26" rx="5" fill="#fbbf24" stroke={wire} strokeWidth="3" transform="rotate(90 30 13) translate(0 0)" />
        <text x="30" y="-6" textAnchor="middle" fontSize="22" fontWeight="800" fill="#dc2626">+</text>
        <text x="30" y="52" textAnchor="middle" fontSize="22" fontWeight="800" fill="#2563eb">−</text>
      </g>
      {/* Công tắc */}
      <g>
        <circle cx="150" cy="70" r="7" fill="#64748b" />
        <circle cx="250" cy="70" r="7" fill="#64748b" />
        {closed ? (
          <line x1="150" y1="70" x2="250" y2="70" stroke="#16a34a" strokeWidth="8" strokeLinecap="round" />
        ) : (
          <line x1="150" y1="70" x2="232" y2="30" stroke="#dc2626" strokeWidth="8" strokeLinecap="round" />
        )}
      </g>
      {/* Bóng đèn */}
      <g transform="translate(200 180)">
        {closed && (
          <g stroke="#f59e0b" strokeWidth="5" strokeLinecap="round">
            {[-60, -30, 0, 30, 60].map((a) => (
              <line key={a} x1="0" y1="-52" x2="0" y2="-70" transform={`rotate(${a} 0 -2)`} />
            ))}
          </g>
        )}
        <circle cx="0" cy="-2" r="38" fill={closed ? '#fde047' : '#e2e8f0'} stroke={wire} strokeWidth="4" />
        <path d="M-12 8 L-6 -10 L0 8 L6 -10 L12 8" stroke={closed ? '#b45309' : '#64748b'} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="-16" y="32" width="32" height="16" rx="4" fill="#94a3b8" stroke={wire} strokeWidth="3" />
      </g>
    </Frame>
  )
}

export const OpenCircuit = () => <Circuit closed={false} />
export const ClosedCircuit = () => <Circuit closed />
