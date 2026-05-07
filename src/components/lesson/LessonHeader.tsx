import { motion } from 'framer-motion'
import ProgressBar from './ProgressBar'

interface Props {
  currentIndex: number
  total: number
  sessionHearts: number
  onQuit: () => void
}

export default function LessonHeader({ currentIndex, total, sessionHearts, onQuit }: Props) {
  return (
    <div className="bg-parchment/95 backdrop-blur-sm border-b border-bamboo/30">
      <div className="flex items-center gap-4 px-4 py-3">
        <motion.button
          onClick={onQuit}
          className="text-ink-light hover:text-cinnabar transition-colors cursor-pointer text-2xl leading-none"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ✕
        </motion.button>

        <div className="flex-1">
          <ProgressBar current={currentIndex} total={total} />
        </div>

        <div className="flex items-center gap-0.5">
          {Array.from({ length: sessionHearts }).map((_, i) => (
            <motion.span
              key={i}
              initial={{ scale: 1 }}
              className="text-sm"
            >
              ❤️
            </motion.span>
          ))}
          {sessionHearts === 0 && <span className="text-sm text-cinnabar font-bold">0 ❤️</span>}
        </div>
      </div>
    </div>
  )
}
