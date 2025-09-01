import React from 'react'
import Time from './ui/Time'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-between items-center pt-4 pb-4 text-sm'>
      <div className='grid grid-rows-2 justify-start align-center -space-y-1'>
        <p>DESIGN BY HARRI FANO ©</p>
        <Time />
      </div>

      <ul className='flex gap-4'>
        <li className='font-semibold hover:underline hover:decoration-gray-300 cursor-pointer transition-all duration-300'><Link to="/">WELCOME</Link></li>
        <li className='font-semibold hover:underline hover:decoration-gray-300 cursor-pointer transition-all duration-300'><Link to="/services">SERVICES</Link></li>
        <li className='font-semibold hover:underline hover:decoration-gray-300 cursor-pointer transition-all duration-300'><Link to="/projects">PROJECTS</Link></li>
        <li className='font-semibold hover:underline hover:decoration-gray-300 cursor-pointer transition-all duration-300'><Link to="/about">ABOUT</Link></li>
        <li className='font-semibold hover:underline hover:decoration-gray-300 cursor-pointer transition-all duration-300'><Link to="/contact">CONTACT</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
