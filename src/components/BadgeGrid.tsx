import { Lock } from 'lucide-react'
import { BADGES } from '../data/badges'
import BilingualText from './BilingualText'

export default function BadgeGrid({ unlocked, highlight = [], onlyUnlocked = false }: { unlocked: string[]; highlight?: string[]; onlyUnlocked?: boolean }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
      {BADGES.filter((b) => !onlyUnlocked || unlocked.includes(b.id)).map((b) => {
        const on = unlocked.includes(b.id)
        const isNew = highlight.includes(b.id)
        return (
          <li
            key={b.id}
            className={`relative flex flex-col items-center gap-1 rounded-2xl p-3 text-center ${
              on ? 'bg-amber-50 ring-2 ring-amber-300' : 'bg-slate-100 text-slate-400'
            } ${isNew ? 'animate-bounce' : ''}`}
          >
            <span className={`text-4xl ${on ? '' : 'grayscale opacity-40'}`} aria-hidden>{b.emoji}</span>
            {!on && <Lock className="absolute right-2 top-2 size-4" aria-label="Chưa mở khóa" />}
            <BilingualText vi={b.name_vi} en={b.name_en} className={`text-sm font-extrabold ${on ? 'text-amber-800' : ''}`} subClassName="!text-[0.72em]" />
            <BilingualText vi={b.desc_vi} en={b.desc_en} className="text-xs font-semibold text-slate-500" subClassName="!text-[0.9em] !not-italic" />
          </li>
        )
      })}
    </ul>
  )
}
