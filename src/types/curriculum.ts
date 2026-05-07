export type QuestionType = 'multiple-choice' | 'fill-in-blank' | 'matching' | 'true-false'

export interface MatchPair {
  left: string
  right: string
}

export interface Question {
  id: string
  type: QuestionType
  prompt: string
  context?: string
  options?: string[]
  correctAnswer: string
  explanation: string
  pairs?: MatchPair[]
}

export interface Exercise {
  id: string
  question: Question
  xpReward: number
}

export interface Lesson {
  id: string
  unitId: string
  order: number
  title: string
  description: string
  icon: string
  exercises: Exercise[]
}

export interface Unit {
  id: string
  courseId: string
  order: number
  title: string
  description: string
  icon: string
  requiredUnitIds: string[]
  lessons: Lesson[]
}

export interface Course {
  id: string
  title: string
  description: string
  units: Unit[]
}
