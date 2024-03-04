import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
    return (
        <div className="header">

        <nav className="nav">
            <ul className="nav-list">
            <li className="nav-item">
                <ScrollLink to="videos" smooth={true} duration={500}>
                    Music
                </ScrollLink>
            </li>
            <li className="nav-item">
                <Link to="/AboutBand" className="link-no-underline">The Band</Link>
            </li>
            <li className="nav-item">
                <ScrollLink to="shows" smooth={true} duration={500}>
                    Shows
                </ScrollLink>
            </li>
            <li className="nav-item">
                <ScrollLink to="app" smooth={true} duration={500}>
                    App
                </ScrollLink>
            </li>
            <li className="nav-item">
                <ScrollLink to="app" smooth={true} duration={500}>
                    Contact
                </ScrollLink>
            </li>
            </ul>
        </nav>

        </div>
    );
};

export default Header;