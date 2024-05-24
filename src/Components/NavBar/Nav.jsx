import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Logo from "../../assets/logo.png";
import Moon from "../../assets/moon.svg";
import Sun from "../../assets/sun.svg";

const Nav = () => {
    // State to manage the theme
    const [theme, setTheme] = useState(() => {
        // Retrieve the theme from localStorage if available, or default to light theme
        return localStorage.getItem('theme') || 'light';
    });

    // State variables to manage mobile menu and theme
    const [hamburgerActive, setHamburgerActive] = useState(false);
    const [navMenuActive, setNavMenuActive] = useState(false);

    // Function to toggle the mobile menu
    const toggleMobileMenu = () => {
        setHamburgerActive(!hamburgerActive);
        setNavMenuActive(!navMenuActive);
    };

    // Function to close the mobile menu when a link is clicked
    const closeMenu = () => {
        setHamburgerActive(false);
        setNavMenuActive(false);
    };

    // Function to handle theme switch
    const switchTheme = (e) => {
        const selectedTheme = e.target.checked ? 'dark' : 'light';
        setTheme(selectedTheme);
        localStorage.setItem('theme', selectedTheme);
    };

    // Add event listener for closing the mobile menu when a link is clicked
    useEffect(() => {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach((link) => link.addEventListener('click', closeMenu));

        return () => {
            navLinks.forEach((link) => link.removeEventListener('click', closeMenu));
        };
    }, []);

    return (
        <>
            {/* Navbar */}
            <nav className="navbar">
                <div className="container">
                    {/* Logo */}
                    <h1 id="logo">
                        <a href="/">
                            <img src={Logo} alt="Your Logo" />
                        </a>
                    </h1>
                    {/* Navbar links */}
                    <ul className={`nav-menu ${navMenuActive ? 'active' : ''}`}>
                        <li><a className="nav-link" href="#projects">PROJECTS</a></li>
                        <li><a className="nav-link" href="#">CONTACT</a></li>
                        <li><a className="nav-link" href="#">BLOG</a></li>
                        <li>
                            <a className="nav-link btn btn-primary" href="/">
                                RESUME
                                <i className="fas fa-arrow-right"></i>
                            </a>
                        </li>
                        {/* Toggle switch */}
                        <div className="theme-switch">
                            <input type="checkbox" id="switch" onChange={switchTheme} checked={theme === 'dark'} />
                            <label className="toggle-icons" htmlFor="switch">
                                <img className="moon" src={Moon} alt="Moon icon" />
                                <img className="sun" src={Sun} alt="Sun icon" />
                            </label>
                        </div>
                    </ul>
                    {/* Hamburger menu */}
                    <div className={`hamburger ${hamburgerActive ? 'active' : ''}`} onClick={toggleMobileMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </nav>
            {/* Navbar ends */}
        </>
    );
};

export default Nav;
