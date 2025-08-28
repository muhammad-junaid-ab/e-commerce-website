import React from 'react'

const TopHeader = () => {
    return (
        <div className='h-12 bg-black text-white flex items-center justify-between'>
            <div className='flex relative left-80 ml-5'>
                <p className='font-thin cursor-pointer'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <button className='underline font-bold mx-5 cursor-pointer'>ShopNow</button>
            </div>
            <div className='relative right-10'>
                <select>
                    <option>English</option>
                    <option>Urdu</option>
                    <option>German</option>
                </select>
            </div>

        </div>
    )
}

export default TopHeader
