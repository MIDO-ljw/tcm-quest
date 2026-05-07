import type { Badge } from '../types/achievement'

export const badges: Badge[] = [
  // Streak badges
  { id: 'streak-3', name: '初入杏林', description: '连续打卡3天', icon: '🌱', category: 'streak', requirement: { type: 'streak-days', threshold: 3 }, gemReward: 10 },
  { id: 'streak-7', name: '七日筑基', description: '连续打卡7天', icon: '🔥', category: 'streak', requirement: { type: 'streak-days', threshold: 7 }, gemReward: 25 },
  { id: 'streak-14', name: '半月修行', description: '连续打卡14天', icon: '💪', category: 'streak', requirement: { type: 'streak-days', threshold: 14 }, gemReward: 50 },
  { id: 'streak-30', name: '月满功成', description: '连续打卡30天', icon: '🏆', category: 'streak', requirement: { type: 'streak-days', threshold: 30 }, gemReward: 100 },
  { id: 'streak-60', name: '百日筑基', description: '连续打卡60天', icon: '🐉', category: 'streak', requirement: { type: 'streak-days', threshold: 60 }, gemReward: 200 },

  // Learning badges
  { id: 'xp-100', name: '初窥门径', description: '累计获得100 XP', icon: '📖', category: 'learning', requirement: { type: 'total-xp', threshold: 100 }, gemReward: 15 },
  { id: 'xp-500', name: '登堂入室', description: '累计获得500 XP', icon: '📚', category: 'learning', requirement: { type: 'total-xp', threshold: 500 }, gemReward: 40 },
  { id: 'xp-1000', name: '学富五车', description: '累计获得1000 XP', icon: '🎓', category: 'learning', requirement: { type: 'total-xp', threshold: 1000 }, gemReward: 80 },
  { id: 'xp-3000', name: '一代宗师', description: '累计获得3000 XP', icon: '👑', category: 'learning', requirement: { type: 'total-xp', threshold: 3000 }, gemReward: 150 },

  { id: 'lessons-5', name: '药童', description: '完成5节课', icon: '🍃', category: 'learning', requirement: { type: 'lessons-completed', threshold: 5 }, gemReward: 20 },
  { id: 'lessons-15', name: '郎中', description: '完成15节课', icon: '💊', category: 'learning', requirement: { type: 'lessons-completed', threshold: 15 }, gemReward: 50 },
  { id: 'lessons-30', name: '御医', description: '完成全部30+节课', icon: '🏅', category: 'learning', requirement: { type: 'lessons-completed', threshold: 30 }, gemReward: 100 },

  { id: 'units-3', name: '初通医理', description: '完成3个单元', icon: '⭐', category: 'learning', requirement: { type: 'units-completed', threshold: 3 }, gemReward: 30 },
  { id: 'units-5', name: '融会贯通', description: '完成5个单元', icon: '🌟', category: 'learning', requirement: { type: 'units-completed', threshold: 5 }, gemReward: 60 },
  { id: 'units-10', name: '大医精诚', description: '完成全部10个单元', icon: '👨‍⚕️', category: 'learning', requirement: { type: 'units-completed', threshold: 10 }, gemReward: 150 },

  { id: 'perfect-5', name: '精益求精', description: '5次完美通关（100%正确率）', icon: '💯', category: 'learning', requirement: { type: 'perfect-lessons', threshold: 5 }, gemReward: 30 },
  { id: 'perfect-15', name: '杏林圣手', description: '15次完美通关', icon: '✨', category: 'learning', requirement: { type: 'perfect-lessons', threshold: 15 }, gemReward: 75 },

  // Special badges
  { id: 'gems-200', name: '殷实药铺', description: '累计获得200宝石', icon: '💎', category: 'special', requirement: { type: 'gems-earned', threshold: 200 }, gemReward: 0 },
  { id: 'gems-500', name: '富甲杏林', description: '累计获得500宝石', icon: '💰', category: 'special', requirement: { type: 'gems-earned', threshold: 500 }, gemReward: 0 },
]
