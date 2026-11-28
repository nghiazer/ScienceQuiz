import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, Home, Lock } from 'lucide-react'
import type { Progress } from '../../types/quiz'
import { useSubject } from '../../context/SubjectContext'
import { CORRECT_PER_DRESS, WARDROBE, WARDROBE_SIZE, dressById, nextDress, nextDressIn, unlockedIds, type DressDef, type DressTier } from '../../data/dresses'
import { ACCESSORY_SLOTS, itemById, toWorn, type AccessoryItem, type AccessorySlot } from '../../data/accessories'
import { formatClock, spendBankSeconds, useWardrobe, wearDress } from '../../utils/wardrobe'
import { coinBalance } from '../../utils/shop'
import { playClick } from '../../utils/sound'
import BilingualText from '../BilingualText'
import AccessoryShop from './AccessoryShop'
import DressCard from './DressCard'
import Princess from './Princess'

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

type Tab = 'dresses' | 'shop'

interface Props {
  progress: Progress
  /** mua phụ kiện làm đổi tiến độ (xu đã tiêu, món đã mua) */
  onProgressChange: (p: Progress) => void
  onHome: () => void
}

export default function WardrobeScreen({ progress, onProgressChange, onHome }: Props) {
  const { bankSeconds, wornId, equipped } = useWardrobe()
  const [tab, setTab] = useState<Tab>('dresses')
  // Món đang thử (chưa mua): chỉ hiện trên sân khấu, mất khi mua, chọn món khác hoặc rời tab phụ kiện.
  const [tryOn, setTryOn] = useState<AccessoryItem | null>(null)
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

  // Tủ chung của cả ba môn
  const open = useMemo(() => unlockedIds(progress), [progress])
  const unlocked = open.size
  const upcoming = nextDress(progress)
  const { subject } = useSubject()
  const remaining = nextDressIn(progress, subject)
  const wornDress = dressById(wornId)
  const lastOpen = [...WARDROBE].reverse().find((d) => open.has(d.id))
  const shown = wornDress && open.has(wornDress.id) ? wornDress : lastOpen
  const low = bankSeconds <= 60
  const groups = useMemo(() => groupByTier(WARDROBE), [])
  const coins = coinBalance(progress)

  // Chỉ đeo những món đã mua (bản lưu tủ váy có thể còn id của món chưa mua); món đang thử đè lên ô của nó.
  const wornItems = useMemo(() => {
    const owned = new Set(progress.ownedAccessories)
    const out: Partial<Record<AccessorySlot, string>> = {}
    for (const slot of ACCESSORY_SLOTS) {
      const id = equipped[slot]
      if (id && owned.has(id)) out[slot] = id
    }
    return out
  }, [equipped, progress.ownedAccessories])
  const accessories = useMemo(
    () => toWorn([...ACCESSORY_SLOTS.map((s) => itemById(wornItems[s])), tryOn ?? undefined]),
    [wornItems, tryOn],
  )

  const switchTab = (next: Tab) => {
    playClick()
    setTab(next)
    if (next !== 'shop') setTryOn(null)
  }

  // Khi mở tủ: nếu đã mở nhiều váy thì cuộn tới váy sắp mở (hoặc váy cuối cùng)
  useEffect(() => {
    if (unlocked <= 8) return
    const target = upcoming ?? WARDROBE[WARDROBE_SIZE - 1]
    document.getElementById(`dress-${target.id}`)?.scrollIntoView({ block: 'center' })
    // chỉ chạy khi mở màn hình, không chạy mỗi lần mở khóa thêm
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
        <div className="ml-auto flex items-center gap-2">
          <p className="flex min-h-12 items-center gap-1 rounded-2xl bg-amber-300 px-4 text-xl font-black tabular-nums text-amber-950 shadow-soft">
            🪙 {coins} <BilingualText vi="xu" en={coins === 1 ? 'coin' : 'coins'} compact />
          </p>
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
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
        {/* Sân khấu công chúa */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-fuchsia-200 via-pink-100 to-amber-100 p-4 shadow-soft ring-4 ring-pink-200 lg:sticky lg:top-20 lg:self-start">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-rose-400 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-rose-400 to-transparent" />
          <div className="mx-auto w-3/4 max-w-xs sm:w-2/3 lg:w-full">
            <Princess dress={shown} accessories={accessories} />
          </div>
          <div className="mt-2 text-center">
            {tryOn && (
              <p className="mb-1 inline-block rounded-full bg-sky-500 px-3 py-1 text-sm font-black text-white shadow-pop" role="status">
                <BilingualText vi="Đang thử — chưa mua" en="Trying on — not bought yet" compact />
              </p>
            )}
            {shown ? (
              <BilingualText vi={shown.name_vi} en={shown.name_en} className="block text-xl font-black text-fuchsia-700" subClassName="!text-fuchsia-500 !not-italic" />
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
        <section aria-label="Tủ quần áo" className="min-w-0 rounded-3xl bg-gradient-to-b from-amber-700 to-amber-900 p-3 shadow-soft sm:p-4">
          <div className="mb-3 grid grid-cols-2 gap-2" role="tablist" aria-label="Tủ quần áo">
            {([
              ['dresses', '👗', 'Váy', 'Dresses'],
              ['shop', '💎', 'Phụ kiện', 'Accessories'],
            ] as const).map(([id, emoji, vi, en]) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={tab === id}
                onClick={() => switchTab(id)}
                className={`min-h-12 rounded-2xl text-lg font-black transition ${
                  tab === id ? 'bg-amber-100 text-amber-900 shadow-pop' : 'bg-amber-900/40 text-amber-100 hover:bg-amber-900/60'
                }`}
              >
                <span aria-hidden>{emoji}</span> <BilingualText vi={vi} en={en} compact />
              </button>
            ))}
          </div>
          <div className="rounded-2xl bg-amber-100/95 p-3">
            {tab === 'shop' ? (
              <AccessoryShop
                progress={progress}
                onProgressChange={onProgressChange}
                equipped={wornItems}
                unlockedDresses={open}
                tryOnId={tryOn?.id ?? null}
                onTryOn={setTryOn}
              />
            ) : (
              <>
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <h2 className="text-xl font-black text-amber-900">
                    <BilingualText vi={`Tủ quần áo của công chúa · ${unlocked}/${WARDROBE_SIZE}`} en={`The princess wardrobe · ${unlocked}/${WARDROBE_SIZE}`} />
                  </h2>
                  <p className="flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-sm font-extrabold text-amber-800">
                    {remaining > 0 ? (
                      <>
                        <Lock className="size-4" />
                        <BilingualText vi={`Đúng liên tiếp ${remaining} câu nữa`} en={`${remaining} more in a row`} compact />
                      </>
                    ) : (
                      <BilingualText vi="Đã mở hết váy! 🎉" en="All dresses unlocked! 🎉" compact />
                    )}
                  </p>
                </div>
                {groups.map((g) => {
                  const openInTier = g.dresses.filter((d) => open.has(d.id)).length
                  return (
                    <div key={g.tier} className="mb-4 last:mb-0">
                      <h3 className="mb-2 flex items-center justify-between rounded-xl bg-white/70 px-3 py-1.5 text-base font-black text-amber-900">
                        <span>
                          {TIER_LABEL[g.tier].emoji} <BilingualText vi={TIER_LABEL[g.tier].vi} en={TIER_LABEL[g.tier].en} compact />
                        </span>
                        <span className="rounded-full bg-amber-200 px-2 py-0.5 text-xs tabular-nums">
                          {openInTier}/{g.dresses.length}
                        </span>
                      </h3>
                      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                        {g.dresses.map((d) => (
                          <motion.li
                            key={d.id}
                            id={`dress-${d.id}`}
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: Math.min(d.index, 12) * 0.03 }}
                            // chỉ vẽ thẻ khi cuộn tới → mượt dù có 300 váy
                            style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 280px' }}
                          >
                            <DressCard
                              dress={d}
                              unlocked={open.has(d.id)}
                              remaining={d.id === upcoming?.id ? remaining : undefined}
                              selected={shown?.id === d.id}
                              onSelect={() => {
                                playClick()
                                wearDress(d.id)
                              }}
                            />
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </>
            )}
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
