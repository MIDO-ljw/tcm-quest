import { useEffect, useState, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { course } from '../../data/curriculum'
import { useLessonStore } from '../../stores/useLessonStore'
import { useUserStore } from '../../stores/useUserStore'
import { useProgressStore } from '../../stores/useProgressStore'
import { useAchievementStore } from '../../stores/useAchievementStore'
import { useLeaderboardStore } from '../../stores/useLeaderboardStore'
import LessonHeader from './LessonHeader'
import ExerciseRenderer from './ExerciseRenderer'
import FeedbackOverlay from './FeedbackOverlay'
import LessonComplete from './LessonComplete'
import Modal from '../layout/Modal'
import AnimatedButton from '../shared/AnimatedButton'

export default function LessonScreen() {
  const { unitId, lessonId } = useParams<{ unitId: string; lessonId: string }>()
  const navigate = useNavigate()

  const lesson = useLessonStore(s => s.lesson)
  const currentIndex = useLessonStore(s => s.currentExerciseIndex)
  const sessionHearts = useLessonStore(s => s.sessionHearts)
  const isFinished = useLessonStore(s => s.isFinished)
  const feedbackState = useLessonStore(s => s.feedbackState)
  const startLesson = useLessonStore(s => s.startLesson)
  const submitAnswer = useLessonStore(s => s.submitAnswer)
  const nextExercise = useLessonStore(s => s.nextExercise)
  const finishLesson = useLessonStore(s => s.finishLesson)
  const abandonLesson = useLessonStore(s => s.abandonLesson)

  const user = useUserStore(s => s.user)
  const loseHeart = useUserStore(s => s.loseHeart)
  const addGems = useUserStore(s => s.addGems)
  const addXP = useUserStore(s => s.addXP)
  const updateStreak = useUserStore(s => s.updateStreak)
  const refillHearts = useUserStore(s => s.refillHearts)

  const completeLesson = useProgressStore(s => s.completeLesson)
  const checkAndUnlock = useAchievementStore(s => s.checkAndUnlock)
  const refreshLeaderboard = useLeaderboardStore(s => s.refresh)

  const [showQuitModal, setShowQuitModal] = useState(false)
  const [showNoHeartsModal, setShowNoHeartsModal] = useState(false)
  const [lessonResult, setLessonResult] = useState<{
    xpEarned: number; gemsEarned: number; accuracy: number; heartsRemaining: number; lessonTitle: string
  } | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Start the lesson on mount
  useEffect(() => {
    if (!lessonId || !unitId) return
    const unit = course.units.find(u => u.id === unitId)
    const foundLesson = unit?.lessons.find(l => l.id === lessonId)
    if (foundLesson && user) {
      startLesson(foundLesson, user.hearts)
    }
    return () => {
      abandonLesson()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessonId, unitId])

  const handleSubmit = useCallback((answer: string) => {
    if (isSubmitting) return
    setIsSubmitting(true)

    const result = submitAnswer(answer)

    if (!result.correct) {
      loseHeart()
    }

    // Auto-advance after feedback
    const delay = result.correct ? 1200 : 2500
    setTimeout(() => {
      setIsSubmitting(false)
      if (useLessonStore.getState().isFinished) {
        handleFinish()
      } else {
        nextExercise()
      }
    }, delay)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitAnswer, loseHeart, nextExercise])

  const handleFinish = useCallback(() => {
    const result = finishLesson()
    if (!result.lessonId || !user) return

    // Persist results
    completeLesson(result.lessonId, result.unitId, {
      lessonId: result.lessonId,
      completedAt: new Date().toISOString(),
      xpEarned: result.xpEarned,
      accuracy: result.accuracy,
      heartsRemaining: result.heartsRemaining,
      timeSpentSeconds: result.timeSpentSeconds,
    })

    addXP(result.xpEarned)
    addGems(result.gemsEarned)
    updateStreak()

    // Check achievements
    const updatedUser = useUserStore.getState().user!
    const updatedProgress = useProgressStore.getState().progress
    checkAndUnlock(updatedUser, updatedProgress)

    // Refresh leaderboard
    refreshLeaderboard(user.id, user.displayName, result.xpEarned, user.streak.currentStreak)

    // Find lesson title
    const unit = course.units.find(u => u.id === result.unitId)
    const lessonObj = unit?.lessons.find(l => l.id === result.lessonId)

    setLessonResult({
      xpEarned: result.xpEarned,
      gemsEarned: result.gemsEarned,
      accuracy: result.accuracy,
      heartsRemaining: result.heartsRemaining,
      lessonTitle: lessonObj?.title || '',
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finishLesson, completeLesson, addXP, addGems, updateStreak, checkAndUnlock, refreshLeaderboard, user])

  // Handle heart loss finishing
  useEffect(() => {
    if (isFinished && sessionHearts === 0 && !lessonResult) {
      // Check if user was already on the last question — if so, just finish
      const state = useLessonStore.getState()
      if (state.lesson && state.currentExerciseIndex >= state.lesson.exercises.length - 1) {
        handleFinish()
      } else {
        setShowNoHeartsModal(true)
      }
    }
  }, [isFinished, sessionHearts, lessonResult, handleFinish])

  // Handle normal completion
  useEffect(() => {
    if (isFinished && sessionHearts > 0 && !lessonResult) {
      handleFinish()
    }
  }, [isFinished, sessionHearts, lessonResult, handleFinish])

  if (lessonResult) {
    return <LessonComplete {...lessonResult} />
  }

  if (!lesson) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-parchment">
        <p className="text-ink-light">加载课程中...</p>
      </div>
    )
  }

  const currentExercise = lesson.exercises[currentIndex]

  return (
    <div className="fixed inset-0 z-50 bg-parchment flex flex-col">
      <LessonHeader
        currentIndex={currentIndex}
        total={lesson.exercises.length}
        sessionHearts={sessionHearts}
        onQuit={() => setShowQuitModal(true)}
      />

      {/* Exercise area */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-lg mx-auto px-4 py-8">
          {/* Question prompt */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentExercise.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
            >
              <div className="text-center mb-8">
                {currentExercise.question.context && (
                  <p className="text-ink-light text-sm mb-2 italic">{currentExercise.question.context}</p>
                )}
                <h3 className="text-xl font-bold text-ink leading-relaxed">
                  {currentExercise.question.prompt}
                </h3>
                <div className="mt-3 flex items-center justify-center gap-2 text-xs text-ink-light">
                  <span>{currentExercise.question.type === 'multiple-choice' ? '📋 四选一' :
                    currentExercise.question.type === 'true-false' ? '✅ 判断' :
                    currentExercise.question.type === 'fill-in-blank' ? '✍️ 填空' :
                    '🔗 配对'}</span>
                  <span>·</span>
                  <span>{`${currentIndex + 1}/${lesson.exercises.length}`}</span>
                </div>
              </div>

              <ExerciseRenderer
                exercise={currentExercise}
                onSubmit={handleSubmit}
                disabled={isSubmitting}
                feedbackState={feedbackState}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Feedback */}
      <FeedbackOverlay
        feedbackState={feedbackState}
        explanation={feedbackState === 'incorrect' ? currentExercise.question.explanation : undefined}
        xpReward={currentExercise.xpReward}
      />

      {/* TCM disclaimer */}
      <div className="text-center pb-2">
        <p className="text-xs text-ink-light/40 italic">示范内容，非医疗建议</p>
      </div>

      {/* Quit confirmation modal */}
      <Modal isOpen={showQuitModal} onClose={() => setShowQuitModal(false)}>
        <div className="text-center">
          <div className="text-4xl mb-3">🤔</div>
          <h3 className="text-lg font-bold text-ink mb-2">确定退出吗？</h3>
          <p className="text-ink-light text-sm mb-4">退出后当前课程进度不会保存</p>
          <div className="space-y-2">
            <AnimatedButton variant="primary" onClick={() => navigate('/')} className="w-full">
              退出课程
            </AnimatedButton>
            <button
              onClick={() => setShowQuitModal(false)}
              className="w-full py-2 text-ink-light hover:text-ink transition-colors cursor-pointer text-sm"
            >
              继续学习
            </button>
          </div>
        </div>
      </Modal>

      {/* No hearts modal */}
      <Modal isOpen={showNoHeartsModal} onClose={() => {}}>
        <div className="text-center">
          <div className="text-5xl mb-3">💔</div>
          <h3 className="text-lg font-bold text-ink mb-2">红心用完！</h3>
          <p className="text-ink-light text-sm mb-4">
            你现在有 <span className="font-bold text-gold">💎 {user?.gems || 0}</span> 宝石
          </p>
          <div className="space-y-2">
            <AnimatedButton
              variant="gold"
              onClick={() => {
                const success = refillHearts()
                if (success) {
                  setShowNoHeartsModal(false)
                  // Restart the lesson
                  if (lessonId && unitId) {
                    const unit = course.units.find(u => u.id === unitId)
                    const foundLesson = unit?.lessons.find(l => l.id === lessonId)
                    if (foundLesson && user) {
                      startLesson(foundLesson, useUserStore.getState().user!.hearts)
                    }
                  }
                }
              }}
              disabled={(user?.gems || 0) < 50}
              className="w-full"
            >
              💎 50 宝石 — 补满红心
            </AnimatedButton>
            <button
              onClick={() => {
                setShowNoHeartsModal(false)
                handleFinish()
              }}
              className="w-full py-2 text-ink-light hover:text-ink transition-colors cursor-pointer text-sm"
            >
              放弃治疗，结算 XP
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
