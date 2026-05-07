import { describe, it, expect, beforeEach } from 'vitest'
import { useLessonStore } from '../../stores/useLessonStore'
import type { Lesson } from '../../types/curriculum'

const mockLesson: Lesson = {
  id: 'test-lesson-1',
  unitId: 'unit-1',
  order: 1,
  title: 'Test Lesson',
  description: 'A test',
  icon: '📖',
  exercises: [
    {
      id: 'ex-1',
      xpReward: 10,
      question: {
        id: 'q-1',
        type: 'multiple-choice',
        prompt: 'What is 1+1?',
        options: ['1', '2', '3', '4'],
        correctAnswer: '2',
        explanation: '1+1=2',
      },
    },
    {
      id: 'ex-2',
      xpReward: 10,
      question: {
        id: 'q-2',
        type: 'true-false',
        prompt: 'Is fire hot?',
        correctAnswer: 'true',
        explanation: 'Fire is hot.',
      },
    },
  ],
}

describe('useLessonStore', () => {
  beforeEach(() => {
    useLessonStore.setState({
      lesson: null,
      currentExerciseIndex: 0,
      sessionHearts: 5,
      sessionXP: 0,
      correctCount: 0,
      incorrectCount: 0,
      isFinished: false,
      feedbackState: 'none',
      lastAnswerCorrect: null,
      startTime: null,
    })
  })

  it('starts a lesson correctly', () => {
    useLessonStore.getState().startLesson(mockLesson, 5)
    const state = useLessonStore.getState()
    expect(state.lesson).not.toBeNull()
    expect(state.lesson!.id).toBe('test-lesson-1')
    expect(state.currentExerciseIndex).toBe(0)
    expect(state.sessionHearts).toBe(5)
  })

  it('handles correct answer', () => {
    useLessonStore.getState().startLesson(mockLesson, 5)
    const result = useLessonStore.getState().submitAnswer('2')
    expect(result.correct).toBe(true)

    const state = useLessonStore.getState()
    expect(state.feedbackState).toBe('correct')
    expect(state.correctCount).toBe(1)
    expect(state.sessionXP).toBe(10)
  })

  it('handles incorrect answer and loses heart', () => {
    useLessonStore.getState().startLesson(mockLesson, 5)
    const result = useLessonStore.getState().submitAnswer('wrong')
    expect(result.correct).toBe(false)

    const state = useLessonStore.getState()
    expect(state.feedbackState).toBe('incorrect')
    expect(state.sessionHearts).toBe(4)
    expect(state.incorrectCount).toBe(1)
  })

  it('advances to next exercise', () => {
    useLessonStore.getState().startLesson(mockLesson, 5)
    useLessonStore.getState().submitAnswer('2')
    useLessonStore.getState().nextExercise()
    expect(useLessonStore.getState().currentExerciseIndex).toBe(1)
  })

  it('finishes lesson after last exercise', () => {
    useLessonStore.getState().startLesson(mockLesson, 5)
    // Answer first question correctly
    useLessonStore.getState().submitAnswer('2')
    useLessonStore.getState().nextExercise()
    // Answer second (last) question correctly
    useLessonStore.getState().submitAnswer('true')
    // Advance to trigger finish
    useLessonStore.getState().nextExercise()
    const state = useLessonStore.getState()
    expect(state.isFinished).toBe(true)
  })

  it('finishes lesson when hearts reach zero', () => {
    useLessonStore.getState().startLesson(mockLesson, 1)
    useLessonStore.getState().submitAnswer('wrong')
    expect(useLessonStore.getState().isFinished).toBe(true)
    expect(useLessonStore.getState().sessionHearts).toBe(0)
  })

  it('abandons lesson and resets state', () => {
    useLessonStore.getState().startLesson(mockLesson, 5)
    useLessonStore.getState().abandonLesson()
    expect(useLessonStore.getState().lesson).toBeNull()
  })
})
