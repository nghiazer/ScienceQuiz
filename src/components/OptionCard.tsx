import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import BilingualText from './BilingualText'

export type OptionState = 'idle' | 'correct' | 'wrong' | 'reveal' | 'dim'

interface Props {
  letter: string
  vi: string
  en: string
  state: OptionState
  disabled: boolean
  /** Môn Tiếng Anh: chỉ hiển thị đáp án tiếng Anh, không phụ thuộc chế độ ngôn ngữ */
  englishOnly?: boolean
  onSelect: () => void
}

const STYLES: Record<OptionState, string> = {
  idle: 'bg-white border-sky-200 hover:border-sky-400 hover:bg-sky-50',
  correct: 'bg-green-100 border-green-500',
  reveal: 'bg-green-100 border-green-500',
  wrong: 'bg-rose-100 border-rose-400',
  dim: 'bg-white/60 border-slate-200 opacity-60',
}

const BADGE: Record<OptionState, string> = {
  idle: 'bg-sky-100 text-sky-700',
  correct: 'bg-green-500 text-white',
  reveal: 'bg-green-500 text-white',
  wrong: 'bg-rose-500 text-white',
  dim: 'bg-slate-100 text-slate-500',
}

export default function OptionCard({ letter, vi, en, state, disabled, englishOnly = false, onSelect }: Props) {
  const animate =
    state === 'wrong'
      ? { x: [0, -10, 10, -8, 8, -4, 0] }
      : state === 'correct'
        ? { scale: [1, 1.05, 1] }
        : { x: 0, scale: 1 }
  return (
    <motion.button
      type="button"
      disabled={disabled}
      onClick={onSelect}
      animate={animate}
      transition={{ duration: 0.45 }}
      whileTap={disabled ? undefined : { scale: 0.97 }}
      className={`flex w-full items-center gap-3 min-h-16 rounded-2xl border-4 px-3 py-3 text-left shadow-soft transition-colors ${STYLES[state]}`}
    >
      <span className={`grid size-11 shrink-0 place-items-center rounded-xl text-xl font-black ${BADGE[state]}`}>
        {state === 'correct' || state === 'reveal' ? <Check className="size-6" strokeWidth={4} /> : state === 'wrong' ? <X className="size-6" strokeWidth={4} /> : letter}
      </span>
      {englishOnly ? (
        <span lang="en" className="text-lg sm:text-xl font-bold leading-snug text-slate-800">{en}</span>
      ) : (
        <BilingualText vi={vi} en={en} className="text-lg sm:text-xl font-bold leading-snug text-slate-800" />
      )}
    </motion.button>
  )
}
