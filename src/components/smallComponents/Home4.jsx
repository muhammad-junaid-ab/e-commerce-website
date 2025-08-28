import React from 'react'

import IMG1 from '../img/IMG1.png'
import IMG2 from '../img/IMG2.png'
import IMG3 from '../img/IMG3.png'
import IMG4 from '../img/IMG4.png'
import Home4_Samll from './Home4_Samll'



const Home4 = () => {
    return (
        <div className='h-[518px] w-full relative top-20'>

            <div className='flex justify-between h-[108px] mb-15'>
                <div className='mx-10'>
                    <div className='flex items-center mb-3'>
                        <div className='h-10 w-5 rounded-sm bg-red-600'></div>
                        <span className='ml-4 text-xl font-bold text-red-600'>This Month</span>
                    </div>
                    <h2 className='text-5xl'>Best Selling Products</h2>
                </div>

                <button className='flex relative top-13 bg-red-600 text-white rounded-sm w-[159px] h-[56px] justify-center items-center mr-10 cursor-pointer hover:bg-white hover:text-red-600 hover:border'>View All</button>
            </div>

            <div className='h-[350px] flex ml-8 gap-5'>
                <Home4_Samll discount="-50%" title={"The North Coat"} prc1="100" disPrc='50' img={IMG1} style={' transform scale-120 relative left-17 top-2'} />
                <Home4_Samll discount="-20%" title={"Gucci duffle bag"} prc1="250" disPrc='200' img={IMG2} style={' transform scale-100 relative left-13 top-6'} />
                <Home4_Samll discount="-10%" title={"RGB liquid CPU Cooler"} prc1="500" disPrc='450' img={IMG3} style={' transform scale-120 relative left-13 top-15 '} />
                <Home4_Samll discount="-30%" title={"Small BookSelf"} prc1="900" disPrc='600' img={IMG4} style={' transform scale-90 relative left-17'} />
            </div>

        </div>
    )
}

export default Home4
