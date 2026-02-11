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
            {/* Mobile Menu Overlay - Modal Style */}
            <div className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
                <div className="mobile-menu-card" onClick={(e) => e.stopPropagation()}>

                    {/* Card Header */}
                    <div className="mobile-menu-header">
                        <span className="mobile-brand">Aditya<span>.</span>DevOps</span>
                        <button className="mobile-close-btn" onClick={() => setIsOpen(false)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>

                    {/* Card Body - Links */}
                    <ul className="mobile-nav-links">
                        {['Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                                    {item}
                                    <svg className="chevron-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Card Footer - CTA */}
                    <div className="mobile-menu-footer">
                        <a href="/Aditya-DevopsResume.pdf" download className="mobile-resume-btn" onClick={() => setIsOpen(false)}>
                            Get Resume
                        </a>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Navbar;
