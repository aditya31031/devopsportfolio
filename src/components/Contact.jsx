import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="section reveal">
            <div className="container contact-container">
                <h2 className="section-title text-gradient">Let's Connect</h2>
                <p>
                    I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi,
                    I'll try my best to get back to you!
                </p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/aditya-m-software/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaLinkedin /> LinkedIn
                    </a>
                    <a href="https://github.com/aditya31031?tab=repositories" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaGithub /> GitHub
                    </a>
                    <a href="mailto:aditya31031998@gmail.com" className="social-icon">
                        <FaEnvelope /> Email
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
