import React, { useEffect, useState } from 'react'
import qrCode from '../assets/icons/qr-code-scanner.png'
import search from '../assets/icons/search.png'
import userImage from '../assets/icons/user.png'
import getRequest from '../services/getRequest'
import notify from '../utils/toast'
import { ToastContainer } from 'react-toastify'

const ViewPatient = () => {

  const [patientData, setPatientData] = useState({})


  // handle input change
  // TODO: Add delay before making request to backend
  const handleInputChange = async (e) => {

    const patient_RN = e.target.value

    // console.log(patient_RN)

    const { data, status, message } = await getRequest(`/api/patient/view-patient/${patient_RN}`)

    if (status !== 200) {

      console.log(status, message)
      notify(status, message)
      return
    }

    // console.log(data.data, status)
    setPatientData(data.data)
  }

  return (
    <div className=''>

      <ToastContainer />

      <div className=''>

        {/* search patient  */}
        <div className='w-full bg-blue-950 flex justify-between items-center p-2 gap-2'>

          <div className='w-full'>
            <input onChange={(e) => { handleInputChange(e) }} className='w-full border-2 border-blue-950 rounded-lg p-1 focus:outline-none' type="text" placeholder="Search Patient" />
          </div>

          <div className='flex gap-2'>

            <img className='w-8' src={qrCode}
              alt="QR Code" />

            <img className='w-8' src={search} alt="Search" />
          </div>

        </div>

        {Object.keys(patientData).length ? <>
          {/* patient detail with photo */}
          {/* TODO: show patient image */}
          {/* {console.log(Object.keys(patientData).length)} */}
          <div className='flex border-b-2 border-blue-950 p-2 gap-4'>

            <div className='border-2 border-blue-950'>
              <img className='w-24' src={userImage} alt="" />
            </div>

            <div className='flex gap-8 justify items-start'>

              <div className=''>

                <p className='mt-2 text-xl'>Name: {patientData.patient_name}</p>
                <p className='mt-2 text-xl'>Aadhar: {patientData.patient_RN}</p>
              </div>

              <div>

                <p className='mt-2 text-xl' >Age: {patientData.patient_age}</p>
                <p className='mt-2 text-xl' >Gender: {patientData.patient_gender}</p>
              </div>

              <div>
                <p className='mt-2 text-xl' >Mobile: {patientData.patient_mobile}</p>
                <p className='mt-2 text-xl' >Email: {patientData.patient_email}</p>
              </div>
              <div>

                <p className='mt-2 text-xl' >Address: {patientData.patient_address}</p>
              </div>
            </div>

          </div>

          {/* disease Description  */}
          <main className='p-5'>

            {/* patient-description  */}
            <div className='border-2 border-blue-950 rounded-lg '>

              <div className='w-full bg-blue-950 text-white p-2'>
                <span>Monday, 01/01/2025, </span>
                <span>12:30 PM</span>
              </div>

              {/* hospital and doctor details  */}
              <div className='p-2'>

                <div>
                  <span>Hospital: </span>
                  <span>AIMS</span>
                </div>

                <div className=''>
                  <span>Address: </span>
                  <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
                    libero?</span>
                </div>

                <div>
                  <div className=''>
                    <span>Doctor Name: </span>
                    <span>Saeed Farhani</span>
                  </div>
                </div>

              </div>

              {/*  medicine and disease details  */}
              <div className='p-2 border-t-2 border-blue-950'>

                <div>
                  <span>Disease Description: </span>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti totam dignissimos velit provident assumenda perferendis ex fugit praesentium debitis quae.</span>
                </div>

                {/* buttons for reports  */}
                <div className='flex gap-3'>

                  <div
                    className='border-2 border-blue-950 rounded-lg p-1 mt-4 w-24 text-center hover:shadow hover:shadow-blue-950'>
                    <button
                      className='text-base w-full h-full'>
                      Sonography </button>
                  </div>

                  <div
                    className='border-2 border-blue-950 rounded-lg p-1 mt-4 w-24 text-center hover:shadow hover:shadow-blue-950'>
                    <button
                      className='text-base w-full h-full'>
                      Lab report </button>
                  </div>

                </div>
              </div>

            </div>
          </main>
        </> : <>

          <div className='p-2 text-lg text-blue-950'>
            <h2>Search patient using Registraion number or scan the patinet card</h2>
          </div>
        </>

        }

      </div>
    </div>
  )
}

export default ViewPatient
