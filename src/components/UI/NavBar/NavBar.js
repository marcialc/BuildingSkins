import React from 'react';

import './NavBar.css';
import logo from '../../../assets/white-logo.png';

const NavBar = (props) => {

    return (
        <div className="navbar">
            <img className="navbar-logo" src={logo} />
            <ul className="navbar-container">
                <li className="a"><a href="/">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="/">Projects</a></li>
                <li className="a"><a href="/">about us</a></li>
                <li><a href="#services">contact</a></li>

            </ul>
        </div>
    )
}

export default NavBar;