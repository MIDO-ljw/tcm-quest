import { motion } from 'framer-motion'
import { badges } from '../../data/achievements'
import { useUserStore } from '../../stores/useUserStore'
import { useProgressStore } from '../../stores/useProgressStore'
import { useAchievementStore } from '../../stores/useAchievementStore'

export default function AchievementsPage() {
  const user = useUserStore(s => s.user)
  const progress = useProgressStore(s => s.progress)
  const isUnlocked = useAchievementStore(s => s.isUnlocked)
  const getBadgeProgress = useAchievementStore(s => s.getBadgeProgress)

  if (!user) return null

  const categories = [
    { key: 'streak', label: '连胜', emoji: '🔥' },
    { key: 'learning', label: '学习', emoji: '📚' },
    { key: 'special', label: '特殊', emoji: '✨' },
  ]

  const unlockedCount = badges.filter(b => isUnlocked(b.id)).length

  return (
    <div className="px-4 pb-8">
      <div className="text-center mt-6 mb-6">
        <h1 className="text-2xl font-bold text-ink">成就徽章</h1>
        <p className="text-sm text-ink-light mt-1">
          已解锁 {unlockedCount}/{badges.length}
        </p>
      </div>

      {categories.map(cat => {
        const catBadges = badges.filter(b => b.category === cat.key)
        return (
          <div key={cat.key} className="mb-6">
            <h3 className="text-sm font-bold text-ink-light mb-3 flex items-center gap-2">
              <span>{cat.emoji}</span> {cat.label}
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {catBadges.map(badge => {
                const unlocked = isUnlocked(badge.id)
                const { current, threshold } = getBadgeProgress(badge, user, progress)
                const pct = Math.min(100, Math.round((current / threshold) * 100))

                return (
                  <motion.div
                    key={badge.id}
                    className={`rounded-2xl p-3 text-center border-2 ${
                      unlocked
                        ? 'bg-gold/10 border-gold/30'
                        : 'bg-parchment-dark border-gray-200'
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className={`text-3xl mb-1 ${unlocked ? '' : 'grayscale opacity-40'}`}>
                      {badge.icon}
                    </div>
                    <div className="text-xs font-bold text-ink mb-0.5 line-clamp-1">
                      {unlocked ? badge.name : '???'}
                    </div>
                    {!unlocked && (
                      <div className="w-full h-1.5 bg-gray-200 rounded-full mt-1 overflow-hidden">
                        <div
                          className="h-full bg-jade rounded-full transition-all"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    )}
                    {unlocked && (
                      <div className="text-xs text-gold mt-1">
                        +{badge.gemReward} 💎
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
