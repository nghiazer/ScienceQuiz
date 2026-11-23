import Frame from './Frame'

type Mark = 'past' | 'now' | 'habit'

const LABEL: Record<Mark, string> = {
  past: 'Trục thời gian: sự việc đã xảy ra và kết thúc trong quá khứ / Timeline: finished in the past',
  now: 'Trục thời gian: sự việc đang diễn ra ngay bây giờ / Timeline: happening now',
  habit: 'Trục thời gian: sự việc lặp lại đều đặn mỗi ngày / Timeline: repeated again and again',
}

/** Trục thời gian Quá khứ – Hiện tại – Tương lai, đánh dấu theo từng thì. */
function Timeline({ mark }: { mark: Mark }) {
  return (
    <Frame label={LABEL[mark]}>
      <rect width="400" height="240" fill="#f0f9ff" />
      {/* vùng thời gian */}
      <rect x="20" y="70" width="120" height="110" rx="16" fill="#ede9fe" />
      <rect x="140" y="70" width="120" height="110" rx="16" fill="#dcfce7" />
      <rect x="260" y="70" width="120" height="110" rx="16" fill="#fef3c7" />
      {/* trục */}
      <line x1="24" y1="125" x2="366" y2="125" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
      <path d="M362 112 L384 125 L362 138 Z" fill="#334155" />
      {/* nhãn */}
      <g fontFamily="Nunito, system-ui, sans-serif" textAnchor="middle" fontWeight="800">
        <text x="80" y="50" fontSize="20" fill="#6d28d9">PAST</text>
        <text x="200" y="50" fontSize="20" fill="#15803d">NOW</text>
        <text x="320" y="50" fontSize="20" fill="#b45309">FUTURE</text>
        <text x="80" y="200" fontSize="13" fill="#6d28d9">Quá khứ</text>
        <text x="200" y="200" fontSize="13" fill="#15803d">Bây giờ</text>
        <text x="320" y="200" fontSize="13" fill="#b45309">Tương lai</text>
      </g>
      {mark === 'past' && (
        <g>
          <path d="M60 100 Q80 70 100 100" stroke="#7c3aed" strokeWidth="4" fill="none" strokeLinecap="round" markerEnd="none" />
          <circle cx="80" cy="125" r="14" fill="#8b5cf6" />
          <path d="M72 125 l6 6 l11 -12" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <text x="80" y="165" textAnchor="middle" fontSize="14" fontWeight="800" fill="#6d28d9" fontFamily="Nunito, system-ui, sans-serif">finished!</text>
        </g>
      )}
      {mark === 'now' && (
        <g>
          <circle cx="200" cy="125" r="26" fill="#22c55e" opacity="0.25">
            <animate attributeName="r" values="18;30;18" dur="1.6s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="125" r="14" fill="#16a34a" />
          <text x="200" y="168" textAnchor="middle" fontSize="14" fontWeight="800" fill="#15803d" fontFamily="Nunito, system-ui, sans-serif">right now!</text>
        </g>
      )}
      {mark === 'habit' && (
        <g fill="#f59e0b">
          {[50, 100, 150, 200, 250, 300, 350].map((x) => (
            <circle key={x} cx={x} cy="125" r="9" />
          ))}
          <text x="200" y="168" textAnchor="middle" fontSize="14" fontWeight="800" fill="#b45309" fontFamily="Nunito, system-ui, sans-serif">every day · again and again</text>
        </g>
      )}
    </Frame>
  )
}

export const TimelinePast = () => <Timeline mark="past" />
export const TimelineNow = () => <Timeline mark="now" />
export const TimelineHabit = () => <Timeline mark="habit" />
