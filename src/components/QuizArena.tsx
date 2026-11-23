import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, LogOut, Star } from 'lucide-react'
import type { AnswerRecord, Difficulty, OptionIndex, QuizConfig } from '../types/quiz'
import { SUBJECTS, TOPICS } from '../data/questions'
import { useLang } from '../context/LanguageContext'
import { MOCK_MINUTES } from '../utils/quiz'
import { playClick, playCorrect, playWrong, unlockAudio } from '../utils/sound'
import { speakQuestion, stopSpeaking } from '../utils/speech'
import { Illustration } from './illustrations'
import BilingualText from './BilingualText'
import EnglishPrompt from './EnglishPrompt'
import ExplanationBox from './ExplanationBox'
import OptionCard, { type OptionState } from './OptionCard'
import RocketProgress from './RocketProgress'
import SpeakButton from './SpeakButton'
import Timer from './Timer'

interface Props {
  config: QuizConfig
  onFinish: (answers: AnswerRecord[]) => void
  onExit: () => void
}

const LETTERS = ['A', 'B', 'C', 'D']

const DIFF: Record<Difficulty, { vi: string; en: string; c: string }> = {
  easy: { vi: 'Dễ', en: 'Easy', c: 'bg-green-100 text-green-700' },
  medium: { vi: 'Vừa', en: 'Medium', c: 'bg-orange-100 text-orange-700' },
  hard: { vi: 'Khó', en: 'Hard', c: 'bg-rose-100 text-rose-700' },
}

export default function QuizArena({ config, onFinish, onExit }: Props) {
  const { questions, timerEnabled, kind, subject } = config
  const { mode } = useLang()
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<OptionIndex | null>(null)
  const [answers, setAnswers] = useState<AnswerRecord[]>([])
  const [remaining, setRemaining] = useState(MOCK_MINUTES * 60)
  const [timerVisible, setTimerVisible] = useState(true)
  const [paused, setPaused] = useState(false)
  const [confirmExit, setConfirmExit] = useState(false)
  const topRef = useRef<HTMLDivElement>(null)

  const q = questions[index]
  const answered = selected !== null
  const stars = answers.filter((a) => a.correct).length
  const timeUp = timerEnabled && remaining === 0
  const modalOpen = timeUp || confirmExit

  // Đồng hồ đếm ngược
  useEffect(() => {
    if (!timerEnabled || paused || timeUp || confirmExit) return
    const id = window.setInterval(() => setRemaining((r) => Math.max(0, r - 1)), 1000)
    return () => window.clearInterval(id)
  }, [timerEnabled, paused, timeUp, confirmExit])

  // Dừng đọc khi đổi câu hoặc rời màn hình
  useEffect(() => () => stopSpeaking(), [index])

  // Hết giờ: câu chưa làm tính là chưa trả lời
  const finishWithUnanswered = useCallback(() => {
    const done = new Set(answers.map((a) => a.questionId))
    const rest: AnswerRecord[] = questions
      .filter((x) => !done.has(x.id))
      .map((x) => ({ questionId: x.id, selectedIndex: null, correct: false }))
    onFinish([...answers, ...rest])
  }, [answers, questions, onFinish])

  const choose = (i: OptionIndex) => {
    if (answered || modalOpen) return
    unlockAudio()
    stopSpeaking()
    const correct = i === q.correctIndex
    setSelected(i)
    setAnswers((a) => [...a, { questionId: q.id, selectedIndex: i, correct }])
    if (correct) playCorrect()
    else playWrong()
  }

  const next = () => {
    playClick()
    if (index + 1 >= questions.length) {
      onFinish(answers)
      return
    }
    setIndex(index + 1)
    setSelected(null)
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const stateOf = (i: number): OptionState => {
    if (!answered) return 'idle'
    if (i === q.correctIndex) return i === selected ? 'correct' : 'reveal'
    if (i === selected) return 'wrong'
    return 'dim'
  }

  const topic = TOPICS[q.topic]
  const isLast = index + 1 >= questions.length
  const title =
    kind === 'mock'
      ? { vi: SUBJECTS[subject].mock_vi, en: SUBJECTS[subject].mock_en }
      : kind === 'retry'
        ? { vi: 'Làm lại câu sai', en: 'Retry Mistakes' }
        : { vi: topic.name_vi, en: topic.name_en }

  return (
    <div ref={topRef} className="mx-auto max-w-5xl px-4 py-4 space-y-4 scroll-mt-20">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => setConfirmExit(true)}
          className="flex min-h-12 items-center gap-2 rounded-2xl bg-white px-4 font-extrabold text-slate-600 shadow-soft"
        >
          <LogOut className="size-5" />
          <BilingualText vi="Thoát" en="Exit" compact />
        </button>
        <div className="flex items-center gap-2">
          {timerEnabled && (
            <Timer
              remaining={remaining}
              visible={timerVisible}
              paused={paused}
              onToggleVisible={() => setTimerVisible((v) => !v)}
              onTogglePause={() => setPaused((p) => !p)}
            />
          )}
          <div className="flex min-h-12 items-center gap-1.5 rounded-2xl bg-amber-100 px-4 font-black text-amber-700 shadow-soft" aria-label={`${stars} sao`}>
            <Star className="size-6 fill-amber-400 text-amber-500" />
            <span className="text-xl tabular-nums">{stars}</span>
          </div>
        </div>
      </div>

      <RocketProgress done={answers.length} total={questions.length} />

      <motion.article
        key={q.id}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 140, damping: 18 }}
        className="rounded-3xl bg-white p-4 sm:p-6 shadow-soft"
      >
        <div className="mb-3 flex flex-wrap items-center gap-2 text-sm font-extrabold">
          <span className="rounded-full bg-sky-100 px-3 py-1 text-sky-700">
            <BilingualText vi={`Câu ${index + 1}/${questions.length}`} en={`Question ${index + 1}/${questions.length}`} compact />
          </span>
          <span className={`rounded-full px-3 py-1 ${topic.soft} ${topic.text}`}>
            {topic.emoji} <BilingualText vi={topic.name_vi} en={topic.name_en} compact />
          </span>
          <span className={`rounded-full px-3 py-1 ${DIFF[q.difficulty].c}`}>
            <BilingualText vi={DIFF[q.difficulty].vi} en={DIFF[q.difficulty].en} compact />
          </span>
          {kind === 'mock' && <span className="rounded-full bg-violet-100 px-3 py-1 text-violet-700">{title.vi}</span>}
        </div>

        <div className={`grid gap-4 ${q.illustrationId ? 'md:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] items-start' : ''}`}>
          <div className="flex items-start gap-3">
            <SpeakButton onClick={() => speakQuestion(q, mode)} label="Đọc to câu hỏi / Read the question aloud" />
            {q.subject === 'english' ? (
              <EnglishPrompt question={q} />
            ) : (
              <BilingualText as="h2" vi={q.question_vi} en={q.question_en} className="text-xl sm:text-2xl font-black leading-snug text-slate-800" subClassName="font-bold" />
            )}
          </div>
          {q.illustrationId && (
            <div className="rounded-2xl border-4 border-sky-100 bg-sky-50 p-1">
              <Illustration id={q.illustrationId} />
            </div>
          )}
        </div>
      </motion.article>

      <div className="grid gap-3 sm:grid-cols-2" role="group" aria-label="Đáp án / Answers">
        {q.options_en.map((en, i) => (
          <OptionCard
            key={`${q.id}-${i}`}
            letter={LETTERS[i]}
            vi={q.subject === 'science' ? q.options_vi[i] : en}
            en={en}
            englishOnly={q.subject === 'english'}
            state={stateOf(i)}
            disabled={answered || modalOpen}
            onSelect={() => choose(i as OptionIndex)}
          />
        ))}
      </div>

      <div className="relative">
        <AnimatePresence>
          {answered && selected === q.correctIndex && (
            <motion.div
              key="star"
              initial={{ opacity: 1, y: 0, scale: 0.6 }}
              animate={{ opacity: 0, y: -90, scale: 1.4 }}
              transition={{ duration: 1.2 }}
              className="pointer-events-none absolute left-1/2 -top-6 z-10 -translate-x-1/2 text-3xl font-black text-amber-500"
            >
              +1 ⭐
            </motion.div>
          )}
        </AnimatePresence>
        {answered && <ExplanationBox question={q} correct={selected === q.correctIndex} />}
      </div>

      {answered && (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex justify-end pb-6">
          <button
            type="button"
            onClick={next}
            className="flex min-h-14 items-center gap-2 rounded-2xl bg-green-500 px-6 text-lg font-black text-white shadow-pop hover:bg-green-600 active:translate-y-0.5"
          >
            <BilingualText
              vi={isLast ? 'Xem kết quả' : 'Câu tiếp theo'}
              en={isLast ? 'See results' : 'Next question'}
              subClassName="!text-white/80 !not-italic text-xs"
            />
            <ArrowRight className="size-6" />
          </button>
        </motion.div>
      )}

      {timeUp && (
        <Modal>
          <p className="text-5xl">⏰</p>
          <h3 className="mt-2 text-2xl font-black text-slate-800">
            <BilingualText vi="Hết giờ rồi!" en="Time is up!" />
          </h3>
          <p className="mt-2 font-semibold text-slate-600">
            <BilingualText vi="Không sao đâu, con đã làm rất tốt. Cùng xem kết quả nhé!" en="That is okay, you did great. Let’s see your results!" />
          </p>
          <button type="button" onClick={finishWithUnanswered} className="mt-5 min-h-14 w-full rounded-2xl bg-sky-500 text-lg font-black text-white shadow-pop">
            <BilingualText vi="Xem kết quả" en="See results" subClassName="!text-white/80 !not-italic text-xs" />
          </button>
        </Modal>
      )}
      {confirmExit && (
        <Modal>
          <p className="text-5xl">{subject === 'english' ? '👋' : '🚀'}</p>
          <h3 className="mt-2 text-2xl font-black text-slate-800">
            <BilingualText vi="Thoát bài làm?" en="Leave this quiz?" />
          </h3>
          <p className="mt-2 font-semibold text-slate-600">
            <BilingualText vi="Kết quả bài này sẽ không được lưu." en="Your result for this quiz will not be saved." />
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <button type="button" onClick={() => setConfirmExit(false)} className="min-h-14 rounded-2xl bg-sky-500 text-lg font-black text-white shadow-pop">
              <BilingualText vi="Ở lại" en="Stay" subClassName="!text-white/80 !not-italic text-xs" />
            </button>
            <button type="button" onClick={onExit} className="min-h-14 rounded-2xl bg-slate-200 text-lg font-black text-slate-700 shadow-pop">
              <BilingualText vi="Thoát" en="Leave" subClassName="!not-italic text-xs" />
            </button>
          </div>
        </Modal>
      )}
    </div>
  )
}

function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 grid place-items-center bg-slate-900/50 p-4">
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-2xl"
      >
        {children}
      </motion.div>
    </div>
  )
}
