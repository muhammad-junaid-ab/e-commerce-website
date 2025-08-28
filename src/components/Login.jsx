import React from 'react'
import TopHeader from './smallComponents/TopHeader'
import Navbar from './smallComponents/Navbar'
import Home_Footer from './smallComponents/Home_Footer'
import SignUpIMG from './img/signup.png'

const Login = () => {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <hr />

      <div className='h-[781px] flex mt-30 relative z-10' >
        <div>
          <img className='w-[781px]' src={SignUpIMG} alt="" />
        </div>

        <div className='h-[326px] w-[371px] mt-20 ml-15 relative top-25'>
          <div className='text-4xl mb-3'>Log in to Exclusive</div>
          <div>Enter your details below</div>
          <div className='mt-5'>
            <div className='flex flex-col gap-1'>
              <input className='border-b pt-7 pb-2' type='text' placeholder='Email or Phone Number' />
              <input className='border-b pt-7 pb-2' type='password' placeholder='passward' />
            </div>
            <div className='mt-10 flex items-center justify-between mx-0.5'>
              <button className='bg-red-600 w-[143px] h-[56px] rounded-sm  mb-5 cursor-pointer text-white'>Log In</button>
              <div className='text-red-600 cursor-pointer hover:underline'>Forget Password?</div>
            </div>
          </div>
        </div>
      </div>

      <div className='relative bottom-85'>
        <Home_Footer />
      </div>

    </div>
  )
}

export default Login
