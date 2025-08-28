import React from 'react'
import AA1 from '../img/AA1.png'
import AA2 from '../img/AA2.png'
import AA3 from '../img/AA3.png'

const Home8 = () => {
    return (
        <div className='relative top-60 h-[161px] flex justify-center items-center gap-10'>
            <div className='flex flex-col justify-center items-center'>

                <div className='w-[80px] h-[80px] bg-gray-300 hover:bg-gray-500 rounded-[50%] flex justify-center items-center mb-4'>
                    <div className='w-[58px] h-[58px] bg-black rounded-[50%] flex justify-center items-center'>
                        <img src={AA3} />
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-xl font-bold mb-1'>FREE AND FAST DELIVERY</div>
                    <div>Free delivery for all orders over $140</div>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <div className='w-[80px] h-[80px] bg-gray-300 hover:bg-gray-500 rounded-[50%] flex justify-center items-center mb-4'>
                    <div className='w-[58px] h-[58px] bg-black rounded-[50%] flex justify-center items-center'>
                        <img src={AA2} />
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-xl font-bold mb-1'>24/7 CUSTOMER SERVICE</div>
                    <div>Friendly 24/7 customer support</div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-[80px] h-[80px] bg-gray-300 hover:bg-gray-500 rounded-[50%] flex justify-center items-center mb-4'>
                    <div className='w-[58px] h-[58px] bg-black rounded-[50%] flex justify-center items-center'>
                        <img src={AA1} />
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-xl font-bold mb-1'>MONEY BACK GUARANTEE</div>
                    <div>We reurn money within 30 days</div>
                </div>
            </div>
        </div>
    )
}

export default Home8
