import React from 'react';
import {NavLink} from 'react-router-dom'

export const Navbar = () => {
    return (
    <nav>
    <NavLink to='/cats'>
      <p>All Cats</p>
    </NavLink>
    <NavLink to='/'>
      <p>Cat of the Day</p>
    </NavLink>
    </nav>
    )
}