import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CategoryContext } from '../context/CategoryContext'
import logout from '../assets/icons/logout.png'

const Navbar = () => {

    const categoryState = useContext(CategoryContext)
    const navigate = useNavigate()

    // logout
    function handleLogout() {

        console.log('logout')
        localStorage.removeItem('tokenData')
        navigate('/')
    }
    return (

        <div
            className='flex items-center justify-between h-16 px-10 bg-blue-950 text-white sticky top-0 z-10'>

            <div>
                <div className='bg-blue-950 text-white p-2'>

                    <div>
                        <h3>MedVistat</h3>
                    </div>

                    <div>
                        <h5>Version 1.0.0</h5>
                    </div>

                </div>
            </div>
            <div>

                <ul className='flex items-center justify-center gap-32'>

                    <li className='hover:cursor-pointer'>
                        <Link
                            to={`/${categoryState.category}`}>
                            Home
                        </Link>
                    </li>

                    <li className='hover:cursor-pointer'>
                        <Link
                            to={'/About'}>
                            About
                        </Link>
                    </li>

                    <li className='hover:cursor-pointer'>
                        <Link
                            to={'/contact'}>
                            Contact
                        </Link>
                    </li>


                    <li className='hover:cursor-pointer'>
                        Profile
                    </li>
                </ul>
            </div>

            <div>

                <img
                    className='w-7 hover:cursor-pointer'
                    src={logout} alt="logout"
                    onClick={handleLogout} />
            </div>

        </div>


    )
}

export default Navbar
