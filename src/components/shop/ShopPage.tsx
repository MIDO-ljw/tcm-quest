import { motion } from 'framer-motion'
import { useUserStore } from '../../stores/useUserStore'
import { STREAK_FREEZE_COST, HEART_REFILL_COST } from '../../lib/constants'
import AnimatedButton from '../shared/AnimatedButton'

export default function ShopPage() {
  const user = useUserStore(s => s.user)
  const spendGems = useUserStore(s => s.spendGems)
  const refillHearts = useUserStore(s => s.refillHearts)

  if (!user) return null

  const items = [
    {
      id: 'heart-refill',
      name: '红心补满',
      description: '立即将红心恢复至5颗',
      icon: '❤️',
      cost: HEART_REFILL_COST,
      onBuy: () => refillHearts(),
      disabled: user.hearts >= 5,
    },
    {
      id: 'streak-freeze',
      name: '连胜冻结',
      description: '错过一天的打卡也不会断连胜',
      icon: '🧊',
      cost: STREAK_FREEZE_COST,
      onBuy: () => {
        if (spendGems(STREAK_FREEZE_COST)) {
          useUserStore.setState(s => ({
            user: s.user ? {
              ...s.user,
              streak: {
                ...s.user.streak,
                streakFreezes: s.user.streak.streakFreezes + 1,
              },
            } : null,
          }))
        }
      },
      disabled: false,
    },
  ]

  return (
    <div className="px-4 pb-8">
      <div className="text-center mt-6 mb-6">
        <h1 className="text-2xl font-bold text-ink">杏林商店</h1>
        <div className="mt-2 inline-flex items-center gap-1 bg-gold/10 rounded-full px-4 py-1">
          <span>💎</span>
          <span className="font-bold text-gold">{user.gems}</span>
          <span className="text-xs text-ink-light">宝石余额</span>
        </div>
      </div>

      <div className="space-y-4">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            className="bg-white rounded-2xl border-2 border-bamboo/30 p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex items-center gap-4">
              <div className="text-4xl">{item.icon}</div>
              <div className="flex-1">
                <h3 className="font-bold text-ink">{item.name}</h3>
                <p className="text-sm text-ink-light">{item.description}</p>
                <div className="mt-1 flex items-center gap-1 text-gold text-sm font-bold">
                  <span>💎</span>
                  <span>{item.cost}</span>
                </div>
              </div>
              <AnimatedButton
                variant="gold"
                onClick={item.onBuy}
                disabled={item.disabled || user.gems < item.cost}
                className="px-4 py-2 text-sm whitespace-nowrap"
              >
                {item.disabled ? '已满' : '购买'}
              </AnimatedButton>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-xs text-ink-light/60 italic">更多道具即将上线...</p>
      </div>
    </div>
  )
}
