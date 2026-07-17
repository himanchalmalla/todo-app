import React from 'react'
import {Images} from '@/assets/index.jsx'

const About = () => {
  return (
    <div>
    <div>
      <p className='text-2xl font-bold text-[#c20044] my-3 text-center'>We are helping you build discipline and focus</p>
      </div>
      {/* How it works */}
      <div className='flex md:flex-row flex-col items-center gap-10 my-2 justify-center'>
      <div className='flex flex-col gap-4 items-start mx-5 gap-4'> 
      <p className='text-2xl font-bold text-[#c20044] my-2 text-start underline md:mr-10 mr-10'>How it works</p>
      <ul className='flex flex-col list-none '>
        <li className='text-white text-start font-bold'>1. Create an account</li>
        <li className='text-white text-start font-bold'>2. Add your tasks and set reminders</li>
        <li className='text-white text-start font-bold'>3. Track your progress and stay motivated</li>
        <li className='text-white text-start font-bold'>4. Set goals and achieve your goals</li>
        <li className='text-white text-start font-bold'>5. Stay focused and succeed</li>
      </ul>
      </div>
      <img src={Images.AboutImage} alt="about" className='w-100 h-100'  />
      </div>
      {/* Contact US INFO */}
      <div className='flex flex-col gap-4 items-center m-3'> 
      <p className='text-2xl font-bold text-[#c20044] text-start underline mr-50'>Contact Us</p>
      <ul className='flex md:flex-row flex-col list-none justify-between md:gap-15 gap:5'>
        <li className='text-white text-start md:font-bold font-medium'>Email: feedback@todo.com</li>
        <li className='text-white text-start md:font-bold font-medium'>Phone: +1 (123) 456-7890</li>
        <li className='text-white text-start md:font-bold font-medium'>Address: 123 Main St, Dhangadhi, FWS, 44600</li>
      </ul>
    </div>
    </div>
  )
}

export default About
