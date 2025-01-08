import React from 'react'
import userImage from '../assets/icons/user.png'

const DoctorCard = () => {
    return (<div className='border-2 border-blue-950 rounded-lg flex items-start justify-start p-2 gap-5 mt-5'>

        <div className='border-2 border-blue-950'>
            <img className='w-24' src={userImage} alt="" />
        </div>

        <div className='mt-3'>

            <div>
                <span className='text-xl'>Name:</span>
                DoctorName
            </div>
            <div className='mt-2'>
                <span className='text-xl'>Registration / Licence :</span>
                RN021214
            </div>
        </div>

        <div className='mt-3'>

            <div>
                <span className='text-xl'>Email:</span>
                DoctorEmail
            </div>
            <div className='mt-2'>
                <span className='text-xl'>Mobile:</span>
                DoctorMobile
            </div>
        </div>

        <div className='mt-3'>

            <div>
                <span className='text-xl'>Qualification:</span>
                MBBS, MS (Neuro logist)
            </div>
            <div>
                <div className='flex justify-end items-center gap-4'>

                    <div
                        className='border-2 border-blue-950 rounded-lg p-1 mt-4 w-24 text-center hover:shadow hover:shadow-blue-950'>

                        <button className='text-base w-full h-full'>Update</button>
                    </div>
                    <div
                        className='border-2 border-blue-950 rounded-lg p-1 mt-4 w-24 text-center hover:shadow hover:shadow-blue-950'>

                        <button className='text-base w-full h-full'>Delete</button>
                    </div>
                </div>
            </div>

        </div>

    </div>

    )
}

export default DoctorCard
