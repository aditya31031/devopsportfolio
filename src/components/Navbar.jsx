import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState('light');

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

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="#" className="logo">DevOps<span className="logo-accent">.</span>Port</a>

                <div className="menu-toggle" onClick={toggleMenu}>
                    <div className={`hamburger ${isOpen ? 'open' : ''}`}></div>
                </div>

                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
                    <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                    <li>
                        <button className="theme-toggle" onClick={toggleTheme}>
                            {theme === 'light' ? <FaMoon /> : <FaSun />}
                        </button>
                    </li>
                    <li><a href="/resume.pdf" download className="nav-resume-btn" onClick={() => setIsOpen(false)}>Resume</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
