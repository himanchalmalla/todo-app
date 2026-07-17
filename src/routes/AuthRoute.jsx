import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'
import SignIn from '../features/auth/signin/SignIn'
import SignUp from '../features/auth/signup/SignUp'
import ForgetPassword from '../features/auth/forgetPassword/ForgetPassword'

const AuthRoute =(
    <Route element={<AuthLayout />}>
    <Route  path='/signin' element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/forget-password" element={<ForgetPassword />} />
    </Route>
        
)

export default AuthRoute;
