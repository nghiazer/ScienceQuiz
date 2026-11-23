import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Flame, GraduationCap, Medal, Star } from 'lucide-react'
import type { Progress, Topic } from '../types/quiz'
import { QUESTIONS_BY_SUBJECT, SUBJECTS, SUBJECT_TOPICS, TOPICS } from '../data/questions'
import { useSubject } from '../context/SubjectContext'
import { badgesFor } from '../data/badges'
import { currentStreak } from '../utils/storage'
import { ENGLISH_MOCK_SIZE, MOCK_MINUTES, MOCK_SIZE } from '../utils/quiz'
import { playClick, unlockAudio } from '../utils/sound'
import BilingualText from './BilingualText'
import BadgeGrid from './BadgeGrid'
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
  const [showBadges, setShowBadges] = useState(false)
  const streak = currentStreak(progress)
  const { subject } = useSubject()
  const isEnglish = subject === 'english'
  const meta = SUBJECTS[subject]
  const topicIds = SUBJECT_TOPICS[subject]
  const visibleBadges = badgesFor(subject)
  const mockSize = isEnglish ? ENGLISH_MOCK_SIZE : MOCK_SIZE
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
          ) : (
            <BilingualText vi="Chào bé! Cùng khám phá khoa học nhé! 🚀" en="Hi there! Let’s explore science! 🚀" subClassName="!text-white/85 !not-italic" />
          )}
        </h1>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Stat tone="bg-amber-100 text-amber-800" icon={<Star className="size-7 fill-amber-400 text-amber-500" />} value={progress.totalStars} vi="Tổng số sao" en="Total stars" />
          <Stat tone="bg-orange-100 text-orange-800" icon={<Flame className="size-7 fill-orange-400 text-orange-500" />} value={streak} vi="Ngày học liên tiếp" en="Day streak" />
          <Stat tone="bg-violet-100 text-violet-800" icon={<Medal className="size-7 text-violet-500" />} value={`${visibleBadges.filter((b) => progress.unlockedBadges.includes(b.id)).length}/${visibleBadges.length}`} vi="Huy hiệu" en="Badges" />
        </div>
        <button
          type="button"
          onClick={() => setShowBadges((s) => !s)}
          aria-expanded={showBadges}
          className="mt-4 flex min-h-12 items-center gap-2 rounded-2xl bg-white/20 px-4 font-extrabold hover:bg-white/30"
        >
          <BilingualText vi="Xem bộ sưu tập huy hiệu" en="See my badge collection" subClassName="!text-white/80 !not-italic !text-xs" />
          <ChevronDown className={`size-5 transition ${showBadges ? 'rotate-180' : ''}`} />
        </button>
        {showBadges && (
          <div className="mt-4 rounded-2xl bg-white p-3 text-slate-800">
            <BadgeGrid unlocked={progress.unlockedBadges} />
          </div>
        )}
      </motion.section>

      <section aria-labelledby="topics-h">
        <h2 id="topics-h" className="mb-3 text-xl sm:text-2xl font-black text-slate-800">
          <BilingualText vi="Luyện theo chủ đề" en="Practise by topic" />
        </h2>
        <div className={`grid gap-4 sm:grid-cols-2 ${isEnglish ? 'lg:grid-cols-3' : ''}`}>
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
                  <BilingualText vi={t.name_vi} en={t.name_en} className="text-xl font-black" subClassName="!text-white/85 !not-italic !text-[0.7em]" />
                  <BilingualText vi={t.desc_vi} en={t.desc_en} className="mt-1 text-sm font-semibold text-white/90" subClassName="!text-white/75 !not-italic !text-[0.9em]" />
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
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
              vi={isEnglish ? `${mockSize} câu trộn cả 3 thì, có cả câu bẫy dễ nhầm như đề thi thật.` : `${mockSize} câu ngẫu nhiên từ cả 4 chủ đề, giống đề thi thật.`}
              en={isEnglish ? `${mockSize} questions mixing all 3 tenses, with tricky tense-contrast items like the real exam.` : `${mockSize} random questions from all 4 topics, just like the real exam.`}
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
              vi={timerOn ? `Đồng hồ ${MOCK_MINUTES} phút: BẬT` : 'Đồng hồ: TẮT'}
              en={timerOn ? `${MOCK_MINUTES}-minute timer: ON` : 'Timer: OFF'}
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
