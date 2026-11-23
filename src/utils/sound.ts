/** Hiệu ứng âm thanh bằng Web Audio API thuần – không cần file mp3. */

const MUTE_KEY = 'asmo-quiz-muted'

let ctx: AudioContext | null = null
let muted = false
try {
  muted = localStorage.getItem(MUTE_KEY) === '1'
} catch {
  /* ignore */
}

type AudioCtor = typeof AudioContext

function getCtx(): AudioContext | null {
  if (typeof window === 'undefined') return null
  if (!ctx) {
    const Ctor: AudioCtor | undefined =
      window.AudioContext ?? (window as unknown as { webkitAudioContext?: AudioCtor }).webkitAudioContext
    if (!Ctor) return null
    ctx = new Ctor()
  }
  if (ctx.state === 'suspended') void ctx.resume()
  return ctx
}

/** Gọi trong một thao tác chạm của người dùng để mở khóa âm thanh trên iOS. */
export function unlockAudio(): void {
  getCtx()
}

function tone(freq: number, start: number, dur: number, type: OscillatorType = 'sine', vol = 0.18): void {
  const c = getCtx()
  if (!c || muted) return
  const t0 = c.currentTime + start
  const osc = c.createOscillator()
  const gain = c.createGain()
  osc.type = type
  osc.frequency.setValueAtTime(freq, t0)
  gain.gain.setValueAtTime(0.0001, t0)
  gain.gain.exponentialRampToValueAtTime(vol, t0 + 0.02)
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur)
  osc.connect(gain).connect(c.destination)
  osc.start(t0)
  osc.stop(t0 + dur + 0.05)
}

export function playClick(): void {
  tone(660, 0, 0.07, 'triangle', 0.1)
}

export function playCorrect(): void {
  // C5 – E5 – G5 – C6
  ;[523.25, 659.25, 783.99, 1046.5].forEach((f, i) => tone(f, i * 0.09, 0.25, 'triangle', 0.2))
}

export function playWrong(): void {
  // hai nốt trầm, dịu tai
  tone(294, 0, 0.22, 'sine', 0.2)
  tone(233, 0.2, 0.35, 'sine', 0.2)
}

export function playComplete(): void {
  const notes = [523.25, 659.25, 783.99, 659.25, 783.99, 1046.5]
  notes.forEach((f, i) => tone(f, i * 0.13, 0.3, 'triangle', 0.2))
  tone(1318.5, 0.85, 0.6, 'sine', 0.15)
}

export function isMuted(): boolean {
  return muted
}

export function setMuted(m: boolean): void {
  muted = m
  try {
    localStorage.setItem(MUTE_KEY, m ? '1' : '0')
  } catch {
    /* ignore */
  }
}
