import type { LeaderboardEntry } from '../types/leaderboard'

export function generateLeaderboard(currentUserId: string, currentUserName: string, currentUserXP: number, currentUserStreak: number): LeaderboardEntry[] {
  const competitors: Omit<LeaderboardEntry, 'weeklyXP'>[] = [
    { userId: 'bot-1', displayName: '玉龙真人', avatarEmoji: '🐲', streak: 45, isCurrentUser: false },
    { userId: 'bot-2', displayName: 'QiMaster2024', avatarEmoji: '⚡', streak: 32, isCurrentUser: false },
    { userId: 'bot-3', displayName: '杏林春暖', avatarEmoji: '🌸', streak: 28, isCurrentUser: false },
    { userId: 'bot-4', displayName: '本草达人', avatarEmoji: '🌿', streak: 21, isCurrentUser: false },
    { userId: 'bot-5', displayName: '银针渡穴', avatarEmoji: '📍', streak: 15, isCurrentUser: false },
    { userId: 'bot-6', displayName: '金匮学子', avatarEmoji: '📕', streak: 12, isCurrentUser: false },
    { userId: 'bot-7', displayName: '伤寒论道', avatarEmoji: '📜', streak: 9, isCurrentUser: false },
    { userId: 'bot-8', displayName: '灵枢行者', avatarEmoji: '🧘', streak: 7, isCurrentUser: false },
    { userId: 'bot-9', displayName: '药香阁主', avatarEmoji: '🏺', streak: 5, isCurrentUser: false },
    { userId: 'bot-10', displayName: '岐黄小徒', avatarEmoji: '🌱', streak: 3, isCurrentUser: false },
    { userId: 'bot-11', displayName: '白虎汤主', avatarEmoji: '🐯', streak: 18, isCurrentUser: false },
    { userId: 'bot-12', displayName: '青龙道者', avatarEmoji: '🐉', streak: 24, isCurrentUser: false },
    { userId: 'bot-13', displayName: '四诊高手', avatarEmoji: '🔍', streak: 10, isCurrentUser: false },
    { userId: 'bot-14', displayName: '经方传人', avatarEmoji: '📖', streak: 6, isCurrentUser: false },
    { userId: 'bot-15', displayName: '阴阳学者', avatarEmoji: '☯️', streak: 14, isCurrentUser: false },
    { userId: 'bot-16', displayName: '五行术士', avatarEmoji: '⭐', streak: 8, isCurrentUser: false },
    { userId: 'bot-17', displayName: '望闻问切', avatarEmoji: '👁️', streak: 4, isCurrentUser: false },
    { userId: 'bot-18', displayName: '六味学徒', avatarEmoji: '💊', streak: 2, isCurrentUser: false },
    { userId: 'bot-19', displayName: '气血行者', avatarEmoji: '💧', streak: 20, isCurrentUser: false },
    { userId: 'bot-20', displayName: '经络探秘', avatarEmoji: '🕸️', streak: 11, isCurrentUser: false },
  ]

  // Generate XP based on a base value + some randomness derived from the user's XP
  const baseXP = Math.max(currentUserXP, 50)
  const entries: LeaderboardEntry[] = competitors.map(bot => {
    // Each bot gets a "skill" factor based on their streak (range roughly 0.3 - 1.2)
    const skill = 0.3 + (Math.sin(bot.userId.charCodeAt(bot.userId.length - 1) * 7) + 1) * 0.45
    const weeklyXP = Math.round(baseXP * skill + Math.random() * 50)
    return { ...bot, weeklyXP }
  })

  // Add current user
  entries.push({
    userId: currentUserId,
    displayName: currentUserName,
    avatarEmoji: '😊',
    weeklyXP: currentUserXP,
    streak: currentUserStreak,
    isCurrentUser: true,
  })

  // Sort by weekly XP descending
  entries.sort((a, b) => b.weeklyXP - a.weeklyXP)

  return entries
}

// Deterministic version for persistence
export function generateDeterministicLeaderboard(currentUserId: string, currentUserName: string, currentUserXP: number, currentUserStreak: number, weekSeed: number): LeaderboardEntry[] {
  const competitors: Omit<LeaderboardEntry, 'weeklyXP'>[] = [
    { userId: 'bot-1', displayName: '玉龙真人', avatarEmoji: '🐲', streak: 45, isCurrentUser: false },
    { userId: 'bot-2', displayName: 'QiMaster2024', avatarEmoji: '⚡', streak: 32, isCurrentUser: false },
    { userId: 'bot-3', displayName: '杏林春暖', avatarEmoji: '🌸', streak: 28, isCurrentUser: false },
    { userId: 'bot-4', displayName: '本草达人', avatarEmoji: '🌿', streak: 21, isCurrentUser: false },
    { userId: 'bot-5', displayName: '银针渡穴', avatarEmoji: '📍', streak: 15, isCurrentUser: false },
    { userId: 'bot-6', displayName: '金匮学子', avatarEmoji: '📕', streak: 12, isCurrentUser: false },
    { userId: 'bot-7', displayName: '伤寒论道', avatarEmoji: '📜', streak: 9, isCurrentUser: false },
    { userId: 'bot-8', displayName: '灵枢行者', avatarEmoji: '🧘', streak: 7, isCurrentUser: false },
    { userId: 'bot-9', displayName: '药香阁主', avatarEmoji: '🏺', streak: 5, isCurrentUser: false },
    { userId: 'bot-10', displayName: '岐黄小徒', avatarEmoji: '🌱', streak: 3, isCurrentUser: false },
    { userId: 'bot-11', displayName: '白虎汤主', avatarEmoji: '🐯', streak: 18, isCurrentUser: false },
    { userId: 'bot-12', displayName: '青龙道者', avatarEmoji: '🐉', streak: 24, isCurrentUser: false },
    { userId: 'bot-13', displayName: '四诊高手', avatarEmoji: '🔍', streak: 10, isCurrentUser: false },
    { userId: 'bot-14', displayName: '经方传人', avatarEmoji: '📖', streak: 6, isCurrentUser: false },
    { userId: 'bot-15', displayName: '阴阳学者', avatarEmoji: '☯️', streak: 14, isCurrentUser: false },
    { userId: 'bot-16', displayName: '五行术士', avatarEmoji: '⭐', streak: 8, isCurrentUser: false },
    { userId: 'bot-17', displayName: '望闻问切', avatarEmoji: '👁️', streak: 4, isCurrentUser: false },
    { userId: 'bot-18', displayName: '六味学徒', avatarEmoji: '💊', streak: 2, isCurrentUser: false },
    { userId: 'bot-19', displayName: '气血行者', avatarEmoji: '💧', streak: 20, isCurrentUser: false },
    { userId: 'bot-20', displayName: '经络探秘', avatarEmoji: '🕸️', streak: 11, isCurrentUser: false },
  ]

  const pseudoRandom = (seed: number, id: string): number => {
    const charSum = id.split('').reduce((s, c) => s + c.charCodeAt(0), 0)
    return ((seed * 1103515245 + charSum) & 0x7fffffff) / 0x7fffffff
  }

  const baseXP = Math.max(currentUserXP, 50)
  const entries: LeaderboardEntry[] = competitors.map(bot => {
    const skill = 0.3 + pseudoRandom(weekSeed, bot.userId) * 0.9
    const weeklyXP = Math.round(baseXP * skill)
    return { ...bot, weeklyXP }
  })

  entries.push({
    userId: currentUserId,
    displayName: currentUserName,
    avatarEmoji: '😊',
    weeklyXP: currentUserXP,
    streak: currentUserStreak,
    isCurrentUser: true,
  })

  entries.sort((a, b) => b.weeklyXP - a.weeklyXP)
  return entries
}
