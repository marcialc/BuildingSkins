import React, { useState } from 'react';

import './NavBar.scss';
import logo from '../../../assets/white-logo.png';

const NavBar = () => {

    const [ hamburgerClicked, setHamburgerClicked ] = useState(false);

    const handleMenu = () => {
        const status = hamburgerClicked ? false : true;
        console.log(`clicked : ${status}`)
        setHamburgerClicked(status);
    }

    const handleSectionClick = () => {
        setHamburgerClicked(false);
    }

    return (
        <div className="nav-bar nav-bar-is-open">
            <div className="leading-container">
                <img alt="nav-bar-logo" className="navbar-logo" src={logo} />
            </div>
            <ul className="trailing-container">
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#aboutus">About us</a>
                <a href="#contact">Contact</a>

            </ul>
            <div className="button" onClick={handleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            { hamburgerClicked &&
                <div className="drop-down">
                    <ul className="trailing-drop">
                        <a href="#home" onClick={handleSectionClick}>Home</a>
                        <a href="#services" onClick={handleSectionClick}>Services</a>
                        <a href="#aboutus" onClick={handleSectionClick}>About us</a>
                        <a href="#contact" onClick={handleSectionClick}>Contact</a>
                    </ul>
                </div>
            }
        </div>
    )
}



export default NavBar;