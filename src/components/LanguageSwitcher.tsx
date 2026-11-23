import { useLang } from '../context/LanguageContext'
import type { LangMode } from '../types/quiz'

const OPTIONS: { id: LangMode; label: string; short: string }[] = [
  { id: 'vi', label: 'Tiếng Việt', short: 'VI' },
  { id: 'en', label: 'English', short: 'EN' },
  { id: 'bi', label: 'Song ngữ', short: 'VI·EN' },
]

export default function LanguageSwitcher() {
  const { mode, setMode } = useLang()
  return (
    <div role="radiogroup" aria-label="Ngôn ngữ / Language" className="flex rounded-2xl bg-white p-1 shadow-soft">
      {OPTIONS.map((o) => {
        const active = o.id === mode
        return (
          <button
            key={o.id}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => setMode(o.id)}
            className={`min-h-12 px-3 sm:px-4 rounded-xl text-sm sm:text-base font-extrabold transition ${
              active ? 'bg-sky-500 text-white shadow-pop' : 'text-slate-600 hover:bg-sky-50'
            }`}
          >
            <span className="hidden sm:inline">{o.label}</span>
            <span className="sm:hidden">{o.short}</span>
          </button>
        )
      })}
    </div>
  )
}
