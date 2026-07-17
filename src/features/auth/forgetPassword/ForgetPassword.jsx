import React from 'react'
import Input from '../../../components/ui/Input'

const ForgetPassword = () => {
  return (
    <div className='flex flex-col  justify-center gap-4'>
     <p className='text-2xl font-bold text-[#c20044] my-3 text-center'>Submit Email and Verify OTP</p>
      <form className='flex flex-col gap-3'>
        <Input type="email" placeholder='Enter your registered email' label='Email' />
      </form>
      <button className='bg-[#c20044] text-white py-2 rounded-md'>Submit</button>
    </div>
  )
}

export default ForgetPassword
