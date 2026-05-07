import { useEffect, useRef } from 'react'
import { useUserStore } from '../stores/useUserStore'
import { HEART_REGEN_INTERVAL_MS } from '../lib/constants'

export function useHearts() {
  const user = useUserStore(s => s.user)
  const regenerateHearts = useUserStore(s => s.regenerateHearts)
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    if (!user) return

    // Check on mount
    if (user.hearts < 5 && user.lastHeartLossTimestamp) {
      regenerateHearts()
    }

    // Also check on visibility change (user switches back to tab)
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        regenerateHearts()
      }
    }
    document.addEventListener('visibilitychange', handleVisibility)

    // Periodic check
    intervalRef.current = window.setInterval(() => {
      regenerateHearts()
    }, HEART_REGEN_INTERVAL_MS)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility)
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [user, regenerateHearts])
}
