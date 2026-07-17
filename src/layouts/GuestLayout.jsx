import React from 'react'
import GuestNavBar from '../features/guest/navbar/GuestNavBar'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'

const GuestLayout = () => {
  return (
    <div className='flex min-h-dvh flex-col bg-[#060236]'>

      <GuestNavBar />

      <main className='flex-1'>

        <Outlet />

      </main>

         <footer>

        <Footer />
        
      </footer>
    </div>
  )
}

export default GuestLayout