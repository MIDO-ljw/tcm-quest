export interface LessonResult {
  lessonId: string
  completedAt: string
  xpEarned: number
  accuracy: number
  heartsRemaining: number
  timeSpentSeconds: number
}

export interface UserProgress {
  completedLessonIds: string[]
  completedUnitIds: string[]
  lessonResults: Record<string, LessonResult>
  currentLessonId: string | null
}
