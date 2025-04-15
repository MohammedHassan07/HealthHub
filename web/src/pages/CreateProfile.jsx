import React, { useEffect, useReducer, useState } from 'react'
import Input from '../components/Input'
import user from '../assets/icons/user.png'
import isEmpty from '../utils/isEmpty'
import postRequest from '../services/postRequest'
import { useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import notify from '../utils/toast'

const CreateProfile = () => {
    const [message, setMessage] = useState('')
    const location = useLocation()
    const task = location.state || ''
    const [userType, setUserType] = useState('')
    const [endpoint, setEndpoint] = useState('')

    function reducer(state, action) {
        switch (action.type) {
            case 'SET_FIELD':
                return { ...state, [action.field]: action.value }
            case 'SET_IMG':
                return { ...state, image: action.file }
            case 'RESET':
                return action.payload
            default:
                return state
        }
    }

    function getInitialState(task) {
        switch (task) {
            case 'Create Doctor':
                return {
                    doctor_RN: '',
                    doctor_name: '',
                    doctor_mobile: '',
                    password: '',
                    doctor_email: '',
                    doctor_qualification: '',
                    doctor_gender: '',
                    image: null,
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
                }
            case 'Create Pharma':
                return {
                    pharma_RN: '',
                    pharma_name: '',
                    pharma_mobile: '',
                    password: '',
                    pharma_email: '',
                    owner_name: '',
                    pharma_qualification: '',
                    image: null,
                }
            default:
                return {}
        }
    }

    const [state, dispatch] = useReducer(reducer, getInitialState(task))

    useEffect(() => {
        let userType = ''
        let endpoint = ''
        let newState = {}

        switch (task) {
            case 'Create Doctor':
                userType = 'doctor'
                endpoint = '/api/doctor/create-profile'
                newState = getInitialState(task)
                break
            case 'Create Patient':
                userType = 'patient'
                endpoint = '/api/patient/create-profile'
                newState = getInitialState(task)
                break
            case 'Create Pharma':
                userType = 'pharma'
                endpoint = '/api/pharma/create-profile'
                newState = getInitialState(task)
                break
            default:
                newState = {}
        }

        setUserType(userType)
        setEndpoint(endpoint)
        dispatch({ type: 'RESET', payload: newState })
    }, [task])

    function appendFormData(states) {
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

    async function handleCreateProfile(e) {
        e.preventDefault()

        if (!state.image) {
            notify(400 ,'Image is required...')
            return
        }

        const { flag, error } = isEmpty(state)

        if (flag) {
            notify(400, error)
            return
        }

        const formData = appendFormData(state)
        const { data, status, message } = await postRequest(endpoint, formData)

        notify(status, message)

    }

    function renderInputs() {
        const fields = Object.keys(state).filter(key => key !== 'image')
        const inputs = []

        for (let key of fields) {
            const label = key.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())

            if (key.toLowerCase().includes('gender')) {
                inputs.push(
                    <div key={key} className="flex flex-col w-full md:w-[48%]">
                        <label className="mb-1">{label}</label>
                        <select
                            value={state[key]}
                            onChange={(e) => dispatch({ type: 'SET_FIELD', field: key, value: e.target.value })}
                            className="border border-gray-400 p-2 rounded"
                        >
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                )
            } else if (key.toLowerCase().includes('address') || key.toLowerCase().includes('qualification')) {
                inputs.push(
                    <div key={key} className="flex flex-col w-full">
                        <label className="mb-1">{label}</label>
                        <textarea
                            value={state[key]}
                            onChange={(e) => dispatch({ type: 'SET_FIELD', field: key, value: e.target.value })}
                            className="border border-gray-400 p-2 rounded h-24"
                            placeholder={label}
                        />
                    </div>
                )
            } else {
                inputs.push(
                    <div key={key} className="flex flex-col w-full md:w-[48%]">
                        <Input
                            lable={label}
                            type={key.toLowerCase().includes('password') ? 'password' : 'text'}
                            value={state[key]}
                            placeholder={label}
                            inputChange={(e) => dispatch({ type: 'SET_FIELD', field: key, value: e.target.value })}
                        />
                    </div>
                )
            }
        }

        return inputs
    }

    return (
        <main className="flex flex-col items-center justify-center p-4">
            <h2 className="text-2xl font-bold mb-4">{task} Profile</h2>

            <form
                className="w-full max-w-5xl border-2 border-blue-950 rounded-lg p-6 flex flex-col gap-6"
                onSubmit={handleCreateProfile}
            >
                {/* Image Upload */}
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <img
                        className="w-24 h-24 border-2 border-blue-950 rounded object-cover"
                        src={state.image ? URL.createObjectURL(state.image) : user}
                        alt="profile"
                    />
                    <input
                        className="w-full md:w-1/2"
                        type="file"
                        onChange={handleImageChange}
                    />
                </div>

                {/* Input Fields */}
                <div className="flex flex-wrap gap-4">
                    {renderInputs()}
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-950 text-white px-6 py-2 rounded hover:bg-sky-300 transition"
                    >
                        Create Profile
                    </button>
                </div>

            </form>

            <ToastContainer />
        </main>
    )
}

export default CreateProfile
