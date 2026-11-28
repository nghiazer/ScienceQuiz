import { lazy, type ComponentType } from 'react'

/*
 * Các màn hình không có trên trang chủ: mỗi màn một chunk riêng (React.lazy) để lần mở app đầu tiên
 * tải và dịch ít JS hơn; tải sẵn lúc trình duyệt rảnh (preloadScreens) nên khi bé bấm vào thường đã có sẵn.
 */

type Module<P> = { default: ComponentType<P> }

function lazyScreen<P extends object>(load: () => Promise<Module<P>>) {
  let loaded: Module<P> | undefined
  const preload = () =>
    load().then((m) => {
      loaded = m
      return m
    })
  // Chunk đã tải sẵn → đưa React.lazy một "thenable" gọi lại ngay (đồng bộ), để màn hình hiện luôn trong
  // lần vẽ đầu tiên thay vì treo Suspense rồi bị React giữ màn chờ thêm ~300 ms.
  const Screen = lazy(() => (loaded ? (syncThenable(loaded) as unknown as Promise<Module<P>>) : preload()))
  return { Screen, preload, isLoaded: () => loaded !== undefined }
}

const syncThenable = <T>(value: T) => ({ then: (resolve: (v: T) => void) => resolve(value) })

const quiz = lazyScreen(() => import('./components/QuizArena'))
const result = lazyScreen(() => import('./components/ResultScreen'))
const parent = lazyScreen(() => import('./components/parent/ParentScreen'))
const wardrobe = lazyScreen(() => import('./components/wardrobe/WardrobeScreen'))

export const QuizArena = quiz.Screen
export const ResultScreen = result.Screen
export const ParentScreen = parent.Screen
export const WardrobeScreen = wardrobe.Screen

/** Màn làm bài: App chờ chunk này cùng lúc với kho câu hỏi khi bé bấm bắt đầu rất sớm (xem withBank). */
export const quizScreen = { preload: quiz.preload, isLoaded: quiz.isLoaded }

export function preloadScreens(): void {
  for (const s of [quiz, result, parent, wardrobe]) s.preload().catch(() => {})
}
