import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center px-4 py-3 md:px-8 md:py-4 lg:px-12 lg:py-6 font-satoshi">
      <div>
        <h1 className="text-xl md:text-2xl lg:text-3xl  font-bold">HARRI FANO</h1>
      </div>
      <div>
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center justify-center
                      text-sm md:text-base lg:text-lg font-bold">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/projects">PROJECTS</Link></li>
          <li><Link to="/services">SERVICES</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
