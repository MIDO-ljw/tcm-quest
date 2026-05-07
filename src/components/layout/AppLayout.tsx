import { Outlet } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import TopBar from './TopBar'
import BottomNav from './BottomNav'
import { useUserStore } from '../../stores/useUserStore'
import { useHearts } from '../../hooks/useHearts'
import { useEffect, useState } from 'react'

export default function AppLayout() {
  const user = useUserStore(s => s.user)
  const initializeUser = useUserStore(s => s.initializeUser)
  const [showOnboarding, setShowOnboarding] = useState(false)

  // Activate heart regeneration timer
  useHearts()

  useEffect(() => {
    if (!user) {
      setShowOnboarding(true)
    }
  }, [user])

  const handleOnboarding = (name: string) => {
    initializeUser(name, '😊')
    setShowOnboarding(false)
  }

  return (
    <div className="h-full flex flex-col bg-parchment">
      <TopBar />
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-lg mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
      <BottomNav />

      {/* Onboarding Modal */}
      {showOnboarding && <OnboardingModal onSubmit={handleOnboarding} />}
    </div>
  )
}

function OnboardingModal({ onSubmit }: { onSubmit: (name: string) => void }) {
  const [name, setName] = useState('中医学徒')
  const [step, setStep] = useState(0)

  const emojis = ['😊', '🐉', '🌸', '⚡', '🌟', '🧘', '🎋', '💚']

  const slides = [
    { title: '欢迎来到杏林问道', subtitle: '用游戏化的方式，系统学习中医核心理论', emoji: '🌿' },
    { title: '闯关式学习', subtitle: '探索学习地图，逐关攻克中医知识', emoji: '🗺️' },
    { title: '连胜打卡', subtitle: '保持每日学习的习惯，连胜天数越高越厉害', emoji: '🔥' },
  ]

  if (step < 3) {
    return (
      <div className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/60">
        <div className="bg-parchment rounded-2xl p-8 mx-4 max-w-sm w-full text-center">
          <div className="text-6xl mb-4">{slides[step].emoji}</div>
          <h2 className="text-xl font-bold text-ink mb-2">{slides[step].title}</h2>
          <p className="text-ink-light mb-6">{slides[step].subtitle}</p>
          <button
            onClick={() => setStep(s => s + 1)}
            className="bg-jade text-white rounded-xl px-8 py-3 font-bold w-full hover:bg-jade-light transition-colors cursor-pointer"
          >
            {step < 2 ? '继续' : '开始吧'}
          </button>
          <div className="flex justify-center gap-2 mt-4">
            {[0, 1, 2].map(i => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === step ? 'bg-jade' : 'bg-bamboo/40'}`} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/60">
      <div className="bg-parchment rounded-2xl p-8 mx-4 max-w-sm w-full text-center">
        <div className="text-5xl mb-4">👋</div>
        <h2 className="text-xl font-bold text-ink mb-2">你的名字</h2>
        <p className="text-ink-light mb-4">给自己取个中医名号吧</p>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-bamboo bg-white text-center text-lg mb-3 outline-none focus:border-jade"
          maxLength={10}
          autoFocus
        />
        <div className="flex justify-center gap-2 mb-4 flex-wrap">
          {emojis.map(e => (
            <button
              key={e}
              className="text-2xl hover:scale-125 transition-transform cursor-pointer"
              onClick={() => setName(prev => prev.includes(e) ? prev : prev + e)}
            >
              {e}
            </button>
          ))}
        </div>
        <button
          onClick={() => onSubmit(name || '中医学徒')}
          className="bg-jade text-white rounded-xl px-8 py-3 font-bold w-full hover:bg-jade-light transition-colors cursor-pointer"
        >
          进入杏林
        </button>
      </div>
    </div>
  )
}
