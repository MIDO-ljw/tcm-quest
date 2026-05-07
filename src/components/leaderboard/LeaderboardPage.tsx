import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useUserStore } from '../../stores/useUserStore'
import { useLeaderboardStore } from '../../stores/useLeaderboardStore'
import { getLeague } from '../../lib/constants'

const leagueEmojis: Record<string, string> = {
  bronze: '🥉',
  silver: '🥈',
  gold: '🥇',
  diamond: '💎',
}

export default function LeaderboardPage() {
  const user = useUserStore(s => s.user)
  const entries = useLeaderboardStore(s => s.entries)
  const refresh = useLeaderboardStore(s => s.refresh)

  useEffect(() => {
    if (user) {
      refresh(user.id, user.displayName, user.totalXP, user.streak.currentStreak)
    }
  }, [user, refresh])

  if (!user || entries.length === 0) {
    return (
      <div className="px-4 py-8 text-center text-ink-light">
        <p>加载排行榜中...</p>
      </div>
    )
  }

  const league = getLeague(user.totalXP)
  const userRank = entries.findIndex(e => e.isCurrentUser) + 1

  return (
    <div className="px-4 pb-8">
      {/* League info */}
      <motion.div
        className="text-center mt-6 mb-6 bg-parchment-dark rounded-2xl p-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-4xl mb-2">{leagueEmojis[league]}</div>
        <h2 className="text-lg font-bold text-ink capitalize">{league} 联赛</h2>
        <p className="text-sm text-ink-light">本周排名 · 你的位置: #{userRank}</p>
      </motion.div>

      {/* Leaderboard list */}
      <div className="space-y-2">
        {entries.map((entry, index) => {
          const rank = index + 1
          const rankEmoji = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `#${rank}`

          return (
            <motion.div
              key={entry.userId}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.03 }}
              className={`flex items-center gap-3 p-3 rounded-xl ${
                entry.isCurrentUser
                  ? 'bg-jade/10 border border-jade/30'
                  : rank <= 3 ? 'bg-parchment-dark' : 'bg-white/50'
              }`}
            >
              {/* Rank */}
              <div className="w-10 text-center font-bold text-sm">
                {rankEmoji}
              </div>

              {/* Avatar + Name */}
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <span className="text-xl">{entry.avatarEmoji}</span>
                <div className="truncate">
                  <span className="font-medium text-ink text-sm">
                    {entry.displayName}
                    {entry.isCurrentUser && <span className="text-jade text-xs ml-1">(你)</span>}
                  </span>
                </div>
              </div>

              {/* Streak */}
              <div className="text-sm text-ink-light whitespace-nowrap">
                🔥 {entry.streak}
              </div>

              {/* XP */}
              <div className="font-bold text-gold text-sm text-right min-w-[60px]">
                {entry.weeklyXP} XP
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
