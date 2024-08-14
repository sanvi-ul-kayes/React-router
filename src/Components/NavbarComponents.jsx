
import {
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarCollapseBtn,
    NavbarContainer,
    NavbarItem,
    NavbarList,
  } from 'keep-react'
import { Link } from 'react-router-dom'
  
  export const NavbarComponent = () => {
    return (
      <Navbar>
        <NavbarContainer>
          <ul className='flex gap-5'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/service">Service</Link></li>
         </ul>
          <NavbarBrand>
            <img src={"	https://www.creativeitinstitute.com/images/logo/logo1718088965.png"} alt="keep" />
          </NavbarBrand>
          <NavbarList>
            <NavbarItem>Figma</NavbarItem>
            <NavbarItem>Documentation</NavbarItem>
            <NavbarItem>Blog</NavbarItem>
          </NavbarList>
          <NavbarCollapseBtn />
          <NavbarCollapse>
            <NavbarItem>Projects</NavbarItem>
            <NavbarItem>Research</NavbarItem>
            <NavbarItem>Contact</NavbarItem>
            <NavbarItem>Figma</NavbarItem>
            <NavbarItem>Documentation</NavbarItem>
            <NavbarItem>Blog</NavbarItem>
          </NavbarCollapse>
        </NavbarContainer>
      </Navbar>
    )
  }
  