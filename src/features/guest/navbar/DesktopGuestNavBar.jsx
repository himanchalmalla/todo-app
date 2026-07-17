import React from 'react'
import { Link } from 'react-router-dom'
import { FiHome, FiInfo, FiLogIn, FiUserPlus } from 'react-icons/fi'

const DesktopGuestNavBar = () => {
  return (
      <header className='sticky top-0 z-50'>
      <div className='flex flex-row  bg-[#c20044] items-center justify-between'>
      <img src="./logo.png" alt="logo" className='w-13 h-13 p-1 ml-5' />
      <nav className=' mr-5'>
      <ul style={{ listStyleType: "none", margin: 0, padding: 0, display: "flex", flexDirection: "row", gap: "10px" }}>
        <li><Link className='link md:p-2' to="/"><FiHome className='linkIcon' /> Home</Link></li>
        <li><Link className='link' to="/about"><FiInfo className='linkIcon' /> About</Link></li>
        <li><Link className='link' to="/signin"><FiLogIn className='linkIcon' /> Signin</Link></li>
      </ul>
      </nav>
      </div>
      </header>
   
  )
}

export default DesktopGuestNavBar
