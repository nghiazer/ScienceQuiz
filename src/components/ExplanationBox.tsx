import { motion } from 'framer-motion'
import { Lightbulb } from 'lucide-react'
import BilingualText from './BilingualText'
import { useLang } from '../context/LanguageContext'
import SpeakButton from './SpeakButton'
import { speak } from '../utils/speech'
import type { Question } from '../types/quiz'

/** Tô đậm nhãn đầu mỗi ý: "Dấu hiệu" / "Quy tắc" (Tiếng Anh) hoặc "Ý tưởng" / "Lời giải" (Toán). */
function GrammarText({ text, className }: { text: string; className: string }) {
  const parts = text.split(/((?:🔎|📘|🧠|✏️) [^:]+:)/g).filter(Boolean)
  return (
    <p className={className}>
      {parts.map((p, i) =>
        /^(?:🔎|📘|🧠|✏️) [^:]+:$/.test(p) ? (
          <strong key={i} className="mt-1 block font-black text-amber-800">{p}</strong>
        ) : (
          <span key={i} className="block">{p.trim()}</span>
        ),
      )}
    </p>
  )
}

export default function ExplanationBox({ question, correct }: { question: Question; correct: boolean }) {
  const { mode } = useLang()
  const english = question.subject === 'english'
  const math = question.subject === 'math'
  const readExplanation = () => {
    if (mode === 'en') speak(question.explanation_en, 'en')
    else speak(question.explanation_vi.replace(/🔎|📘|🧠|✏️/gu, ''), 'vi')
  }
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 160, damping: 18 }}
      aria-live="polite"
      className={`rounded-3xl border-4 p-4 sm:p-5 shadow-soft ${correct ? 'bg-green-50 border-green-300' : 'bg-amber-50 border-amber-300'}`}
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="grid size-11 place-items-center rounded-xl bg-amber-400 text-white"><Lightbulb className="size-6" /></span>
        <h3 className="flex-1 text-lg sm:text-xl font-black text-amber-800">
          {english ? (
            <BilingualText vi="Góc giải thích ngữ pháp" en="Grammar Corner" subClassName="text-amber-700/80" />
          ) : math ? (
            <BilingualText vi="Góc lời giải" en="Solution Corner" subClassName="text-amber-700/80" />
          ) : (
            <BilingualText vi="Góc giải thích khoa học" en="Science Explanation Corner" subClassName="text-amber-700/80" />
          )}
        </h3>
        <SpeakButton onClick={readExplanation} label="Đọc giải thích / Read explanation" />
      </div>
      <p className={`font-extrabold mb-1 ${correct ? 'text-green-700' : 'text-rose-600'}`}>
        <BilingualText
          vi={correct ? '🎉 Chính xác! Giỏi quá!' : '💪 Chưa đúng rồi, nhưng không sao! Cùng học nhé.'}
          en={correct ? 'Correct! Great job!' : 'Not quite, but that is okay! Let’s learn.'}
          subClassName="font-semibold"
        />
      </p>
      {english ? (
        <>
          <GrammarText text={question.explanation_vi} className="text-base sm:text-lg font-semibold text-slate-700 leading-relaxed" />
          {mode === 'bi' && (
            <GrammarText text={question.explanation_en} className="mt-2 text-[0.95rem] font-semibold italic text-slate-500 leading-relaxed" />
          )}
        </>
      ) : math ? (
        <>
          {mode !== 'en' && (
            <GrammarText text={question.explanation_vi} className="text-base sm:text-lg font-semibold text-slate-700 leading-relaxed" />
          )}
          {mode !== 'vi' && (
            <GrammarText
              text={question.explanation_en}
              className={mode === 'bi' ? 'mt-2 text-[0.95rem] font-semibold italic text-slate-500 leading-relaxed' : 'text-base sm:text-lg font-semibold text-slate-700 leading-relaxed'}
            />
          )}
        </>
      ) : (
        <BilingualText as="p" vi={question.explanation_vi} en={question.explanation_en} className="text-base sm:text-lg font-semibold text-slate-700 leading-relaxed" />
      )}
    </motion.section>
  )
}
