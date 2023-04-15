import React from 'react';
import '../assets/css/Navbar.css';

function Navbar() {
    return (
        <nav className='navbar'>
            <a href="#hero-page" className='logo'>Meynard Trinidad</a>
            <ul className='navlinks'>
                <li><a href="#hero-page">Home</a></li>
                <li><a href="#projects-page">Projects</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;