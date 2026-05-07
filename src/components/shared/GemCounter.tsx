import { motion } from 'framer-motion'

interface Props {
  gems: number
}

export default function GemCounter({ gems }: Props) {
  return (
    <motion.div
      className="flex items-center gap-1 bg-gold/15 rounded-full px-3 py-1"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 0.3 }}
      key={gems}
    >
      <span className="text-lg">💎</span>
      <span className="font-bold text-gold text-sm">{gems}</span>
    </motion.div>
  )
}
