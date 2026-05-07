import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Question } from '../../../types/curriculum'

interface Props {
  question: Question
  onSubmit: (answer: string) => void
  disabled: boolean
  feedbackState: 'none' | 'correct' | 'incorrect'
}

export default function MatchingPairs({ question, onSubmit, disabled }: Props) {
  const pairs = question.pairs || []
  const leftItems = pairs.map(p => p.left)
  const rightItems = pairs.map(p => p.right)

  const [selectedLeft, setSelectedLeft] = useState<string | null>(null)
  const [selectedRight, setSelectedRight] = useState<string | null>(null)
  const [matchedLefts, setMatchedLefts] = useState<Set<string>>(new Set())

  const handleLeftClick = (item: string) => {
    if (disabled || matchedLefts.has(item)) return
    setSelectedLeft(item)
    setSelectedRight(null)
  }

  const handleRightClick = (item: string) => {
    if (disabled || !selectedLeft) return
    setSelectedRight(item)

    const pair = pairs.find(p => p.left === selectedLeft)
    if (pair && pair.right === item) {
      // Correct match
      setMatchedLefts(prev => new Set(prev).add(selectedLeft))
      setSelectedLeft(null)
      setSelectedRight(null)

      const newMatched = new Set([...matchedLefts, selectedLeft])
      if (newMatched.size === leftItems.length) {
        setTimeout(() => onSubmit(pairs.map(p => `${p.left}=${p.right}`).join(',')), 500)
      }
    } else {
      // Wrong — doesn't count as wrong answer in matching, just reset
      setTimeout(() => {
        setSelectedLeft(null)
        setSelectedRight(null)
      }, 600)
    }
  }

  const getLeftStyle = (item: string) => {
    if (matchedLefts.has(item)) return 'bg-jade/20 border-jade opacity-60'
    if (item === selectedLeft) return 'bg-jade/10 border-jade'
    return 'bg-white border-bamboo/50 hover:border-jade'
  }

  const getRightStyle = (item: string) => {
    const pair = pairs.find(p => p.right === item)
    if (pair && matchedLefts.has(pair.left)) return 'bg-jade/20 border-jade opacity-60'
    if (item === selectedRight) return 'bg-jade/10 border-jade'
    if (selectedLeft) return 'bg-white border-bamboo/50 hover:border-jade'
    return 'bg-white border-bamboo/30'
  }

  return (
    <div className="flex gap-4">
      {/* Left column */}
      <div className="flex-1 space-y-2">
        {leftItems.map((item, i) => (
          <motion.button
            key={i}
            onClick={() => handleLeftClick(item)}
            disabled={disabled || matchedLefts.has(item)}
            className={`w-full p-3 rounded-xl border-2 text-center text-sm font-medium cursor-pointer transition-colors ${getLeftStyle(item)}`}
            whileHover={!disabled && !matchedLefts.has(item) ? { scale: 1.02 } : {}}
            whileTap={!disabled && !matchedLefts.has(item) ? { scale: 0.98 } : {}}
          >
            {item}
          </motion.button>
        ))}
      </div>

      {/* Right column */}
      <div className="flex-1 space-y-2">
        {rightItems.map((item, i) => (
          <motion.button
            key={i}
            onClick={() => handleRightClick(item)}
            disabled={disabled || !selectedLeft}
            className={`w-full p-3 rounded-xl border-2 text-center text-sm font-medium cursor-pointer transition-colors ${getRightStyle(item)}`}
            whileHover={!disabled && selectedLeft ? { scale: 1.02 } : {}}
            whileTap={!disabled && selectedLeft ? { scale: 0.98 } : {}}
          >
            {item}
          </motion.button>
        ))}
      </div>
    </div>
  )
}
