import { useEffect, useRef } from 'react'
import { addStudySeconds } from './wardrobe'

const FLUSH_EVERY = 5
/** Không có thao tác nào trong 3 phút thì coi như bé đã rời máy: ngừng tính giờ học. */
const IDLE_LIMIT_MS = 3 * 60 * 1000

/**
 * Tính giờ làm bài (để đổi thành giờ chơi tủ quần áo). Chỉ đếm khi `active`, tab đang hiển thị
 * và bé còn thao tác. Giờ được ghi dần mỗi 5 giây và khi rời màn hình nên thoát giữa chừng vẫn được tính.
 * `onReward` được gọi mỗi khi hoàn thành một khối 15 phút.
 */
export function useStudyTimer(active: boolean, onReward: () => void): void {
  const rewardRef = useRef(onReward)
  useEffect(() => {
    rewardRef.current = onReward
  })

  useEffect(() => {
    if (!active) return
    let pending = 0
    let lastActivity = Date.now()
    const touch = () => {
      lastActivity = Date.now()
    }
    const flush = () => {
      if (pending <= 0) return
      const n = pending
      pending = 0
      if (addStudySeconds(n) > 0) rewardRef.current()
    }
    const id = window.setInterval(() => {
      if (document.visibilityState !== 'visible') return
      if (Date.now() - lastActivity > IDLE_LIMIT_MS) return
      pending += 1
      if (pending >= FLUSH_EVERY) flush()
    }, 1000)
    const events = ['pointerdown', 'keydown', 'touchstart', 'scroll'] as const
    events.forEach((e) => window.addEventListener(e, touch, { passive: true }))
    return () => {
      window.clearInterval(id)
      events.forEach((e) => window.removeEventListener(e, touch))
      flush()
    }
  }, [active])
}
