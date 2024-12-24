import React from 'react'

{/* login form  */ }
const LoginForm = (category) => {
    return (
        <>
            < div className='border-2 border-blue-950 rounded-lg w-1/2 p-4' >
                <div className=''>
                    <div>
                        <span className='text-2xl font-medium'>Log in</span>
                    </div>
                </div>

                <form className=''>
                    <h2>{category}</h2>

                    {/* <div className="error-container warning-text">
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, iure.</span>
                    </div> */}

                    <div>
                        <label>Registraition / License Number</label>
                        <div className="mt-5">
                            <input className='p-1 border-2 border-blue-950 rounded-lg w-full' type="text" placeholder="Your number" />
                        </div>
                    </div>

                    <div>
                        <label>Password</label>
                        <div className="mt-5">

                            <input className='p-1 border-2 border-blue-950 rounded-lg' type="password" placeholder="Your Password" />
                        </div>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ipsa.</p>
                    </div>
                    <div>
                        <button className="btn btn-submit">Login</button>
                    </div>
                </form>
            </div >
        </>
    )
}

export default LoginForm
