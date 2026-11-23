import { useEffect, useState } from 'react'
import { Shirt, Volume2, VolumeX } from 'lucide-react'
import { motion } from 'framer-motion'
import LanguageSwitcher from './LanguageSwitcher'
import { useSubject } from '../context/SubjectContext'
import { SUBJECTS } from '../data/topics'
import { isMuted, setMuted, unlockAudio, playClick } from '../utils/sound'
import { STUDY_BLOCK_SECONDS, formatClock, useWardrobe } from '../utils/wardrobe'
import BilingualText from './BilingualText'

interface Props {
  inQuiz: boolean
  inWardrobe: boolean
  onOpenWardrobe: () => void
}

export default function Header({ inQuiz, inWardrobe, onOpenWardrobe }: Props) {
  const [muted, setMutedState] = useState(isMuted())
  const [needTime, setNeedTime] = useState(false)
  const { studySeconds, bankSeconds } = useWardrobe()
  const { subject } = useSubject()
  const meta = SUBJECTS[subject]
  useEffect(() => {
    document.title = `${meta.headerVi} – ${meta.headerSub.split(' · ')[0]}`
  }, [meta])
  const toggle = () => {
    const next = !muted
    setMuted(next)
    setMutedState(next)
    if (!next) {
      unlockAudio()
      playClick()
    }
  }
  const openWardrobe = () => {
    unlockAudio()
    playClick()
    if (bankSeconds > 0) onOpenWardrobe()
    else setNeedTime(true)
  }
  return (
    <>
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-sky-100">
      <div className="mx-auto max-w-5xl flex items-center justify-between gap-3 px-4 py-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-3xl" aria-hidden>{meta.emoji}</span>
          <div className="leading-tight min-w-0">
            <p className="font-black text-lg sm:text-xl text-sky-700 truncate">{meta.headerVi}</p>
            <p className="text-xs font-bold text-slate-500 hidden sm:block">{meta.headerSub}</p>
          </div>
          <span
            className={`ml-1 hidden shrink-0 rounded-full px-3 py-1 text-xs font-extrabold sm:inline-block ${
              subject === 'english' ? 'bg-teal-100 text-teal-800' : 'bg-sky-100 text-sky-800'
            }`}
          >
            {meta.emoji} {meta.short_vi}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={openWardrobe}
            disabled={inQuiz || inWardrobe}
            title={inQuiz ? 'Làm xong bài đã nhé / Finish the quiz first' : 'Tủ quần áo / Wardrobe'}
            aria-label={inQuiz ? 'Tủ quần áo (làm xong bài rồi mở nhé)' : 'Tủ quần áo / Wardrobe'}
            className="relative flex size-12 items-center justify-center gap-1 rounded-2xl bg-gradient-to-br from-pink-400 to-fuchsia-500 text-white shadow-pop disabled:opacity-40 sm:w-auto sm:px-4"
          >
            <Shirt className="size-6" />
            <span className="hidden text-sm font-black sm:inline">Tủ váy</span>
            {bankSeconds > 0 && (
              <span className="absolute -right-1.5 -top-1.5 rounded-full bg-amber-400 px-1.5 text-xs font-black tabular-nums text-amber-900 ring-2 ring-white">
                {formatClock(bankSeconds)}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={toggle}
            aria-label={muted ? 'Bật âm thanh / Sound on' : 'Tắt âm thanh / Sound off'}
            aria-pressed={!muted}
            className="grid place-items-center size-12 rounded-2xl bg-white shadow-soft text-slate-600 hover:bg-sky-50"
          >
            {muted ? <VolumeX className="size-6" /> : <Volume2 className="size-6" />}
          </button>
        </div>
      </div>
    </header>
    {needTime && (
      <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 grid place-items-center bg-slate-900/50 p-4" onClick={() => setNeedTime(false)}>
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-2xl"
        >
          <p className="text-5xl">👗🔒</p>
          <h3 className="mt-2 text-2xl font-black text-slate-800">
            <BilingualText vi="Tủ quần áo đang khóa" en="The wardrobe is locked" />
          </h3>
          <p className="mt-2 font-semibold text-slate-600">
            <BilingualText
              vi={`Học thêm ${Math.ceil((STUDY_BLOCK_SECONDS - studySeconds) / 60)} phút nữa để được chơi 5 phút nhé!`}
              en={`Learn for ${Math.ceil((STUDY_BLOCK_SECONDS - studySeconds) / 60)} more minutes to earn 5 minutes of play!`}
            />
          </p>
          <div className="mt-4 h-4 overflow-hidden rounded-full bg-pink-100">
            <div className="h-full rounded-full bg-gradient-to-r from-pink-400 to-fuchsia-500" style={{ width: `${(studySeconds / STUDY_BLOCK_SECONDS) * 100}%` }} />
          </div>
          <button type="button" onClick={() => setNeedTime(false)} className="mt-5 min-h-14 w-full rounded-2xl bg-pink-500 text-lg font-black text-white shadow-pop">
            <BilingualText vi="Đã hiểu" en="Got it" subClassName="!text-white/80 !not-italic text-xs" />
          </button>
        </motion.div>
      </div>
    )}
    </>
  )
}
