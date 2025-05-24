import { Routes, Route } from 'react-router-dom'
import { NotFoundPage } from '../page/notfoundpage'
import { Dashboard } from '../page/dashboard'
export const Allroutes = () => {
  return (
    <div>
          <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}
