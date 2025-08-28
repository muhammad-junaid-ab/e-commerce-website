import React from 'react'
import BG1 from '../img/bg1.png'
import BG2 from '../img/bg2.png'
import BG3 from '../img/bg3.png'
import BG4 from '../img/bg4.png'

const Home7 = () => {
    return (
        <div className='h-[768px]  relative top-35'>
            <div className='mx-8'>
                <div className='flex items-center text-[16px] text-red-600 '>
                    <div className='h-[40px] w-[20px] bg-red-600 rounded-sm mr-2'></div>
                    <div>Featured</div>
                </div>
                <div className='text-[36px] font-bold'>New Arrival</div>
            </div>


            <div className='h-[600px] relative top-12 mx-9 flex gap-7 text-white'>
                <div className='bg-black cursor-pointer'>
                    <div style={{ backgroundImage: `url(${BG1})` }} className='w-[530px] h-[530px] bg-contain relative top-16'>
                        <div className=' relative top-84 left-10'>
                            <h3 className='text-3xl mb-4 font-bold'>PlayStation 5</h3>
                            <p className='text-lg mb-4'>Black and White version of the PS5 <br /> coming out on sale.</p>
                            <button className='text-xl p-0.5 border-b mb-4 font-bold'>Shop Now</button>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex flex-col gap-7 '>
                        <div className='w-[633px] h-[286px] bg-black flex text-white cursor-pointer'>
                            <div className='w-[135px]'></div>
                            <div style={{ backgroundImage: `url(${BG2})` }} className='w-[432px] h-[286px] bg-cover relative left-10'>
                                <div className='relative top-30 right-35'>
                                    <div className='text-2xl mb-4 font-bold'>Women’s Collections</div>
                                    <div className='text-sm mb-4'>Featured woman collections that <br /> give you another vibe.</div>
                                    <button className='text-lg p-0.5 border-b mb-4 font-bold'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-8 w-[633px]'>
                            <div className='h-[284px] w-[270px] bg-black flex items-center justify-center cursor-pointer'>
                                <div style={{ backgroundImage: `url(${BG3})` }} className='bg-black bg-cover w-[210px] h-[222px] '>
                                    <div className='relative top-30 right-3'>
                                        <h3 className='text-3xl mb-1 font-bold'>Speakers</h3>
                                        <p className='text-lg mb-1'>Amazon wireless speakers</p>
                                        <button className='text-xl p-0.5 border-b mb-1 font-bold'>Shop Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[284px] w-[270px] bg-black flex items-center justify-center cursor-pointer'>
                                <div style={{ backgroundImage: `url(${BG4})` }} className='bg-black bg-cover w-[210px] h-[222px] '>
                          <div className='relative top-30 right-3' >
                                      <h1 className='text-3xl mb-1 font-bold'>Perfume</h1>
                                    <p className='text-lg mb-1'>GUCCI INTENSE OUD EDP</p>
                                    <button className='text-xl p-0.5 border-b mb-1 font-bold'>Shop Now</button>
                          </div>
                                </div>
                            </div>
                            <ul className='w-10 text-4xl/17 bg-black text-white flex flex-col justify-center items-center'>
                                <li>L</li>
                                <li>I</li>
                                <li>K</li>
                                <li>E</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home7
