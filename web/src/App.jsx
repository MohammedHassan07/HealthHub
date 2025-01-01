import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom'
import LoginCategoryPage from './pages/LoginCategoryPage'
import LoginForm from './components/LoginForm'
import HospitalDashboard from './pages/HospitalDashboard'
import { CategoryProvider } from './context/CategoryContext'
import DoctorDashboard from './pages/DoctorDashboard'
import AssistantDashboard from './pages/AssistantDashboard'
import PharmaDashboard from './pages/PharmaDashboard'
import Createpatient from './pages/Createpatient'
import ViewPatient from './pages/ViewPatient'
import Navbar from './components/Navbar'

function Layout({ children }) {

  const location = useLocation()

  const hideNavbarPath = ['/login', '/']

  return (

    <>
      {!hideNavbarPath.includes(location.pathname) && <Navbar />}
      {children}
    </>

  )
}

function App() {

  return (
    <>

      <CategoryProvider>

        <BrowserRouter>
          <Layout>

            <Routes>
              <Route path="/" element={<LoginCategoryPage />} />
              <Route path='/login' element={<LoginForm />} />

              <Route path='/hospital-dashboard' element={<HospitalDashboard />}>
                <Route path='create-patient' element={<Createpatient />} />
                <Route path='view-patient' element={<ViewPatient />} />
              </Route>

              <Route path='/doctor-dashboard' element={<DoctorDashboard />} />
              <Route path='/assistant-dashboard' element={<AssistantDashboard />} />
              <Route path='/pharma-dashboard' element={<PharmaDashboard />} />
            </Routes>

          </Layout>
        </BrowserRouter>
      </CategoryProvider>
    </>
  )
}

export default App
