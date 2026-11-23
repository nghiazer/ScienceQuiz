import type { ReactNode } from 'react'

interface Props {
  label: string
  viewBox?: string
  children: ReactNode
}

/** Khung chung cho mọi hình minh họa: responsive, nền nhẹ, có aria-label. */
export default function Frame({ label, viewBox = '0 0 400 240', children }: Props) {
  return (
    <svg
      role="img"
      aria-label={label}
      viewBox={viewBox}
      className="w-full h-auto max-h-64 rounded-2xl bg-white/70"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  )
}
