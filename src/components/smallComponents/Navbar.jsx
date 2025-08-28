import React from 'react'
import SearchIcon from '../img/search-icon.png'
import HeartIcon from '../img/heart-icon.png'
import CartIcon from '../img/cart1-icon.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between mx-10 relative top-8 mb-12'>
            <div className='flex items-center'>
                <div className='text-xl font-bold'>Exclusive</div>


                <ul className='flex relative left-48 gap-12'>
                    <NavLink to="/" className={({isActive})=>isActive ?"underline":"hover:underline"} >Home</NavLink>
                    <NavLink to="/about" className={({isActive})=>isActive ?"underline":"hover:underline"}>About</NavLink>
                    <NavLink to="/contact" className={({isActive})=>isActive ?"underline":"hover:underline"}>Contact</NavLink>
                    <NavLink to="/signup" className={({isActive})=>isActive ?"underline":"hover:underline"}>Sign up</NavLink>
                </ul>



            </div>
            <div className='flex items-center'>
                <div className='flex bg-gray-100 rounded-sm'>
                    <input className='w-56 px-2 py-2' type="text" placeholder='Whats are You looking for?' />
                    <img className='py-2 px-2' src={`${SearchIcon}`} />
                </div>
                <div className='ml-10 flex gap-2'>
                    <img className='cursor-pointer' src={`${HeartIcon}`} />
                    <img className='cursor-pointer' src={`${CartIcon}`} />
                </div>
            </div>
        </div>
    )
}

export default Navbar
