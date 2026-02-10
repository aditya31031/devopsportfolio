import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="container navbar-container">
                    <a href="#" className="logo">DevOps<span className="logo-accent">.</span>Port</a>

                    <div className="menu-toggle" onClick={toggleMenu}>
                        <div className={`hamburger ${isOpen ? 'open' : ''}`}></div>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="nav-links desktop-menu">
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="/Aditya-DevopsResume.pdf" download className="nav-resume-btn">Resume</a></li>
                    </ul>
                </div>
            </nav>

            {/* Mobile Menu Overlay - Outside navbar to avoid clipping */}
            <div className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`}>
                <ul className="mobile-nav-links">
                    <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
                    <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                    <li><a href="/Aditya-DevopsResume.pdf" download className="nav-resume-btn">Resume</a></li>

                </ul>
            </div>
        </>
    );
};

export default Navbar;
