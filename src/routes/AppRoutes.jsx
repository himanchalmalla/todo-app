import React from 'react'
import { Routes } from 'react-router-dom'
import GuestRoute from './GuestRoute'
import AuthRoute from './AuthRoute'
import DashboardRoute from './DashboardRoute'

const AppRoutes = () => {
  return (
      <Routes>
      {GuestRoute}
      {AuthRoute}
      {DashboardRoute}
      </Routes>
  )
}

export default AppRoutes
