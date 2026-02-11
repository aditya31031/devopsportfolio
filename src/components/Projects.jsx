import React from 'react';
import { FaFolder, FaCode, FaServer, FaCloud } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: 'Automated CI/CD Pipeline',
            icon: <FaServer />,
            description:
                'Designed and implemented a scalable CI/CD pipeline reducing deployment time by 40%. Integrated automated testing, security scanning, and seamless deployment to staging and production environments.',
            tech: ['Jenkins', 'Docker', 'GitHub Actions', 'SonarQube'],
            link: '#',
        },
        {
            title: 'High-Availability K8s Cluster',
            icon: <FaCloud />,
            description:
                'Deployed a multi-region Kubernetes cluster on AWS using EKS. Implemented auto-scaling, load balancing, and persistent storage solutions, ensuring 99.99% uptime for critical applications.',
            tech: ['AWS EKS', 'Terraform', 'Helm', 'Prometheus'],
            link: '#',
        },
        {
            title: 'Infrastructure as Code Migration',
            icon: <FaCode />,
            description:
                'Led the migration of legacy manual infrastructure to Terraform. modularized infrastructure code, improved disaster recovery time, and reduced cloud costs by 20% through better resource management.',
            tech: ['Terraform', 'AWS', 'Ansible', 'Git'],
            link: '#',
        },
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <motion.h2
                    className="section-title text-gradient"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card glass-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="project-content">
                                <h3><span className="project-icon">{project.icon}</span> {project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((t, idx) => (
                                        <span key={idx} className="tech-tag">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                {/* <a href={project.link} className="project-link">View Project &rarr;</a> */}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
