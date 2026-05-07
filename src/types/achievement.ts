export type BadgeCategory = 'streak' | 'learning' | 'social' | 'special'

export interface BadgeRequirement {
  type: 'streak-days' | 'total-xp' | 'lessons-completed' | 'perfect-lessons' | 'units-completed' | 'gems-earned'
  threshold: number
}

export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  category: BadgeCategory
  requirement: BadgeRequirement
  gemReward: number
}

export interface UnlockedBadge {
  badgeId: string
  unlockedAt: string
}
