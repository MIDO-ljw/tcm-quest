import { create } from 'zustand'
import type { Lesson } from '../types/curriculum'
import { MAX_HEARTS } from '../lib/constants'
import { calculateLessonXP, calculateGemReward, calculateAccuracy } from '../lib/scoring'

type FeedbackState = 'none' | 'correct' | 'incorrect'

interface LessonState {
  lesson: Lesson | null
  currentExerciseIndex: number
  sessionHearts: number
  sessionXP: number
  correctCount: number
  incorrectCount: number
  isFinished: boolean
  feedbackState: FeedbackState
  lastAnswerCorrect: boolean | null
  startTime: number | null

  startLesson: (lesson: Lesson, currentHearts: number) => void
  submitAnswer: (answer: string) => { correct: boolean; explanation: string }
  nextExercise: () => void
  finishLesson: () => {
    lessonId: string
    unitId: string
    xpEarned: number
    gemsEarned: number
    accuracy: number
    heartsRemaining: number
    timeSpentSeconds: number
  }
  abandonLesson: () => void
}

export const useLessonStore = create<LessonState>()(
  (set, get) => ({
    lesson: null,
    currentExerciseIndex: 0,
    sessionHearts: MAX_HEARTS,
    sessionXP: 0,
    correctCount: 0,
    incorrectCount: 0,
    isFinished: false,
    feedbackState: 'none',
    lastAnswerCorrect: null,
    startTime: null,

    startLesson: (lesson, currentHearts) => {
      set({
        lesson,
        currentExerciseIndex: 0,
        sessionHearts: Math.min(currentHearts, MAX_HEARTS),
        sessionXP: 0,
        correctCount: 0,
        incorrectCount: 0,
        isFinished: false,
        feedbackState: 'none',
        lastAnswerCorrect: null,
        startTime: Date.now(),
      })
    },

    submitAnswer: (answer) => {
      const { lesson, currentExerciseIndex } = get()
      if (!lesson) return { correct: false, explanation: '' }

      const exercise = lesson.exercises[currentExerciseIndex]
      const question = exercise.question

      let correct = false
      if (question.type === 'matching') {
        // For matching, the answer is a JSON string of pairs; simplified comparison
        correct = answer.toLowerCase().includes(question.correctAnswer.toLowerCase()) ||
          question.correctAnswer.toLowerCase().includes(answer.toLowerCase())
      } else {
        correct = answer.trim().toLowerCase() === question.correctAnswer.trim().toLowerCase()
      }

      if (correct) {
        set(s => ({
          sessionXP: s.sessionXP + exercise.xpReward,
          correctCount: s.correctCount + 1,
          feedbackState: 'correct',
          lastAnswerCorrect: true,
        }))
      } else {
        const newHearts = Math.max(0, get().sessionHearts - 1)
        set(s => ({
          sessionHearts: newHearts,
          incorrectCount: s.incorrectCount + 1,
          feedbackState: 'incorrect',
          lastAnswerCorrect: false,
        }))
        if (newHearts === 0) {
          set({ isFinished: true })
        }
      }

      return { correct, explanation: question.explanation }
    },

    nextExercise: () => {
      const { lesson, currentExerciseIndex } = get()
      if (!lesson) return

      const nextIndex = currentExerciseIndex + 1
      if (nextIndex >= lesson.exercises.length) {
        set({ isFinished: true })
      } else {
        set({
          currentExerciseIndex: nextIndex,
          feedbackState: 'none',
          lastAnswerCorrect: null,
        })
      }
    },

    finishLesson: () => {
      const { lesson, correctCount, sessionHearts, startTime } = get()
      if (!lesson) {
        return { lessonId: '', unitId: '', xpEarned: 0, gemsEarned: 0, accuracy: 0, heartsRemaining: 0, timeSpentSeconds: 0 }
      }

      const totalExercises = lesson.exercises.length
      const xpEarned = calculateLessonXP(correctCount, totalExercises)
      const gemsEarned = calculateGemReward(correctCount, totalExercises)
      const accuracy = calculateAccuracy(correctCount, totalExercises)
      const timeSpentSeconds = startTime ? Math.round((Date.now() - startTime) / 1000) : 0

      return {
        lessonId: lesson.id,
        unitId: lesson.unitId,
        xpEarned,
        gemsEarned,
        accuracy,
        heartsRemaining: sessionHearts,
        timeSpentSeconds,
      }
    },

    abandonLesson: () => {
      set({
        lesson: null,
        currentExerciseIndex: 0,
        sessionHearts: MAX_HEARTS,
        sessionXP: 0,
        correctCount: 0,
        incorrectCount: 0,
        isFinished: false,
        feedbackState: 'none',
        lastAnswerCorrect: null,
        startTime: null,
      })
    },
  })
)
