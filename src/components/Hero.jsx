import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-badge glass-card" style={{ padding: '0.5rem 1rem', borderRadius: '50px', fontSize: '0.875rem', marginBottom: '1.5rem', display: 'inline-block' }}>
            Available for Hire
          </span>
          <h1 className="text-gradient">
            Hi, I'm <span className="highlight">Aditya</span> <br />
            <TypeAnimation
              sequence={[
                'DevOps',
                2000,
                'CI/CD Pipeline Specialist',
                2000,
                'Automation Enthusiast',
                2000,
                'Kubernetes & Docker',
                2000,
                'Cloud & Infrastructure',
                2000
              ]}
              wrapper="span"
              speed={50}
              className="typewriter-text"
              repeat={Infinity}
            />
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Automating CI/CD like it’s magic… because debugging is for mortals
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a href="#projects" className="cta-button">View Work</a>
          <a href="#contact" className="cta-button secondary">Contact Me</a>
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="hero-glow" />
    </section>
  );
};

export default Hero;
