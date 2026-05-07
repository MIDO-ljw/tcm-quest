import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Question } from '../../../types/curriculum'

interface Props {
  question: Question
  onSubmit: (answer: string) => void
  disabled: boolean
  feedbackState: 'none' | 'correct' | 'incorrect'
}

export default function TrueFalse({ question, onSubmit, disabled, feedbackState }: Props) {
  const [selected, setSelected] = useState<string | null>(null)

  const handleSelect = (value: string) => {
    if (disabled || selected) return
    setSelected(value)
    setTimeout(() => onSubmit(value), 400)
  }

  const getStyle = (value: string) => {
    if (!selected) return 'bg-white border-bamboo/50 hover:border-jade'
    if (value === selected && feedbackState === 'correct') return 'bg-jade/20 border-jade'
    if (value === selected && feedbackState === 'incorrect') return 'bg-cinnabar/20 border-cinnabar'
    if (value === question.correctAnswer && feedbackState === 'incorrect') return 'bg-jade/20 border-jade'
    return 'bg-white border-bamboo/20 opacity-50'
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {['true', 'false'].map(value => (
        <motion.button
          key={value}
          onClick={() => handleSelect(value)}
          disabled={disabled}
          className={`p-6 rounded-2xl border-2 text-center cursor-pointer transition-colors ${getStyle(value)}`}
          whileHover={!disabled && !selected ? { scale: 1.05 } : {}}
          whileTap={!disabled && !selected ? { scale: 0.95 } : {}}
        >
          <div className="text-4xl mb-2">{value === 'true' ? '👍' : '👎'}</div>
          <div className="font-bold text-ink text-lg">{value === 'true' ? '正确' : '错误'}</div>
        </motion.button>
      ))}
    </div>
  )
}
