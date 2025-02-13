import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'

function Nav() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
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
    </nav>
  )
}

export default Nav
