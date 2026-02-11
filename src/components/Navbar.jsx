import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

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
            <motion.nav
                className={`navbar ${scrolled ? 'scrolled glass-nav' : ''}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container navbar-container">
                    <a href="#" className="logo">DevOps<span className="logo-accent">.</span>Port</a>

                    <div className="menu-toggle" onClick={toggleMenu}>
                        <div className={`hamburger ${isOpen ? 'open' : ''}`}></div>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="nav-links desktop-menu">
                        {['Skills', 'Projects', 'Contact'].map((item) => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase()}`} className="nav-link">
                                    {item}
                                </a>
                            </li>
                        ))}
                        <li><a href="/Aditya-DevopsResume.pdf" download className="nav-resume-btn">Resume</a></li>
                    </ul>
                </div>
            </motion.nav>

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
