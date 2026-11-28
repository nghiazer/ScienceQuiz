/** Chạy `fn` khi trình duyệt rảnh (Safari chưa có requestIdleCallback → chờ một chút rồi chạy). */
export function whenIdle(fn: () => void): void {
  if (typeof window.requestIdleCallback === 'function') window.requestIdleCallback(fn, { timeout: 3000 })
  else window.setTimeout(fn, 1000)
}
