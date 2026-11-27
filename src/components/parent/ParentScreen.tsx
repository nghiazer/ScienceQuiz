import { useMemo, useState } from 'react'
import { Home } from 'lucide-react'
import type { Difficulty, Progress, Question, Subject, SubtopicId } from '../../types/quiz'
import { SUBJECTS, SUBJECT_TOPICS, SUBTOPICS, TOPICS } from '../../data/topics'
import { CORRECT_PER_DRESS, WARDROBE_SIZE, unlockedCount } from '../../data/dresses'
import { TOPIC_SESSION_SIZE, questionById } from '../../utils/quiz'
import { currentStreak, todayStr } from '../../utils/storage'
import {
  SUBJECT_COLOR,
  formatDuration,
  formatMinutes,
  heatmapWeeks,
  lastDays,
  parentSubjects,
  pctOf,
  rankSubtopics,
  recentMocks,
  shortDate,
  totalMinutes,
  totalsByDate,
  weeklyAccuracy,
} from '../../utils/parentStats'
import { playClick } from '../../utils/sound'
import BilingualText from '../BilingualText'
import { Heatmap, LineChart, MinutesChart } from './Charts'
import { BarRow, Card, Empty } from './ui'

interface Props {
  progress: Progress
  onHome: () => void
  onRetry: (questions: Question[], subject: Subject) => void
}

const DIFFICULTY: { id: Difficulty; label: string; color: string }[] = [
  { id: 'easy', label: 'Dễ', color: '#22c55e' },
  { id: 'medium', label: 'Vừa', color: '#f59e0b' },
  { id: 'hard', label: 'Khó', color: '#f43f5e' },
]

const LETTERS = ['A', 'B', 'C', 'D']
const MISTAKES_SHOWN = 10

function Tile({ icon, vi, en, value, hint, wide = false }: { icon: string; vi: string; en: string; value: string; hint?: string; wide?: boolean }) {
  return (
    <div className={`rounded-2xl bg-slate-50 p-3 ${wide ? 'col-span-2 lg:col-span-1' : ''}`}>
      <p className="text-xs font-extrabold text-slate-500">
        <span aria-hidden>{icon} </span>
        <BilingualText vi={vi} en={en} compact />
      </p>
      <p className="mt-1 text-2xl font-black tabular-nums text-slate-800">{value}</p>
      {hint && <p className="mt-0.5 text-xs font-bold text-slate-500">{hint}</p>}
    </div>
  )
}

function SubjectChip({ subject }: { subject: Subject }) {
  const m = SUBJECTS[subject]
  return (
    <span className="inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-xs font-black text-white" style={{ backgroundColor: SUBJECT_COLOR[subject] }}>
      <span aria-hidden>{m.emoji}</span>
      {m.short_vi}
    </span>
  )
}

const subtopicName = (id: SubtopicId) => SUBTOPICS[id].vi

/** Câu hỏi hiển thị cho phụ huynh: tiếng Việt với Khoa học/Toán, tiếng Anh gốc với môn Tiếng Anh. */
const questionText = (q: Question) => (q.subject === 'english' ? q.question_en : q.question_vi)
const optionText = (q: Question, i: number) => (q.subject === 'english' ? q.options_en[i] : q.options_vi[i])

export default function ParentScreen({ progress, onHome, onRetry }: Props) {
  const today = todayStr()
  const subjects = useMemo(() => parentSubjects(progress), [progress])
  const byDate = useMemo(() => totalsByDate(progress.history), [progress.history])
  const [showAllMistakes, setShowAllMistakes] = useState(false)

  const all = Object.values(progress.topicStats).reduce((a, s) => ({ correct: a.correct + s.correct, total: a.total + s.total }), { correct: 0, total: 0 })
  const overallPct = pctOf(all)
  const last = progress.history[progress.history.length - 1]
  const lastLabel = last
    ? `${new Date(last.at).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })} · ${shortDate(last.date)}`
    : progress.lastPlayedDate
      ? shortDate(progress.lastPlayedDate)
      : '—'

  const topicsHaveData = subjects.some((s) => SUBJECT_TOPICS[s].some((t) => progress.topicStats[t].total > 0))
  const difficultyHasData = subjects.some((s) => DIFFICULTY.some((d) => progress.difficultyStats[s][d.id].total > 0))

  const ranked = useMemo(() => rankSubtopics(progress.subtopicStats, subjects), [progress.subtopicStats, subjects])
  const weak = ranked.slice(0, 5)
  const best = ranked
    .slice(5)
    .reverse()
    .slice(0, 3)

  const weeks = useMemo(() => heatmapWeeks(today), [today])
  const days14 = useMemo(() => lastDays(today, 14), [today])
  const hasHistory = progress.history.length > 0
  const weekly = useMemo(() => weeklyAccuracy(progress.history, today), [progress.history, today])

  const mocksBySubject = subjects.map((s) => ({ subject: s, list: recentMocks(progress.history, s) }))
  const mockRows = mocksBySubject.flatMap((m) => m.list).sort((a, b) => b.at.localeCompare(a.at))
  const mockLen = Math.max(0, ...mocksBySubject.map((m) => m.list.length))

  const mistakes = useMemo(
    () =>
      progress.recentMistakes.flatMap((m) => {
        const q = questionById(m.id)
        return q && subjects.includes(q.subject) ? [{ m, q }] : []
      }),
    [progress.recentMistakes, subjects],
  )
  const retrySubjects = subjects.filter((s) => mistakes.some((x) => x.q.subject === s))

  return (
    <div className="mx-auto max-w-6xl space-y-4 px-4 py-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => {
            playClick()
            onHome()
          }}
          className="flex min-h-12 items-center gap-2 rounded-2xl bg-white px-4 font-extrabold text-slate-600 shadow-soft"
        >
          <Home className="size-5" />
          <BilingualText vi="Về trang chủ" en="Home" compact />
        </button>
        <h1 className="text-xl font-black text-slate-800 sm:text-2xl">
          <BilingualText vi="👨‍👩‍👧 Góc phụ huynh" en="👨‍👩‍👧 Parent corner" />
        </h1>
      </div>

      <Card id="p-overview" vi="Tổng quan" en="Overview">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
          <Tile icon="⭐" vi="Tổng số sao" en="Total stars" value={String(progress.totalStars)} />
          <Tile icon="🔥" vi="Chuỗi ngày học" en="Day streak" value={`${currentStreak(progress)} ngày`} />
          <Tile icon="📝" vi="Số bài đã làm" en="Quizzes done" value={String(progress.quizzesCompleted)} />
          <Tile icon="🏅" vi="Bài đạt 100%" en="Perfect quizzes" value={String(progress.perfectCount)} />
          <Tile icon="🎯" vi="Tỉ lệ đúng chung" en="Overall accuracy" value={overallPct === null ? '—' : `${overallPct}%`} hint={all.total ? `${all.correct}/${all.total} câu` : undefined} />
          <Tile icon="👗" vi="Váy đã mở" en="Dresses unlocked" value={`${unlockedCount(progress)}/${WARDROBE_SIZE}`} />
          <Tile
            icon="🔗"
            vi="Chuỗi đúng hiện tại"
            en="Current correct run"
            value={subjects.map((s) => `${progress.correctRun[s]}`).join(' · ')}
            hint={`${subjects.map((s) => SUBJECTS[s].short_vi).join(' · ')} (đủ ${CORRECT_PER_DRESS} mở váy)`}
            wide
          />
          <Tile icon="🕒" vi="Lần học gần nhất" en="Last study" value={lastLabel} />
          <Tile icon="⏱️" vi="Tổng thời gian học" en="Total study time" value={hasHistory ? formatMinutes(totalMinutes(progress.history)) : '—'} />
        </div>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card id="p-topics" vi="Độ chính xác theo chủ đề" en="Accuracy by topic">
          {topicsHaveData ? (
            <div className="space-y-4">
              {subjects.map((s) => (
                <div key={s}>
                  <p className="mb-2"><SubjectChip subject={s} /></p>
                  <div className="space-y-2">
                    {SUBJECT_TOPICS[s].map((id) => {
                      const st = progress.topicStats[id]
                      return (
                        <BarRow
                          key={id}
                          label={`${TOPICS[id].emoji} ${TOPICS[id].name_vi}`}
                          pct={pctOf(st)}
                          detail={`${st.correct}/${st.total}`}
                          color={TOPICS[id].hex}
                        />
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </Card>

        <Card id="p-difficulty" vi="Độ chính xác theo độ khó" en="Accuracy by difficulty">
          {difficultyHasData ? (
            <div className="space-y-4">
              {subjects.map((s) => (
                <div key={s}>
                  <p className="mb-2"><SubjectChip subject={s} /></p>
                  <div className="space-y-2">
                    {DIFFICULTY.map((d) => {
                      const st = progress.difficultyStats[s][d.id]
                      return <BarRow key={d.id} label={d.label} pct={pctOf(st)} detail={`${st.correct}/${st.total}`} color={d.color} />
                    })}
                  </div>
                </div>
              ))}
              <p className="text-xs font-semibold text-slate-500">Số liệu tính từ khi có tính năng này; các bài làm trước đó không có trong biểu đồ.</p>
            </div>
          ) : (
            <Empty />
          )}
        </Card>
      </div>

      <Card id="p-weak" vi="Điểm yếu cần ôn" en="Weak spots to review" hint="Chuyên đề con có từ 5 câu đã làm trở lên, xếp từ thấp nhất.">
        {weak.length === 0 ? (
          <Empty text="Chưa đủ dữ liệu — cần ít nhất 5 câu ở một chuyên đề con." />
        ) : (
          <div className="grid gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <ul className="divide-y divide-slate-100" aria-label="Năm chuyên đề con có tỉ lệ đúng thấp nhất">
              {weak.map((r) => (
                <li key={r.id} className="py-2.5">
                  <div className="flex items-center gap-2">
                    <SubjectChip subject={r.subject} />
                    <span className="min-w-0 flex-1 text-sm font-extrabold text-slate-700">{subtopicName(r.id)}</span>
                    <span className="shrink-0 text-sm font-black tabular-nums text-slate-600" title="Số câu đúng / tổng số câu">{r.stat.correct}/{r.stat.total}</span>
                  </div>
                  <div className="mt-1.5 flex items-center gap-2">
                    <div className="h-3 min-w-0 flex-1 overflow-hidden rounded-full bg-slate-100" role="img" aria-label={`${r.pct}%`}>
                      <div className="h-full rounded-full bg-rose-400" style={{ width: `${r.pct}%` }} />
                    </div>
                    <span className="w-10 shrink-0 text-right text-xs font-black tabular-nums text-rose-600">{r.pct}%</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl bg-green-50 p-3">
              <p className="text-sm font-black text-green-800">🏆 Làm tốt nhất</p>
              {best.length === 0 ? (
                <p className="mt-2 text-xs font-bold text-green-700">Sẽ hiện khi có thêm chuyên đề con đủ 5 câu.</p>
              ) : (
                <ul className="mt-2 space-y-2">
                  {best.map((r) => (
                    <li key={r.id} className="flex items-center justify-between gap-2 text-sm">
                      <span className="min-w-0 truncate font-extrabold text-slate-700">{subtopicName(r.id)}</span>
                      <span className="shrink-0 text-xs font-black tabular-nums text-green-700">{r.pct}% · {r.stat.correct}/{r.stat.total}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card id="p-calendar" vi="Lịch học" en="Study calendar" hint="8 tuần gần nhất, mỗi cột một tuần (Thứ Hai → Chủ nhật). Chạm vào ô để xem số phút.">
          {hasHistory ? <Heatmap weeks={weeks} byDate={byDate} today={today} /> : <Empty />}
        </Card>
        <Card id="p-minutes" vi="Số phút học mỗi ngày" en="Minutes per day" hint="14 ngày gần nhất.">
          {hasHistory ? <MinutesChart days={days14} byDate={byDate} /> : <Empty />}
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card id="p-trend" vi="Xu hướng theo tuần" en="Weekly trend" hint="Tỉ lệ đúng mỗi tuần trong 8 tuần gần nhất (nhãn là ngày đầu tuần).">
          {weekly.some((w) => w.pct !== null) ? (
            <LineChart
              series={[{ name: 'Tỉ lệ đúng', color: '#6366f1', points: weekly.map((w) => w.pct) }]}
              xLabels={weekly.map((w) => shortDate(w.start))}
              ariaLabel="Tỉ lệ đúng theo tuần"
              showValues
            />
          ) : (
            <Empty />
          )}
        </Card>

        <Card id="p-mock" vi="Thi thử" en="Mock tests" hint="Điểm (%) của tối đa 10 bài thi thử gần nhất mỗi môn.">
          {mockRows.length === 0 ? (
            <Empty />
          ) : (
            <>
              <LineChart
                series={mocksBySubject.filter((m) => m.list.length > 0).map((m) => ({
                  name: SUBJECTS[m.subject].short_vi,
                  color: SUBJECT_COLOR[m.subject],
                  points: m.list.map((h) => Math.round((h.correct / Math.max(h.total, 1)) * 100)),
                }))}
                xLabels={Array.from({ length: mockLen }, (_, i) => `#${i + 1}`)}
                ariaLabel="Điểm thi thử"
                showValues
              />
              <div className="mt-1 flex flex-wrap justify-center gap-3 text-xs font-bold text-slate-600">
                {mocksBySubject.filter((m) => m.list.length > 0).map((m) => (
                  <span key={m.subject} className="flex items-center gap-1">
                    <i className="inline-block h-1.5 w-4 rounded" style={{ backgroundColor: SUBJECT_COLOR[m.subject] }} />
                    {SUBJECTS[m.subject].short_vi}
                  </span>
                ))}
              </div>
            </>
          )}
        </Card>
      </div>

      {mockRows.length > 0 && (
        <Card id="p-mock-table" vi="Bài thi thử gần đây" en="Recent mock tests">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-xs font-extrabold text-slate-500">
                  <th className="py-1 pr-2">Ngày</th>
                  <th className="py-1 pr-2">Môn</th>
                  <th className="py-1 pr-2">Điểm</th>
                  <th className="py-1 text-right">Thời gian</th>
                </tr>
              </thead>
              <tbody>
                {mockRows.map((h) => (
                  <tr key={h.at} className="border-t border-slate-100">
                    <td className="py-2 pr-2 font-bold tabular-nums text-slate-600">{shortDate(h.date)}</td>
                    <td className="py-2 pr-2"><SubjectChip subject={h.subject} /></td>
                    <td className="py-2 pr-2 font-black tabular-nums text-slate-800">
                      {Math.round((h.correct / Math.max(h.total, 1)) * 100)}% <span className="text-xs font-bold text-slate-500">({h.correct}/{h.total})</span>
                    </td>
                    <td className="py-2 text-right font-bold tabular-nums text-slate-600">{formatDuration(h.durationSec)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      <Card id="p-mistakes" vi="Câu sai gần đây" en="Recent mistakes">
        {mistakes.length === 0 ? (
          <Empty text="Chưa có câu sai nào được ghi lại." />
        ) : (
          <>
            <ul className="space-y-3">
              {(showAllMistakes ? mistakes : mistakes.slice(0, MISTAKES_SHOWN)).map(({ m, q }) => (
                <li key={m.id} className="rounded-2xl bg-slate-50 p-3">
                  <div className="flex items-center justify-between gap-2">
                    <SubjectChip subject={q.subject} />
                    <span className="text-xs font-bold text-slate-400">{shortDate(m.at.slice(0, 10))}</span>
                  </div>
                  {q.subject === 'english' && q.passage_en && <p className="mt-2 rounded-xl bg-white px-3 py-2 text-sm font-semibold italic text-slate-600">{q.passage_en}</p>}
                  <p className="mt-2 whitespace-pre-line text-sm font-extrabold text-slate-800">{questionText(q)}</p>
                  <p className="mt-2 text-sm font-bold text-rose-700">
                    ✗ Bé chọn: {m.selectedIndex === null ? 'Bỏ trống' : `${LETTERS[m.selectedIndex]}. ${optionText(q, m.selectedIndex)}`}
                  </p>
                  <p className="mt-0.5 text-sm font-bold text-green-700">✓ Đáp án đúng: {LETTERS[q.correctIndex]}. {optionText(q, q.correctIndex)}</p>
                </li>
              ))}
            </ul>
            {mistakes.length > MISTAKES_SHOWN && (
              <button type="button" onClick={() => setShowAllMistakes((v) => !v)} className="mt-3 min-h-11 rounded-2xl bg-slate-100 px-4 text-sm font-extrabold text-slate-600">
                {showAllMistakes ? 'Thu gọn' : `Xem thêm (${mistakes.length - MISTAKES_SHOWN})`}
              </button>
            )}
            <div className="mt-4 flex flex-wrap gap-3">
              {retrySubjects.map((s) => {
                const qs = mistakes.filter((x) => x.q.subject === s).slice(0, TOPIC_SESSION_SIZE).map((x) => x.q)
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      playClick()
                      onRetry(qs, s)
                    }}
                    className="min-h-14 rounded-2xl bg-violet-500 px-6 text-base font-black text-white shadow-pop hover:bg-violet-600 active:translate-y-0.5"
                  >
                    Ôn lại cùng bé{retrySubjects.length > 1 ? ` · ${SUBJECTS[s].short_vi}` : ''} ({qs.length} câu)
                  </button>
                )
              })}
            </div>
          </>
        )}
      </Card>
    </div>
  )
}
