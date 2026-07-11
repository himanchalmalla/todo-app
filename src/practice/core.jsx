import React from 'react'
import { BrowserRouter } from 'react-router'
import NavBar from './NavBar';

const Core = () => {
  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  )
}

export default Core;
