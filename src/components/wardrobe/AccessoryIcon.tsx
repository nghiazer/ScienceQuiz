import { useId } from 'react'
import type { AccessoryItem, HandKind, HeadKind, Metal } from '../../data/accessories'
import { Bracelet, Earrings, HeadPiece, HeldItem, HeldItemBack, Necklace, MetalDefs, ShoeDecor } from './AccessoryParts'

/* Ảnh nhỏ của một món phụ kiện trong cửa hàng: vẽ lại đúng các hình như khi đeo, chỉ cắt khung quanh món đó. */

const HEAD_BOX: Record<HeadKind, string> = {
  bow: '112 8 44 44',
  flower: '110 13 40 40',
  headband: '88 10 64 56',
  tiara: '94 12 52 44',
  crown: '92 -2 56 56',
}
const HAND_BOX: Record<HandKind, string> = {
  wand: '124 112 66 84',
  fan: '138 134 50 50',
  handbag: '126 150 52 54',
  bouquet: '124 140 56 62',
  parasol: '128 28 90 172',
}

/** Một chiếc găng dài (cùng nét với găng trên người công chúa). */
function Glove({ color, cuff, flip }: { color: string; cuff: string; flip?: boolean }) {
  return (
    <g transform={flip ? 'translate(176 0) scale(-1 1)' : undefined}>
      <path d="M84.5 145 Q83.5 158.5 88 172" fill="none" stroke="#94a3b8" strokeWidth="10.4" strokeLinecap="round" />
      <path d="M84.5 145 Q83.5 158.5 88 172" fill="none" stroke={color} strokeWidth="9" strokeLinecap="round" />
      <path d="M79.5 146 Q84 148 89.5 146" fill="none" stroke={cuff} strokeWidth="1.4" strokeOpacity="0.8" />
      <circle cx="88" cy="174" r="5.8" fill={color} stroke="#000" strokeOpacity="0.12" strokeWidth="0.6" />
    </g>
  )
}

export function AccessoryIcon({ item, className = '' }: { item: AccessoryItem; className?: string }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '')
  const metal = (m: Metal) => `url(#mt${uid}-${m})`
  let box = '0 0 64 64'
  let body
  switch (item.slot) {
    case 'head':
      box = HEAD_BOX[item.kind]
      body = <HeadPiece item={item} metal={metal} />
      break
    case 'jewelry':
      box = '84 66 72 66'
      body = (
        <>
          <Earrings item={item} metal={metal} />
          <Necklace item={item} metal={metal} />
          {item.bracelet && (
            <g transform="translate(56 -42)">
              <Bracelet item={item} />
            </g>
          )}
        </>
      )
      break
    case 'feet':
      body = item.gloves ? (
        <>
          <g transform="translate(-62 -140)">
            <Glove color={item.gloves} cuff={item.trim} />
          </g>
          <g transform="translate(-50 -140)">
            <Glove color={item.gloves} cuff={item.trim} flip />
          </g>
          <g transform="translate(-88 -250)">
            <Shoes item={item} />
          </g>
        </>
      ) : (
        <g transform="translate(32 34) scale(1.35) translate(-120 -304)">
          <Shoes item={item} />
        </g>
      )
      break
    case 'hand':
      box = HAND_BOX[item.kind]
      body = (
        <>
          <HeldItemBack item={item} metal={metal} />
          <HeldItem item={item} metal={metal} />
        </>
      )
      break
  }
  return (
    <svg viewBox={box} className={className} aria-hidden xmlns="http://www.w3.org/2000/svg">
      <defs>
        <MetalDefs id={`mt${uid}`} />
      </defs>
      {body}
    </svg>
  )
}

/** Đôi giày như trên người công chúa (màu `shoe` + chi tiết theo kiểu). */
function Shoes({ item }: { item: Extract<AccessoryItem, { slot: 'feet' }> }) {
  return (
    <>
      <ellipse cx="110" cy="304" rx="10" ry="5.5" fill={item.shoe} stroke="#000" strokeOpacity="0.15" strokeWidth="0.6" />
      <ellipse cx="130" cy="304" rx="10" ry="5.5" fill={item.shoe} stroke="#000" strokeOpacity="0.15" strokeWidth="0.6" />
      <ellipse cx="107" cy="302.5" rx="4" ry="1.6" fill="#fff" opacity="0.4" />
      <ellipse cx="127" cy="302.5" rx="4" ry="1.6" fill="#fff" opacity="0.4" />
      <ShoeDecor item={item} />
    </>
  )
}
