import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import './NavBar.css';

export const Navbar = () => {
    return (
    <nav>
      <FontAwesomeIcon className="faCat" icon={faCat} />
      <NavLink className="nav-bar" to='/Caturday/cats'>
        <p className="cat-link">All Cats</p>
      </NavLink>
      <NavLink className="nav-bar" to='/Caturday/'>
        <p className="cat-link">Cat of the Day</p>
      </NavLink>
    </nav>
    )
}

export {FontAwesomeIcon};
