import React, { useState } from 'react'
import logo from '../assets/icons/logo.png'
import BtnCategory from '../components/BtnCategory'
import LoginForm from '../components/LoginForm'




const LoginPage = () => {

    const [category, setCategory] = useState('')

    // category click handler
    function handleCategoryClick(categoryName) {

        console.log(categoryName)

        setCategory(categoryName)

    }
    return (
        <>

            <div className='flex h-screen w-screen justify-center items-center gap-80'>
                <div>
                    <img className="w-72" src={logo} alt="" />
                </div>

                <div >
                    <h1 className='text-4xl font-bold text-blue-950'>Log in as a</h1>

                    <BtnCategory
                        categoryName={'Hospital'}
                        handleCategoryClick={handleCategoryClick} />

                    <BtnCategory
                        categoryName={'Doctor'}
                        handleCategoryClick={handleCategoryClick} />

                    <BtnCategory
                        categoryName={'Pharmacists'}
                        handleCategoryClick={handleCategoryClick} />

                    <BtnCategory
                        categoryName={'LabAssistant'}
                        handleCategoryClick={handleCategoryClick} />

                </div>
            </div>
            {category === 'Hospital' && <LoginForm category={category} />}

            {category === 'Doctor' && <LoginForm category={category} />}

            {category === 'Pharmacists' && <LoginForm category={category} />}

            {category === 'LabAssistant' && <LoginForm category={category} />}
            <div>
            </div>

        </>
    )
}

export default LoginPage
