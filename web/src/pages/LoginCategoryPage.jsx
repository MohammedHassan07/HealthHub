import { useNavigate } from 'react-router-dom'
import logo from '../assets/icons/logo.png'
import BtnCategory from '../components/BtnCategory'
import { useContext, useState } from 'react'
import { CategoryContext } from '../context/CategoryContext'

const LoginCategoryPage = () => {

    const navigate = useNavigate()
    const categoryState = useContext(CategoryContext)
    // const [category, setCategory] = useState('')

    // handle btnCategory
    function handleBtnCategoryClick(e, categoryName) {
        e.preventDefault()

        // console.log(e, categoryName)
        // console.log(categoryState)

        categoryState.setCategory(categoryName)
        navigate('/login')
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
                        categoryName={'Hospital'} onClick={handleBtnCategoryClick}
                    />

                    <BtnCategory
                        categoryName={'Doctor'} onClick={handleBtnCategoryClick}
                    />

                    <BtnCategory
                        categoryName={'Pharma'} onClick={handleBtnCategoryClick}
                    />

                    <BtnCategory
                        categoryName={'LabAssistant'} onClick={handleBtnCategoryClick}
                    />

                </div>
            </div>

        </>
    )
}

export default LoginCategoryPage
