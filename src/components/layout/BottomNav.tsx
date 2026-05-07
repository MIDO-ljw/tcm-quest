import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const tabs = [
  { to: '/', label: '地图', icon: '🗺️' },
  { to: '/leaderboard', label: '排行', icon: '🏆' },
  { to: '/achievements', label: '成就', icon: '🎖️' },
  { to: '/shop', label: '商店', icon: '🛒' },
]

export default function BottomNav() {
  return (
    <nav className="sticky bottom-0 z-50 bg-parchment/95 backdrop-blur-sm border-t border-bamboo/30">
      <div className="flex items-center justify-around max-w-lg mx-auto">
        {tabs.map(tab => (
          <NavLink
            key={tab.to}
            to={tab.to}
            end={tab.to === '/'}
            className="flex flex-col items-center py-2 px-4 relative"
          >
            {({ isActive }) => (
              <>
                <span className={`text-xl ${isActive ? 'scale-110' : ''}`}>{tab.icon}</span>
                <span className={`text-xs mt-0.5 ${isActive ? 'text-jade font-bold' : 'text-ink-light'}`}>
                  {tab.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-jade rounded-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
