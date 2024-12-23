import React, { useState } from 'react'
import isEmpty from '../utils/isEmpty'
import postRequest from '../services/postRequest'
import getRequest from '../services/getRequest'

{/* login form  */ }
const LoginForm = ({ category }) => {

    const [registrationNumber, setRegistrationNumber] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    // handle login
    async function handleLogin(e) {

        e.preventDefault()
        // console.log(registrationNumber, password)

        // check empty fields and display message
        const data = { registrationNumber, password }

        const { flag, error } = isEmpty(data)
        if (flag) {

            setMessage(error)
            setTimeout(() => { setMessage('') }, 2000)
        }
        else {

            // make network request
            console.log('network')
            postRequest('/hospital/login', data)
         
        }

    }

    // handle onchange
    function handleOnChange(e, inputType) {

        inputType === 'registraion' ? setRegistrationNumber(e.target.value) : setPassword(e.target.value)
    }

    return (
        <>
            < div className='border-2 border-blue-950 rounded-lg w-1/2 p-4' >
                <div className=''>
                    <div>
                        <h2 className='text-3xl font-medium'>{category} Log in</h2>
                    </div>
                </div>

                <form className='mt-4'>

                    {message ?
                        <div className='text-red-700'>
                            <h3></h3>
                            <span>{message}</span>
                        </div>
                        : ''}


                    <div>
                        <label>Registraition / License Number</label>
                        <div className=''>
                            <input
                                className='p-1 px-3 border-2 border-blue-950 rounded-lg w-full focus:outline-none' type="text" placeholder="Your number"
                                onChange={(e) => handleOnChange(e, 'registraion')} />
                        </div>
                    </div>

                    <div className='mt-5'>
                        <label>Password</label>
                        <div className=''>

                            <input
                                className='p-1 px-3 border-2 border-blue-950 rounded-lg w-full focus:outline-none' type="password" placeholder="Your Password"
                                onChange={(e) => handleOnChange(e, 'password')} />
                        </div>
                    </div>
                    {/* <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ipsa.</p>
                    </div> */}
                    <div>
                        <button
                            className='p-1 text-sm w-28 bg-blue-950 outline-none border-2 border-blue-950 rounded-lg text-white mt-4' onClick={handleLogin}>Login</button>
                    </div>
                </form>
            </div >
        </>
    )
}

export default LoginForm
