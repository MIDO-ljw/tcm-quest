import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import AnimatedButton from '../shared/AnimatedButton'
import NumberCounter from '../shared/NumberCounter'

interface Props {
  xpEarned: number
  gemsEarned: number
  accuracy: number
  heartsRemaining: number
}

export default function LessonComplete({ xpEarned, gemsEarned, accuracy, heartsRemaining }: Props) {
  const navigate = useNavigate()

  useEffect(() => {
    // Fire confetti
    const duration = 2000
    const end = Date.now() + duration
    const colors = ['#2D8B5E', '#D4A843', '#E34234', '#8FBC8F']

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors,
      })
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors,
      })
      if (Date.now() < end) requestAnimationFrame(frame)
    }
    frame()
  }, [])

  const getMessage = () => {
    if (heartsRemaining === 0) return { emoji: '😢', text: '红心用完了！下次加油哦' }
    if (accuracy >= 1.0) return { emoji: '🌟', text: '完美通关！你是天才！' }
    if (accuracy >= 0.8) return { emoji: '👏', text: '非常棒！继续保持！' }
    if (accuracy >= 0.6) return { emoji: '💪', text: '做得不错，继续进步！' }
    return { emoji: '📚', text: '继续努力，熟能生巧！' }
  }

  const msg = getMessage()

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-parchment">
      <motion.div
        className="text-center px-6 max-w-sm w-full"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        {/* Header */}
        <motion.div
          className="text-6xl mb-4"
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {msg.emoji}
        </motion.div>

        <h2 className="text-2xl font-bold text-ink mb-1">课程完成！</h2>
        <p className="text-ink-light text-sm mb-6">{msg.text}</p>

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <motion.div
            className="bg-parchment-dark rounded-2xl p-3"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-2xl mb-1">⚡</div>
            <div className="font-bold text-ink">
              <NumberCounter value={xpEarned} />
            </div>
            <div className="text-xs text-ink-light">XP</div>
          </motion.div>

          <motion.div
            className="bg-parchment-dark rounded-2xl p-3"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-2xl mb-1">💎</div>
            <div className="font-bold text-ink">
              <NumberCounter value={gemsEarned} />
            </div>
            <div className="text-xs text-ink-light">宝石</div>
          </motion.div>

          <motion.div
            className="bg-parchment-dark rounded-2xl p-3"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-2xl mb-1">🎯</div>
            <div className="font-bold text-ink">{Math.round(accuracy * 100)}%</div>
            <div className="text-xs text-ink-light">正确率</div>
          </motion.div>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <AnimatedButton
            variant="primary"
            onClick={() => navigate('/')}
            className="w-full"
          >
            返回地图
          </AnimatedButton>
        </div>
      </motion.div>
    </div>
  )
}
