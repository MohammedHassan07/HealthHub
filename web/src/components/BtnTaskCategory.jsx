import React, { useContext, useEffect } from 'react'
import doctorImage from '../assets/icons/doctors.png'
import viewDoctorImage from '../assets/icons/view-doctors.png'
import patientImage from '../assets/icons/patient.png'
import viewPatientImage from '../assets/icons/person.png'
import pharmaImage from '../assets/icons/pharma.png'
import viewPharma from '../assets/icons/view-phrama.png'
import Lab from '../assets/icons/view-phrama.png'
import { Link } from 'react-router-dom'

const BtnTaskCategory = ({ taskName, imageType, path }) => {

    // console.log(taskName)
    return (
        <>

            <Link to={path} state={taskName}>
                <li
                    className='border-b-2 border-blue-950 p-2 text-xl text-blue-950 hover:shadow hover:shadow-blue-950 hover:cursor-pointer'>

                    <div className='flex items-center justify-start gap-6'>
                        <div>
                            <img className='w-14' src={getImage(imageType)} alt="" />
                        </div>
                        <div>
                            <span>
                                {taskName}
                            </span>
                        </div>
                    </div>

                </li>
            </Link>

        </>
    )
}

export default BtnTaskCategory

function getImage(imageType) {

    const image = {

        'Doctor': doctorImage,
        'viewDoctor': viewDoctorImage,
        'Patient': patientImage,
        'Pharma': pharmaImage,
        'viewPharma': viewPharma,
        'viewPatient': viewPatientImage,
        'Lab': Lab,
    }

    return image[imageType]
}
