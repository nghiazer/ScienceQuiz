import { motion } from 'framer-motion'
import { PLAIN_LOOK, type DressDef } from '../../data/dresses'
import type { WornAccessories } from '../../data/accessories'
import { PrincessSvg } from './DressSvg'

interface Props {
  dress?: DressDef
  /** phụ kiện đang đeo (hoặc đang thử) */
  accessories?: WornAccessories
  className?: string
}

/** Công chúa mặc váy `dress` (hoặc váy ngủ trắng nếu chưa chọn); đổi váy thì xoay nhẹ và nảy lên. */
export default function Princess({ dress, accessories, className = '' }: Props) {
  return (
    <motion.div
      key={dress?.id ?? 'plain'}
      initial={{ scale: 0.85, rotate: -3, opacity: 0.4 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 220, damping: 14 }}
      className={className}
    >
      <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}>
        <PrincessSvg look={dress?.look ?? PLAIN_LOOK} accessories={accessories} title={dress ? dress.name_vi : 'Công chúa'} className="h-auto w-full" />
      </motion.div>
    </motion.div>
  )
}
