import React from 'react';
import { FaFolder, FaCode, FaServer, FaCloud } from 'react-icons/fa';

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
        <section id="projects" className="section reveal">
            <div className="container">
                <h2 className="section-title text-gradient">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card reveal">
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
