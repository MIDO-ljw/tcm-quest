import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { LeaderboardEntry } from '../types/leaderboard'
import { generateDeterministicLeaderboard } from '../data/leaderboard-seed'
import { getWeekStart, isNewWeek, getWeekNumber } from '../lib/dates'

interface LeaderboardState {
  entries: LeaderboardEntry[]
  weekStartDate: string | null

  refresh: (userId: string, userName: string, weeklyXP: number, streak: number) => void
}

export const useLeaderboardStore = create<LeaderboardState>()(
  persist(
    (set, get) => ({
      entries: [],
      weekStartDate: null,

      refresh: (userId, userName, weeklyXP, streak) => {
        const { weekStartDate } = get()
        const today = getWeekStart()
        const weekNum = getWeekNumber(today + ' (approximate)')

        if (isNewWeek(weekStartDate)) {
          const newEntries = generateDeterministicLeaderboard(userId, userName, weeklyXP, streak, weekNum)
          set({ entries: newEntries, weekStartDate: today })
        } else {
          // Update existing: replace current user entry
          const { entries } = get()
          const updated = entries.map(e =>
            e.userId === userId
              ? { ...e, weeklyXP, streak }
              : e
          )
          // If user not in list yet
          if (!updated.find(e => e.userId === userId)) {
            updated.push({
              userId,
              displayName: userName,
              avatarEmoji: '😊',
              weeklyXP,
              streak,
              isCurrentUser: true,
            })
          }
          updated.sort((a, b) => b.weeklyXP - a.weeklyXP)
          set({ entries: updated })
        }
      },
    }),
    { name: 'tcm-leaderboard' }
  )
)
