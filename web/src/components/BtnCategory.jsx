import React from 'react'

const BtnCategory = ({ categoryName, handleCategoryClick }) => {
    return (

        <div
            className='border-2 border-blue-950 p-3 rounded-lg mt-4 w-72 text-center hover:shadow hover:shadow-blue-950'>
            <button
                className='text-xl '
                onClick={() => { handleCategoryClick(categoryName) }}> {categoryName}
            </button>
        </div>
    )
}

export default BtnCategory
