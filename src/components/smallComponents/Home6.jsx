import React from 'react'
import RI from '../img/icons arrow-right.png'
import LI from '../img/icons_arrow-left.png'
import Home6_Small from './Home6_Small'
import A1 from '../img/A1.png'
import A2 from '../img/A2.png'
import A3 from '../img/A3.png'
import A4 from '../img/A4.png'
import A5 from '../img/A5.png'
import A6 from '../img/A6.png'
import A7 from '../img/A7.png'
import A8 from '../img/A8.png'



const Home6 = () => {
    return (
        <div className='h-[900px]  mt-80'>
            <div className='h-[313px] w-full my-15'>
                <div className='flex justify-between h-[108px] mb-15'>
                    <div className='mx-10'>
                        <div className='flex items-center mb-3'>
                            <div className='h-10 w-5 rounded-sm bg-red-600'></div>
                            <span className='ml-4 text-xl font-bold text-red-600'>This Month</span>
                        </div>
                        <h2 className='text-5xl'>Best Selling Products</h2>
                    </div>
                    <div className='flex relative top-6'>
                        <img className='transform scale-45 relative left-10 rounded-[50%] cursor-pointer p-6 bg-gray-400' src={LI} />
                        <img className='transform scale-45 relative right-2 rounded-[50%] cursor-pointer p-6 bg-gray-400' src={RI} />
                    </div>
                </div>
            </div>

            <div className='h-[680px] flex relative bottom-51 flex-wrap ml-10 mr-8 gap-5'>
                <Home6_Small  title={"The North Coat"}  disPrc='80' img={A1} style={' transform scale-120 relative left-17 top-6'} />
                <Home6_Small  title={"Breed Dry Dog Food"}  disPrc='20' img={A2} style={' transform scale-80 relative left-17 top-6'} />
                <Home6_Small  title={"CANON EOS DSLR Camera"}  disPrc='650' img={A3} style={' transform scale-100 relative left-15 top-4'} />
                <Home6_Small  title={"ASUS FHD Gaming Laptop"}  disPrc='750' img={A4} style={' transform scale-100 relative left-13 top-6'} />
                <Home6_Small  title={"Kids Electric Car"}  disPrc='500' img={A5} style={' transform scale-100 relative left-8 top-8'} />
                <Home6_Small  title={"Jr. Zoom Soccer Cleats"}  disPrc='250' img={A6} style={' transform scale-100 relative left-9 top-4'} />
                <Home6_Small  title={"GP11 Shooter USB Gamepad"}  disPrc='40' img={A7} style={' transform scale-100 relative left-10 top-8'} />
                <Home6_Small  title={"Quilted Satin Jacket"}  disPrc='50' img={A8} style={' transform scale-100 relative left-10 top-4'} />
            </div>

            <div className=' flex items-center justify-center relative bottom-40'>
                <button className='w-[234px] h-[56px] bg-red-600 rounded-sm text-white font-bold hover:bg-red-800'>View All Products</button>
            </div>
        </div>
    )
}

export default Home6
