import type { Badge, UnlockedBadge } from '../types/achievement'
import type { User } from '../types/user'
import type { UserProgress } from '../types/progress'
import { badges } from '../data/achievements'

export function evaluateAllBadges(
  user: User,
  progress: UserProgress,
  unlockedBadges: UnlockedBadge[],
  badgeDefs: Badge[] = badges
): Badge[] {
  const unlockedIds = new Set(unlockedBadges.map(b => b.badgeId))
  const newlyUnlocked: Badge[] = []

  // Accumulate total gems earned by summing gem rewards from already-unlocked badges
  const totalGemsEarned = unlockedBadges.reduce((sum, ub) => {
    const badge = badgeDefs.find(b => b.id === ub.badgeId)
    return sum + (badge?.gemReward ?? 0)
  }, 0) + user.gems // current gems + already spent = roughly total earned

  // Count perfect lessons
  const perfectLessons = Object.values(progress.lessonResults).filter(r => r.accuracy >= 1.0).length

  for (const badge of badgeDefs) {
    if (unlockedIds.has(badge.id)) continue

    let met = false
    switch (badge.requirement.type) {
      case 'streak-days':
        met = user.streak.currentStreak >= badge.requirement.threshold || user.streak.longestStreak >= badge.requirement.threshold
        break
      case 'total-xp':
        met = user.totalXP >= badge.requirement.threshold
        break
      case 'lessons-completed':
        met = progress.completedLessonIds.length >= badge.requirement.threshold
        break
      case 'perfect-lessons':
        met = perfectLessons >= badge.requirement.threshold
        break
      case 'units-completed':
        met = progress.completedUnitIds.length >= badge.requirement.threshold
        break
      case 'gems-earned':
        met = totalGemsEarned >= badge.requirement.threshold
        break
    }

    if (met) {
      newlyUnlocked.push(badge)
    }
  }

  return newlyUnlocked
}
