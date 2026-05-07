export interface StreakData {
  currentStreak: number
  longestStreak: number
  lastActiveDate: string | null // "YYYY-MM-DD"
  streakFreezes: number
}

export interface User {
  id: string
  displayName: string
  avatarEmoji: string
  gems: number
  hearts: number // 0-5
  lastHeartLossTimestamp: number | null
  streak: StreakData
  totalXP: number
  joinDate: string
}
