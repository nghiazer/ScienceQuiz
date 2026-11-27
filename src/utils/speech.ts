/** Đọc to bằng Web Speech API (speechSynthesis). */
import type { BilingualQuestion, EnglishQuestion, LangMode, Question } from '../types/quiz'

export const speechSupported =
  typeof window !== 'undefined' && 'speechSynthesis' in window && typeof SpeechSynthesisUtterance !== 'undefined'

const LABELS = ['A', 'B', 'C', 'D']

function pickVoice(lang: 'vi' | 'en', preferGB = false): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis.getVoices()
  if (lang === 'vi') return voices.find((v) => v.lang.toLowerCase().startsWith('vi'))
  const gb = voices.find((v) => v.lang.replace('_', '-') === 'en-GB')
  const us = voices.find((v) => v.lang.replace('_', '-') === 'en-US')
  return (
    (preferGB ? (gb ?? us) : (us ?? gb)) ??
    voices.find((v) => v.lang.toLowerCase().startsWith('en'))
  )
}

/**
 * Chuẩn bị câu Tiếng Anh để máy đọc: chỗ trống (___ hoặc ......) thành khoảng ngắt nhịp (dấu phẩy)
 * thay vì đọc "underscore", xuống dòng thành ngắt câu, bỏ nhãn người nói "A:" / "B:".
 */
export function prepareEnglishForSpeech(text: string): string {
  return text
    .replace(/^\s*[AB]\s*:\s*/gm, '')
    .replace(/_{2,}|\.{3,}|…/g, ' , , ')
    .replace(/\s*\n+\s*/g, '. ')
    .replace(/["“”]/g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s+([,.?!])/g, '$1')
    .trim()
}

function utter(text: string, lang: 'vi' | 'en', onEnd?: () => void, preferGB = false): SpeechSynthesisUtterance {
  const u = new SpeechSynthesisUtterance(text)
  u.lang = lang === 'vi' ? 'vi-VN' : preferGB ? 'en-GB' : 'en-US'
  const v = pickVoice(lang, preferGB)
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

function questionText(q: BilingualQuestion, lang: 'vi' | 'en'): string {
  const opts = lang === 'vi' ? q.options_vi : q.options_en
  const q0 = lang === 'vi' ? q.question_vi : q.question_en
  return `${q0} ${opts.map((o, i) => `${LABELS[i]}. ${o}.`).join(' ')}`
}

function englishQuestionText(q: EnglishQuestion): string {
  const head = [q.passage_en, q.question_en].filter(Boolean).map((t) => prepareEnglishForSpeech(t!)).join(' ')
  const opts = q.options_en.map((o, i) => `${LABELS[i]}. ${prepareEnglishForSpeech(o)}.`).join(' ')
  return `${head} ${opts}`
}

/** Đọc câu hỏi + 4 đáp án. Môn Tiếng Anh luôn đọc bằng tiếng Anh; Khoa học và Toán song ngữ đọc Việt rồi Anh. */
export function speakQuestion(q: Question, mode: LangMode): void {
  if (!speechSupported) return
  const synth = window.speechSynthesis
  synth.cancel()
  if (q.subject === 'english') {
    synth.speak(utter(englishQuestionText(q), 'en', undefined, true))
    return
  }
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
