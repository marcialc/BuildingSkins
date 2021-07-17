import React from 'react';

import './NavBar.scss';
import logo from '../../../assets/white-logo.png';

const NavBar = (props) => {

    return (
        <div className="nav-bar nav-bar-is-open">
            <div className="leading-container">
                <img alt="nav-bar-logo" className="navbar-logo" src={logo} />
            </div>
            <ul className="trailing-container">
                <a href="/">Home</a>
                <a href="#services">Services</a>
                <a href="/">Projects</a>
                <a href="/">About us</a>
                <a href="#services">Contact</a>

            </ul>
        </div>
    )
}

export default NavBar;