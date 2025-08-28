import React from 'react'
import TopHeader from './smallComponents/TopHeader'
import Home1 from './smallComponents/Home1'
import Navbar from './smallComponents/Navbar'
import Home2 from './smallComponents/Home2'
import Home3 from './smallComponents/Home3'
import Home4 from './smallComponents/Home4'
import Home5 from './smallComponents/Home5'
import Home6 from './smallComponents/Home6'
import Home7 from './smallComponents/Home7'
import Home8 from './smallComponents/Home8'
import Home_Footer from './smallComponents/Home_Footer'


const Home = () => {
  return (
    <div>
     <TopHeader/>
      <Navbar/>
      <Home1/>
      <Home2/>
      <Home3/>
      <Home4/>
      <Home5/> 
      <Home6/>
      <Home7/>
      <Home8/>
      <Home_Footer/>
    </div>
  )
}

export default Home
