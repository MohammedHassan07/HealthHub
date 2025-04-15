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

      <div className="flex h-screen overflow-hidden">
        {/* Aside Container */}
        <div className="w-96 h-screen border-r-2 border-blue-950 sticky top-0 overflow-hidden">
          {/* Utilities Section */}
          <div className="overflow-y-auto h-full">
            <ul>
              <BtnTaskCategory
                taskName={'Create Patient'}
                imageType={'Patient'}
                path={'/hospital-dashboard/create-profile'}
              />
              <BtnTaskCategory
                taskName={'View Patient'}
                imageType={'viewPatient'}
                path={'/hospital-dashboard/view-patient'}
              />
              <BtnTaskCategory
                taskName={'Create Doctor'}
                imageType={'Doctor'}
                path={'/hospital-dashboard/create-profile'}
              />
              <BtnTaskCategory
                taskName={'View Doctor'}
                imageType={'viewDoctor'}
                path={'/hospital-dashboard/view-doctor'}
              />
              <BtnTaskCategory
                taskName={'Create Pharma'}
                imageType={'Pharma'}
                path={'/hospital-dashboard/create-profile'}
              />
              <BtnTaskCategory
                taskName={'View Pharma'}
                imageType={'viewPharma'}
                path={'/hospital-dashboard/view-pharma'}
              />
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col w-full h-screen">
         
            {/* <h1>Hospital Dashboard</h1> */}
          {/* Scrollable Main Content */}
          <div className="flex-grow overflow-y-auto">

            <Outlet />
          </div>
        </div>
      </div>


    </>

  )
}

export default HospitalDashboard
