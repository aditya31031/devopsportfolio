import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
                className={`navbar ${scrolled ? 'scrolled' : ''}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <div className="navbar-container">
                    <a href="#" className="logo">Aditya<span>.</span>DevOps</a>

                    <div className="menu-toggle" onClick={toggleMenu}>
                        <div className={`hamburger ${isOpen ? 'open' : ''}`}></div>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="nav-links desktop-menu">
                        {['Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase()}`} className="nav-link">
                                    {item}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a href="/Aditya-DevopsResume.pdf" download className="resume-btn">
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`}>
                <ul className="mobile-nav-links">
                    {['Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                                {item}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="/Aditya-DevopsResume.pdf" download className="nav-resume-btn" onClick={() => setIsOpen(false)}>
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
