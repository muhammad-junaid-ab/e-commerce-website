import React from 'react'

const Home3_ScrollBar = ({title, img}) => {
    return (

            <div className='h-full w-[170px]  flex flex-col justify-center items-center border-1 mr-12 cursor-pointer hover:bg-red-600 shrink-0 rounded-sm'>
                <img className='text-white' src={img} />
                <h3 className='text-lg'>{title}</h3>
            </div>
    )
}

export default Home3_ScrollBar
