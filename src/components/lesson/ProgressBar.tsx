import { motion } from 'framer-motion'

interface Props {
  current: number
  total: number
}

export default function ProgressBar({ current, total }: Props) {
  const percent = total > 0 ? (current / total) * 100 : 0

  return (
    <div className="w-full h-2 bg-bamboo/20 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-jade rounded-full"
        animate={{ width: `${percent}%` }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      />
    </div>
  )
}
