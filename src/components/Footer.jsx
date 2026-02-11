import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-logo">
                    <h2>DevOps<span className="logo-accent">.</span>Port</h2>
                    <p>Building scalable, secure, and automated infrastructure.</p>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-social">
                    <h3>Connect</h3>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/aditya-m-software/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://github.com/aditya31031" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="mailto:aditya31031998@gmail.com"><FaEnvelope /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} All rights reserved. | Built with React & Vite</p>
            </div>
        </footer>
    );
};

export default Footer;
