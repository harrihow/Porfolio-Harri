import React, { useState } from 'react'
import { IoMenu, IoClose } from "react-icons/io5"
import { Link } from 'react-scroll'


function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="flex justify-between items-center h-20 px-8 bg-white shadow-md fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <div className="text-2xl font-satoshi font-bold">HF</div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-8 text-sm md:text-base lg:text-lg">
        <Link to="home" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu} className="cursor-pointer">Home</Link>
        <Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu} className="cursor-pointer">About</Link>
        <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu} className="cursor-pointer">Projects</Link>
        <Link to="services" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu} className="cursor-pointer">Services</Link>
        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu} className="cursor-pointer">Contact</Link>
        <div className="px-4 border-2 border-black rounded-lg py-1">
          <button>My Resume</button>
        </div>
      </div>

      {/* Burger Icon */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoClose /> : <IoMenu />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`${isOpen ? "flex" : "hidden"} md:hidden flex-col items-center space-y-6 absolute top-20 right-0 w-1/2 bg-white shadow-lg py-6`}
      >
        <Link to="home" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu} className="cursor-pointer">Home</Link>
        <Link to="about" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu} className="cursor-pointer">About</Link>
        <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu} className="cursor-pointer">Projects</Link>
        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu} className="cursor-pointer">Contact</Link>
        <div className="px-4 border-2 border-black rounded-lg py-1">
          <button>My Resume</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar