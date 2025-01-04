import React, { useReducer, useState } from 'react'
import Input from '../components/Input'
import user from '../assets/icons/user.png'
import isEmpty from '../utils/isEmpty'
import postRequest from '../services/postRequest'

const Createpatient = () => {

    const [success, setSuccess] = useState(false)

    const [message, setMessage] = useState('')

    const initialState = {
        patient_RN: '',
        patient_name: '',
        patient_mobile: '',
        password: '',
        patient_email: '',
        patient_address: '',
        patient_age: '',
        patient_gender: '',
        image: null,
        userType: 'patient'
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'SET_FIELD':
                return { ...state, [action.field]: action.value }
            case 'SET_IMG':
                return { ...state, image: action.file }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            dispatch({ type: 'SET_IMG', file })
        }
    }

    async function handleCreateProfile(e) {
        e.preventDefault()

        // console.log('Form Data:', state)

        if (state.image === null) {

            setMessage('image is required ...')
            setTimeout(() => setMessage(''), 2000)
            return
        }

        const { flag, error } = isEmpty(state)

        if (flag) {
            setMessage(error)
            setTimeout(() => setMessage(''), 2000)
            return
        }

        // console.log(state)

        const formData = new FormData()

        formData.append('image', state.image)
        formData.append('patient_RN', state.patient_RN)
        formData.append('patient_name', state.patient_name)
        formData.append('patient_mobile', state.patient_mobile)
        formData.append('password', state.password)
        formData.append('patient_email', state.patient_email)
        formData.append('patient_address', state.patient_address)
        formData.append('patient_age', state.patient_age)
        formData.append('patient_gender', state.patient_gender)
        formData.append('userType', state.userType)

        const response = await postRequest('/api/patient/create-profile', formData)
        if (response.flag) {

            setSuccess(true)
            console.log('Profile created Successfully', response.response.data.message)
            setMessage(response.response.data.message)
            setTimeout(() => setMessage(''), 2000)
        } else {

            setSuccess(false)
            console.log('Somthing went wrong', response)
            setMessage(response.response.message)
            setTimeout(() => setMessage(''), 2000)
        }
    }

    return (
        <>
            <main className='flex flex-col justify-center items-center'>
                <h2 className="mt-5 t-center text-2xl">Create Patient Profile</h2>
                <form className='w-3/4 flex flex-col justify-center items-center flex-wrap border-2 border-blue-950 rounded-lg p-3 mt-7'>
                    {message && (
                        <div className={success ? 'text-green-600' : 'text-red-700'}>
                            <span>{message}</span>
                        </div>
                    )}

                    <div className='flex justify-center items-center gap-36 w-full'>
                        <div>
                            <img
                                className='w-24 border-2 border-blue-950 rounded-lg'
                                src={state.image ? URL.createObjectURL(state.image) : user}
                                alt="Patient"
                            />
                            <input
                                className='mt-3'
                                type="file"
                                onChange={handleImageChange}
                            // accept='image/jpeg'
                            />
                        </div>
                        <div className='w-80'>
                            <Input
                                lable={'Aadhar Number'}
                                type={'text'}
                                placeholder={'Your Aadhar number'}
                                value={state.patient_RN}
                                inputChange={(e) => dispatch({ type: 'SET_FIELD', field: 'patient_RN', value: e.target.value })}
                            />
                            <Input
                                lable={'Full Name'}
                                type={'text'}
                                placeholder={'Your Name'}
                                value={state.patient_name}
                                inputChange={(e) => dispatch({ type: 'SET_FIELD', field: 'patient_name', value: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-36 w-full mt-4'>

                        <div className='w-72'>
                            <label>Address</label>
                            <textarea
                                className='w-full h-28 p-1 border-2 border-blue-950 rounded-lg focus:outline-none'
                                value={state.patient_address}
                                onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'patient_address', value: e.target.value })}
                            />
                        </div>

                        <div className='w-80'>
                            <Input
                                lable={'Mobile Number'}
                                type={'tel'}
                                placeholder={'Your Mobile number'}
                                value={state.patient_mobile}
                                inputChange={(e) => dispatch({ type: 'SET_FIELD', field: 'patient_mobile', value: e.target.value })}
                            />

                            <Input
                                lable={'Password'}
                                type={'text'}
                                placeholder={'Password'}
                                value={state.password}
                                inputChange={(e) => dispatch({ type: 'SET_FIELD', field: 'password', value: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className='flex justify-center items-center gap-36 w-full mt-4'>

                        <div className='w-72'>
                            <Input
                                lable={'Email Address'}
                                type={'email'}
                                placeholder={'Your Email'}
                                value={state.patient_email}
                                inputChange={(e) => dispatch({ type: 'SET_FIELD', field: 'patient_email', value: e.target.value })}
                            />

                            <Input
                                lable={'Age'}
                                type={'number'}
                                placeholder={'Age'}
                                value={state.patient_age}
                                inputChange={(e) => dispatch({ type: 'SET_FIELD', field: 'patient_age', value: e.target.value })}
                            />
                        </div>

                        <div>
                            <div className='w-80'>
                                <label>Gender</label>
                                <select
                                    className='w-full h-full p-1 border-2 border-blue-950 rounded-lg'
                                    value={state.patient_gender}
                                    onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'patient_gender', value: e.target.value })}
                                >
                                    <option value="">Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>

                            <div
                                className='w-80 bg-sky-300 rounded-lg p-1 mt-4 text-center hover:bg-blue-950 hover:text-white hover:shadow hover:shadow-blue-950'>
                                <button
                                    className='text-md w-full h-full'
                                    onClick={handleCreateProfile}>
                                    Create Profile
                                </button>
                            </div>
                        </div>

                    </div>


                </form>
            </main>
        </>
    )
}

export default Createpatient
