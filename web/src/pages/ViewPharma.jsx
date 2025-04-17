import React, { useEffect, useState } from 'react'
import DoctorCard from '../components/DoctorCard'
import getRequest from '../services/getRequest'
import { ToastContainer } from 'react-toastify'
import search from '../assets/icons/search.png'
import notify from '../utils/toast'
import PharmaCard from '../components/PharmaCard'

const ViewPharma = () => {

    const [pharmaData, setPharmaData] = useState({})

    // handle input change
    // TODO: Add delay before making request to backend
    const handleInputChange = async (e) => {

        const pharma_RN = e.target.value

        const { data, status, message } = await getRequest(`/api/pharma/view-pharma/${pharma_RN}`)

        if (status !== 200) {

            console.log(status, message)
            notify(status, message)
            return
        }

        console.log(data.data)
        setPharmaData(data.data)
    }


    return (
        <>

            <div>
                <ToastContainer />

                {/* search doctor  */}
                <div className='w-full bg-blue-950 flex justify-between items-center p-2 gap-2'>

                    <div className='w-full'>
                        <input onChange={(e) => { handleInputChange(e) }} className='w-full border-2 border-blue-950 rounded-lg p-1 focus:outline-none' type="text" placeholder="Search Pharmacy by Name or Registration number" />
                    </div>

                    <div className='flex gap-2'>

                        <img className='w-8' src={search} alt="Search" />
                    </div>

                </div>

            </div>


            {Object.keys(pharmaData).length ? <>

                <div className='text-blue-950 flex flex-col justify-center items-center mt-5 mb-5 overflow-y-auto px-10'>

                    {pharmaData.map((pharma) => {
                        return (

                            <PharmaCard pharma={pharma} key={pharma._id} />
                        )
                    })}
                </div>
            </> : <>

                <div className='p-2 text-lg text-blue-950'>
                    <h2>Search Pharmacy using Registraion number or Name</h2>
                </div>

            </>}


        </>
    )
}

export default ViewPharma
