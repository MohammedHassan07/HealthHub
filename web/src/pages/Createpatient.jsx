import React, { useReducer, useState } from 'react'
import Input from '../components/Input'
import user from '../assets/icons/user.png'
import isEmpty from '../utils/isEmpty'

const Createpatient = () => {

    const [message, setMessage] = useState('')

    const initialState = {
        adhaar: '',
        name: '',
        mobile: '',
        email: '',
        address: '',
        age: '',
        gender: '',
        image: null
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

    const handleCreateProfile = (e) => {
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
        console.log('network ')
    }

    return (
        <>
            <main className='flex flex-col justify-center items-center'>
                <h2 className="mt-5 t-center text-2xl">Create Patient Profile</h2>
                <form className='w-3/4 flex flex-col justify-center items-center flex-wrap border-2 border-blue-950 rounded-lg p-3 mt-7'>
                    {message && (
                        <div className='text-red-700'>
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
                                value={state.adhaar}
                                inputChange={(e) => dispatch({ type: 'SET_FIELD', field: 'adhaar', value: e.target.value })}
                            />
                            <Input
                                lable={'Full Name'}
                                type={'text'}
                                placeholder={'Your Name'}
                                value={state.name}
                                inputChange={(e) => dispatch({ type: 'SET_FIELD', field: 'name', value: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-36 w-full mt-4'>
                        <div>
                            <label>Address</label>
                            <textarea
                                className='w-72 h-28 p-1 border-2 border-blue-950 rounded-lg focus:outline-none'
                                value={state.address}
                                onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'address', value: e.target.value })}
                            />
                        </div>
                        <div className='w-80'>
                            <Input
                                lable={'Mobile Number'}
                                type={'tel'}
                                placeholder={'Your mobile number'}
                                value={state.mobile}
                                inputChange={(e) => dispatch({ type: 'SET_FIELD', field: 'mobile', value: e.target.value })}
                            />
                            <Input
                                lable={'Email Address'}
                                type={'email'}
                                placeholder={'Your Email'}
                                value={state.email}
                                inputChange={(e) => dispatch({ type: 'SET_FIELD', field: 'email', value: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-36 w-full mt-4'>

                        <div className='w-72'>
                            <Input
                                lable={'Age'}
                                type={'number'}
                                placeholder={'Age'}
                                value={state.age}
                                inputChange={(e) => dispatch({ type: 'SET_FIELD', field: 'age', value: e.target.value })}
                            />
                        </div>

                        <div className='w-80'>
                            <label>Gender</label>
                            <select
                                className='w-full h-full border-2 border-blue-950 rounded-lg'
                                value={state.gender}
                                onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'gender', value: e.target.value })}
                            >
                                <option value="">Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>

                    <div className='w-40 bg-sky-300 rounded-lg p-1 mt-4 text-center hover:bg-blue-950 hover:text-white hover:shadow hover:shadow-blue-950'>
                        <button className='text-md w-full h-full' onClick={handleCreateProfile}>
                            Create Profile
                        </button>
                    </div>

                </form>
            </main>
        </>
    )
}

export default Createpatient
