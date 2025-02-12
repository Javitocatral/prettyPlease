import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'

function Nav() {
  return (
    <nav>
      <NavLink to="/" exact activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/step" activeClassName="active">
        Steps
      </NavLink>
      <NavLink to="/choreos" activeClassName="active">
        Choreos
      </NavLink>
      <NavLink to="/shop" activeClassName="active">
        Shop
      </NavLink>
      <NavLink to="/events" activeClassName="active">
        Events
      </NavLink>
      <NavLink to="/about" activeClassName="active">
        About
      </NavLink>
    </nav>
  )
}

export default Nav
