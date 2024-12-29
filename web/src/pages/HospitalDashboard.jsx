import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BtnTaskCategory from '../components/BtnTaskCategory'
import logout from '../assets/icons/logout.png'

const HospitalDashboard = () => {

  const navigate = useNavigate()

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

              <BtnTaskCategory taskName={'Create Patient'} imageType={'Patient'} />

              <BtnTaskCategory taskName={'View Patient'} imageType={'viewPatient'} />

              <BtnTaskCategory taskName={'Create Doctor'} imageType={'Doctor'} />

              <BtnTaskCategory taskName={'View Doctor'} imageType={'viewDoctor'} />

              <BtnTaskCategory taskName={'Create Pharma'} imageType={'Pharma'} />

              <BtnTaskCategory taskName={'View Pharma'} imageType={'viewPharma'} />

              {/* TODO: the lab profile may be created by developer */}
              {/* <BtnTaskCategory taskName={'create Lab'} imageType={'Lab'} /> */}


              <li
                className='border-b-2 border-blue-950 p-2 text-xl text-blue-950 hover:shadow hover:shadow-blue-950 hover:cursor-pointer'>
                Profile
              </li>

              <li
                className='border-b-2 border-blue-950 p-2 text-xl text-blue-950  hover:shadow hover:shadow-blue-950 hover:cursor-pointer'>
                About
              </li>

              <li
                className='border-b-2 border-blue-950 p-2 text-xl text-blue-950  hover:shadow hover:shadow-blue-950 hover:cursor-pointer'>
                Log out
              </li>

              {/* <li>
                Exit
              </li> */}
            </ul>

          </div>

        </div>

        <div className='w-full'>

          {/* nav bar */}
          <div 
          className='flex items-center justify-between h-16 px-10 bg-blue-950 text-white hover:cursor-pointer'>
            <div className=''>

              <ul className='flex'>

                <li>
                  Home
                </li>

                <li>
                  About
                </li>

                <li>
                  Contact
                </li>
              </ul>
            </div>

            <div>
              <img className='w-7' src={logout} alt="" />
            </div>
            
          </div>

          {/* main content */}
          <div>

          </div>

          {/* TODO: add background image  */}
          {/* <img id="back-image" src="../static/images/back-laboratory.jpeg" alt=""> */}

        </div>
      </div>
    </>

  )
}

export default HospitalDashboard
