import React from 'react'

const Input = ({ lable, type, placeholder, inputChange, value }) => {

    return (
        <div className="text-blue-950">
            <label>{lable}</label>

            <div className="mt-1">
                <input
                    className='w-full p-1 border-2 border-blue-950 rounded-lg focus:outline-none'
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={inputChange} />
            </div>
        </div>
    )
}

export default Input
