import React from 'react'

const Input = ({ lable, type, placeholder }) => {

    return (
        <div className="w-52 text-blue-950">
            <label>{lable}</label>

            <div className="mt-1">
                <input className='p-1 border-2 border-blue-950 rounded-lg focus:outline-none' type={type} placeholder={placeholder} />
            </div>
        </div>
    )
}

export default Input
