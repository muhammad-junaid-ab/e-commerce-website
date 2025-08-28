import React from 'react'
import RI from '../img/icons arrow-right.png'
import LI from '../img/icons_arrow-left.png'
import Home3_ScrollBar from './Home3_ScrollBar'
import C1 from '../img/Category-1.svg'
import C2 from '../img/Category-2.svg'
import C3 from '../img/Category-3.svg'
import C4 from '../img/Category-4.svg'
import C5 from '../img/Category-5.svg'
import C6 from '../img/Category-6.svg'

const Home3 = () => {
    return (
        <div className='h-[313px] w-full my-15'>
            <div className='flex justify-between h-[108px] mb-15'>
                <div className='mx-10'>
                    <div className='flex items-center mb-3'>
                        <div className='h-10 w-5 rounded-sm bg-red-600'></div>
                        <span className='ml-4 text-xl font-bold text-red-600'>Categories</span>
                    </div>
                    <h2 className='text-5xl'>Browse By Category</h2>
                </div>
                <div className='flex relative top-6'>
                    <img className='transform scale-45 relative left-10 rounded-[50%] cursor-pointer p-6 bg-gray-400' src={LI} />
                    <img className='transform scale-45 relative right-2 rounded-[50%] cursor-pointer p-6 bg-gray-400' src={RI} />
                </div>
            </div>

            <div className='w-full overflow-x-auto mb-15'>
                <div className='h-[145px] flex ml-10 flex-nowrap'>
                    <Home3_ScrollBar title="Phones" img={C1} />
                    <Home3_ScrollBar title="Computers" img={C2} />
                    <Home3_ScrollBar title="SmartWatch" img={C3} />
                    <Home3_ScrollBar title="Camera" img={C4} />
                    <Home3_ScrollBar title="HeadPhones" img={C5} />
                    <Home3_ScrollBar title="Gamming" img={C6} />
                    <Home3_ScrollBar title="Phones" img={C1} />
                    <Home3_ScrollBar title="Computers" img={C2} />
                    <Home3_ScrollBar title="SmartWatch" img={C3} />
                    <Home3_ScrollBar title="Camera" img={C4} />
                    <Home3_ScrollBar title="HeadPhones" img={C5} />
                    <Home3_ScrollBar title="Gamming" img={C6} />
                </div>
            </div>
            <hr />

        </div>

    )
}

export default Home3