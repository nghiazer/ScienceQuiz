import type { ReactNode } from 'react'
import type { EnglishQuestion } from '../types/quiz'
import BilingualText from './BilingualText'

/** Thay ___ bằng ô trống nổi bật. */
function withBlank(text: string): ReactNode[] {
  return text.split(/(_{2,})/).map((part, i) =>
    /^_{2,}$/.test(part) ? (
      <span
        key={i}
        aria-label="blank"
        className="mx-1 inline-block h-[1.1em] w-[3.2em] translate-y-[0.2em] rounded-lg border-b-4 border-dashed border-sky-500 bg-sky-100"
      />
    ) : (
      <span key={i}>{part}</span>
    ),
  )
}

function Dialogue({ text }: { text: string }) {
  const lines = text.split('\n').filter(Boolean)
  return (
    <div className="space-y-2">
      {lines.map((line, i) => {
        const m = /^([AB]):\s*(.*)$/.exec(line)
        const who = m?.[1] ?? (i % 2 === 0 ? 'A' : 'B')
        const body = m ? m[2] : line
        const right = who === 'B'
        return (
          <div key={i} className={`flex items-end gap-2 ${right ? 'flex-row-reverse' : ''}`}>
            <span
              className={`grid size-10 shrink-0 place-items-center rounded-full text-lg font-black text-white ${
                right ? 'bg-rose-400' : 'bg-sky-500'
              }`}
              aria-hidden
            >
              {who}
            </span>
            <p
              lang="en"
              className={`max-w-[85%] rounded-2xl px-4 py-2 text-xl font-bold leading-snug sm:text-2xl ${
                right ? 'rounded-br-sm bg-rose-50 text-rose-900' : 'rounded-bl-sm bg-sky-50 text-sky-900'
              }`}
            >
              {withBlank(body)}
            </p>
          </div>
        )
      })}
    </div>
  )
}

const INSTRUCTION = {
  sentence: { vi: 'Chọn từ đúng để điền vào chỗ trống.', en: 'Choose the correct word or phrase.' },
  dialogue: { vi: 'Hoàn thành đoạn hội thoại.', en: 'Complete the conversation.' },
  notice: { vi: 'Đọc rồi chọn đáp án đúng.', en: 'Read and choose the correct answer.' },
} as const

export default function EnglishPrompt({ question: q }: { question: EnglishQuestion }) {
  const ins = INSTRUCTION[q.format]
  return (
    <div className="min-w-0 flex-1 space-y-3">
      <BilingualText as="p" vi={ins.vi} en={ins.en} className="text-sm font-extrabold uppercase tracking-wide text-sky-600" subClassName="!normal-case" />
      {q.format === 'notice' && q.passage_en && (
        <div lang="en" className="whitespace-pre-line rounded-2xl border-4 border-dashed border-amber-300 bg-amber-50 px-4 py-3 text-lg font-extrabold leading-snug text-amber-900 sm:text-xl">
          {withBlank(q.passage_en)}
        </div>
      )}
      {q.format === 'dialogue' ? (
        <Dialogue text={q.question_en} />
      ) : (
        <h2 lang="en" className="text-xl font-black leading-snug text-slate-800 sm:text-2xl">
          {withBlank(q.question_en)}
        </h2>
      )}
    </div>
  )
}
