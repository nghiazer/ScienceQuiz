import { memo, useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Lock } from 'lucide-react'
import type { Progress } from '../../types/quiz'
import { ACCESSORY_SETS, ACCESSORY_SLOTS, SET_PRICE, itemById, type AccessoryItem, type AccessorySet, type AccessorySlot } from '../../data/accessories'
import { dressById, type DressDef } from '../../data/dresses'
import { ALL_SLOTS_MASK, buyItems, coinBalance, inMask, setCost, setItemIds, slotMask } from '../../utils/shop'
import { equipItem } from '../../utils/wardrobe'
import { playClick, playCorrect, playWrong } from '../../utils/sound'
import BilingualText from '../BilingualText'
import LazyMount from '../LazyMount'
import { AccessoryIcon } from './AccessoryIcon'
import { PrincessSvg } from './DressSvg'

type Filter = 'all' | AccessorySlot

const FILTERS: { id: Filter; vi: string; en: string; emoji: string }[] = [
  { id: 'all', vi: 'Tất cả', en: 'All', emoji: '✨' },
  { id: 'head', vi: 'Đội đầu', en: 'Headwear', emoji: '👑' },
  { id: 'jewelry', vi: 'Trang sức', en: 'Jewellery', emoji: '💍' },
  { id: 'feet', vi: 'Giày & găng', en: 'Shoes & gloves', emoji: '👠' },
  { id: 'hand', vi: 'Cầm tay', en: 'Handheld', emoji: '🪄' },
]

/** Ảnh nhỏ không đổi theo trạng thái mua → ghi nhớ để mua đồ không phải vẽ lại 300 công chúa. */
const ItemIcon = memo(AccessoryIcon)
const DressThumb = memo(function DressThumb({ dress, unlocked }: { dress: DressDef; unlocked: boolean }) {
  return (
    <div className={`relative w-14 shrink-0 rounded-2xl bg-white/80 p-0.5 sm:w-16 ${unlocked ? '' : 'grayscale opacity-60'}`}>
      <PrincessSvg look={dress.look} className="h-auto w-full" still />
      {!unlocked && <Lock className="absolute right-0.5 top-0.5 size-4 text-slate-500" aria-label="Váy chưa mở" />}
    </div>
  )
})

/** Chiều cao ước lượng của một bộ chưa vẽ (px): đủ bốn món / chỉ một loại. */
const SET_HEIGHT_ALL = 330
const SET_HEIGHT_ONE = 170

/** Đeo các món theo id (mỗi món vào ô của nó). */
function equipAll(ids: string[]): void {
  for (const id of ids) {
    const it = itemById(id)
    if (it) equipItem(it.slot, it.id)
  }
}

export interface ShopProps {
  progress: Progress
  onProgressChange: (p: Progress) => void
  /** món đang đeo theo ô (chỉ những món đã mua) */
  equipped: Partial<Record<AccessorySlot, string>>
  /** id các váy đã mở (váy chưa mở hiện ảnh xám, phụ kiện vẫn mua được) */
  unlockedDresses: Set<string>
  tryOnId: string | null
  onTryOn: (item: AccessoryItem | null) => void
}

/** Cửa hàng phụ kiện trong tủ quần áo: 300 bộ theo thứ tự tủ váy, mua lẻ hoặc cả bộ, đeo/tháo, thử trước khi mua. */
export default function AccessoryShop({ progress, onProgressChange, equipped, unlockedDresses, tryOnId, onTryOn }: ShopProps) {
  const [filter, setFilter] = useState<Filter>('all')
  // Lần mua gần nhất: để hiện "-N xu" bay lên và làm nảy ô vừa mua.
  const [lastBuy, setLastBuy] = useState<{ key: number; cost: number; ids: string[] } | null>(null)
  const balance = coinBalance(progress)
  const owned = useMemo(() => new Set(progress.ownedAccessories), [progress.ownedAccessories])

  // Giá trị mới nhất cho các hàm xử lý bên dưới: hàm giữ nguyên qua các lần vẽ nên 300 thẻ bộ (memo) không phải vẽ lại.
  const latest = useRef({ progress, owned, equipped, tryOnId, onProgressChange, onTryOn })
  useLayoutEffect(() => {
    latest.current = { progress, owned, equipped, tryOnId, onProgressChange, onTryOn }
  })

  const buy = useCallback((ids: string[]) => {
    const { progress, onProgressChange, onTryOn } = latest.current
    const out = buyItems(progress, ids)
    if (out.bought.length === 0) {
      playWrong()
      return
    }
    playCorrect()
    onProgressChange(out.progress)
    // Mua xong thì đeo luôn (mua cả bộ → đeo cả bộ).
    equipAll(ids)
    onTryOn(null)
    setLastBuy((prev) => ({ key: (prev?.key ?? 0) + 1, cost: out.cost, ids: out.bought }))
  }, [])

  const wear = useCallback((item: AccessoryItem) => {
    playClick()
    equipItem(item.slot, item.id)
    latest.current.onTryOn(null)
  }, [])

  const wearSet = useCallback((ids: string[]) => {
    playClick()
    equipAll(ids)
    latest.current.onTryOn(null)
  }, [])

  const takeOff = useCallback((slot: AccessorySlot) => {
    playClick()
    equipItem(slot, null)
  }, [])

  const tapIcon = useCallback(
    (item: AccessoryItem) => {
      const { owned, equipped, tryOnId, onTryOn } = latest.current
      playClick()
      if (owned.has(item.id)) {
        if (equipped[item.slot] !== item.id) wear(item)
        return
      }
      onTryOn(tryOnId === item.id ? null : item)
    },
    [wear],
  )

  const shownSlots = useMemo(() => (filter === 'all' ? ACCESSORY_SLOTS : [filter]), [filter])
  // Bộ có món đang thử / vừa mua: chỉ thẻ của bộ đó nhận các giá trị này, thẻ khác giữ nguyên.
  const tryOnSetId = tryOnId ? itemById(tryOnId)?.setId : undefined
  const boughtSetIds = useMemo(() => new Set(lastBuy?.ids.map((id) => itemById(id)?.setId)), [lastBuy])
  const setHeight = filter === 'all' ? SET_HEIGHT_ALL : SET_HEIGHT_ONE

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="relative">
          <motion.p
            key={lastBuy?.key ?? 0}
            initial={lastBuy ? { scale: 1.25 } : false}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 320, damping: 12 }}
            className="flex min-h-11 items-center gap-1 rounded-full bg-amber-400 px-4 text-xl font-black tabular-nums text-amber-950 shadow-soft"
          >
            🪙 {balance} <BilingualText vi="xu" en={balance === 1 ? 'coin' : 'coins'} compact />
          </motion.p>
          <AnimatePresence>
            {lastBuy && (
              <motion.span
                key={lastBuy.key}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 0, y: -36 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
                className="pointer-events-none absolute right-0 top-0 rounded-full bg-white px-2 text-base font-black text-rose-600 shadow-soft"
                aria-live="polite"
              >
                -{lastBuy.cost} <BilingualText vi="xu" en="coins" compact />
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        <BilingualText
          as="p"
          vi={`Mỗi câu đúng được 1 xu · Cả bộ ${SET_PRICE} xu`}
          en={`1 coin per correct answer · Full set ${SET_PRICE} coins`}
          className="text-sm font-extrabold text-amber-900"
          subClassName="!text-amber-700 !not-italic"
        />
      </div>

      <div className="mb-3 flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Lọc phụ kiện">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={filter === f.id}
            onClick={() => {
              playClick()
              setFilter(f.id)
            }}
            className={`min-h-11 shrink-0 rounded-full px-3 text-sm font-extrabold transition ${
              filter === f.id ? 'bg-fuchsia-500 text-white shadow-pop' : 'bg-white/80 text-amber-900'
            }`}
          >
            <span aria-hidden>{f.emoji}</span> <BilingualText vi={f.vi} en={f.en} compact />
          </button>
        ))}
      </div>

      <ul className="space-y-3">
        {ACCESSORY_SETS.map((set) => (
          // chỉ gắn thẻ bộ khi cuộn tới gần, chưa tới thì là ô trống cùng cỡ
          <LazyMount
            key={set.id}
            as="li"
            placeholderHeight={setHeight}
            style={{ contentVisibility: 'auto', containIntrinsicSize: `auto ${setHeight}px` }}
          >
            <SetCard
              set={set}
              slots={shownSlots}
              showSetButton={filter === 'all'}
              ownedMask={slotMask(set, (_, id) => owned.has(id))}
              wornMask={slotMask(set, (slot, id) => equipped[slot] === id)}
              unlocked={unlockedDresses.has(set.dressId)}
              tryOnId={set.id === tryOnSetId ? tryOnId : null}
              balance={balance}
              cost={setCost(progress, set.id)}
              justBought={boughtSetIds.has(set.id) ? lastBuy?.ids : undefined}
              onTapIcon={tapIcon}
              onBuy={buy}
              onWear={wear}
              onWearSet={wearSet}
              onTakeOff={takeOff}
            />
          </LazyMount>
        ))}
      </ul>
    </div>
  )
}

interface CardProps {
  set: AccessorySet
  slots: AccessorySlot[]
  showSetButton: boolean
  /** các ô của bộ đã mua (bit theo ACCESSORY_SLOTS) */
  ownedMask: number
  /** các ô của bộ đang đeo */
  wornMask: number
  unlocked: boolean
  /** món đang thử nếu thuộc bộ này, không thì null */
  tryOnId: string | null
  balance: number
  /** giá các món chưa mua của bộ */
  cost: number
  /** id các món vừa mua (chỉ truyền cho bộ chứa chúng) */
  justBought?: string[]
  onTapIcon: (item: AccessoryItem) => void
  onBuy: (ids: string[]) => void
  onWear: (item: AccessoryItem) => void
  onWearSet: (ids: string[]) => void
  onTakeOff: (slot: AccessorySlot) => void
}

/** Một bộ phụ kiện; ghi nhớ (memo) nên chỉ vẽ lại khi giá trị của chính bộ đó (hoặc số xu) đổi. */
const SetCard = memo(function SetCard({ set, slots, showSetButton, ownedMask, wornMask, unlocked, tryOnId, balance, cost, justBought, onTapIcon, onBuy, onWear, onWearSet, onTakeOff }: CardProps) {
  const dress = dressById(set.dressId)
  const allIds = setItemIds(set.id)
  const wearingAll = wornMask === ALL_SLOTS_MASK
  return (
    <article className="rounded-3xl bg-white/90 p-3 shadow-soft ring-2 ring-amber-200">
      <header className="mb-2 flex items-center gap-3">
        {dress && <DressThumb dress={dress} unlocked={unlocked} />}
        <div className="min-w-0">
          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-black tabular-nums text-amber-800">{set.index}</span>
          <BilingualText vi={set.name_vi} en={set.name_en} as="h4" className="mt-1 text-base font-black leading-tight text-fuchsia-800" subClassName="!text-[0.8em] !text-fuchsia-500 !not-italic" />
        </div>
      </header>

      <ul className={`grid gap-2 ${slots.length > 1 ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-1'}`}>
        {slots.map((slot) => {
          const item = set.items[slot]
          const isOwned = inMask(ownedMask, slot)
          const isWorn = isOwned && inMask(wornMask, slot)
          const trying = tryOnId === item.id
          const missing = item.price - balance
          const isNew = justBought?.includes(item.id) ?? false
          const className = `flex flex-col rounded-2xl p-2 text-center ring-2 ${
            isWorn ? 'bg-pink-50 ring-pink-400' : trying ? 'bg-sky-50 ring-sky-400' : 'bg-amber-50 ring-amber-100'
          } ${slots.length === 1 ? 'sm:flex-row sm:items-center sm:gap-3 sm:text-left' : ''}`
          const content = (
            <>
              <button
                type="button"
                onClick={() => onTapIcon(item)}
                aria-pressed={isOwned ? isWorn : trying}
                aria-label={`${item.name_vi}${isOwned ? '' : ' – chạm để thử'}`}
                className="relative mx-auto flex size-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-soft"
              >
                <ItemIcon item={item} className="size-14" />
                {trying && (
                  <span className="absolute -top-2 rounded-full bg-sky-500 px-1.5 text-[0.65rem] font-black text-white">
                    <BilingualText vi="Đang thử" en="Trying" compact />
                  </span>
                )}
              </button>
              <div className="mt-1 flex min-w-0 flex-1 flex-col gap-1">
                <BilingualText vi={item.label_vi} en={item.label_en} className="text-xs font-extrabold leading-tight text-slate-700" compact />
                {isWorn ? (
                  <button type="button" onClick={() => onTakeOff(slot)} className="min-h-11 rounded-xl bg-pink-500 px-2 text-xs font-black text-white shadow-pop">
                    <BilingualText vi="Đang đeo · Tháo" en="Wearing · Take off" compact />
                  </button>
                ) : isOwned ? (
                  <button type="button" onClick={() => onWear(item)} className="min-h-11 rounded-xl bg-fuchsia-100 px-2 text-sm font-black text-fuchsia-700 ring-2 ring-fuchsia-300">
                    <BilingualText vi="Đeo" en="Wear" compact />
                  </button>
                ) : missing > 0 ? (
                  <button type="button" disabled className="min-h-11 rounded-xl bg-slate-200 px-2 text-xs font-extrabold text-slate-500">
                    <BilingualText vi={`Còn thiếu ${missing} xu`} en={`${missing} more coin${missing > 1 ? 's' : ''}`} compact />
                  </button>
                ) : (
                  <button type="button" onClick={() => onBuy([item.id])} className="min-h-11 rounded-xl bg-amber-400 px-2 text-sm font-black text-amber-950 shadow-pop hover:bg-amber-300">
                    <BilingualText vi={`Mua ${item.price} xu`} en={`Buy · ${item.price} coins`} compact />
                  </button>
                )}
              </div>
            </>
          )
          // Món vừa mua nảy lên (key đổi → gắn lại); các món khác là thẻ thường, đỡ 1200 thẻ chuyển động.
          return isNew ? (
            <motion.li
              key={`${item.id}-new`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 12 }}
              className={className}
            >
              {content}
            </motion.li>
          ) : (
            <li key={`${item.id}-`} className={className}>
              {content}
            </li>
          )
        })}
      </ul>

      {showSetButton && (
        <div className="mt-2">
          {cost > 0 ? (
            cost > balance ? (
              <button type="button" disabled className="min-h-12 w-full rounded-2xl bg-slate-200 px-3 text-sm font-extrabold text-slate-500">
                <BilingualText
                  vi={`Mua cả bộ (${cost} xu) · Còn thiếu ${cost - balance} xu`}
                  en={`Whole set (${cost} coins) · ${cost - balance} more needed`}
                  compact
                />
              </button>
            ) : (
              <button type="button" onClick={() => onBuy(allIds)} className="min-h-12 w-full rounded-2xl bg-gradient-to-r from-amber-400 to-pink-400 px-3 text-base font-black text-white shadow-pop">
                <BilingualText vi={`Mua cả bộ (${cost} xu)`} en={`Buy the whole set (${cost} coins)`} compact />
              </button>
            )
          ) : wearingAll ? (
            <p className="py-2 text-center text-sm font-extrabold text-pink-600">
              <BilingualText vi="✓ Đang đeo cả bộ" en="✓ Wearing the whole set" compact />
            </p>
          ) : (
            <button
              type="button"
              onClick={() => onWearSet(allIds)}
              className="min-h-12 w-full rounded-2xl bg-fuchsia-100 px-3 text-base font-black text-fuchsia-700 ring-2 ring-fuchsia-300"
            >
              <BilingualText vi="Đeo cả bộ" en="Wear the whole set" compact />
            </button>
          )}
        </div>
      )}
    </article>
  )
})
