import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { UnlockedBadge, Badge } from '../types/achievement'
import type { User } from '../types/user'
import type { UserProgress } from '../types/progress'
import { evaluateAllBadges } from '../lib/achievement-checker'

interface AchievementState {
  unlockedBadges: UnlockedBadge[]

  checkAndUnlock: (user: User, progress: UserProgress) => Badge[]
  isUnlocked: (badgeId: string) => boolean
  getBadgeProgress: (badge: Badge, user: User, progress: UserProgress) => { current: number; threshold: number }
}

export const useAchievementStore = create<AchievementState>()(
  persist(
    (set, get) => ({
      unlockedBadges: [],

      checkAndUnlock: (user, progress) => {
        const { unlockedBadges } = get()
        const newlyUnlocked = evaluateAllBadges(user, progress, unlockedBadges)
        if (newlyUnlocked.length > 0) {
          const now = new Date().toISOString()
          const newBadges: UnlockedBadge[] = newlyUnlocked.map(b => ({
            badgeId: b.id,
            unlockedAt: now,
          }))
          set({ unlockedBadges: [...unlockedBadges, ...newBadges] })
        }
        return newlyUnlocked
      },

      isUnlocked: (badgeId) => {
        return get().unlockedBadges.some(b => b.badgeId === badgeId)
      },

      getBadgeProgress: (badge, user, progress) => {
        let current = 0
        switch (badge.requirement.type) {
          case 'streak-days':
            current = Math.max(user.streak.currentStreak, user.streak.longestStreak)
            break
          case 'total-xp':
            current = user.totalXP
            break
          case 'lessons-completed':
            current = progress.completedLessonIds.length
            break
          case 'perfect-lessons':
            current = Object.values(progress.lessonResults).filter(r => r.accuracy >= 1.0).length
            break
          case 'units-completed':
            current = progress.completedUnitIds.length
            break
          case 'gems-earned':
            // Approximate gems earned from unlocked badges + current gems
            current = user.gems + get().unlockedBadges.length * 20
            break
        }
        return { current, threshold: badge.requirement.threshold }
      },
    }),
    { name: 'tcm-achievements' }
  )
)
