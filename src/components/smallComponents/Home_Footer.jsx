import React from 'react'
import F1 from '../img/f1.png'
import F2 from '../img/f2.png'
import F3 from '../img/f3.png'
import F4 from '../img/f4.png'
import F5 from '../img/f5.png'
import F6 from '../img/f6.png'
import F7 from '../img/f7.png'
import F8 from '../img/f8.png'

const Home_Footer = () => {
  return (
    <div className='relative top-90 bg-black h-[440px] text-white '>

      <div className='flex justify-center items-start relative top-20 gap-15'>
        <div className='h-[188px] w-[217px]  '>
          <div className='text-2xl mb-4 font-bold'>Exclusive</div>
          <div className='text-xl my-4 hover:underline cursor-pointer'>Subscribe</div>
          <div className='text-sm my-4 hover:underline cursor-pointer'>Get 10% off your first order</div>
          <div className='flex py-2 border-2 items-center'>
            <input className='pl-3' type="text" placeholder='Enter Your Email' />
            <div >
              <img className='transform scale-140 relative right-4' src={F1} />
            </div>
          </div>
        </div>

        <div className='w-[175px] h-[180px] '>
          <div className='text-xl mb-4 font-bold'>Support</div>
          <div className='mb-4 hover:underline cursor-pointer'>111 Bijoy sarani, Dhaka, <br />  DH 1515, Bangladesh.</div>
          <div className='mb-4 hover:underline cursor-pointer'>Junaidab313@gmail.com</div>
          <div className='mb-4 hover:underline cursor-pointer'>+923125252826</div>
        </div>

        <div className='h-[236px] w-[123px] '>
          <div className='text-xl font-bold mb-4'>Account</div>
          <div className='mb-4 hover:underline cursor-pointer'>My Account</div>
          <div className='mb-4 hover:underline cursor-pointer'>Login / Register</div>
          <div className='mb-4 hover:underline cursor-pointer'>Cart</div>
          <div className='mb-4 hover:underline cursor-pointer'>Wishlist</div>
          <div className='mb-4 hover:underline cursor-pointer'>Shop</div>
        </div>

        <div className='h-[196px] w-[109px]'>
          <div className='text-xl font-bold mb-4'>Quick Link</div>
          <div className='mb-4 hover:underline cursor-pointer'>Privacy Policy</div>
          <div className='mb-4 hover:underline cursor-pointer'>Terms of Use</div>
          <div className='mb-4 hover:underline cursor-pointer'>FAQ</div>
          <div className='mb-4 hover:underline cursor-pointer'>Contact</div>
        </div>

        <div className='w-[198px] h-[210px]  '>
          <div className='text-xl font-bold mb-4'>Download App</div>
          <div className='mb-4 text-sm font-thin text-gray-100'>Save $3 with App New User Only</div>
          <div className='flex gap-1 cursor-pointer '>
            <div>
              <img src={F2} />
            </div>
            <div>
              <div>
                <img src={F3} />
              </div>
              <div>
                <img src={F4} />
              </div>
            </div>
          </div>
          <div className='flex relative top-4 gap-6'>
            <img className='cursor-pointer hover:scale-200 ' src={F5} />
            <img className='cursor-pointer hover:scale-200 ' src={F6} />
            <img className='cursor-pointer hover:scale-200 ' src={F7} />
            <img className='cursor-pointer hover:scale-200 ' src={F8} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home_Footer
