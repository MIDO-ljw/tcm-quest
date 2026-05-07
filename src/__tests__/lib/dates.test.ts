import { describe, it, expect } from 'vitest'
import { getTodayDateString, isYesterday, isToday, daysBetween, isNewWeek } from '../../lib/dates'

describe('dates', () => {
  it('getTodayDateString returns YYYY-MM-DD format', () => {
    const today = getTodayDateString()
    expect(today).toMatch(/^\d{4}-\d{2}-\d{2}$/)
  })

  it('isToday returns true for today', () => {
    expect(isToday(getTodayDateString())).toBe(true)
  })

  it('isYesterday works correctly', () => {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const yStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`
    expect(isYesterday(yStr)).toBe(true)
  })

  it('daysBetween calculates correctly', () => {
    expect(daysBetween('2025-01-01', '2025-01-03')).toBe(2)
    expect(daysBetween('2025-01-01', '2025-01-01')).toBe(0)
  })

  it('isNewWeek returns true when no previous week', () => {
    expect(isNewWeek(null)).toBe(true)
  })
})
