import { useCallback, useRef, useState } from 'react'

// Simple beep-based sound effects using Web Audio API — no external files needed
type SoundName = 'correct' | 'incorrect' | 'levelUp' | 'achievement'

export function useSound() {
  const ctxRef = useRef<AudioContext | null>(null)
  const [muted, setMuted] = useState(() => localStorage.getItem('tcm-muted') === 'true')

  const getCtx = useCallback(() => {
    if (!ctxRef.current) {
      ctxRef.current = new AudioContext()
    }
    return ctxRef.current
  }, [])

  const playSound = useCallback((name: SoundName) => {
    if (muted) return
    try {
      const ctx = getCtx()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.connect(gain)
      gain.connect(ctx.destination)

      gain.gain.setValueAtTime(0.15, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3)

      switch (name) {
        case 'correct':
          osc.type = 'sine'
          osc.frequency.setValueAtTime(523, ctx.currentTime) // C5
          osc.frequency.setValueAtTime(659, ctx.currentTime + 0.1) // E5
          osc.frequency.setValueAtTime(784, ctx.currentTime + 0.2) // G5
          break
        case 'incorrect':
          osc.type = 'sawtooth'
          osc.frequency.setValueAtTime(200, ctx.currentTime)
          osc.frequency.linearRampToValueAtTime(100, ctx.currentTime + 0.3)
          gain.gain.setValueAtTime(0.08, ctx.currentTime)
          break
        case 'levelUp':
          osc.type = 'sine'
          osc.frequency.setValueAtTime(440, ctx.currentTime)
          osc.frequency.setValueAtTime(554, ctx.currentTime + 0.1)
          osc.frequency.setValueAtTime(659, ctx.currentTime + 0.2)
          osc.frequency.setValueAtTime(880, ctx.currentTime + 0.3)
          gain.gain.setValueAtTime(0.12, ctx.currentTime)
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5)
          break
        case 'achievement':
          osc.type = 'triangle'
          const notes = [523, 659, 784, 1047]
          notes.forEach((freq, i) => {
            osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.12)
          })
          gain.gain.setValueAtTime(0.1, ctx.currentTime)
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6)
          break
      }

      osc.start(ctx.currentTime)
      osc.stop(ctx.currentTime + 0.8)
    } catch {
      // Audio not available — silent fail
    }
  }, [muted, getCtx])

  const toggleMute = useCallback(() => {
    setMuted(prev => {
      const next = !prev
      localStorage.setItem('tcm-muted', String(next))
      return next
    })
  }, [])

  return { playSound, muted, toggleMute }
}
