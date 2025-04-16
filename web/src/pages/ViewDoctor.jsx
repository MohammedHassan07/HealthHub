import React, { useEffect, useState } from 'react'
import DoctorCard from '../components/DoctorCard'
import getRequest from '../services/getRequest'

const ViewDoctor = () => {

    const [doctorData, setDoctorData] = useState([{}])

    useEffect(() => {

        const fetchDoctorData = async () => {

            // const { data, status, message } = await getRequest('/api/view-doctors')
        }

        fetchDoctorData()

    })
    const doctor = {
        name: 'potter',
        registration: '123',
        email: 'potter@hogwardz.com',
        mobile: '1234',
        qualification: 'MS'
    }
    return (
        <div className='text-blue-950 flex flex-col justify-center items-center mt-5 mb-5 overflow-y-auto'>

            <DoctorCard doctor={doctor} />

            <DoctorCard doctor={doctor} />

            <DoctorCard doctor={doctor} />

            <DoctorCard doctor={doctor} />

            <DoctorCard doctor={doctor} />

            <DoctorCard doctor={doctor} />

            <DoctorCard doctor={doctor} />

            <DoctorCard doctor={doctor} />

            <DoctorCard doctor={doctor} />

            <DoctorCard doctor={doctor} />
        </div>
    )
}

export default ViewDoctor
