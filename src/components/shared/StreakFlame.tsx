import { motion } from 'framer-motion'

interface Props {
  streak: number
}

export default function StreakFlame({ streak }: Props) {
  return (
    <motion.div
      className="flex items-center gap-1"
      animate={streak > 0 ? { scale: [1, 1.05, 1] } : {}}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <motion.span
        className="text-xl"
        animate={streak > 0 ? { filter: ['brightness(1)', 'brightness(1.3)', 'brightness(1)'] } : {}}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        {streak > 0 ? '🔥' : '🕯️'}
      </motion.span>
      <span className="font-bold text-ink text-sm">{streak}</span>
    </motion.div>
  )
}
