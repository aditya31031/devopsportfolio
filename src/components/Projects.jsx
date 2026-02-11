import React from 'react';
import { FaFolder, FaCode, FaServer, FaCloud } from 'react-icons/fa';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const TiltCard = ({ children, className }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    function handleMouseMove(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct * 200); // Amplify movement
        y.set(yPct * 200);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            viewport={{ once: true }}
        >
            <div style={{ transform: "translateZ(20px)" }}>
                {children}
            </div>
        </motion.div>
    );
};

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
                        <TiltCard
                            key={index}
                            className="project-card glass-card"
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
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
