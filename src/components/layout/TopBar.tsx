import HeartDisplay from '../shared/HeartDisplay'
import GemCounter from '../shared/GemCounter'
import StreakFlame from '../shared/StreakFlame'
import { useUserStore } from '../../stores/useUserStore'

export default function TopBar() {
  const user = useUserStore(s => s.user)

  if (!user) return null

  return (
    <header className="sticky top-0 z-50 bg-parchment/90 backdrop-blur-sm border-b border-bamboo/30">
      <div className="flex items-center justify-between px-4 py-3 max-w-lg mx-auto">
        <HeartDisplay hearts={user.hearts} />
        <StreakFlame streak={user.streak.currentStreak} />
        <GemCounter gems={user.gems} />
      </div>
    </header>
  )
}
