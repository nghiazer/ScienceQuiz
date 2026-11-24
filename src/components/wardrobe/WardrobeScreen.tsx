import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, Home, Lock } from 'lucide-react'
import type { Progress, Subject } from '../../types/quiz'
import { useSubject } from '../../context/SubjectContext'
import { SUBJECTS } from '../../data/topics'
import { CORRECT_PER_DRESS, DRESSES, DRESSES_PER_SUBJECT, dressById, nextDressIn, unlockedCount, type DressDef, type DressTier } from '../../data/dresses'
import { formatClock, spendBankSeconds, useWardrobe, wearDress } from '../../utils/wardrobe'
import { playClick } from '../../utils/sound'
import BilingualText from '../BilingualText'
import DressCard from './DressCard'
import Princess from './Princess'

const TABS: Subject[] = ['science', 'english']
/** Sau khi hết giờ chơi, tự về trang chủ sau chừng này mili giây. */
const AUTO_HOME_MS = 6000

const TIER_LABEL: Record<DressTier, { vi: string; en: string; emoji: string }> = {
  1: { vi: 'Dễ thương', en: 'Cute', emoji: '🌸' },
  2: { vi: 'Lộng lẫy', en: 'Gorgeous', emoji: '✨' },
  3: { vi: 'Dạ hội hoàng gia', en: 'Royal ball gowns', emoji: '👑' },
  4: { vi: 'Dạ hội ánh sao', en: 'Starlight gowns', emoji: '🌟' },
  5: { vi: 'Nữ hoàng', en: 'Queen gowns', emoji: '💎' },
}

/** Gom váy theo cấp (giữ nguyên thứ tự mở khóa). */
function groupByTier(list: DressDef[]): { tier: DressTier; dresses: DressDef[] }[] {
  const groups: { tier: DressTier; dresses: DressDef[] }[] = []
  for (const d of list) {
    const last = groups[groups.length - 1]
    if (last && last.tier === d.tier) last.dresses.push(d)
    else groups.push({ tier: d.tier, dresses: [d] })
  }
  return groups
}

export default function WardrobeScreen({ progress, onHome }: { progress: Progress; onHome: () => void }) {
  const { subject: currentSubject } = useSubject()
  const [tab, setTab] = useState<Subject>(currentSubject)
  const { bankSeconds, worn } = useWardrobe()
  const timeUp = bankSeconds <= 0

  // Trừ giờ chơi mỗi giây khi còn giờ.
  useEffect(() => {
    if (timeUp) return
    const id = window.setInterval(() => spendBankSeconds(1), 1000)
    return () => window.clearInterval(id)
  }, [timeUp])

  // Hết giờ → về trang chủ.
  useEffect(() => {
    if (!timeUp) return
    const id = window.setTimeout(onHome, AUTO_HOME_MS)
    return () => window.clearTimeout(id)
  }, [timeUp, onHome])

  const unlocked = unlockedCount(progress, tab)
  const list = DRESSES[tab]
  const remaining = nextDressIn(progress, tab)
  const wornDress = dressById(worn[tab])
  const shown = wornDress && wornDress.index <= unlocked ? wornDress : unlocked > 0 ? list[unlocked - 1] : undefined
  const low = bankSeconds <= 60
  const groups = groupByTier(list)

  // Khi mở tủ / đổi môn: nếu đã mở nhiều váy thì cuộn tới váy sắp mở (hoặc váy cuối cùng)
  useEffect(() => {
    if (unlocked <= 8) return
    const target = Math.min(unlocked + 1, DRESSES_PER_SUBJECT)
    document.getElementById(`dress-${tab}-${target}`)?.scrollIntoView({ block: 'center' })
    // chỉ chạy khi mở màn hình hoặc đổi tab, không chạy mỗi lần mở khóa thêm
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

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
        <div
          role="timer"
          aria-label="Thời gian còn lại"
          className={`flex min-h-12 items-center gap-2 rounded-2xl px-5 text-2xl font-black tabular-nums shadow-soft ${
            low ? 'animate-pulse bg-rose-500 text-white' : 'bg-white text-pink-600'
          }`}
        >
          <Clock className="size-6" />
          {formatClock(bankSeconds)}
        </div>
      </div>

      <div role="tablist" aria-label="Bộ váy" className="grid grid-cols-2 gap-2 rounded-3xl bg-white p-2 shadow-soft">
        {TABS.map((id) => {
          const n = unlockedCount(progress, id)
          const active = id === tab
          return (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => {
                playClick()
                setTab(id)
              }}
              className={`flex min-h-14 items-center justify-center gap-2 rounded-2xl px-2 text-base font-black transition sm:text-lg ${
                active ? 'bg-gradient-to-br from-pink-400 to-fuchsia-500 text-white shadow-pop' : 'bg-slate-50 text-slate-600 hover:bg-pink-50'
              }`}
            >
              <span aria-hidden>{SUBJECTS[id].emoji}</span>
              {SUBJECTS[id].short_vi}
              <span className={`rounded-full px-2 py-0.5 text-xs tabular-nums ${active ? 'bg-white/30' : 'bg-slate-200'}`}>
                {n}/{DRESSES_PER_SUBJECT}
              </span>
            </button>
          )
        })}
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
        {/* Sân khấu công chúa */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-fuchsia-200 via-pink-100 to-amber-100 p-4 shadow-soft ring-4 ring-pink-200 lg:sticky lg:top-20 lg:self-start">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-rose-400 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-rose-400 to-transparent" />
          <div className="mx-auto w-3/4 max-w-xs sm:w-2/3 lg:w-full">
            <Princess dress={shown} />
          </div>
          <div className="mt-2 text-center">
            {shown ? (
              <BilingualText vi={shown.name_vi} en={shown.name_en} className="text-xl font-black text-fuchsia-700" subClassName="!text-fuchsia-500 !not-italic" />
            ) : (
              <BilingualText
                vi={`Làm đúng ${CORRECT_PER_DRESS} câu để mở chiếc váy đầu tiên!`}
                en={`Answer ${CORRECT_PER_DRESS} questions correctly to unlock your first dress!`}
                className="text-base font-extrabold text-fuchsia-700"
                subClassName="!text-fuchsia-500 !not-italic"
              />
            )}
          </div>
        </section>

        {/* Tủ quần áo */}
        <section aria-label="Tủ quần áo" className="rounded-3xl bg-gradient-to-b from-amber-700 to-amber-900 p-3 shadow-soft sm:p-4">
          <div className="rounded-2xl bg-amber-100/95 p-3">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-xl font-black text-amber-900">
                <BilingualText vi="Tủ quần áo của công chúa" en="The princess wardrobe" />
              </h2>
              <p className="flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-sm font-extrabold text-amber-800">
                {remaining > 0 ? (
                  <>
                    <Lock className="size-4" />
                    <BilingualText vi={`Còn ${remaining} câu đúng nữa`} en={`${remaining} more correct`} compact />
                  </>
                ) : (
                  <BilingualText vi="Đã mở hết váy! 🎉" en="All dresses unlocked! 🎉" compact />
                )}
              </p>
            </div>
            {groups.map((g) => {
              const open = g.dresses.filter((d) => d.index <= unlocked).length
              return (
                <div key={g.tier} className="mb-4 last:mb-0">
                  <h3 className="mb-2 flex items-center justify-between rounded-xl bg-white/70 px-3 py-1.5 text-base font-black text-amber-900">
                    <span>
                      {TIER_LABEL[g.tier].emoji} <BilingualText vi={TIER_LABEL[g.tier].vi} en={TIER_LABEL[g.tier].en} compact />
                    </span>
                    <span className="rounded-full bg-amber-200 px-2 py-0.5 text-xs tabular-nums">
                      {open}/{g.dresses.length}
                    </span>
                  </h3>
                  <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                    {g.dresses.map((d) => (
                      <motion.li
                        key={d.id}
                        id={`dress-${tab}-${d.index}`}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: Math.min(d.index, 12) * 0.03 }}
                        // chỉ vẽ thẻ khi cuộn tới → mượt dù có 100 váy
                        style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 280px' }}
                      >
                        <DressCard
                          dress={d}
                          unlocked={d.index <= unlocked}
                          remaining={d.index === unlocked + 1 ? remaining : undefined}
                          selected={shown?.id === d.id}
                          onSelect={() => {
                            playClick()
                            wearDress(tab, d.id)
                          }}
                        />
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </section>
      </div>

      {timeUp && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 grid place-items-center bg-slate-900/50 p-4">
          <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-2xl">
            <p className="text-5xl">⏰👗</p>
            <h3 className="mt-2 text-2xl font-black text-slate-800">
              <BilingualText vi="Hết giờ chơi rồi!" en="Playtime is over!" />
            </h3>
            <p className="mt-2 font-semibold text-slate-600">
              <BilingualText vi="Học thêm 15 phút để được chơi thêm 5 phút nhé." en="Learn for 15 more minutes to earn 5 more minutes." />
            </p>
            <button type="button" onClick={onHome} className="mt-5 min-h-14 w-full rounded-2xl bg-pink-500 text-lg font-black text-white shadow-pop">
              <BilingualText vi="Về trang chủ" en="Back home" subClassName="!text-white/80 !not-italic text-xs" />
            </button>
          </motion.div>
        </div>
      )}
    </div>
  )
}
