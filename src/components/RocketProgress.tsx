import { motion } from 'framer-motion'
import { Rocket } from 'lucide-react'

interface Props {
  done: number
  total: number
}

/** Tên lửa bay dần về hành tinh đích theo số câu đã làm. */
export default function RocketProgress({ done, total }: Props) {
  const pct = total === 0 ? 0 : (done / total) * 100
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={total}
      aria-valuenow={done}
      aria-label={`Đã làm ${done}/${total} câu`}
      className="relative h-14 rounded-full bg-slate-900/90 shadow-soft overflow-hidden px-3"
    >
      <div className="absolute inset-0 opacity-70" aria-hidden>
        {[8, 22, 35, 51, 63, 74, 88].map((x, i) => (
          <span key={x} className="absolute text-[10px] text-yellow-200" style={{ left: `${x}%`, top: `${15 + ((i * 37) % 60)}%` }}>✦</span>
        ))}
      </div>
      <div className="absolute left-4 right-14 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-white/20" />
      <motion.div
        className="absolute left-4 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-gradient-to-r from-orange-400 to-yellow-300"
        initial={false}
        animate={{ width: `calc((100% - 4.5rem) * ${pct / 100})` }}
        transition={{ type: 'spring', stiffness: 80, damping: 16 }}
      />
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
        style={{ left: '1.75rem' }}
        initial={false}
        animate={{ left: `calc(1.75rem + (100% - 4.5rem) * ${pct / 100})` }}
        transition={{ type: 'spring', stiffness: 80, damping: 16 }}
      >
        <div className="rotate-45 text-orange-300"><Rocket className="size-8 fill-current" /></div>
      </motion.div>
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-3xl" aria-hidden>🪐</span>
    </div>
  )
}
