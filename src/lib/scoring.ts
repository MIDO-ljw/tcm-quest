import { XP_PER_CORRECT, BASE_GEMS_PER_LESSON, PERFECT_BONUS_GEMS } from './constants'

export function calculateLessonXP(correctCount: number, totalExercises: number): number {
  // Base XP from correct answers plus a bonus for completing the lesson
  const baseXP = correctCount * XP_PER_CORRECT
  const accuracy = correctCount / totalExercises
  const accuracyBonus = accuracy >= 1.0 ? Math.round(totalExercises * 2) : accuracy >= 0.8 ? Math.round(totalExercises) : 0
  return baseXP + accuracyBonus
}

export function calculateGemReward(correctCount: number, totalExercises: number): number {
  const accuracy = correctCount / totalExercises
  let gems = BASE_GEMS_PER_LESSON
  if (accuracy >= 1.0) gems += PERFECT_BONUS_GEMS
  if (accuracy >= 0.8) gems += 2
  return gems
}

export function calculateAccuracy(correctCount: number, totalExercises: number): number {
  return Math.round((correctCount / totalExercises) * 100) / 100
}
