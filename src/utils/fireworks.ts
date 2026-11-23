import confetti from 'canvas-confetti'

const COLORS = ['#fbbf24', '#f97316', '#ec4899', '#a855f7', '#38bdf8', '#22c55e', '#ffffff']
const DURATION_MS = 4000
const INTERVAL_MS = 220

const rand = (min: number, max: number) => Math.random() * (max - min) + min

/** Một chùm pháo nổ tại điểm (x, y), toạ độ chuẩn hoá 0–1 theo cửa sổ trình duyệt. */
function burst(x: number, y: number, particleCount: number) {
  confetti({
    particleCount,
    startVelocity: rand(25, 45),
    spread: 360,
    ticks: 70,
    gravity: 0.9,
    decay: 0.92,
    scalar: rand(0.9, 1.3),
    colors: COLORS,
    origin: { x, y },
    zIndex: 1000,
    disableForReducedMotion: true,
  })
}

/**
 * Bắn pháo hoa phủ toàn cửa sổ trình duyệt (khoảng 4 giây).
 * Trả về hàm huỷ để dừng đợt bắn đang chạy (các hạt đã bắn sẽ tự tắt dần).
 * Tự bỏ qua nếu người dùng bật "giảm chuyển động" trong hệ điều hành.
 */
export function launchFireworks(): () => void {
  const end = Date.now() + DURATION_MS

  // Loạt mở màn: 3 quả nổ cùng lúc ở trên cao.
  burst(0.2, 0.3, 80)
  burst(0.5, 0.2, 100)
  burst(0.8, 0.3, 80)

  const timer = window.setInterval(() => {
    const left = end - Date.now()
    if (left <= 0) {
      window.clearInterval(timer)
      return
    }
    const count = Math.round(40 + 40 * (left / DURATION_MS))
    // Hai quả nổ ngẫu nhiên: một bên trái, một bên phải để phủ đều màn hình.
    burst(rand(0.05, 0.45), rand(0.1, 0.55), count)
    burst(rand(0.55, 0.95), rand(0.1, 0.55), count)
  }, INTERVAL_MS)

  return () => window.clearInterval(timer)
}
