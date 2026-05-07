import { motion, AnimatePresence } from 'framer-motion'
import { MAX_HEARTS } from '../../lib/constants'

interface Props {
  hearts: number
}

export default function HeartDisplay({ hearts }: Props) {
  return (
    <div className="flex items-center gap-0.5">
      <AnimatePresence mode="popLayout">
        {Array.from({ length: MAX_HEARTS }).map((_, i) => (
          <motion.span
            key={i}
            initial={false}
            animate={{
              scale: i < hearts ? 1 : 0.6,
              opacity: i < hearts ? 1 : 0.3,
            }}
            exit={{ scale: 0, opacity: 0, rotate: -180 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            className="text-lg select-none"
          >
            {i < hearts ? '❤️' : '🖤'}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  )
}
