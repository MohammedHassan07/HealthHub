import React, { useEffect, useReducer, useState } from 'react'
import Input from '../components/Input'
import user from '../assets/icons/user.png'
import isEmpty from '../utils/isEmpty'
import postRequest from '../services/postRequest'
import { useLocation } from 'react-router-dom'

const CreateDoctor = () => {
    const [success, setSuccess] = useState(false)
    const [message, setMessage] = useState('')
    const [task, setTask] = useState('')
    const location = useLocation()
    let userType = ''

    // reducer function
    function reducer(state, action) {
        switch (action.type) {
            case 'SET_FIELD':
                return { ...state, [action.field]: action.value }
            case 'SET_IMG':
                return { ...state, image: action.file }
            default:
                return state
        }
    }

    useEffect(() => {
        setTask(location.state)
    }, [location.state])

    const initialState = updateState(task)
    const [state, dispatch] = useReducer(reducer, initialState)

    // state based on the task
    function updateState(task) {
        switch (task) {
            case 'Create Doctor':

                userType = 'doctor'
                return {
                    doctor_RN: '',
                    doctor_name: '',
                    doctor_mobile: '',
                    password: '',
                    doctor_email: '',
                    doctor_qualification: '',
                    doctor_gender: '',
                    image: null,
                    userType: 'doctor',
                }
            case 'Create Patient':
                return {
                    patient_RN: '',
                    patient_name: '',
                    patient_mobile: '',
                    password: '',
                    patient_email: '',
                    patient_address: '',
                    patient_age: '',
                    patient_gender: '',
                    image: null,
                    userType: 'patient',
                }
            case 'Create Pharma':
                return { pharma_RN: '' }
            default:
                return {}
        }
    }

    // function to append data in formData
    function appendFormData(states) {
        console.log(states)
        const formData = new FormData()
        for (let key in states) {
            formData.append(key, states[key])
        }
        formData.append('userType', userType)
        return formData
    }


    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            dispatch({ type: 'SET_IMG', file })
        }
    }

    // handle create profile
    async function handleCreateProfile(e) {
        e.preventDefault()

        if (!state.image) {
            setMessage('Image is required...')
            setTimeout(() => setMessage(''), 2000)
            return
        }

        const { flag, error } = isEmpty(state)

        if (flag) {
            setMessage(error)
            setTimeout(() => setMessage(''), 2000)
            return
        }

        const formData = appendFormData(state)
        console.log(formData)
        const response = await postRequest('/api/doctor/create-profile', formData)

        if (response.flag) {
            setSuccess(true)
            setMessage(response.response.data.message)
        } else {
            setSuccess(false)
            setMessage(response.response.message)
        }
        setTimeout(() => setMessage(''), 2000)
    }

    // function to render input in form based on the task
    function renderInputsBasedOnTask(task, state) {
        const formConfig = {
            'Create Doctor': [
                { label: 'Licence / Registration Number', field: 'doctor_RN', type: 'text', placeholder: 'Your Aadhar number' },
                { label: 'Full Name', field: 'doctor_name', type: 'text', placeholder: 'Your Name' },
                { label: 'Mobile Number', field: 'doctor_mobile', type: 'tel', placeholder: 'Your Mobile number' },
                { label: 'Password', field: 'password', type: 'password', placeholder: 'Password' },
                { label: 'Email Address', field: 'doctor_email', type: 'email', placeholder: 'Your Email' },
                { label: 'Gender', field: 'doctor_gender', type: 'select', options: ['Male', 'Female'] },
                { label: 'Qualification', field: 'doctor_qualification', type: 'textarea' },
            ],
            'Create Patient': [
                { label: 'Aadhar Number', field: 'patient_RN', type: 'text', placeholder: 'Your Aadhar number' },
                { label: 'Full Name', field: 'patient_name', type: 'text', placeholder: 'Your Name' },
                { label: 'Address', field: 'patient_address', type: 'textarea' },
                { label: 'Mobile Number', field: 'patient_mobile', type: 'tel', placeholder: 'Your Mobile number' },
                { label: 'Password', field: 'password', type: 'password', placeholder: 'Password' },
                { label: 'Email Address', field: 'patient_email', type: 'email', placeholder: 'Your Email' },
                { label: 'Gender', field: 'patient_gender', type: 'select', options: ['Male', 'Female'] },
            ],
        }

        const config = formConfig[task] || []
        return config.map((input, index) => {

            // input type select
            if (input.type === 'select') {
                return (
                    <div key={index} className="w-80">
                        <label>{input.label}</label>
                        <select
                            className="w-full h-full p-1 border-2 border-blue-950 rounded-lg"
                            value={state[input.field]}
                            onChange={(e) => dispatch({ type: 'SET_FIELD', field: input.field, value: e.target.value })}
                        >
                            <option value="">Select</option>
                            {input.options.map((option, idx) => (
                                <option key={idx} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                )
            }

            // input type textarea
            if (input.type === 'textarea') {
                return (
                    <div key={index} className="w-80">
                        <label>{input.label}</label>
                        <textarea
                            className="w-full h-28 p-1 border-2 border-blue-950 rounded-lg focus:outline-none"
                            placeholder={input.placeholder}
                            value={state[input.field]}
                            onChange={(e) => dispatch({ type: 'SET_FIELD', field: input.field, value: e.target.value })}
                        />
                    </div>
                )
            }
            return (

                // input type text 
                <div key={index} className="w-80">
                    <Input
                        lable={input.label}
                        type={input.type}
                        placeholder={input.placeholder}
                        value={state[input.field]}
                        inputChange={(e) => dispatch({ type: 'SET_FIELD', field: input.field, value: e.target.value })}
                    />
                </div>
            )
        })
    }

    return (
        <main className="flex flex-col justify-center items-center">
            <h2 className="mt-5 text-center text-2xl">{task || 'Create Profile'}</h2>
            <form
                className="w-3/5 flex flex-col justify-center items-center border-2 border-blue-950 rounded-lg p-3 mt-7 mb-8">

                {message && (
                    <div className={success ? 'text-green-600' : 'text-red-700'}>
                        <span>{message}</span>
                    </div>
                )}

                <div className="flex flex-col justify-center items-center w-full">
                    <div className='flex flex-col justify-center items-center'>
                        <img
                            className="w-24 border-2 border-blue-950 rounded-lg"
                            src={state.image ? URL.createObjectURL(state.image) : user}
                            alt="profile"
                        />
                        <input
                            className='mt-3 w-52'
                            type="file"
                            onChange={handleImageChange}
                        />
                    </div>
                    <div className="mt-6">
                        {renderInputsBasedOnTask(task, state)}
                    </div>
                </div>
                <div
                    className='w-80 bg-sky-300 rounded-lg p-1 mt-4 text-center hover:bg-blue-950 hover:text-white hover:shadow hover:shadow-blue-950'>
                    <button
                        className='text-md w-full h-full'
                        onClick={handleCreateProfile}>
                        Create Profile
                    </button>
                </div>

            </form>
        </main>
    )
}

export default CreateDoctor
