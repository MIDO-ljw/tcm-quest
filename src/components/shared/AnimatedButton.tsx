import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'danger' | 'gold'
}

const variants = {
  primary: 'bg-jade hover:bg-jade-light text-white',
  secondary: 'bg-parchment-dark hover:bg-bamboo/50 text-ink',
  danger: 'bg-cinnabar hover:bg-cinnabar-light text-white',
  gold: 'bg-gold hover:bg-gold-light text-ink',
}

export default function AnimatedButton({ children, onClick, className = '', disabled = false, variant = 'primary' }: Props) {
  return (
    <motion.button
      onClick={disabled ? undefined : onClick}
      className={`rounded-xl font-bold px-6 py-3 cursor-pointer select-none ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  )
}
