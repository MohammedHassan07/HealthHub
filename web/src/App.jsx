import { Route, Routes, BrowserRouter } from 'react-router-dom'
import LoginCategoryPage from './pages/LoginCategoryPage'
import LoginForm from './components/LoginForm'
import HospitalDashboard from './pages/HospitalDashboard'
import { CategoryProvider } from './context/CategoryContext'
import DoctorDashboard from './pages/DoctorDashboard'
import AssistantDashboard from './pages/AssistantDashboard'
import PharmaDashboard from './pages/PharmaDashboard'

function App() {

  return (
    <>

      <CategoryProvider>

        <BrowserRouter>

          <Routes>
            <Route path="/" element={<LoginCategoryPage />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/hospital-dashboard' element={<HospitalDashboard />} />
            <Route path='/doctor-dashboard' element={<DoctorDashboard />} />
            <Route path='/assistant-dashboard' element={<AssistantDashboard />} />
            <Route path='/pharma-dashboard' element={<PharmaDashboard />} />
          </Routes>
        </BrowserRouter>
      </CategoryProvider>
    </>
  )
}

export default App
