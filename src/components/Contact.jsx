import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container contact-container">
                <motion.h2
                    className="section-title text-gradient"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Let's Connect
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi,
                    I'll try my best to get back to you!
                </motion.p>
                <div className="social-links">
                    {[
                        { href: "https://www.linkedin.com/in/aditya-m-software/", icon: <FaLinkedin />, label: "LinkedIn" },
                        { href: "https://github.com/aditya31031?tab=repositories", icon: <FaGithub />, label: "GitHub" },
                        { href: "mailto:aditya31031998@gmail.com", icon: <FaEnvelope />, label: "Email" }
                    ].map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.href}
                            target={link.label !== "Email" ? "_blank" : undefined}
                            rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                            className="social-icon"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            whileHover={{ y: -5, boxShadow: "0 10px 20px -5px rgba(99, 102, 241, 0.4)" }}
                        >
                            {link.icon} {link.label}
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
