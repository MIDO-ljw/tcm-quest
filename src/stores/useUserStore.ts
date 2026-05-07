import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User } from '../types/user'
import { MAX_HEARTS, HEART_REGEN_INTERVAL_MS } from '../lib/constants'
import { getTodayDateString, isYesterday, daysBetween } from '../lib/dates'

interface UserState {
  user: User | null

  initializeUser: (name: string, emoji: string) => void
  loseHeart: () => void
  regenerateHearts: () => void
  addGems: (amount: number) => void
  spendGems: (amount: number) => boolean
  addXP: (amount: number) => void
  updateStreak: () => void
  useStreakFreeze: () => boolean
  refillHearts: () => boolean
}

const defaultUser: User = {
  id: 'user-1',
  displayName: '中医学徒',
  avatarEmoji: '😊',
  gems: 100,
  hearts: MAX_HEARTS,
  lastHeartLossTimestamp: null,
  streak: {
    currentStreak: 0,
    longestStreak: 0,
    lastActiveDate: null,
    streakFreezes: 2,
  },
  totalXP: 0,
  joinDate: getTodayDateString(),
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      user: null,

      initializeUser: (name, emoji) => {
        set({
          user: {
            ...defaultUser,
            displayName: name,
            avatarEmoji: emoji,
            id: `user-${Date.now()}`,
            joinDate: getTodayDateString(),
          },
        })
      },

      loseHeart: () => {
        const { user } = get()
        if (!user) return
        if (user.hearts <= 0) return
        const newHearts = user.hearts - 1
        set({
          user: {
            ...user,
            hearts: newHearts,
            lastHeartLossTimestamp: newHearts < MAX_HEARTS ? Date.now() : null,
          },
        })
      },

      regenerateHearts: () => {
        const { user } = get()
        if (!user) return
        if (user.hearts >= MAX_HEARTS) return
        if (!user.lastHeartLossTimestamp) return

        const elapsed = Date.now() - user.lastHeartLossTimestamp
        const regenCount = Math.floor(elapsed / HEART_REGEN_INTERVAL_MS)

        if (regenCount > 0) {
          const newHearts = Math.min(MAX_HEARTS, user.hearts + regenCount)
          const newTimestamp = newHearts < MAX_HEARTS ? user.lastHeartLossTimestamp + regenCount * HEART_REGEN_INTERVAL_MS : null
          set({
            user: {
              ...user,
              hearts: newHearts,
              lastHeartLossTimestamp: newTimestamp,
            },
          })
        }
      },

      addGems: (amount) => {
        const { user } = get()
        if (!user) return
        set({ user: { ...user, gems: user.gems + amount } })
      },

      spendGems: (amount) => {
        const { user } = get()
        if (!user) return false
        if (user.gems < amount) return false
        set({ user: { ...user, gems: user.gems - amount } })
        return true
      },

      addXP: (amount) => {
        const { user } = get()
        if (!user) return
        set({ user: { ...user, totalXP: user.totalXP + amount } })
      },

      updateStreak: () => {
        const { user } = get()
        if (!user) return
        const today = getTodayDateString()
        const lastDate = user.streak.lastActiveDate

        if (lastDate === today) return // Already active today

        let newStreak = user.streak.currentStreak
        let newFreezes = user.streak.streakFreezes

        if (!lastDate) {
          newStreak = 1
        } else if (isYesterday(lastDate)) {
          newStreak += 1
        } else {
          const days = daysBetween(lastDate, today)
          if (days === 2 && newFreezes > 0) {
            // Missed one day, use freeze
            newFreezes -= 1
            newStreak += 1
          } else {
            // Streak broken
            newStreak = 1
          }
        }

        const longestStreak = Math.max(user.streak.longestStreak, newStreak)

        set({
          user: {
            ...user,
            streak: {
              ...user.streak,
              currentStreak: newStreak,
              longestStreak,
              lastActiveDate: today,
              streakFreezes: newFreezes,
            },
          },
        })
      },

      useStreakFreeze: () => {
        const { user } = get()
        if (!user) return false
        if (user.streak.streakFreezes <= 0) return false
        set({
          user: {
            ...user,
            streak: {
              ...user.streak,
              streakFreezes: user.streak.streakFreezes - 1,
            },
          },
        })
        return true
      },

      refillHearts: () => {
        const { user } = get()
        if (!user) return false
        if (user.gems < 50) return false
        set({
          user: {
            ...user,
            hearts: MAX_HEARTS,
            lastHeartLossTimestamp: null,
            gems: user.gems - 50,
          },
        })
        return true
      },
    }),
    { name: 'tcm-user' }
  )
)
