import type { Exercise } from '../../types/curriculum'
import MultipleChoice from './exercises/MultipleChoice'
import TrueFalse from './exercises/TrueFalse'
import FillInBlank from './exercises/FillInBlank'
import MatchingPairs from './exercises/MatchingPairs'

interface Props {
  exercise: Exercise
  onSubmit: (answer: string) => void
  disabled: boolean
  feedbackState: 'none' | 'correct' | 'incorrect'
}

export default function ExerciseRenderer({ exercise, onSubmit, disabled, feedbackState }: Props) {
  const { question } = exercise

  const props = { question, onSubmit, disabled, feedbackState }

  switch (question.type) {
    case 'multiple-choice':
      return <MultipleChoice {...props} />
    case 'true-false':
      return <TrueFalse {...props} />
    case 'fill-in-blank':
      return <FillInBlank {...props} />
    case 'matching':
      return <MatchingPairs {...props} />
    default:
      return <div className="text-center text-ink-light">未知题型</div>
  }
}
