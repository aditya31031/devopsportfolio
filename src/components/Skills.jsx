import React from 'react';
import { FaAws, FaDocker, FaPython, FaGitAlt, FaLinux } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiAnsible, SiJenkins, SiGrafana, SiPrometheus, SiGooglecloud } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

const Skills = () => {
    const skills = [
        {
            category: 'Cloud Platforms',
            icon: <SiGooglecloud />,
            items: [
                { name: 'AWS', icon: <FaAws /> },
                { name: 'Azure', icon: <VscAzure /> },
                { name: 'GCP', icon: <SiGooglecloud /> }
            ],
        },
        {
            category: 'CI/CD & Automation',
            icon: <SiJenkins />,
            items: [
                { name: 'Jenkins', icon: <SiJenkins /> },
                { name: 'GitLab CI', icon: <FaGitAlt /> }
            ],
        },
        {
            category: 'Containerization',
            icon: <FaDocker />,
            items: [
                { name: 'Docker', icon: <FaDocker /> },
                { name: 'Kubernetes', icon: <SiKubernetes /> }
            ],
        },
        {
            category: 'Infrastructure as Code',
            icon: <SiTerraform />,
            items: [
                { name: 'Terraform', icon: <SiTerraform /> },
                { name: 'Ansible', icon: <SiAnsible /> }
            ],
        },
        {
            category: 'Monitoring',
            icon: <SiGrafana />,
            items: [
                { name: 'Prometheus', icon: <SiPrometheus /> },
                { name: 'Grafana', icon: <SiGrafana /> }
            ],
        },
        {
            category: 'Scripting',
            icon: <FaPython />,
            items: [
                { name: 'Python', icon: <FaPython /> },
                { name: 'Linux/Bash', icon: <FaLinux /> }
            ],
        },
    ];

    return (
        <section id="skills" className="section reveal">
            <div className="container">
                <h2 className="section-title text-gradient">Technical Expertise</h2>
                <div className="skills-grid">
                    {skills.map((skillGroup, index) => (
                        <div key={index} className="skill-category reveal">
                            <h3><span className="skill-icon">{skillGroup.icon}</span> {skillGroup.category}</h3>
                            <ul className="skill-list">
                                {skillGroup.items.map((item, idx) => (
                                    <li key={idx}>
                                        <span className="item-icon">{item.icon}</span> {item.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
