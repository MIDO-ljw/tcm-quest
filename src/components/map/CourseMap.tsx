import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { course } from '../../data/curriculum'
import { useProgressStore } from '../../stores/useProgressStore'
import { useUserStore } from '../../stores/useUserStore'
import { useLessonStore } from '../../stores/useLessonStore'

type NodeStatus = 'locked' | 'active' | 'completed'

interface UnitNodeData {
  unitId: string
  title: string
  icon: string
  order: number
  status: NodeStatus
}

export default function CourseMap() {
  const progress = useProgressStore(s => s.progress)
  const user = useUserStore(s => s.user)
  const isUnitUnlocked = useProgressStore(s => s.isUnitUnlocked)
  const isUnitCompleted = useProgressStore(s => s.isUnitCompleted)
  const startLesson = useLessonStore(s => s.startLesson)
  const navigate = useNavigate()

  if (!user) return null

  const nodeData: UnitNodeData[] = course.units.map(unit => {
    const unlocked = isUnitUnlocked(unit.id)
    const completed = isUnitCompleted(unit.id)

    // Determine active: the first unlocked unit that isn't completed
    const firstIncomplete = course.units.find(u => isUnitUnlocked(u.id) && !isUnitCompleted(u.id))
    const active = unit.id === firstIncomplete?.id

    let status: NodeStatus = 'locked'
    if (completed) status = 'completed'
    else if (active) status = 'active'
    else if (unlocked) status = 'active'

    return {
      unitId: unit.id,
      title: unit.title,
      icon: unit.icon,
      order: unit.order,
      status,
    }
  })

  const handleUnitClick = (unitId: string, status: NodeStatus) => {
    if (status === 'locked') return

    const unit = course.units.find(u => u.id === unitId)
    if (!unit) return

    // Find the first incomplete lesson in this unit
    const nextIncomplete = unit.lessons.find(l => !progress.completedLessonIds.includes(l.id))
    if (nextIncomplete) {
      startLesson(nextIncomplete, user.hearts)
      navigate(`/lesson/${unitId}/${nextIncomplete.id}`)
    }
  }

  return (
    <div className="px-4 pb-8">
      {/* Header */}
      <div className="text-center mt-6 mb-8">
        <h1 className="text-2xl font-bold text-ink mb-1">杏林问道</h1>
        <p className="text-ink-light text-sm">{course.description}</p>
        <div className="mt-3 inline-flex items-center gap-2 bg-parchment-dark rounded-full px-4 py-1 text-sm text-ink-light">
          <span>📊</span>
          <span>{user.totalXP} XP</span>
          <span className="text-bamboo">|</span>
          <span>📚 {progress.completedLessonIds.length} 课</span>
        </div>
      </div>

      {/* TCM disclaimer */}
      <div className="text-center mb-6">
        <p className="text-xs text-ink-light/60 italic">* 本应用内容为 AI 生成的学习示范，非专业医疗建议</p>
      </div>

      {/* Unit nodes — 2-column alternating layout */}
      <div className="relative">
        {/* Path line (vertical) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-bamboo/30 rounded-full" />

        <div className="flex flex-col gap-6">
          {nodeData.map((node, index) => (
            <UnitNode
              key={node.unitId}
              data={node}
              side={index % 2 === 0 ? 'left' : 'right'}
              onClick={() => handleUnitClick(node.unitId, node.status)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function UnitNode({ data, side, onClick }: { data: UnitNodeData; side: 'left' | 'right'; onClick: () => void }) {
  const statusColors = {
    locked: 'bg-gray-200 border-gray-300 text-gray-400',
    active: 'bg-jade/15 border-jade text-ink',
    completed: 'bg-bamboo/10 border-bamboo text-ink',
  }

  const statusBadge = {
    locked: '🔒',
    active: '⭐',
    completed: '✅',
  }

  return (
    <motion.div
      className={`relative flex items-center ${side === 'right' ? 'flex-row' : 'flex-row-reverse'}`}
      initial={{ opacity: 0, x: side === 'right' ? 20 : -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: data.order * 0.1 }}
    >
      {/* The node card */}
      <div className={`w-[44%]`}>
        <motion.button
          onClick={onClick}
          disabled={data.status === 'locked'}
          className={`w-full rounded-2xl border-2 p-4 text-left transition-shadow cursor-pointer ${statusColors[data.status]} ${data.status === 'active' ? 'shadow-lg shadow-jade/20 animate-pulse' : ''} ${data.status === 'locked' ? 'cursor-not-allowed' : 'hover:shadow-md'}`}
          whileHover={data.status !== 'locked' ? { scale: 1.02, y: -2 } : {}}
          whileTap={data.status !== 'locked' ? { scale: 0.98 } : {}}
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">{data.icon}</span>
            <div>
              <div className="font-bold text-sm">
                {statusBadge[data.status]}
                {' '}
                {data.status === 'locked' ? '???' : data.title}
              </div>
              <div className="text-xs mt-0.5 opacity-60">
                {data.status === 'locked' ? '先完成前置单元' : data.status === 'completed' ? '已通关' : '开始学习 →'}
              </div>
            </div>
          </div>
        </motion.button>
      </div>

      {/* Center dot on path */}
      <div className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10 ${data.status === 'completed' ? 'bg-bamboo border-bamboo' : data.status === 'active' ? 'bg-jade border-jade' : 'bg-gray-300 border-gray-300'}`}>
        {data.status === 'active' && (
          <span className="absolute inset-0 rounded-full bg-jade/30 animate-ping" />
        )}
      </div>
    </motion.div>
  )
}
