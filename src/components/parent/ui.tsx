import type { ReactNode } from 'react'
import BilingualText from '../BilingualText'

export const EMPTY_TEXT = 'Chưa có dữ liệu — số liệu sẽ có sau khi bé làm bài'

/** Thẻ biểu đồ: tiêu đề song ngữ, phần mô tả ngắn, nội dung hoặc trạng thái trống. */
export function Card({ id, vi, en, hint, className = '', children }: { id: string; vi: string; en: string; hint?: string; className?: string; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className={`min-w-0 rounded-3xl bg-white p-4 shadow-soft sm:p-5 ${className}`}>
      <h2 id={id} className="text-lg font-black text-slate-800 sm:text-xl">
        <BilingualText vi={vi} en={en} />
      </h2>
      {hint && <p className="mt-0.5 text-xs font-semibold text-slate-500">{hint}</p>}
      <div className="mt-3">{children}</div>
    </section>
  )
}

export function Empty({ text = EMPTY_TEXT }: { text?: string }) {
  return <p className="rounded-2xl bg-slate-50 px-4 py-6 text-center text-sm font-bold text-slate-500">{text}</p>
}

/** Một thanh ngang: nhãn, thanh phần trăm, giá trị. `pct = null` nghĩa là chưa có câu nào. */
export function BarRow({ label, pct, detail, color }: { label: ReactNode; pct: number | null; detail: string; color: string }) {
  const text = pct === null ? 'Chưa làm' : `${pct}% · ${detail}`
  return (
    <div className="grid items-center gap-x-3 gap-y-0.5 sm:grid-cols-[minmax(0,10rem)_1fr]">
      <p className="text-sm font-extrabold sm:truncate text-slate-700">{label}</p>
      <div className="flex items-center gap-2" title={text}>
        <div className="h-5 min-w-0 flex-1 overflow-hidden rounded-full bg-slate-100" role="img" aria-label={text}>
          <div className="h-full rounded-full" style={{ width: `${pct ?? 0}%`, backgroundColor: color }} />
        </div>
        <span className="w-24 shrink-0 text-right text-xs font-black tabular-nums text-slate-600 sm:w-28">{text}</span>
      </div>
    </div>
  )
}
