import { useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'
import { isMuted, setMuted, unlockAudio, playClick } from '../utils/sound'

export default function Header() {
  const [muted, setMutedState] = useState(isMuted())
  const toggle = () => {
    const next = !muted
    setMuted(next)
    setMutedState(next)
    if (!next) {
      unlockAudio()
      playClick()
    }
  }
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-sky-100">
      <div className="mx-auto max-w-5xl flex items-center justify-between gap-3 px-4 py-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-3xl" aria-hidden>🔬</span>
          <div className="leading-tight min-w-0">
            <p className="font-black text-lg sm:text-xl text-sky-700 truncate">Nhà Khoa Học Nhí</p>
            <p className="text-xs font-bold text-slate-500 hidden sm:block">ASMO Science · Lớp 2–3</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
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
  )
}
