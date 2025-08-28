import React from 'react'
import MusicImg from '../img/music-img.png'

const Home5 = () => {
  return (
    <div className='h-[500px] w-[94%] mx-10 bg-black relative top-48 flex text-white items-center'>
      <div className='w-[50%] relative left-15 bottom-12' >
        <h3 className='text-xl text-green-400'>Categories</h3>
        <div className='text-6xl relative top-8'>Enhance Your <br /> Music Experience</div>
        <div className='flex gap-6 relative top-15 text-black'>
            <div className='w-[62px] h-[62px] bg-white rounded-[50%] text-center text-black font-bold text-xl'>
                <div>23</div>
                <div className='text-sm font-thin'>Hours</div>
            </div>
            <div className='w-[62px] h-[62px] bg-white rounded-[50%] text-center text-black font-bold text-xl'>
                <div>5</div>
                <div className='text-sm font-thin'>Days</div>
            </div>
            <div className='w-[62px] h-[62px] bg-white rounded-[50%] text-center text-black font-bold text-xl'>
                <div>59</div>
                <div className='text-sm font-thin'>Minutes</div>
            </div>
            <div className='w-[62px] h-[62px] bg-white rounded-[50%] text-center text-black font-bold text-xl'>
                <div>35</div>
                <div className='text-sm font-thin'>Seconds</div>
            </div>
        </div>
        <button className=' h-[56px] w-[171px] rounded-sm bg-green-400 relative top-22 cursor-pointer hover:bg-green-800'>Buy Now!</button>
      </div>
      <div className='w-[25%] rounded-[50%] shadow-[0px_20px_200px_#c9c7c3] mt-8 ml-28 '>
        <img className='transform scale-220 ' src={MusicImg}  />
      </div>

    </div>
  )
}

export default Home5
