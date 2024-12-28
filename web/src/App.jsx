import { Route, Routes, BrowserRouter } from 'react-router-dom'
import LoginCategoryPage from './pages/LoginCategoryPage'
import LoginForm from './components/LoginForm'
import HospitalDashboard from './pages/HospitalDashboard'
import { CategoryProvider } from './context/CategoryContext'

function App() {

  return (
    <>

      <CategoryProvider>

        <BrowserRouter>

          <Routes>
            <Route path="/" element={<LoginCategoryPage />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/hospital-dashboard' element={<HospitalDashboard />} />
          </Routes>
        </BrowserRouter>
      </CategoryProvider>
    </>
  )
}

export default App
