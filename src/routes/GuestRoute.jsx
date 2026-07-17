import React from 'react'
import { Route } from 'react-router-dom'
import GuestLayout from '../layouts/GuestLayout'
import Home from '../features/guest/pages/Home'
import About from '../features/guest/pages/About'

const GuestRoute = (
    <Route element={<GuestLayout />}>
      <Route  path='/' element={<Home />} />
      <Route path="/about" element={<About />} />
    </Route>
  );

export default GuestRoute;
