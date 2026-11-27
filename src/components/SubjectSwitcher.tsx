import { motion } from 'framer-motion'
import { useSubject } from '../context/SubjectContext'
import { SUBJECTS, VISIBLE_SUBJECTS } from '../data/topics'
import { playClick, unlockAudio } from '../utils/sound'
import type { Subject } from '../types/quiz'

const ACTIVE: Record<Subject, string> = {
  science: 'bg-gradient-to-br from-sky-400 to-indigo-500 text-white shadow-pop',
  english: 'bg-gradient-to-br from-teal-400 to-blue-500 text-white shadow-pop',
  math: 'bg-gradient-to-br from-indigo-400 to-fuchsia-500 text-white shadow-pop',
}

/** Thanh chuyển môn học lớn, nằm đầu trang chủ. */
export default function SubjectSwitcher() {
  const { subject, setSubject } = useSubject()
  return (
    <div role="radiogroup" aria-label="Môn học / Subject" className={`grid gap-2 rounded-3xl bg-white p-2 shadow-soft ${VISIBLE_SUBJECTS.length === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
      {VISIBLE_SUBJECTS.map((id) => {
        const s = SUBJECTS[id]
        const active = id === subject
        return (
          <motion.button
            key={id}
            type="button"
            role="radio"
            aria-checked={active}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              unlockAudio()
              playClick()
              setSubject(id)
            }}
            className={`flex min-h-16 flex-col items-center justify-center gap-1 rounded-2xl px-1 py-2 text-sm font-black transition sm:flex-row sm:gap-2 sm:px-2 sm:text-xl ${
              active ? ACTIVE[id] : 'bg-slate-50 text-slate-600 hover:bg-sky-50'
            }`}
          >
            <span className="text-2xl sm:text-3xl" aria-hidden>{s.emoji}</span>
            <span className="leading-tight">
              <span className="block">{s.label_vi}</span>
            </span>
          </motion.button>
        )
      })}
    </div>
  )
}
