import React from 'react';
import '../assets/css/Navbar.css';

function Navbar() {
    return (
        <nav className='navbar'>
            <a href="#" className='logo'>Meynard Trinidad</a>
            <ul className='navlinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;