import { Volume2 } from 'lucide-react'
import { speechSupported } from '../utils/speech'

interface Props {
  onClick: () => void
  label: string
}

export default function SpeakButton({ onClick, label }: Props) {
  if (!speechSupported) return null
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="shrink-0 grid place-items-center size-14 rounded-2xl bg-sky-500 text-white shadow-pop hover:bg-sky-600 active:translate-y-0.5 transition"
    >
      <Volume2 className="size-7" />
    </button>
  )
}
