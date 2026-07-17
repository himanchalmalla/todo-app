import React from 'react'
import Input from '../../../components/ui/Input'
import { Link } from 'react-router-dom'

const SignInForm = () => {
  return (
    <div className='flex flex-col  justify-center gap-4'>
      <p className='text-2xl font-bold text-[#c20044] my-3 text-center'>Welcome to SignIn</p>
      <form className='flex flex-col gap-3'>
        <Input type="email" placeholder='Enter your email' label='Email' />
        <Input type="password" placeholder='Enter your password' label='Password' />
      </form>
      <button className='bg-[#c20044] text-white py-2 rounded-md'>Sign in</button>
      <div className='flex justify-end'>
      <Link className='text-[#ff1500]' to="/forget-password">Forget Password?</Link>
      </div>
      <p className='text-center my-3 text-sm text-[#c20044]'>Don't have an account? click <Link to="/signup"><span className='text-[#c20044] underline font-bold'>Sign Up</span></Link> to create account</p>
    </div>
  )
}

export default SignInForm
