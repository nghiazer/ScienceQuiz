/** Đọc to bằng Web Speech API (speechSynthesis). */
import type { LangMode, Question } from '../types/quiz'

export const speechSupported =
  typeof window !== 'undefined' && 'speechSynthesis' in window && typeof SpeechSynthesisUtterance !== 'undefined'

const LABELS = ['A', 'B', 'C', 'D']

function pickVoice(lang: 'vi' | 'en'): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis.getVoices()
  if (lang === 'vi') return voices.find((v) => v.lang.toLowerCase().startsWith('vi'))
  return (
    voices.find((v) => v.lang === 'en-US') ??
    voices.find((v) => v.lang.toLowerCase().startsWith('en'))
  )
}

function utter(text: string, lang: 'vi' | 'en', onEnd?: () => void): SpeechSynthesisUtterance {
  const u = new SpeechSynthesisUtterance(text)
  u.lang = lang === 'vi' ? 'vi-VN' : 'en-US'
  const v = pickVoice(lang)
  if (v) u.voice = v
  u.rate = 0.9 // chậm hơn một chút cho bé
  u.pitch = 1.05
  if (onEnd) {
    u.onend = onEnd
    u.onerror = onEnd
  }
  return u
}

export function stopSpeaking(): void {
  if (speechSupported) window.speechSynthesis.cancel()
}

export function speak(text: string, lang: 'vi' | 'en'): void {
  if (!speechSupported) return
  window.speechSynthesis.cancel()
  window.speechSynthesis.speak(utter(text, lang))
}

function questionText(q: Question, lang: 'vi' | 'en'): string {
  const opts = lang === 'vi' ? q.options_vi : q.options_en
  const q0 = lang === 'vi' ? q.question_vi : q.question_en
  return `${q0} ${opts.map((o, i) => `${LABELS[i]}. ${o}.`).join(' ')}`
}

/** Đọc câu hỏi + 4 đáp án. Chế độ song ngữ đọc tiếng Việt rồi tiếng Anh. */
export function speakQuestion(q: Question, mode: LangMode): void {
  if (!speechSupported) return
  const synth = window.speechSynthesis
  synth.cancel()
  if (mode === 'vi') synth.speak(utter(questionText(q, 'vi'), 'vi'))
  else if (mode === 'en') synth.speak(utter(questionText(q, 'en'), 'en'))
  else {
    synth.speak(utter(questionText(q, 'vi'), 'vi'))
    synth.speak(utter(questionText(q, 'en'), 'en'))
  }
}

/** Danh sách giọng được nạp bất đồng bộ trên một số trình duyệt. */
if (speechSupported) {
  window.speechSynthesis.getVoices()
  window.speechSynthesis.addEventListener?.('voiceschanged', () => {
    window.speechSynthesis.getVoices()
  })
}
