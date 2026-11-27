import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import type { LangMode, Subject } from '../types/quiz'
import { useSubject } from './SubjectContext'

const KEYS: Record<Subject, string> = {
  science: 'asmo-quiz-lang',
  english: 'asmo-quiz-lang-english',
  math: 'asmo-quiz-lang-math',
}

interface Ctx {
  /** Chế độ ngôn ngữ của môn đang học. Môn Tiếng Anh chỉ dùng 'vi' hoặc 'bi' (cho phần giải thích). */
  mode: LangMode
  setMode: (m: LangMode) => void
}

const LanguageContext = createContext<Ctx | null>(null)

function readInitial(subject: Subject): LangMode {
  try {
    const v = localStorage.getItem(KEYS[subject])
    if (subject === 'english') {
      if (v === 'vi' || v === 'bi') return v
    } else if (v === 'vi' || v === 'en' || v === 'bi') return v
  } catch {
    /* ignore */
  }
  return subject === 'english' ? 'vi' : 'bi'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { subject } = useSubject()
  const [modes, setModes] = useState<Record<Subject, LangMode>>(() => ({
    science: readInitial('science'),
    english: readInitial('english'),
    math: readInitial('math'),
  }))
  const setMode = useCallback(
    (m: LangMode) => {
      setModes((prev) => ({ ...prev, [subject]: m }))
      try {
        localStorage.setItem(KEYS[subject], m)
      } catch {
        /* ignore */
      }
    },
    [subject],
  )
  const mode = modes[subject]
  const value = useMemo(() => ({ mode, setMode }), [mode, setMode])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang(): Ctx {
  const c = useContext(LanguageContext)
  if (!c) throw new Error('useLang must be used inside LanguageProvider')
  return c
}
