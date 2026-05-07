import { motion, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'

interface Props {
  value: number
  className?: string
}

export default function NumberCounter({ value, className = '' }: Props) {
  const spring = useSpring(0, { stiffness: 100, damping: 30 })
  const display = useTransform(spring, (v) => Math.round(v))

  useEffect(() => {
    spring.set(value)
  }, [value, spring])

  return <motion.span className={className}>{display}</motion.span>
}
