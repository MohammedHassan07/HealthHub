import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import BtnTaskCategory from '../components/BtnTaskCategory'

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



          {/* utilities --> profile, about, etc */}
          <div className='overflow-y-auto'>

            <ul className=''>

              <BtnTaskCategory
                taskName={'Create Patient'}
                imageType={'Patient'}
                path={'/hospital-dashboard/create-patient'} />

              <BtnTaskCategory
                taskName={'View Patient'}
                imageType={'viewPatient'}
                path={'/hospital-dashboard/view-patient'} />

              <BtnTaskCategory
                taskName={'Create Doctor'}
                imageType={'Doctor'}
                path={'/hospital-dashboard/create-doctor'} />

              <BtnTaskCategory
                taskName={'View Doctor'}
                imageType={'viewDoctor'}
                path={'/hospital-dashboard/view-patient'} />

              <BtnTaskCategory
                taskName={'Create Pharma'}
                imageType={'Pharma'}
                path={'/hospital-dashboard/create-pharma'} />

              <BtnTaskCategory
                taskName={'View Pharma'}
                imageType={'viewPharma'}
                path={'/hospital-dashboard/view-patient'} />

              {/* TODO: the lab profile may be created by developer */}
              {/* <BtnTaskCategory taskName={'create Lab'} imageType={'Lab'} /> */}

            </ul>

          </div>

        </div>

        <div className='w-full'>


          {/* main content */}
          <div>

            <Outlet />
          </div>

        </div>
      </div>
    </>

  )
}

export default HospitalDashboard
