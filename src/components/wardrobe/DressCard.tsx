import { memo } from 'react'
import { Lock } from 'lucide-react'
import { orderOf, type DressDef } from '../../data/dresses'
import { SUBJECTS } from '../../data/topics'
import BilingualText from '../BilingualText'
import { PrincessSvg } from './DressSvg'

interface Props {
  dress: DressDef
  unlocked: boolean
  /** số câu đúng còn thiếu (chỉ hiện ở váy kế tiếp) */
  remaining?: number
  selected?: boolean
  highlight?: boolean
  /** nhận lại chính chiếc váy, để nơi gọi truyền một hàm cố định cho mọi thẻ (thẻ được ghi nhớ bằng memo) */
  onSelect?: (dress: DressDef) => void
}

const TIER_RING = ['ring-pink-200', 'ring-violet-300', 'ring-amber-300', 'ring-sky-300', 'ring-fuchsia-400'] as const

/** Một chiếc váy trên móc: đã mở thì đủ màu, chưa mở thì xám và có khóa. Ghi nhớ (memo) vì tủ có 300 thẻ. */
function DressCard({ dress, unlocked, remaining, selected = false, highlight = false, onSelect }: Props) {
  const body = (
    <>
      <span
        className="absolute left-2 top-2 rounded-full bg-white/80 px-2 py-0.5 text-xs font-black tabular-nums text-slate-500"
        title={SUBJECTS[dress.subject].short_vi}
      >
        <span aria-hidden>{SUBJECTS[dress.subject].emoji}</span> {orderOf(dress)}
      </span>
      {!unlocked && <Lock className="absolute right-2 top-2 size-5 text-slate-500" aria-label="Chưa mở khóa" />}
      <div className={`mx-auto w-3/4 ${unlocked ? '' : 'grayscale opacity-45 brightness-95'}`}>
        <PrincessSvg look={dress.look} className="h-auto w-full" still />
      </div>
      <BilingualText
        vi={unlocked ? dress.name_vi : '???'}
        en={unlocked ? dress.name_en : 'Locked'}
        className={`mt-1 block text-sm font-extrabold leading-tight ${unlocked ? 'text-slate-800' : 'text-slate-400'}`}
        subClassName="!text-[0.78em]"
      />
      {!unlocked && remaining !== undefined && remaining > 0 && (
        <span className="mt-1 block rounded-full bg-amber-100 px-2 py-0.5 text-xs font-extrabold text-amber-700">
          Đúng liên tiếp {remaining} câu nữa
        </span>
      )}
    </>
  )
  const cls = `relative block w-full rounded-3xl p-2 pt-8 text-center transition ${
    unlocked ? `bg-white shadow-soft ring-2 ${TIER_RING[dress.tier - 1]}` : 'bg-slate-100 ring-1 ring-slate-200'
  } ${selected ? '!ring-4 !ring-pink-400' : ''} ${highlight ? 'animate-bounce' : ''}`

  if (!unlocked || !onSelect) return <div className={cls}>{body}</div>
  return (
    <button type="button" onClick={() => onSelect(dress)} aria-pressed={selected} className={`${cls} hover:-translate-y-1 hover:shadow-pop`}>
      {body}
    </button>
  )
}

export default memo(DressCard)
