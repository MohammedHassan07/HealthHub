import React from 'react'
import Input from '../components/Input'
import user from '../assets/icons/user.png'

const Createpatient = () => {

    function handleCreateProfile(e) {

        e.preventDefault()
        console.log('create')
    }
    return (

        <>

            <main className='flex flex-col justify-center items-center'>
                <h2 className="mt-2 t-center text-2xl">Create Patient Profile</h2>

                <form className='mt-5 flex flex-col justify-center items-center flex-wrap border-2 border-blue-950 rounded-lg w-4/6 p-3'>

                    <div className='flex justify-evenly items-center gap-7 w-full'>

                        <div>
                            <img className='w-24 border-2 border-blue-950 rounded-lg' src={user} />
                            <input className='w-24' type="file" accept='JPEG' placeholder='none' />
                        </div>

                        <div>
                            <Input
                                lable={'Aadhar Number'}
                                type={'text'}
                                placeholder={'Your Aadhar number'} />

                            <Input
                                lable={'Full Name'}
                                type={'text'}
                                placeholder={'Your Name'} />
                        </div>
                    </div>

                    <div className='flex justify-evenly items-center gap-7 w-full'>

                        <div>
                            <div className=''>

                                <label>Address</label>
                                <div>
                                    <textarea className='w-full border-2 border-blue-950 rounded-lg'></textarea>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Input
                                lable={'Mobile Number'}
                                type={'tel'}
                                placeholder={'Your mobile number'} />

                            <Input
                                lable={'Email Address'}
                                type={'email'}
                                placeholder={'Your Email'} />
                        </div>
                    </div>



                    <div className='flex justify-evenly items-center gap-7 w-full'>

                        <div>
                            <Input
                                lable={'Age'}
                                type={'number'}
                                placeholder={'Age'} />
                        </div>

                        <div>
                            <div className='w-52'>

                                <label>Gender</label>
                                <div className='mt-1 border-2 border-blue-950 rounded-lg '>

                                    <select className='w-full h-full'>
                                        <option className='' value="gender">Gender</option>
                                        <option className='' value="male">Male</option>
                                        <option className='' value="female">Female</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* buttons */}
                    <div className='flex justify-center items-center gap-44'>
                        {/* 
                        <div
                            className='bg-sky-300 rounded-lg p-1 mt-4 text-center hover:bg-blue-950  hover:text-white w-32'>

                            <button
                                className='text-md w-full h-ful'>Cancel</button>
                        </div> */}

                        <div
                            className='w-40 bg-sky-300 rounded-lg p-1 mt-4  text-center hover:bg-blue-950 hover:text-white hover:shadow hover:shadow-blue-950'>
                           
                            <button
                                className='text-md w-full h-full' 
                                onClick={handleCreateProfile}>
                                Create Profile</button>
                        </div>

                    </div>


                </form>
            </main>

        </>
    )
}

export default Createpatient
