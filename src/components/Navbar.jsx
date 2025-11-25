import React from 'react';
import './Navbar.css';

const Navbar = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <div className="logo">Shravani Chekuri</div>
            <div className="nav-links">
                <button onClick={() => scrollToSection('home')} className="nav-btn">
                    Home
                </button>
                <button onClick={() => scrollToSection('projects')} className="nav-btn">
                    Projects
                </button>
                <button onClick={() => scrollToSection('about')} className="nav-btn">
                    About Me
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
