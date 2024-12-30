import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import BtnTaskCategory from '../components/BtnTaskCategory'
import logout from '../assets/icons/logout.png'

const HospitalDashboard = () => {

  const navigate = useNavigate()

  // logout
  function handleLogout() {

    console.log('logout')
    localStorage.removeItem('tokenData')
    navigate('/')
  }

  useEffect(() => {

    const tokenData = localStorage.getItem('tokenData')
    if (tokenData) {

      const { token } = JSON.parse(tokenData)
      // console.log('Token found:', token)
    } else {
      navigate('/')
    }
  }, [])

  return (
    <>

      <div className='flex'>

        {/* aside  */}
        <div className='w-96 h-screen border-r-2 border-blue-950'>

          <div className='bg-blue-950 text-white p-2'>

            <div>
              <h3>MedVistat</h3>
            </div>

            <div>
              <h5>Version 1.0.0</h5>
            </div>

          </div>

          {/* utilities --> profile, about, etc */}
          <div className='overflow-y-auto'>

            <ul className=''>

              <BtnTaskCategory 
              taskName={'Create Patient'} 
              imageType={'Patient'}
              path={'/hospital-dashboard/create-patient'}  />

              <BtnTaskCategory 
              taskName={'View Patient'} 
              imageType={'viewPatient'}  
              path={'/hospital-dashboard/view-patient'} />

              <BtnTaskCategory 
              taskName={'Create Doctor'} 
              imageType={'Doctor'}
               path={'/hospital-dashboard/create-doctor'}  />

              <BtnTaskCategory 
              taskName={'View Doctor'} 
              imageType={'viewDoctor'}
               path={'/hospital-dashboard/view-patient'}  />

              <BtnTaskCategory 
              taskName={'Create Pharma'} 
              imageType={'Pharma'}
               path={'/hospital-dashboard/create-pharma'}  />

              <BtnTaskCategory 
              taskName={'View Pharma'} 
              imageType={'viewPharma'}
               path={'/hospital-dashboard/view-patient'}  />

              {/* TODO: the lab profile may be created by developer */}
              {/* <BtnTaskCategory taskName={'create Lab'} imageType={'Lab'} /> */}

            </ul>

          </div>

        </div>

        <div className='w-full'>

          {/* nav bar */}
          <div
            className='flex items-center justify-between h-16 px-10 bg-blue-950 text-white'>
            <div className=''>

              <ul className='flex items-center justify-center gap-32'>

                <li className='hover:cursor-pointer'>
                  Home
                </li>

                <li className='hover:cursor-pointer'>
                  About
                </li>

                <li className='hover:cursor-pointer'>
                  Contact
                </li>


                <li className='hover:cursor-pointer'>
                  Profile
                </li>
              </ul>
            </div>

            <div>

              <img
                className='w-7 hover:cursor-pointer'
                src={logout} alt="logout"
                onClick={handleLogout} />
            </div>

          </div>

          {/* main content */}
          <div>

            <Outlet />
          </div>

          {/* TODO: add background image  */}
          {/* <img id="back-image" src="../static/images/back-laboratory.jpeg" alt=""> */}

        </div>
      </div>
    </>

  )
}

export default HospitalDashboard
