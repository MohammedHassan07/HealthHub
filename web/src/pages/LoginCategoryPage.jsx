import logo from '../assets/icons/logo.png'
import BtnCategory from '../components/BtnCategory'


const LoginCategoryPage = () => {

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
            
        </>
    )
}

export default LoginCategoryPage
