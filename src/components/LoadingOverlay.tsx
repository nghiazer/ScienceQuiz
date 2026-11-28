import { motion } from 'framer-motion'
import BilingualText from './BilingualText'

interface Props {
  state: 'loading' | 'error'
  /** nút ở màn báo lỗi (thử lại / tải lại trang) */
  onRetry?: () => void
}

/**
 * Màn chờ khi phần cần dùng (kho câu hỏi của môn, màn hình tách riêng) chưa tải xong vì mạng chậm,
 * hoặc báo lỗi nếu tải không được.
 */
export default function LoadingOverlay({ state, onRetry }: Props) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900/40 p-4">
      <motion.div
        role={state === 'error' ? 'alertdialog' : 'status'}
        aria-modal={state === 'error' ? true : undefined}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-2xl"
      >
        {state === 'loading' ? (
          <>
            <motion.p
              aria-hidden
              className="text-5xl"
              animate={{ rotate: [0, -12, 12, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              📚
            </motion.p>
            <p className="mt-3 text-xl font-black text-slate-800">
              <BilingualText vi="Chờ chút nhé, đang chuẩn bị…" en="Just a moment, getting ready…" />
            </p>
          </>
        ) : (
          <>
            <p aria-hidden className="text-5xl">📡</p>
            <p className="mt-3 text-xl font-black text-slate-800">
              <BilingualText vi="Chưa tải được" en="Could not load" />
            </p>
            <p className="mt-2 font-semibold text-slate-600">
              <BilingualText vi="Con kiểm tra mạng rồi bấm thử lại nhé!" en="Check the internet and try again!" />
            </p>
            {onRetry && (
              <button type="button" onClick={onRetry} className="mt-5 min-h-14 w-full rounded-2xl bg-sky-500 text-lg font-black text-white shadow-pop">
                <BilingualText vi="Thử lại" en="Try again" subClassName="!text-white/80 !not-italic text-xs" />
              </button>
            )}
          </>
        )}
      </motion.div>
    </div>
  )
}
