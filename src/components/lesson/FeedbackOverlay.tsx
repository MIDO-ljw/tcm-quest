import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  feedbackState: 'none' | 'correct' | 'incorrect'
  explanation?: string
  xpReward?: number
}

export default function FeedbackOverlay({ feedbackState, explanation, xpReward }: Props) {
  return (
    <AnimatePresence>
      {feedbackState !== 'none' && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 pointer-events-none"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          <div className={`max-w-lg mx-auto rounded-2xl p-4 text-center ${
            feedbackState === 'correct'
              ? 'bg-jade/90 text-white'
              : 'bg-cinnabar/90 text-white'
          }`}>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <span className="text-2xl">
                {feedbackState === 'correct' ? '✅' : '❌'}
              </span>
              <span className="font-bold text-lg">
                {feedbackState === 'correct'
                  ? `正确！+${xpReward || 10} XP`
                  : '再想想'}
              </span>
            </div>
            {explanation && feedbackState === 'incorrect' && (
              <p className="text-sm mt-2 opacity-90">{explanation}</p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
