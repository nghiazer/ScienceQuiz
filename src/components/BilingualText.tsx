import type { ElementType } from 'react'
import { useLang } from '../context/LanguageContext'

interface Props {
  vi: string
  en: string
  as?: ElementType
  className?: string
  /** class cho dòng phụ (tiếng Anh) ở chế độ song ngữ */
  subClassName?: string
  /** chế độ song ngữ chỉ hiện tiếng Việt, dùng cho nhãn nhỏ/chip */
  compact?: boolean
}

/** Hiển thị theo chế độ ngôn ngữ: vi / en / song ngữ (Việt đậm, Anh nhỏ và nhạt hơn bên dưới). */
export default function BilingualText({ vi, en, as: Tag = 'span', className = '', subClassName = '', compact = false }: Props) {
  const { mode } = useLang()
  if (mode === 'vi' || (compact && mode === 'bi')) return <Tag className={className}>{vi}</Tag>
  if (mode === 'en') return <Tag className={className}>{en}</Tag>
  return (
    <Tag className={className}>
      <span className="block">{vi}</span>
      <span className={`block text-[0.8em] font-semibold italic text-slate-500 mt-0.5 ${subClassName}`}>{en}</span>
    </Tag>
  )
}
