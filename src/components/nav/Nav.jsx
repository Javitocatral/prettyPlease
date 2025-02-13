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
          onClick={toggleMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/step"
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={toggleMenu}
        >
          Steps
        </NavLink>
        <NavLink
          to="/choreos"
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={toggleMenu}
        >
          Choreos
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={toggleMenu}
        >
          Shop
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={toggleMenu}
        >
          Events
        </NavLink>
        <NavLink
          to="/maintenance"
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={toggleMenu}
        >
          Maintenance
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={toggleMenu}
        >
          About
        </NavLink>
      </div>
      <h2 style={{ color: 'white' }}>PrettyPlease</h2>
    </nav>
  )
}

export default Nav
