import React, { useContext, useEffect, useState } from 'react'
import isEmpty from '../utils/isEmpty'
import postRequest from '../services/postRequest'
import { useNavigate } from 'react-router-dom'
import { CategoryContext } from '../context/CategoryContext'

const LoginForm = () => {

    const navigate = useNavigate()

    const [registrationNumber, setRegistrationNumber] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const categoryState = useContext(CategoryContext)

    useEffect(() => {

        // console.log(categoryState)
        const tokenData = localStorage.getItem('tokenData')

        if (tokenData) {

            const { token } = JSON.parse(tokenData)
            console.log('Token found:', token)
            navigate(`/${categoryState.category}-dashboard`)
        }
    }, [])

    // handle login TODO: Lab assistant login needs to implement
    async function handleLogin(e) {
        e.preventDefault()

        const data = { registrationNumber, password }
        const { flag, error } = isEmpty(data)

        if (flag) {
            setMessage(error)
            setTimeout(() => setMessage(''), 2000)
            return
        }

        const [endPoint, registrationType] = getUserType(categoryState.category)
        console.log(endPoint)

        let loginData = {}

        loginData[registrationType] = registrationNumber
        loginData.password = password
       
        console.log(loginData)
        const response = await postRequest(endPoint, loginData)
        if (response.flag) {

            const token = response.response.data.data.token
            localStorage.setItem('tokenData', JSON.stringify({ token }))

            navigate(`/${categoryState.category}-dashboard`)
        } else {
            console.log('Login failed:', response)
            setMessage(response.response.message)
            setTimeout(() => setMessage(''), 2000)
        }
    }

    function getUserType(type) {

        const apiEndPoints = {
            'Hospital': '/api/hospital/login',
            'Pharma': '/api/pharma/login',
            'Doctor': '/api/doctor/login',
            'LabAssistant': '/api/assistant/login',
        }

        const registrationType = {

            'Hospital': 'hospital_RN',
            'Pharma': 'pharma_RN',
            'Doctor': 'doctor_RN',
            'LabAssistant': 'lab_RN',
        }

        return [apiEndPoints[type], registrationType[type]]
    }

    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <div className='border-2 border-blue-950 rounded-lg w-1/3 p-4'>
                <h2 className='text-3xl font-medium'>{categoryState.category} Log in</h2>
                <form className='mt-4'>
                    {message && (
                        <div className='text-red-700'>
                            <span>{message}</span>
                        </div>
                    )}
                    <div>
                        <label>Registration / License Number</label>
                        <input
                            className='p-1 px-3 border-2 border-blue-950 rounded-lg w-full focus:outline-none'
                            type='text'
                            placeholder='Your number'
                            value={registrationNumber}
                            onChange={(e) => setRegistrationNumber(e.target.value)}
                        />
                    </div>
                    <div className='mt-5'>
                        <label>Password</label>
                        <input
                            className='p-1 px-3 border-2 border-blue-950 rounded-lg w-full focus:outline-none'
                            type='password'
                            placeholder='Your Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        className='p-1 text-sm w-28 bg-blue-950 outline-none border-2 border-blue-950 rounded-lg text-white mt-4'
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
