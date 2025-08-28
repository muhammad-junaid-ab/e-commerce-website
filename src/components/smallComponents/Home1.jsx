import React from 'react'
import DropDwonIcon from '../img/drop-down-icon.png'
import MoblieImg from '../img/mob-icon.png'
import Frame1 from '../img/frame1-icon.png'
import AppleIcon from '../img/apple1.png'
import ArrowRight from '../img/arrow-right.png'


const Home1 = () => {
    return (
        <div>
            <hr />
            <div className='flex'>
                <ul className='w-[17%] ml-10 text-lg/10 relative mt-8'>
                    <li className='flex cursor-pointer hover:underline'>Woman’s Fashion <img className='tranform scale-60 relative top-0.5' src={DropDwonIcon} /></li>
                    <li className='flex cursor-pointer hover:underline'>Men’s Fashion <img className='tranform scale-60 relative top-0.5' src={DropDwonIcon} /></li>
                    <li className=' cursor-pointer hover:underline'>Electronics</li>
                    <li className=' cursor-pointer hover:underline'>Home & Lifestyle</li>
                    <li className=' cursor-pointer hover:underline'>Medicine</li>
                    <li className=' cursor-pointer hover:underline'>Sports & Outdoor</li>
                    <li className=' cursor-pointer hover:underline'>Baby’s & Toys</li>
                    <li className=' cursor-pointer hover:underline'>Groceries & Pets</li>
                    <li className=' cursor-pointer hover:underline'>Health & Beauty</li>
                </ul>
                <div className='w-[83%]  border-l border-black text-white'>

                    <div className='bg-black w-[92%] h-[88%] relative ml-10 mt-10 flex text-sm'>
                        <div className='w-[50%]'>
                            <div className='flex items-center relative left-16 my-4 top-12'>
                                <img className='mr-5' src={AppleIcon} />
                                <span>iphone 14 Series</span>
                            </div>
                            <div className='text-5xl/15 relative top-12 left-16 my-4 tracking-wide'>Up to 10% <br />off Voucher</div>
                            <div className='flex items-center cursor-pointer'>
                                <button className='relative top-12 left-16 my-4 pb-1 border-b cursor-pointer'>Shop Now</button>
                                <img className='relative top-13 left-16 my-4 mx-2' src={ArrowRight}/>
                            </div>
                        </div>
                        <img className='relative w-[50%] h-[90%] top-5' src={MoblieImg} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home1
