import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import type { Question } from '../../../types/curriculum'

interface Props {
  question: Question
  onSubmit: (answer: string) => void
  disabled: boolean
  feedbackState: 'none' | 'correct' | 'incorrect'
}

export default function FillInBlank({ onSubmit, disabled, feedbackState }: Props) {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = () => {
    if (disabled || !value.trim()) return
    onSubmit(value.trim())
  }

  return (
    <div className="space-y-4">
      <motion.div
        className="relative"
        animate={feedbackState === 'incorrect' ? { x: [0, -8, 8, -8, 8, 0] } : {}}
        transition={{ duration: 0.4 }}
      >
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSubmit()}
          disabled={disabled}
          placeholder="输入你的答案..."
          className={`w-full px-5 py-4 rounded-xl border-2 text-lg text-center outline-none transition-colors ${
            feedbackState === 'correct' ? 'border-jade bg-jade/10' :
            feedbackState === 'incorrect' ? 'border-cinnabar bg-cinnabar/10' :
            'border-bamboo/50 bg-white focus:border-jade'
          }`}
          autoFocus
        />
      </motion.div>

      <motion.button
        onClick={handleSubmit}
        disabled={disabled || !value.trim()}
        className={`w-full py-3 rounded-xl font-bold transition-colors cursor-pointer ${
          disabled || !value.trim() ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-jade text-white hover:bg-jade-light'
        }`}
        whileHover={!disabled && value.trim() ? { scale: 1.02 } : {}}
        whileTap={!disabled && value.trim() ? { scale: 0.98 } : {}}
      >
        确认
      </motion.button>
    </div>
  )
}
