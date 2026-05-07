import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import CourseMap from './components/map/CourseMap'
import LessonScreen from './components/lesson/LessonScreen'
import LeaderboardPage from './components/leaderboard/LeaderboardPage'
import AchievementsPage from './components/achievements/AchievementsPage'
import ShopPage from './components/shop/ShopPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<CourseMap />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Route>
        <Route path="/lesson/:unitId/:lessonId" element={<LessonScreen />} />
      </Routes>
    </BrowserRouter>
  )
}
