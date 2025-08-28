import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App
