import { Route, Routes, BrowserRouter } from 'react-router-dom'
import LoginCategoryPage from './pages/LoginCategoryPage'
import LoginForm from './components/LoginForm'

function App() {

  return (
    <>

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<LoginCategoryPage />} />
          <Route path='/login' element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
