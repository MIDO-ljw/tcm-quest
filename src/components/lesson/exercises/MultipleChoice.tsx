import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Question } from '../../../types/curriculum'

interface Props {
  question: Question
  onSubmit: (answer: string) => void
  disabled: boolean
  feedbackState: 'none' | 'correct' | 'incorrect'
}

export default function MultipleChoice({ question, onSubmit, disabled, feedbackState }: Props) {
  const [selected, setSelected] = useState<string | null>(null)

  const handleSelect = (option: string) => {
    if (disabled || selected) return
    setSelected(option)
    setTimeout(() => onSubmit(option), 400)
  }

  const getOptionStyle = (opt: string) => {
    if (!selected) return 'bg-white border-bamboo/50 hover:border-jade hover:bg-jade/5'
    if (opt === selected && feedbackState === 'correct') return 'bg-jade/20 border-jade'
    if (opt === selected && feedbackState === 'incorrect') return 'bg-cinnabar/20 border-cinnabar'
    if (opt === question.correctAnswer && feedbackState === 'incorrect') return 'bg-jade/20 border-jade'
    return 'bg-white border-bamboo/20 opacity-50'
  }

  const getAnimProps = (opt: string) => {
    if (opt === selected && feedbackState === 'incorrect') {
      return { animate: { x: [0, -10, 10, -10, 10, 0] }, transition: { duration: 0.5 } }
    }
    return {}
  }

  return (
    <div className="grid grid-cols-1 gap-3">
      {(question.options || []).map((option, i) => (
        <motion.button
          key={i}
          onClick={() => handleSelect(option)}
          disabled={disabled}
          className={`w-full text-left p-4 rounded-xl border-2 transition-colors cursor-pointer ${getOptionStyle(option)}`}
          whileHover={!disabled && !selected ? { scale: 1.02 } : {}}
          whileTap={!disabled && !selected ? { scale: 0.98 } : {}}
          {...getAnimProps(option)}
        >
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-bamboo/20 flex items-center justify-center text-sm font-bold text-ink-light">
              {String.fromCharCode(65 + i)}
            </span>
            <span className="font-medium text-ink text-sm">{option}</span>
          </div>
        </motion.button>
      ))}
    </div>
  )
}
