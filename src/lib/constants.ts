export const MAX_HEARTS = 5
export const HEART_REGEN_INTERVAL_MS = 30 * 60 * 1000 // 30 min
export const STREAK_FREEZE_COST = 100
export const HEART_REFILL_COST = 50
export const XP_PER_CORRECT = 10
export const BASE_GEMS_PER_LESSON = 5
export const PERFECT_BONUS_GEMS = 3

export const LEAGUES = ['bronze', 'silver', 'gold', 'diamond'] as const
export type League = typeof LEAGUES[number]

export function getLeague(weeklyXP: number): League {
  if (weeklyXP >= 800) return 'diamond'
  if (weeklyXP >= 400) return 'gold'
  if (weeklyXP >= 150) return 'silver'
  return 'bronze'
}
