import React from 'react'
import TopHeader from './smallComponents/TopHeader'
import Navbar from './smallComponents/Navbar'
import Home_Footer from './smallComponents/Home_Footer'
import SignUpIMG from './img/signup.png'
import GoogleIcon from './img/Icon-Google.png'
import { NavLink } from 'react-router-dom'


const SignUp = () => {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <hr />

      <div className='h-[781px] flex mt-30 relative z-10' >
        <div>
          <img className='w-[781px]' src={SignUpIMG} alt="" />
        </div>
        <div className='h-[530px] w-[371px] mt-20 ml-15'>
          <div className='text-4xl mb-3'>Create an account</div>
          <div>Enter your details below</div>
          <form className='mt-5'>
            <div className='flex flex-col gap-1'>
              <input className='border-b pt-7 pb-2' type='text' placeholder='Name' />
              <input className='border-b pt-7 pb-2' type='text' placeholder='Email or Phone Number' />
              <input className='border-b pt-7 pb-2' type='password' placeholder='passward' />
            </div>
            <div className='mt-10'>
              <button type='onsubmit' className='bg-red-600 h-[56px] rounded-sm w-full mb-5 cursor-pointer text-white'>Create Account</button>
              <div className='flex justify-center items-center border-1 py-3 rounded-sm cursor-pointer gap-2'>
                <img src={GoogleIcon} alt="" />
                <div>Signup with Google</div>
              </div>
              <div className='flex justify-center items-center mt-10 gap-2'>
                <div>already have account?</div>
                <NavLink to='/login' className="hover:underline text-blue-600 cursor-pointer">
                  login
                </NavLink>

              </div>
            </div>
          </form>
        </div>
      </div>

      <div className='relative bottom-85'>
        <Home_Footer />
      </div>

    </div>
  )
}

export default SignUp
