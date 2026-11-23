import { Clock, Eye, EyeOff, Pause, Play } from 'lucide-react'

interface Props {
  remaining: number
  visible: boolean
  paused: boolean
  onToggleVisible: () => void
  onTogglePause: () => void
}

const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`

export default function Timer({ remaining, visible, paused, onToggleVisible, onTogglePause }: Props) {
  const low = remaining <= 60
  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex min-h-12 items-center gap-2 rounded-2xl px-3 font-black shadow-soft ${low ? 'bg-amber-100 text-amber-800' : 'bg-white text-slate-700'}`}
        aria-live="off"
      >
        <Clock className="size-5" />
        <span className="tabular-nums text-lg w-14 text-center">{visible ? fmt(remaining) : '•:••'}</span>
      </div>
      <button
        type="button"
        onClick={onTogglePause}
        aria-label={paused ? 'Tiếp tục / Resume' : 'Tạm dừng / Pause'}
        className="grid size-12 place-items-center rounded-2xl bg-white shadow-soft text-slate-600"
      >
        {paused ? <Play className="size-5" /> : <Pause className="size-5" />}
      </button>
      <button
        type="button"
        onClick={onToggleVisible}
        aria-label={visible ? 'Ẩn đồng hồ / Hide timer' : 'Hiện đồng hồ / Show timer'}
        className="grid size-12 place-items-center rounded-2xl bg-white shadow-soft text-slate-600"
      >
        {visible ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
      </button>
    </div>
  )
}
