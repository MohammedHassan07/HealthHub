import React from 'react'
import { Link } from 'react-router-dom'

const BtnCategory = ({ categoryName, onClick }) => {
    return (

        <div
            className='border-2 border-blue-950 p-3 rounded-lg mt-4 w-72 text-center hover:shadow hover:shadow-blue-950'>
            <button
                className='text-xl w-full h-full' onClick={(e) => onClick(e, categoryName)} >

                {categoryName}

            </button>
        </div>
    )
}

export default BtnCategory
