import React from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            year: 'Jan 2021 - Jan 2024',
            title: 'DevOps Engineer',
            company: 'Clari5 (CustomerXPs)',
            description: 'Managed end-to-end deployment pipelines, optimized cloud infrastructure, and ensured high availability for banking fraud detection systems.',
            type: 'work',
        },
        {
            year: '2023 - July 2025',
            title: 'MCA (Master of Computer Applications)',
            company: 'Jain University',
            description: 'Specialization in Full Stack Development & Cloud Computing.',
            type: 'education',
        },
    ];

    return (
        <section id="experience" className="section">
            <div className="container">
                <motion.h2
                    className="section-title text-gradient"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Experience & Education
                </motion.h2>

                <div className="experience-grid">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="experience-card glass-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="experience-header">
                                <div className="experience-icon">
                                    {exp.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
                                </div>
                                <div>
                                    <h3>{exp.title}</h3>
                                    <h4>{exp.company}</h4>
                                </div>
                            </div>
                            <span className="experience-date">{exp.year}</span>
                            <p>{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
