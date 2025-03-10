import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'
import MusicPlayer from '../MusicaPlayer/MusicPlayer'
import logoS from '../../assets/logoS.png'

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <MusicPlayer />
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/step"
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={closeMenu}
        >
          Steps
        </NavLink>
        <NavLink
          to="/choreos"
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={closeMenu}
        >
          Choreos
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={closeMenu}
        >
          Shop
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={closeMenu}
        >
          Events
        </NavLink>
        <NavLink
          to="/maintenance"
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={closeMenu}
        >
          Maintenance
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={closeMenu}
        >
          About
        </NavLink>
      </div>
      <img style={{ width: '60px', height: '60px' }} src={logoS} alt="" />
    </nav>
  )
}

export default Nav
