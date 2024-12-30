import React from 'react'
import Input from '../components/Input'

const Createpatient = () => {
    return (

        <>

            <main className='flex flex-col justify-center items-center'>
                <h2 className="mt-2 t-center text-2xl">Create Patient Profile</h2>

                <form className="mt-5 flex flex-col justify-center items-center flex-wrap gap-7">

                    <Input
                        lable={'Aadhar Number'}
                        type={'text'}
                        placeholder={'Your Aadhar number'} />

                    <Input
                        lable={'Full Name'}
                        type={'text'}
                        placeholder={'Your Name'} />

                    <Input
                        lable={'Mobile Number'}
                        type={'tel'}
                        placeholder={'Your mobile number'} />

                    <Input
                        lable={'Email Address'}
                        type={'email'}
                        placeholder={'Your Email'} />


                    <Input
                        lable={'Age'}
                        type={'number'}
                        placeholder={'Age'} />

                    <div className="w-52">
                        <div>

                            <label>Gender</label>
                        </div>
                        <div className='mt-1 border-2 border-blue-950 rounded-lg '>

                            <select className='w-full h-full'>
                                <option className='' value="gender">Gender</option>
                                <option className='' value="male">Male</option>
                                <option className='' value="female">Female</option>
                            </select>
                        </div>
                    </div>

                    <div className='w-52'>
                        <div>

                            <label>Address</label>
                        </div>
                        <div>

                            <textarea className='w-full border-2 border-blue-950 rounded-lg'></textarea>
                        </div>
                    </div>


                    {/* <div className="wp-93">
                        <label>Address</label>
                        <div className="mt-5 flex sp-between">

                            <div>

                                <textarea id="address" cols="100" rows="13" placeholder="Address"></textarea>
                            </div>
                            <div className="patient-img-container">
                                <div>

                                    <img id="patient-img" src="../static/icons/person.png" alt="" />
                                </div>
                                <div className="mt-12">

                                    <input id="input-image" type="file" accept="image/JPG, image/JPEG" />
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="btn-container flex">

                        <div>
                            <button className="btn btn-cancel">Cancel</button>
                        </div>

                        <div>
                            <button className="btn btn-submit">Create Profile</button>
                        </div>
                    </div>


                </form>
            </main>

        </>
    )
}

export default Createpatient
