import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import type { LangMode } from '../types/quiz'

const KEY = 'asmo-quiz-lang'

interface Ctx {
  mode: LangMode
  setMode: (m: LangMode) => void
}

const LanguageContext = createContext<Ctx | null>(null)

function readInitial(): LangMode {
  try {
    const v = localStorage.getItem(KEY)
    if (v === 'vi' || v === 'en' || v === 'bi') return v
  } catch {
    /* ignore */
  }
  return 'bi'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<LangMode>(readInitial)
  const setMode = useCallback((m: LangMode) => {
    setModeState(m)
    try {
      localStorage.setItem(KEY, m)
    } catch {
      /* ignore */
    }
  }, [])
  const value = useMemo(() => ({ mode, setMode }), [mode, setMode])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang(): Ctx {
  const c = useContext(LanguageContext)
  if (!c) throw new Error('useLang must be used inside LanguageProvider')
  return c
}
