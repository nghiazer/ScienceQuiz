import { motion } from 'framer-motion'
import { Plane, Rocket } from 'lucide-react'
import { useSubject } from '../context/SubjectContext'

interface Props {
  done: number
  total: number
}

/** Khoa học: tên lửa bay về hành tinh. Tiếng Anh: máy bay qua mây về đích 🎓. Toán: tên lửa bay qua các con số về cúp 🏆. */
export default function RocketProgress({ done, total }: Props) {
  const { subject } = useSubject()
  const english = subject === 'english'
  const math = subject === 'math'
  const pct = total === 0 ? 0 : (done / total) * 100
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={total}
      aria-valuenow={done}
      aria-label={`Đã làm ${done}/${total} câu`}
      className={`relative h-14 rounded-full shadow-soft overflow-hidden px-3 ${english ? 'bg-gradient-to-r from-sky-300 to-sky-500' : math ? 'bg-gradient-to-r from-indigo-500 to-fuchsia-500' : 'bg-slate-900/90'}`}
    >
      <div className="absolute inset-0 opacity-70" aria-hidden>
        {[8, 22, 35, 51, 63, 74, 88].map((x, i) => (
          <span key={x} className={english ? 'absolute text-base text-white/80' : 'absolute text-[10px] text-yellow-200'} style={{ left: `${x}%`, top: `${15 + ((i * 37) % 60)}%` }}>{english ? '☁' : math ? ['1', '+', '3', '×', '7', '=', '9'][i] : '✦'}</span>
        ))}
      </div>
      <div className="absolute left-4 right-14 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-white/30" />
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
        {english ? (
          <div className="text-white drop-shadow"><Plane className="size-8 fill-current" /></div>
        ) : (
          <div className="rotate-45 text-orange-300"><Rocket className="size-8 fill-current" /></div>
        )}
      </motion.div>
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-3xl" aria-hidden>{english ? '🎓' : math ? '🏆' : '🪐'}</span>
    </div>
  )
}
