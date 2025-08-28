import React from 'react'
import TopHeader from './smallComponents/TopHeader'
import Navbar from './smallComponents/Navbar'
import About1 from './img/about1.png'
import About2 from './img/about2.png'
import About3 from './img/about3.png'
import About4 from './img/about4.png'
import About5 from './img/about5.png'
import About6 from './img/about6.png'
import About7 from './img/about7.png'
import About8 from './img/about8.png'
import About9 from './img/about9.png'
import About10 from './img/about10.png'
import About11 from './img/about11.png'
import Home8 from './smallComponents/Home8'
import HomeFooter from './smallComponents/Home_Footer'

const About = () => {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <hr />

      <div className='flex justify-between items-center mt-[100px] mb-[50px]'>
        <div className='w-[525px] h-[232px] mx-20 '>
          <div className='font-bold text-[54px]'>Our Story</div>
          <div className='text-[16px] text-[#6B7280] mt-[20px]'>
            Launced in 2015, Exclusive is South Asia’s premier online shopping <br /> makterplace with an active presense in Bangladesh. Supported <br /> by wide range of tailored marketing, data and service solutions, <br /> Exclusive has 10,500 sallers and 300 brands and serves 3 <br /> millioons customers across the region. <br /><br />
            Exclusive has more than 1 Million products to offer, growing at a <br /> very fast. Exclusive offers a diverse assotment in categories <br /> ranging  from consumer.
          </div>
        </div>
        <div className=' '>
          <img className='w-[650px] h-[609px]' src={About1} alt="" />
        </div>
      </div>

      <br /><br /><br /><br /><br />

      <div className='h-[230px] w-[1170px] flex justify-center items-center mb-[50px] gap-6 ml-12'>

        <div className="group h-[220px] w-[250px] border flex flex-col justify-center items-center gap-1 bg-white hover:bg-red-600 transition duration-300">
          <div className="h-[80px] w-[80px] bg-gray-400 flex justify-center items-center rounded-full">
            <div className="h-[60px] w-[60px] flex justify-center items-center bg-black rounded-full transition duration-300 group-hover:bg-white">
              <img src={About2} alt="" className="transition duration-300 group-hover:invert" />
            </div>
          </div>
          <div className="font-bold text-[32px] text-black group-hover:text-white">10.5k</div>
          <div className="text-black group-hover:text-white">Sellers active our site</div>
        </div>


        <div className="group h-[220px] w-[250px] border flex flex-col justify-center items-center gap-1 bg-white hover:bg-red-600 transition duration-300">
          <div className="h-[80px] w-[80px] bg-gray-400 flex justify-center items-center rounded-full">
            <div className="h-[60px] w-[60px] flex justify-center items-center bg-white rounded-full transition duration-300 group-hover:bg-black">
              <img src={About3} alt="" className="transition duration-300 group-hover:invert" />
            </div>
          </div>
          <div className="font-bold text-[32px] text-black group-hover:text-white">33k</div>
          <div className="text-black group-hover:text-white">Mopnthly Produduct Sale</div>
        </div>

        <div className="group h-[220px] w-[250px] border flex flex-col justify-center items-center gap-1 bg-white hover:bg-red-600 transition duration-300">
          <div className="h-[80px] w-[80px] bg-gray-400 flex justify-center items-center rounded-full">
            <div className="h-[60px] w-[60px] flex justify-center items-center bg-black rounded-full transition duration-300 group-hover:bg-white">
              <img src={About4} alt="" className="transition duration-300 group-hover:invert" />
            </div>
          </div>
          <div className="font-bold text-[32px] text-black group-hover:text-white">45.5k</div>
          <div className="text-black group-hover:text-white">Customer active in our site</div>
        </div>



        <div className="group h-[220px] w-[250px] border flex flex-col justify-center items-center gap-1 bg-white hover:bg-red-600 transition duration-300">
          <div className="h-[80px] w-[80px] bg-gray-400 flex justify-center items-center rounded-full">
            <div className="h-[60px] w-[60px] flex justify-center items-center bg-black rounded-full transition duration-300 group-hover:bg-white">
              <img src={About5} alt="" className="transition duration-300 group-hover:invert" />
            </div>
          </div>
          <div className="font-bold text-[32px] text-black group-hover:text-white">25k</div>
          <div className="text-black group-hover:text-white">Anual gross sale in our site</div>
        </div>

      </div>

      <br /><br /><br /><br /><br />

      <div className='h-[564px]  flex justify-center items-center gap-10'>

        <div className=' w-[330px] h-[510px]'>
          <div className='w-[330px] h-[390px] bg-gray-300 flex justify-center items-center  '>
            <img className='scale-100' src={About6} alt="" />
          </div>
          <div>
            <div className='text-[28px] tracking-[4px] mt-4'>Tom Curise</div>
            <div className='text-'>Founder & Chairman</div>
            <div className='flex gap-2 mt-2'>
              <img className='scale-95 hover:cursor-pointer hover:scale-105 z-10' src={About9} />
              <img className='scale-95 hover:cursor-pointer hover:scale-105 z-10' src={About10} />
              <img className='scale-95 hover:cursor-pointer hover:scale-105 z-10' src={About11} />
            </div>
          </div>
        </div>

        <div className=' w-[330px] h-[510px]'>
          <div className='w-[330px] h-[390px] bg-gray-300 flex justify-center items-center  '>
            <img className='scale-100' src={About7} alt="" />
          </div>
          <div>
            <div className='text-[28px] tracking-[4px] mt-4'>Emma Watson</div>
            <div className='text-'>Managing Director</div>
            <div className='flex gap-2 mt-2'>
              <img className='scale-95 hover:cursor-pointer hover:scale-105 z-10' src={About9} />
              <img className='scale-95 hover:cursor-pointer hover:scale-105 z-10' src={About10} />
              <img className='scale-95 hover:cursor-pointer hover:scale-105 z-10' src={About11} />
            </div>
          </div>
        </div>

        <div className=' w-[330px] h-[510px]'>
          <div className='w-[330px] h-[390px] bg-gray-300 flex justify-center items-center'>
            <img className='scale-100' src={About8} alt="" />
          </div>
          <div>
            <div className='text-[28px] tracking-[4px] mt-4 '>Will Smith</div>
            <div className='text-'>Product Designer</div>
            <div className='flex gap-2 mt-2'>
              <img className='scale-95 z-10 hover:cursor-pointer hover:scale-105' src={About9} />
              <img className='scale-95 z-10 hover:cursor-pointer hover:scale-105' src={About10} />
              <img className='scale-95 z-10 hover:cursor-pointer hover:scale-105' src={About11} />
            </div>
          </div>
        </div>

      </div>

      <div className='relative bottom-20'>
        <Home8 />
      </div>
      <div>
        <HomeFooter />
      </div>



    </div>
  )
}

export default About
