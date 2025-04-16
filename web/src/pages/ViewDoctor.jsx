import React, { useEffect, useState } from 'react'
import DoctorCard from '../components/DoctorCard'
import getRequest from '../services/getRequest'
import { ToastContainer } from 'react-toastify'
import search from '../assets/icons/search.png'
import notify from '../utils/toast'

const ViewDoctor = () => {

    const [doctorData, setDoctorData] = useState([{}])

    // handle input change
    // TODO: Add delay before making request to backend
    const handleInputChange = async (e) => {

        const doctor_RN = e.target.value

        const { data, status, message } = await getRequest(`/api/doctor/view-doctors/${doctor_RN}`)

        if (status !== 200) {

            console.log(status, message)
            notify(status, message)
            return
        }

        console.log(data.data)
        setDoctorData(data.data)
    }


    return (
        <>

            <div>
                <ToastContainer />

                {/* search doctor  */}
                <div className='w-full bg-blue-950 flex justify-between items-center p-2 gap-2'>

                    <div className='w-full'>
                        <input onChange={(e) => { handleInputChange(e) }} className='w-full border-2 border-blue-950 rounded-lg p-1 focus:outline-none' type="text" placeholder="Search Doctor by Name or Registration number" />
                    </div>

                    <div className='flex gap-2'>

                        <img className='w-8' src={search} alt="Search" />
                    </div>

                </div>

            </div>


            {doctorData ? <>

                <div className='text-blue-950 flex flex-col justify-center items-center mt-5 mb-5 overflow-y-auto'>

                    {doctorData.map((doctor) => {
                        return (

                            <DoctorCard doctor={doctor} key={doctor._id} />
                        )
                    })}
                </div>
            </> : <>

                <h1>no</h1>

            </>}


        </>
    )
}

export default ViewDoctor
