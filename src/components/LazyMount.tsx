import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

/** Gắn nội dung thật khi ô còn cách khung nhìn chừng này (trên/dưới). */
const MARGIN = '800px 0px'

// Một IntersectionObserver dùng chung cho mọi ô: mỗi ô đăng ký một hàm "hiện ra" và bị bỏ theo dõi ngay khi đã hiện.
let observer: IntersectionObserver | null = null
const reveal = new Map<Element, () => void>()

function watch(el: Element, onNear: () => void): () => void {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue
        const cb = reveal.get(e.target)
        observer?.unobserve(e.target)
        reveal.delete(e.target)
        cb?.()
      }
    },
    { rootMargin: MARGIN },
  )
  reveal.set(el, onNear)
  observer.observe(el)
  return () => {
    observer?.unobserve(el)
    reveal.delete(el)
  }
}

interface Props {
  /** thẻ bao ngoài (giữ nguyên dù đang là chỗ trống hay đã có nội dung) */
  as?: 'div' | 'li'
  /** id của thẻ bao: có ngay từ đầu để `getElementById(...).scrollIntoView()` tìm được cả khi chưa gắn nội dung */
  id?: string
  /** chiều cao chỗ trống (px) trước khi gắn nội dung — nên bằng `containIntrinsicSize` của danh sách */
  placeholderHeight: number
  className?: string
  style?: CSSProperties
  children: ReactNode
}

/**
 * Chỉ gắn `children` khi thẻ tới gần khung nhìn (~800px), trước đó là một ô trống cùng cỡ để trang không bị nhảy.
 * Đã gắn rồi thì giữ luôn (cuộn ngược lại không phải vẽ lại).
 */
export default function LazyMount({ as: Tag = 'div', id, placeholderHeight, className, style, children }: Props) {
  const ref = useRef<HTMLElement | null>(null)
  // Trình duyệt quá cũ không có IntersectionObserver → gắn luôn.
  const [shown, setShown] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const el = ref.current
    if (shown || !el) return
    return watch(el, () => setShown(true))
  }, [shown])

  return (
    <Tag
      ref={(el: HTMLElement | null) => {
        ref.current = el
      }}
      id={id}
      className={className}
      style={shown ? style : { ...style, height: placeholderHeight }}
    >
      {shown ? children : null}
    </Tag>
  )
}
