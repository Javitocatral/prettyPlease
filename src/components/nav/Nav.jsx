import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Home
        </NavLink>
        <NavLink
          to="/step"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Steps
        </NavLink>
        <NavLink
          to="/choreos"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Choreos
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Shop
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Events
        </NavLink>
        <NavLink
          to="/maintenance"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Maintenance
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          About
        </NavLink>
      </div>
    </nav>
  )
}

export default Nav
