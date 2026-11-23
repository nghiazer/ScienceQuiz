import type { IllustrationId } from '../../types/quiz'
import { ILLUSTRATIONS } from './registry'

export function Illustration({ id }: { id: IllustrationId }) {
  const Cmp = ILLUSTRATIONS[id]
  return <Cmp />
}
