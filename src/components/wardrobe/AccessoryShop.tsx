import { memo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Lock } from 'lucide-react'
import type { Progress } from '../../types/quiz'
import { ACCESSORY_SETS, ACCESSORY_SLOTS, SET_PRICE, itemById, type AccessoryItem, type AccessorySet, type AccessorySlot } from '../../data/accessories'
import { dressById, type DressDef } from '../../data/dresses'
import { buyItems, coinBalance, setCost, setItemIds } from '../../utils/shop'
import { equipItem } from '../../utils/wardrobe'
import { playClick, playCorrect, playWrong } from '../../utils/sound'
import BilingualText from '../BilingualText'
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
  const owned = new Set(progress.ownedAccessories)

  const buy = (ids: string[]) => {
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
  }

  const wear = (item: AccessoryItem) => {
    playClick()
    equipItem(item.slot, item.id)
    onTryOn(null)
  }

  const wearSet = (ids: string[]) => {
    playClick()
    equipAll(ids)
    onTryOn(null)
  }

  const takeOff = (slot: AccessorySlot) => {
    playClick()
    equipItem(slot, null)
  }

  const tapIcon = (item: AccessoryItem) => {
    playClick()
    if (owned.has(item.id)) {
      if (equipped[item.slot] !== item.id) wear(item)
      return
    }
    onTryOn(tryOnId === item.id ? null : item)
  }

  const shownSlots = filter === 'all' ? ACCESSORY_SLOTS : [filter]

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
          <li key={set.id} style={{ contentVisibility: 'auto', containIntrinsicSize: `auto ${filter === 'all' ? 330 : 170}px` }}>
            <SetCard
              set={set}
              slots={shownSlots}
              showSetButton={filter === 'all'}
              owned={owned}
              equipped={equipped}
              unlocked={unlockedDresses.has(set.dressId)}
              tryOnId={tryOnId}
              balance={balance}
              cost={setCost(progress, set.id)}
              justBought={lastBuy?.ids}
              onTapIcon={tapIcon}
              onBuy={buy}
              onWear={wear}
              onWearSet={wearSet}
              onTakeOff={takeOff}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

interface CardProps {
  set: AccessorySet
  slots: AccessorySlot[]
  showSetButton: boolean
  owned: Set<string>
  equipped: Partial<Record<AccessorySlot, string>>
  unlocked: boolean
  tryOnId: string | null
  balance: number
  /** giá các món chưa mua của bộ */
  cost: number
  justBought?: string[]
  onTapIcon: (item: AccessoryItem) => void
  onBuy: (ids: string[]) => void
  onWear: (item: AccessoryItem) => void
  onWearSet: (ids: string[]) => void
  onTakeOff: (slot: AccessorySlot) => void
}

function SetCard({ set, slots, showSetButton, owned, equipped, unlocked, tryOnId, balance, cost, justBought, onTapIcon, onBuy, onWear, onWearSet, onTakeOff }: CardProps) {
  const dress = dressById(set.dressId)
  const allIds = setItemIds(set.id)
  const wearingAll = allIds.every((id) => Object.values(equipped).includes(id))
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
          const isOwned = owned.has(item.id)
          const isWorn = isOwned && equipped[slot] === item.id
          const trying = tryOnId === item.id
          const missing = item.price - balance
          return (
            <motion.li
              key={`${item.id}-${justBought?.includes(item.id) ? 'new' : ''}`}
              initial={justBought?.includes(item.id) ? { scale: 0.8 } : false}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 12 }}
              className={`flex flex-col rounded-2xl p-2 text-center ring-2 ${
                isWorn ? 'bg-pink-50 ring-pink-400' : trying ? 'bg-sky-50 ring-sky-400' : 'bg-amber-50 ring-amber-100'
              } ${slots.length === 1 ? 'sm:flex-row sm:items-center sm:gap-3 sm:text-left' : ''}`}
            >
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
            </motion.li>
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
}
