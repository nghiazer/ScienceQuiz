import { useEffect, useMemo } from 'react'
import confetti from 'canvas-confetti'
import { motion } from 'framer-motion'
import { Home, RotateCcw, Star } from 'lucide-react'
import type { Question, QuizResult } from '../types/quiz'
import { SUBJECT_TOPICS, TOPICS } from '../data/questions'
import { buildRetryQuiz, findMissed } from '../utils/quiz'
import { playComplete } from '../utils/sound'
import { launchFireworks } from '../utils/fireworks'
import BilingualText from './BilingualText'
import DressCard from './wardrobe/DressCard'
import { dressById } from '../data/dresses'
import { useWardrobe } from '../utils/wardrobe'

interface Props {
  result: QuizResult
  onRetryWrong: (qs: Question[]) => void
  onReplay: () => void
  onHome: () => void
  onOpenWardrobe: () => void
}

function fireConfetti() {
  const end = Date.now() + 1500
  const frame = () => {
    confetti({ particleCount: 5, angle: 60, spread: 70, origin: { x: 0, y: 0.7 } })
    confetti({ particleCount: 5, angle: 120, spread: 70, origin: { x: 1, y: 0.7 } })
    if (Date.now() < end) requestAnimationFrame(frame)
  }
  frame()
}

export default function ResultScreen({ result, onRetryWrong, onReplay, onHome, onOpenWardrobe }: Props) {
  const { config, answers, percent, stars, newDresses } = result
  const { questions, subject } = config
  const isEnglish = subject === 'english'
  const correctCount = answers.filter((a) => a.correct).length
  const passed = percent >= 70

  useEffect(() => {
    playComplete()
    if (passed) fireConfetti()
  }, [passed])

  // Có váy mới → bắn pháo hoa toàn màn hình (độc lập với việc đạt ≥70%).
  const hasNewDress = newDresses.length > 0
  useEffect(() => {
    if (!hasNewDress) return
    return launchFireworks()
  }, [hasNewDress])
  const { bankSeconds } = useWardrobe()

  const wrong = useMemo(() => findMissed(questions, answers), [questions, answers])
  const answerOf = (id: string) => answers.find((a) => a.questionId === id)

  const byTopic = SUBJECT_TOPICS[subject].map((t) => {
    const qs = questions.filter((q) => q.topic === t)
    const ok = qs.filter((q) => answerOf(q.id)?.correct).length
    return { topic: t, total: qs.length, ok }
  }).filter((x) => x.total > 0)

  const message = isEnglish
    ? percent >= 90
      ? { vi: 'Xuất sắc! Tiếng Anh của con thật tuyệt! 🏆', en: 'Outstanding! Your English is brilliant! 🏆' }
      : percent >= 70
        ? { vi: 'Giỏi lắm! Con nắm các thì rất tốt! 🎉', en: 'Great work! You know your tenses well! 🎉' }
        : percent >= 40
          ? { vi: 'Khá lắm! Đọc kỹ dấu hiệu thời gian là sẽ giỏi hơn! 💪', en: 'Good try! Look carefully at the time clues and you will improve! 💪' }
          : { vi: 'Đừng buồn nhé, học ngoại ngữ cần thời gian. Cùng thử lại nào! 🌱', en: 'Don’t worry, learning English takes time. Let’s try again! 🌱' }
    : percent >= 90
    ? { vi: 'Xuất sắc! Con là nhà khoa học tài ba! 🏆', en: 'Outstanding! You are a brilliant scientist! 🏆' }
    : percent >= 70
      ? { vi: 'Giỏi lắm! Con làm rất tốt! 🎉', en: 'Great work! You did really well! 🎉' }
      : percent >= 40
        ? { vi: 'Khá lắm! Luyện thêm một chút là giỏi hơn nữa! 💪', en: 'Good try! A little more practice and you will be even better! 💪' }
        : { vi: 'Đừng buồn nhé, khoa học cần thời gian. Cùng thử lại nào! 🌱', en: 'Don’t worry, science takes time. Let’s try again! 🌱' }

  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-6">
      <motion.section
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="rounded-3xl bg-gradient-to-br from-amber-300 via-orange-300 to-pink-400 p-6 text-center text-white shadow-soft"
      >
        <h1 className="text-2xl sm:text-3xl font-black drop-shadow">
          <BilingualText vi="Kết quả của con" en="Your result" subClassName="!text-white/90 !not-italic" />
        </h1>
        <p className="mt-2 text-7xl font-black drop-shadow">{percent}%</p>
        <p className="mt-1 text-xl font-extrabold">
          {correctCount}/{questions.length} <BilingualText vi="câu đúng" en="correct" compact />
        </p>
        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/30 px-5 py-2 text-2xl font-black">
          <Star className="size-7 fill-yellow-300 text-yellow-400" /> +{stars}
        </div>
        <BilingualText as="p" vi={message.vi} en={message.en} className="mt-4 text-lg sm:text-xl font-extrabold" subClassName="!text-white/90 !not-italic" />
      </motion.section>

      {newDresses.length > 0 && (
        <section className="rounded-3xl bg-gradient-to-br from-pink-100 to-fuchsia-100 p-4 shadow-soft ring-4 ring-pink-200">
          <h2 className="mb-3 text-xl font-black text-fuchsia-700">
            <BilingualText vi="👗 Con vừa mở được váy mới!" en="👗 You unlocked a new dress!" />
          </h2>
          <ul className="mx-auto grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
            {newDresses.map((id) => {
              const d = dressById(id)
              return d ? (
                <li key={id}>
                  <DressCard dress={d} unlocked highlight />
                </li>
              ) : null
            })}
          </ul>
          <button
            type="button"
            onClick={onOpenWardrobe}
            disabled={bankSeconds <= 0}
            className="mt-4 min-h-14 w-full rounded-2xl bg-fuchsia-500 px-6 text-lg font-black text-white shadow-pop hover:bg-fuchsia-600 disabled:bg-slate-300 disabled:text-slate-500"
          >
            {bankSeconds > 0 ? (
              <BilingualText vi="Mặc thử ngay!" en="Try it on now!" subClassName="!text-white/80 !not-italic !text-xs" />
            ) : (
              <BilingualText vi="Học đủ 15 phút để mở tủ quần áo" en="Learn for 15 minutes to open the wardrobe" subClassName="!not-italic !text-xs" />
            )}
          </button>
        </section>
      )}

      <section className="rounded-3xl bg-white p-5 shadow-soft">
        <h2 className="mb-1 text-xl font-black text-slate-800">
          <BilingualText vi="Điểm theo từng chủ đề" en="Score by topic" />
        </h2>
        <BilingualText as="p" vi="Dành cho phụ huynh: xem bé mạnh và yếu ở mảng nào." en="For parents: see which areas your child is strong or weak in." className="mb-4 text-sm font-semibold text-slate-500" subClassName="!text-[0.95em]" />
        <ul className="space-y-4">
          {byTopic.map(({ topic, total, ok }) => {
            const t = TOPICS[topic]
            const p = Math.round((ok / total) * 100)
            const tag = p >= 80 ? { vi: 'Rất mạnh', en: 'Strong', c: 'bg-green-100 text-green-700' } : p >= 50 ? { vi: 'Khá', en: 'Good', c: 'bg-sky-100 text-sky-700' } : { vi: 'Cần luyện thêm', en: 'Needs practice', c: 'bg-rose-100 text-rose-700' }
            return (
              <li key={topic}>
                <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                  <span className="font-extrabold text-slate-700">
                    {t.emoji} <BilingualText vi={t.name_vi} en={t.name_en} compact />
                  </span>
                  <span className="flex items-center gap-2 text-sm font-extrabold">
                    <span className={`rounded-full px-3 py-0.5 ${tag.c}`}>
                      <BilingualText vi={tag.vi} en={tag.en} compact />
                    </span>
                    <span className="tabular-nums text-slate-600">{ok}/{total}</span>
                  </span>
                </div>
                <div className="h-5 overflow-hidden rounded-full bg-slate-100" role="img" aria-label={`${t.name_vi}: ${p}%`}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: t.hex }}
                    initial={{ width: 0 }}
                    animate={{ width: `${p}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  />
                </div>
              </li>
            )
          })}
        </ul>
      </section>

      {wrong.length > 0 && (
        <section className="rounded-3xl bg-white p-5 shadow-soft">
          <h2 className="mb-3 text-xl font-black text-rose-600">
            <BilingualText vi={`Ôn lại ${wrong.length} câu chưa đúng`} en={`Review ${wrong.length} missed question${wrong.length > 1 ? 's' : ''}`} />
          </h2>
          <ul className="space-y-4">
            {wrong.map((q) => {
              const a = answerOf(q.id)
              return (
                <li key={q.id} className="rounded-2xl bg-slate-50 p-4">
                  {q.subject === 'english' ? (
                    <>
                      {q.passage_en && <p lang="en" className="mb-1 whitespace-pre-line rounded-xl bg-amber-50 px-3 py-1 text-sm font-bold text-amber-900">{q.passage_en}</p>}
                      <p lang="en" className="whitespace-pre-line font-extrabold text-slate-800">{q.question_en}</p>
                      {a?.selectedIndex != null && <p lang="en" className="mt-2 text-sm font-bold text-rose-600">✗ {q.options_en[a.selectedIndex]}</p>}
                      <p lang="en" className="mt-1 flex items-start gap-2 font-extrabold text-green-700"><span>✓</span> {q.options_en[q.correctIndex]}</p>
                      <p className="mt-2 whitespace-pre-line text-sm font-semibold text-slate-600">{q.explanation_vi}</p>
                    </>
                  ) : (
                    <>
                      <BilingualText as="p" vi={q.question_vi} en={q.question_en} className="font-extrabold text-slate-800" subClassName="!text-[0.9em]" />
                      {a?.selectedIndex != null && (
                        <p className="mt-2 text-sm font-bold text-rose-600">
                          ✗ <BilingualText vi={q.options_vi[a.selectedIndex]} en={q.options_en[a.selectedIndex]} compact />
                        </p>
                      )}
                      <p className="mt-1 flex items-start gap-2 font-extrabold text-green-700">
                        <span>✓</span> <BilingualText vi={q.options_vi[q.correctIndex]} en={q.options_en[q.correctIndex]} />
                      </p>
                      <BilingualText as="p" vi={q.explanation_vi} en={q.explanation_en} className="mt-2 text-sm font-semibold text-slate-600" subClassName="!text-[0.95em]" />
                    </>
                  )}
                </li>
              )
            })}
          </ul>
        </section>
      )}

      <div className="flex flex-col gap-3 pb-8 sm:flex-row">
        {wrong.length > 0 && (
          <button
            type="button"
            onClick={() => onRetryWrong(buildRetryQuiz(questions, answers))}
            className="flex min-h-14 flex-1 items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 text-lg font-black text-white shadow-pop hover:bg-orange-600"
          >
            <RotateCcw className="size-6" />
            <BilingualText vi="Làm lại các câu sai" en="Retry the mistakes" subClassName="!text-white/80 !not-italic !text-xs" />
          </button>
        )}
        {config.kind !== 'retry' && (
          <button
            type="button"
            onClick={onReplay}
            className="flex min-h-14 flex-1 items-center justify-center gap-2 rounded-2xl bg-sky-500 px-6 text-lg font-black text-white shadow-pop hover:bg-sky-600"
          >
            <Star className="size-6" />
            <BilingualText vi="Chơi lại bài mới" en="Play again" subClassName="!text-white/80 !not-italic !text-xs" />
          </button>
        )}
        <button
          type="button"
          onClick={onHome}
          className="flex min-h-14 flex-1 items-center justify-center gap-2 rounded-2xl bg-white px-6 text-lg font-black text-slate-700 shadow-pop hover:bg-slate-50"
        >
          <Home className="size-6" />
          <BilingualText vi="Về trang chủ" en="Home" subClassName="!not-italic !text-xs" />
        </button>
      </div>
    </div>
  )
}
