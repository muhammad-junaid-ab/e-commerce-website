import React from 'react'
import TopHeader from './smallComponents/TopHeader'
import HomeFooter from './smallComponents/Home_Footer'
import Navbar from './smallComponents/Navbar'
import ContactIcon from './img/contact.png'
import EmailIcon from './img/email.png'

const Contact = () => {
    return (
        <div>
            <TopHeader />
            <Navbar />
            <hr />

            <div className='flex gap-20'>

                <div className='w-[290px] h-[457px] shadow-[0px_0px_5px_#d9cdcc] ml-10 z-10 relative top-20'>
                    <div className='h-[366px] w-[270px] flex flex-col '>
                        <div className='w-[262px] h-[122px] relative top-12 left-10'>
                            <div className='w-[135px] h-[40px] flex items-center'>
                                <img className='bg-red-600 p-1.5 rounded-[40%] scale-100 ' src={ContactIcon} alt="" />
                                <div className='text-[16px] mx-1 font-bold'>Call To Us</div>
                            </div>
                            <div className='my-4 text-[13px]'>We are available 24/7, 7 days a week.</div>
                            <div className=' text-[13px]'>Phone: +923125252826</div>
                        </div>

                        <hr className='relative top-20 left-2' />

                        <div className='w-[262px] h-[122px] relative top-30 left-10'>
                            <div className='w-[135px] h-[40px] flex items-center'>
                                <img className='bg-red-600 p-1.5 rounded-[30%] scale-100 ' src={EmailIcon} alt="" />
                                <div className='text-[16px] mx-1 font-bold'>Write To US</div>
                            </div>
                            <div className='my-4 text-[13px]'>Fill out our form and we will contact <br /> you within 24 hours.</div>
                            <div className=' text-[13px] my-4'>Emails : junaidab313@gmail.com</div>
                            <div className=' text-[13px]'>Emails : somethings@gmail.com</div>
                        </div>
                    </div>
                </div>


                <div className='h-[457px] w-[820px] shadow-[0px_0px_5px_#d9cdcc] relative top-20 z-10'>
                    <div className='flex flex-col items-center gap-8 relative top-10'>
                        <div>
                            <input type='text' placeholder='Your Name' className='bg-gray-300 py-2 mx-2 pl-5 rounded-sm w-[235px]' />
                            <input type='email' placeholder='Your Email' className='bg-gray-300 py-2 mx-2 pl-5 rounded-sm w-[235px]' />
                            <input type='number' placeholder='Your Number' className='bg-gray-300 py-2 mx-2 pl-5 rounded-sm w-[235px]' />
                        </div>
                        <div className='h-[207px] w-[737px] bg-gray-300'>
                            <textarea placeholder='Your Message' className='bg-gray-300 w-[737px] h-[207px] p-2 rounded-sm'>
                            </textarea>
                        </div>
                    </div>
                    <div className='flex relative top-20 left-140'>
                        <button className='cursor-pointer h-[56px] w-[215px] text-white bg-red-600 rounded-sm font-bold'>Send Message</button>
                    </div>
                </div>
            </div>

            <div className='relative bottom-40'>
                                <HomeFooter />
            </div>

        </div>
    )
}

export default Contact
