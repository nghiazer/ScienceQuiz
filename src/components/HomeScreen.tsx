import { useState } from 'react'
import { motion } from 'framer-motion'
import { Flame, GraduationCap, Shirt, Star } from 'lucide-react'
import type { Progress, Topic } from '../types/quiz'
import { QUESTIONS_BY_SUBJECT, SUBJECTS, SUBJECT_TOPICS, TOPICS } from '../data/questions'
import { useSubject } from '../context/SubjectContext'
import { WARDROBE_SIZE, nextDress as findNextDress, nextDressIn, unlockedCount } from '../data/dresses'
import { STUDY_BLOCK_SECONDS, formatClock, useWardrobe } from '../utils/wardrobe'
import { currentStreak } from '../utils/storage'
import { MOCK_MINUTES_BY_SUBJECT, MOCK_SIZE_BY_SUBJECT } from '../utils/quiz'
import { playClick, unlockAudio } from '../utils/sound'
import BilingualText from './BilingualText'
import DressCard from './wardrobe/DressCard'
import SubjectSwitcher from './SubjectSwitcher'

interface Props {
  progress: Progress
  onStartTopic: (t: Topic) => void
  onStartMock: (timerEnabled: boolean) => void
}

function Stat({ icon, value, vi, en, tone }: { icon: React.ReactNode; value: number | string; vi: string; en: string; tone: string }) {
  return (
    <div className={`flex flex-1 items-center gap-3 rounded-2xl p-3 sm:p-4 ${tone}`}>
      <div className="grid size-12 place-items-center rounded-xl bg-white/80">{icon}</div>
      <div className="leading-tight">
        <p className="text-2xl sm:text-3xl font-black tabular-nums">{value}</p>
        <BilingualText vi={vi} en={en} className="text-xs sm:text-sm font-bold" subClassName="!text-[0.85em] !text-current opacity-70" />
      </div>
    </div>
  )
}

export default function HomeScreen({ progress, onStartTopic, onStartMock }: Props) {
  const [timerOn, setTimerOn] = useState(true)
  const streak = currentStreak(progress)
  const { subject } = useSubject()
  const isEnglish = subject === 'english'
  const isMath = subject === 'math'
  const meta = SUBJECTS[subject]
  const topicIds = SUBJECT_TOPICS[subject]
  // Tủ váy chung của cả ba môn: câu đúng ở môn nào cũng được tính.
  const dressCount = unlockedCount(progress)
  const dressesLeft = nextDressIn(progress, subject)
  const nextDress = findNextDress(progress)
  const { studySeconds, bankSeconds } = useWardrobe()
  const mockSize = MOCK_SIZE_BY_SUBJECT[subject]
  const mockMinutes = MOCK_MINUTES_BY_SUBJECT[subject]
  const subjectTotals = topicIds.reduce(
    (acc, id) => ({ correct: acc.correct + progress.topicStats[id].correct, total: acc.total + progress.topicStats[id].total }),
    { correct: 0, total: 0 },
  )

  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 py-6">
      <SubjectSwitcher />
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        key={subject}
        className={`rounded-3xl bg-gradient-to-br ${meta.gradient} p-5 sm:p-7 text-white shadow-soft`}
      >
        <h1 className="text-2xl sm:text-4xl font-black leading-tight">
          {isEnglish ? (
            <BilingualText vi="Chào bé! Cùng học Tiếng Anh nhé! 🇬🇧" en="Hi there! Let’s learn English! 🇬🇧" subClassName="!text-white/85 !not-italic" />
          ) : isMath ? (
            <BilingualText vi="Chào bé! Cùng chinh phục Toán TIMO nhé! 🧮" en="Hi there! Let’s conquer TIMO maths! 🧮" subClassName="!text-white/85 !not-italic" />
          ) : (
            <BilingualText vi="Chào bé! Cùng khám phá khoa học nhé! 🚀" en="Hi there! Let’s explore science! 🚀" subClassName="!text-white/85 !not-italic" />
          )}
        </h1>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Stat tone="bg-amber-100 text-amber-800" icon={<Star className="size-7 fill-amber-400 text-amber-500" />} value={progress.totalStars} vi="Tổng số sao" en="Total stars" />
          <Stat tone="bg-orange-100 text-orange-800" icon={<Flame className="size-7 fill-orange-400 text-orange-500" />} value={streak} vi="Ngày học liên tiếp" en="Day streak" />
          <Stat tone="bg-pink-100 text-pink-800" icon={<Shirt className="size-7 text-pink-500" />} value={`${dressCount}/${WARDROBE_SIZE}`} vi="Váy dạ hội" en="Ball gowns" />
        </div>
        <div className="mt-4 flex items-center gap-4 rounded-2xl bg-white/20 p-3">
          {nextDress ? (
            <div className="w-16 shrink-0 sm:w-20">
              <DressCard dress={nextDress} unlocked={false} />
            </div>
          ) : (
            <span className="text-5xl" aria-hidden>👑</span>
          )}
          <div className="min-w-0 flex-1 font-extrabold">
            {nextDress ? (
              <BilingualText
                vi={`Đúng liên tiếp ${dressesLeft} câu nữa để mở váy mới!`}
                en={`${dressesLeft} more correct answers in a row to unlock a new dress!`}
                subClassName="!text-white/80 !not-italic !text-xs"
              />
            ) : (
              <BilingualText vi="Con đã mở hết cả tủ váy! 🎉" en="You unlocked the whole wardrobe! 🎉" subClassName="!text-white/80 !not-italic !text-xs" />
            )}
            <p className="mt-1 text-xs font-bold text-white/90">
              👗 Học {formatClock(STUDY_BLOCK_SECONDS - studySeconds)} nữa → +5 phút tủ quần áo
              {bankSeconds > 0 ? ` · đang có ${formatClock(bankSeconds)}` : ''}
            </p>
            <div className="mt-1 h-2 overflow-hidden rounded-full bg-white/30">
              <div className="h-full rounded-full bg-white" style={{ width: `${(studySeconds / STUDY_BLOCK_SECONDS) * 100}%` }} />
            </div>
          </div>
        </div>
      </motion.section>

      <section aria-labelledby="topics-h">
        <h2 id="topics-h" className="mb-3 text-xl sm:text-2xl font-black text-slate-800">
          <BilingualText vi="Luyện theo chủ đề" en="Practise by topic" />
        </h2>
        <div className={`grid gap-4 sm:grid-cols-2 ${isEnglish || isMath ? 'lg:grid-cols-3' : ''}`}>
          {topicIds.map((id, i) => {
            const t = TOPICS[id]
            const stat = progress.topicStats[id]
            const pct = stat.total ? Math.round((stat.correct / stat.total) * 100) : null
            const n = QUESTIONS_BY_SUBJECT[subject].filter((q) => q.topic === id).length
            return (
              <motion.button
                key={id}
                type="button"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  unlockAudio()
                  playClick()
                  onStartTopic(id)
                }}
                className={`flex min-h-28 items-center gap-4 rounded-3xl bg-gradient-to-br ${t.gradient} p-4 text-left text-white shadow-soft transition hover:brightness-105`}
              >
                <span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-white/25 text-4xl" aria-hidden>{t.emoji}</span>
                <span className="min-w-0 flex-1">
                  <BilingualText vi={t.name_vi} en={t.name_en} className="block text-xl font-black" subClassName="!text-white/85 !not-italic !text-[0.7em]" />
                  <BilingualText vi={t.desc_vi} en={t.desc_en} className="mt-1 block text-sm font-semibold text-white/90" subClassName="!text-white/75 !not-italic !text-[0.9em]" />
                  <span className="mt-2 flex items-center gap-2 text-xs font-extrabold">
                    <span className="rounded-full bg-white/25 px-2 py-0.5">Kho {n} câu</span>
                    {pct !== null && <span className="rounded-full bg-white/25 px-2 py-0.5">Đúng {pct}%</span>}
                  </span>
                </span>
              </motion.button>
            )
          })}
        </div>
      </section>

      <section aria-labelledby="parent-h" className="rounded-3xl bg-white p-5 shadow-soft">
        <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
          <h2 id="parent-h" className="text-xl font-black text-slate-800">
            <BilingualText vi={`Theo dõi cho phụ huynh · ${meta.short_vi}`} en={`For parents · ${meta.short_en}`} />
          </h2>
          <p className="text-sm font-extrabold text-slate-500 tabular-nums">
            {subjectTotals.total > 0
              ? `${subjectTotals.correct}/${subjectTotals.total} (${Math.round((subjectTotals.correct / subjectTotals.total) * 100)}%)`
              : '—'}
          </p>
        </div>
        <ul className={`grid gap-3 sm:grid-cols-2 ${isMath ? 'lg:grid-cols-5' : 'lg:grid-cols-4'}`}>
          {topicIds.map((id) => {
            const t = TOPICS[id]
            const st = progress.topicStats[id]
            const pct = st.total ? Math.round((st.correct / st.total) * 100) : 0
            return (
              <li key={id} className={`rounded-2xl p-3 ${t.soft}`}>
                <p className={`text-sm font-black ${t.text}`}>{t.emoji} <BilingualText vi={t.name_vi} en={t.name_en} compact /></p>
                <p className="mt-1 text-lg font-black tabular-nums text-slate-800">
                  {st.total ? `${st.correct}/${st.total}` : '—'} <span className="text-sm font-bold text-slate-500">{st.total ? `· ${pct}%` : ''}</span>
                </p>
                <div className="mt-1 h-2 overflow-hidden rounded-full bg-white/70">
                  <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: t.hex }} />
                </div>
              </li>
            )
          })}
        </ul>
      </section>

      <section aria-labelledby="mock-h" className="rounded-3xl bg-white p-5 shadow-soft ring-4 ring-violet-200">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="grid size-16 shrink-0 place-items-center rounded-2xl bg-violet-100 text-violet-600">
            <GraduationCap className="size-9" />
          </div>
          <div className="flex-1">
            <h2 id="mock-h" className="text-xl sm:text-2xl font-black text-violet-800">
              <BilingualText vi={meta.mock_vi} en={meta.mock_en} subClassName="!text-violet-500" />
            </h2>
            <BilingualText
              as="p"
              vi={
                isEnglish
                  ? `${mockSize} câu trộn cả 3 thì, có cả câu bẫy dễ nhầm như đề thi thật.`
                  : isMath
                    ? `${mockSize} câu như vòng loại TIMO: 5 câu mỗi mảng, xếp từ dễ đến khó, ${mockMinutes} phút.`
                    : `${mockSize} câu ngẫu nhiên từ cả 4 chủ đề, giống đề thi thật.`
              }
              en={
                isEnglish
                  ? `${mockSize} questions mixing all 3 tenses, with tricky tense-contrast items like the real exam.`
                  : isMath
                    ? `${mockSize} questions like the TIMO heat round: 5 from each area, easy to hard, ${mockMinutes} minutes.`
                    : `${mockSize} random questions from all 4 topics, just like the real exam.`
              }
              className="font-semibold text-slate-600"
              subClassName="!text-[0.9em]"
            />
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            role="switch"
            aria-checked={timerOn}
            onClick={() => setTimerOn((v) => !v)}
            className="flex min-h-12 items-center gap-3 rounded-2xl bg-slate-100 px-4 font-bold text-slate-700"
          >
            <span className={`relative h-8 w-14 rounded-full transition ${timerOn ? 'bg-green-500' : 'bg-slate-300'}`}>
              <span className={`absolute top-1 size-6 rounded-full bg-white shadow transition-all ${timerOn ? 'left-7' : 'left-1'}`} />
            </span>
            <BilingualText
              vi={timerOn ? `Đồng hồ ${mockMinutes} phút: BẬT` : 'Đồng hồ: TẮT'}
              en={timerOn ? `${mockMinutes}-minute timer: ON` : 'Timer: OFF'}
              subClassName="!text-[0.75em]"
            />
          </button>
          <button
            type="button"
            onClick={() => {
              unlockAudio()
              playClick()
              onStartMock(timerOn)
            }}
            className="min-h-14 rounded-2xl bg-violet-500 px-8 text-lg font-black text-white shadow-pop hover:bg-violet-600 active:translate-y-0.5"
          >
            <BilingualText vi="Bắt đầu thi thử" en="Start mock test" subClassName="!text-white/80 !not-italic !text-xs" />
          </button>
        </div>
      </section>
    </div>
  )
}
