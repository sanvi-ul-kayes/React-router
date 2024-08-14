import React from 'react'
import { NavbarComponent } from './NavbarComponents'
import { Banner } from './banner'
import { Outlet } from 'react-router-dom'

const Roots = () => {
  return (
      <div>
          <NavbarComponent />
          <Outlet/>
          <footer>Footer</footer>
      </div>
  )
}

export default Roots