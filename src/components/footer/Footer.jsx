import React from 'react'
import Marquee from 'react-fast-marquee'

const Footer = () => {
  return (
    <>
      <div className='flex flex-col bg-[#400511] align-bottom py-3'>
        <div className='flex justify-between mx-10'>
          <p className='text-white text-xs'>Copyright &copy; 2026</p>
          <p className='text-white text-xs'>All Rights Reserved</p>
        </div>

       <Marquee speed={30}>
  <p className='text-[#cfb2b7] text-xs whitespace-nowrap my-2 mt-3'>
    Track Your Habits, Track Your Life — Helping you achieve your goals. We are helping you build discipline and focus, and we're seeking your feedback to grow together. Please feel free to share your personal feedback at feedback@todo.com
  </p>
</Marquee>
      </div>
    </>
  )
}

export default Footer
