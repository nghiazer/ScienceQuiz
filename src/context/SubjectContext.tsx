import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import type { Subject } from '../types/quiz'
import { VISIBLE_SUBJECTS } from '../data/topics'

const KEY = 'asmo-quiz-subject'
/** Môn mở sẵn khi chưa có lựa chọn đã lưu. */
const DEFAULT_SUBJECT: Subject = 'english'

interface Ctx {
  subject: Subject
  setSubject: (s: Subject) => void
}

const SubjectContext = createContext<Ctx | null>(null)

function readInitial(): Subject {
  try {
    const v = localStorage.getItem(KEY)
    if (v && (VISIBLE_SUBJECTS as string[]).includes(v)) return v as Subject
  } catch {
    /* ignore */
  }
  return DEFAULT_SUBJECT
}

export function SubjectProvider({ children }: { children: ReactNode }) {
  const [subject, setSubjectState] = useState<Subject>(readInitial)
  const setSubject = useCallback((s: Subject) => {
    setSubjectState(s)
    try {
      localStorage.setItem(KEY, s)
    } catch {
      /* ignore */
    }
  }, [])
  const value = useMemo(() => ({ subject, setSubject }), [subject, setSubject])
  return <SubjectContext.Provider value={value}>{children}</SubjectContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSubject(): Ctx {
  const c = useContext(SubjectContext)
  if (!c) throw new Error('useSubject must be used inside SubjectProvider')
  return c
}
