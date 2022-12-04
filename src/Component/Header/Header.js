import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/friends'>Friends</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
            </nav>
            <p>Common header</p>
        </div>
    );
};

export default Header;