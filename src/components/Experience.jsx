import React from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

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
            description: 'specialization in Full Stack Development & Cloud Computing.',
            type: 'education',
        },
    ];

    return (
        <section id="experience" className="section reveal">
            <div className="container">
                <h2 className="section-title text-gradient">Experience & Education</h2>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                            <div className="timeline-dot">
                                {exp.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
                            </div>
                            <div className="timeline-content">
                                <span className="timeline-date">{exp.year}</span>
                                <h3>{exp.title}</h3>
                                <h4>{exp.company}</h4>
                                <p>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
