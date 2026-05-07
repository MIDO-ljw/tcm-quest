import { describe, it, expect } from 'vitest'
import { calculateLessonXP, calculateGemReward, calculateAccuracy } from '../../lib/scoring'

describe('scoring', () => {
  it('calculateLessonXP returns correct XP for all correct', () => {
    const xp = calculateLessonXP(6, 6)
    expect(xp).toBe(72) // 6*10 + 12 (accuracy bonus)
  })

  it('calculateLessonXP returns correct XP for mixed results', () => {
    const xp = calculateLessonXP(4, 6) // 66.7% accuracy
    expect(xp).toBe(40) // 4*10 + 0 (no bonus)
  })

  it('calculateLessonXP gives bonus for >=80%', () => {
    const xp = calculateLessonXP(5, 6) // 83.3% accuracy
    expect(xp).toBe(56) // 5*10 + 6
  })

  it('calculateGemReward gives perfect bonus', () => {
    const gems = calculateGemReward(6, 6)
    expect(gems).toBe(10) // 5 + 3 + 2
  })

  it('calculateAccuracy returns correct ratio', () => {
    expect(calculateAccuracy(3, 6)).toBe(0.5)
    expect(calculateAccuracy(6, 6)).toBe(1)
  })
})
