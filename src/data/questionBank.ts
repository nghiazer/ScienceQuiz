import { useEffect, useSyncExternalStore } from 'react'
import type { Question, Subject } from '../types/quiz'
import { VISIBLE_SUBJECTS } from './topics'

/*
 * Kho câu hỏi của từng môn được tải khi cần (dynamic import → mỗi môn một chunk riêng),
 * để lần mở app đầu tiên không phải tải cả ~1,9 MB câu hỏi của ba môn.
 * Môn Toán đang ẩn nên chỉ tải khi thật sự cần (vd. Góc phụ huynh có số liệu môn Toán).
 * Script trong scripts/ vẫn dùng bản nạp đồng bộ ở ./questions/index.ts.
 */

const LOADERS: Record<Subject, () => Promise<Question[]>> = {
  science: () => import('./questions/science').then((m) => m.SCIENCE_QUESTIONS),
  english: () => import('./englishQuestions').then((m) => m.ENGLISH_QUESTIONS),
  math: () => import('./mathQuestions').then((m) => m.MATH_QUESTIONS),
}

const banks: Partial<Record<Subject, Question[]>> = {}
const pending: Partial<Record<Subject, Promise<Question[]>>> = {}
const byId = new Map<string, Question>()
const listeners = new Set<() => void>()

/** Tải kho của một môn (gọi nhiều lần vẫn chỉ tải một lần); lỗi mạng thì lần gọi sau thử lại. */
export function loadBank(subject: Subject): Promise<Question[]> {
  const ready = banks[subject]
  if (ready) return Promise.resolve(ready)
  pending[subject] ??= LOADERS[subject]().then(
    (qs) => {
      banks[subject] = qs
      for (const q of qs) byId.set(q.id, q)
      listeners.forEach((l) => l())
      return qs
    },
    (err: unknown) => {
      delete pending[subject]
      throw err
    },
  )
  return pending[subject]
}

export function loadBanks(subjects: readonly Subject[]): Promise<Question[][]> {
  return Promise.all(subjects.map(loadBank))
}

/** Kho đã tải của môn, hoặc undefined nếu chưa tải xong. */
export const bankOf = (subject: Subject): Question[] | undefined => banks[subject]

/** Câu gốc (thứ tự đáp án chưa xáo) theo id, trong các kho đã tải; undefined nếu chưa tải hoặc id không còn. */
export const questionById = (id: string): Question | undefined => byId.get(id)

function subscribe(cb: () => void): () => void {
  listeners.add(cb)
  return () => listeners.delete(cb)
}

const ignore = () => {}

/** Kho của môn (undefined khi đang tải); tự bắt đầu tải nếu chưa có. */
export function useBank(subject: Subject): Question[] | undefined {
  useEffect(() => {
    loadBank(subject).catch(ignore)
  }, [subject])
  return useSyncExternalStore(subscribe, () => banks[subject])
}

/** true khi kho của mọi môn trong danh sách đã tải xong; tự bắt đầu tải các kho còn thiếu. */
export function useBanksReady(subjects: readonly Subject[]): boolean {
  useEffect(() => {
    loadBanks(subjects).catch(ignore)
  }, [subjects])
  return useSyncExternalStore(subscribe, () => subjects.every((s) => banks[s]))
}

/** Tải sẵn kho các môn đang hiện (để đổi môn hay bắt đầu bài không phải chờ). */
export function preloadVisibleBanks(): void {
  for (const s of VISIBLE_SUBJECTS) loadBank(s).catch(ignore)
}
