import React from 'react';
import { FaFolder, FaCode, FaServer, FaCloud } from 'react-icons/fa';
import { motion, useMotionValue, useTransform } from 'framer-motion';



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
                <motion.div
                    className="projects-grid"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {projects.map((project, index) => (
                        <motion.div key={index} variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                        }}>
                            <div className="project-card glass-card">
                                <div className="project-header">
                                    <div className="project-icon-large">
                                        {project.icon}
                                    </div>
                                </div>
                                <div className="project-body">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-tech-stack">
                                        {project.tech.map((t, idx) => (
                                            <span key={idx} className="tech-pill">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
