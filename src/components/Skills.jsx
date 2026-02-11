import React from 'react';
import { FaAws, FaDocker, FaPython, FaGitAlt, FaLinux, FaCloud, FaRocket, FaCube, FaNetworkWired, FaChartLine, FaTerminal } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiAnsible, SiJenkins, SiGrafana, SiPrometheus, SiGooglecloud } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        {
            category: 'Cloud Platforms',
            icon: <FaCloud />,
            items: [
                { name: 'AWS', icon: <FaAws /> },
                { name: 'Azure', icon: <VscAzure /> },
                { name: 'GCP', icon: <SiGooglecloud /> }
            ],
        },
        {
            category: 'CI/CD & Automation',
            icon: <FaRocket />,
            items: [
                { name: 'Jenkins', icon: <SiJenkins /> },
                { name: 'GitLab CI', icon: <FaGitAlt /> }
            ],
        },
        {
            category: 'Containerization',
            icon: <FaCube />,
            items: [
                { name: 'Docker', icon: <FaDocker /> },
                { name: 'Kubernetes', icon: <SiKubernetes /> }
            ],
        },
        {
            category: 'Infrastructure as Code',
            icon: <FaNetworkWired />,
            items: [
                { name: 'Terraform', icon: <SiTerraform /> },
                { name: 'Ansible', icon: <SiAnsible /> }
            ],
        },
        {
            category: 'Monitoring',
            icon: <FaChartLine />,
            items: [
                { name: 'Prometheus', icon: <SiPrometheus /> },
                { name: 'Grafana', icon: <SiGrafana /> }
            ],
        },
        {
            category: 'Scripting',
            icon: <FaTerminal />,
            items: [
                { name: 'Python', icon: <FaPython /> },
                { name: 'Linux/Bash', icon: <FaLinux /> }
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <section id="skills" className="section">
            <div className="container">
                <motion.h2
                    className="section-title text-gradient"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Technical Expertise
                </motion.h2>
                <motion.div
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            className="skill-card glass-card"
                            variants={itemVariants}
                        >
                            <div className="skill-header">
                                <div className="skill-icon-wrapper">
                                    {skillGroup.icon}
                                </div>
                                <h3>{skillGroup.category}</h3>
                            </div>
                            <div className="skill-tags">
                                {skillGroup.items.map((item, idx) => (
                                    <span key={idx} className="skill-tag">
                                        {item.icon} {item.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
