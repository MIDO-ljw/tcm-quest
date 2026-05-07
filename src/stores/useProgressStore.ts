import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { UserProgress, LessonResult } from '../types/progress'
import { course } from '../data/curriculum'

interface ProgressState {
  progress: UserProgress

  completeLesson: (lessonId: string, unitId: string, result: LessonResult) => void
  isLessonCompleted: (lessonId: string) => boolean
  isUnitCompleted: (unitId: string) => boolean
  isUnitUnlocked: (unitId: string) => boolean
  getNextLesson: () => { unitId: string; lessonId: string } | null
}

const defaultProgress: UserProgress = {
  completedLessonIds: [],
  completedUnitIds: [],
  lessonResults: {},
  currentLessonId: null,
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      progress: defaultProgress,

      completeLesson: (lessonId, unitId, result) => {
        const { progress } = get()
        const newCompletedLessonIds = progress.completedLessonIds.includes(lessonId)
          ? progress.completedLessonIds
          : [...progress.completedLessonIds, lessonId]

        const newLessonResults = { ...progress.lessonResults, [lessonId]: result }

        // Check if unit is now completed
        const unit = course.units.find(u => u.id === unitId)
        const unitCompleted = unit ? unit.lessons.every(l => newCompletedLessonIds.includes(l.id)) : false
        const newCompletedUnitIds = unitCompleted && !progress.completedUnitIds.includes(unitId)
          ? [...progress.completedUnitIds, unitId]
          : progress.completedUnitIds

        set({
          progress: {
            ...progress,
            completedLessonIds: newCompletedLessonIds,
            completedUnitIds: newCompletedUnitIds,
            lessonResults: newLessonResults,
            currentLessonId: lessonId,
          },
        })
      },

      isLessonCompleted: (lessonId) => {
        return get().progress.completedLessonIds.includes(lessonId)
      },

      isUnitCompleted: (unitId) => {
        return get().progress.completedUnitIds.includes(unitId)
      },

      isUnitUnlocked: (unitId) => {
        const unit = course.units.find(u => u.id === unitId)
        if (!unit) return false
        if (unit.requiredUnitIds.length === 0) return true
        const { completedUnitIds } = get().progress
        return unit.requiredUnitIds.every(reqId => completedUnitIds.includes(reqId))
      },

      getNextLesson: () => {
        const { progress } = get()
        // Find the first incomplete lesson in the first unlocked unit
        for (const unit of course.units) {
          if (!get().isUnitUnlocked(unit.id)) continue
          for (const lesson of unit.lessons) {
            if (!progress.completedLessonIds.includes(lesson.id)) {
              return { unitId: unit.id, lessonId: lesson.id }
            }
          }
        }
        // All lessons completed
        return null
      },
    }),
    { name: 'tcm-progress' }
  )
)
