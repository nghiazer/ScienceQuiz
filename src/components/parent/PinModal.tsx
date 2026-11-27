import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Delete, X } from 'lucide-react'
import { PARENT_PIN, PIN_LENGTH } from '../../utils/parent'
import { playClick } from '../../utils/sound'
import BilingualText from '../BilingualText'

interface Props {
  onClose: () => void
  onSuccess: () => void
}

/** Sau khi nhập sai, giữ các chấm đầy chừng này mili giây (cho kịp thấy hiệu ứng rung) rồi xóa. */
const CLEAR_DELAY_MS = 500

const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

export default function PinModal({ onClose, onSuccess }: Props) {
  const [digits, setDigits] = useState('')
  const [wrong, setWrong] = useState(0)
  const [locked, setLocked] = useState(false)
  const [error, setError] = useState(false)
  const timer = useRef<number | undefined>(undefined)
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    dialogRef.current?.focus()
    return () => window.clearTimeout(timer.current)
  }, [])

  // Giữ mã đang nhập trong ref để gõ nhanh (hoặc bàn phím máy tính) không bị đọc giá trị cũ.
  const digitsRef = useRef('')
  const lockedRef = useRef(false)

  const press = useCallback(
    (d: string) => {
      if (lockedRef.current || digitsRef.current.length >= PIN_LENGTH) return
      playClick()
      setError(false)
      const next = digitsRef.current + d
      digitsRef.current = next
      setDigits(next)
      if (next.length < PIN_LENGTH) return
      if (next === PARENT_PIN) {
        onSuccess()
        return
      }
      // Sai mã: rung, báo lỗi, rồi xóa để nhập lại (không khóa lâu).
      setWrong((n) => n + 1)
      setError(true)
      lockedRef.current = true
      setLocked(true)
      timer.current = window.setTimeout(() => {
        digitsRef.current = ''
        lockedRef.current = false
        setDigits('')
        setLocked(false)
      }, CLEAR_DELAY_MS)
    },
    [onSuccess],
  )

  const erase = useCallback(() => {
    if (lockedRef.current) return
    digitsRef.current = digitsRef.current.slice(0, -1)
    setDigits(digitsRef.current)
  }, [])

  // Bàn phím máy tính: gõ số, Backspace để xóa, Esc để đóng.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (/^[0-9]$/.test(e.key)) press(e.key)
      else if (e.key === 'Backspace') erase()
      else if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [press, erase, onClose])

  const keyClass =
    'grid min-h-16 place-items-center rounded-2xl bg-slate-100 text-3xl font-black text-slate-800 shadow-soft active:translate-y-0.5 active:bg-slate-200 disabled:opacity-50'

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-slate-900/60 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="pin-title"
        tabIndex={-1}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative w-full max-w-sm rounded-3xl bg-white p-5 shadow-2xl outline-none"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Đóng"
          className="absolute right-3 top-3 grid size-12 place-items-center rounded-full bg-slate-100 text-slate-600 active:bg-slate-200"
        >
          <X className="size-6" />
        </button>
        <div className="pr-12 text-left">
          <h2 id="pin-title" className="text-xl font-black text-slate-800">
            <BilingualText vi="👨‍👩‍👧 Dành cho bố mẹ" en="👨‍👩‍👧 For parents" />
          </h2>
          <p className="mt-1 text-sm font-semibold text-slate-500">
            <BilingualText vi="Nhập mã 8 số để xem" en="Enter the 8-digit code" />
          </p>
        </div>

        <motion.div key={wrong} animate={{ x: wrong ? [0, -12, 12, -9, 9, -4, 0] : 0 }} transition={{ duration: 0.4 }} className="mt-4">
          <div className="flex justify-center gap-2" role="img" aria-label={`Đã nhập ${digits.length} trên ${PIN_LENGTH} số`}>
            {Array.from({ length: PIN_LENGTH }, (_, i) => (
              <span
                key={i}
                className={`size-4 rounded-full border-2 transition-colors ${
                  i < digits.length ? (locked ? 'border-rose-500 bg-rose-500' : 'border-violet-500 bg-violet-500') : 'border-slate-300 bg-white'
                }`}
              />
            ))}
          </div>
        </motion.div>
        <p role="alert" className="mt-2 min-h-6 text-center text-sm font-black text-rose-600">
          {error ? 'Mã chưa đúng' : ''}
        </p>

        <div className="mx-auto mt-2 grid max-w-xs grid-cols-3 gap-3">
          {KEYS.map((k) => (
            <button key={k} type="button" disabled={locked} onClick={() => press(k)} className={keyClass}>
              {k}
            </button>
          ))}
          <button type="button" disabled={locked} onClick={erase} aria-label="Xóa số cuối" className={`${keyClass} text-slate-600`}>
            <Delete className="size-8" />
          </button>
          <button type="button" disabled={locked} onClick={() => press('0')} className={keyClass}>
            0
          </button>
          <span aria-hidden />
        </div>
      </motion.div>
    </div>
  )
}
