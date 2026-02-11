import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="hire-badge">
            Available for Hire
          </span>
          <h1>
            Building Scalable <br />
            <span className="highlight">Infrastructure</span> & <span className="highlight">Automation</span>
          </h1>

          <div className="typewriter">
            <TypeAnimation
              sequence={[
                'DevOps Engineer',
                2000,
                'Cloud Architect',
                2000,
                'Kubernetes Specialist',
                2000,
                'CI/CD Expert',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Transforming manual processes into reliable, automated workflows. Specializing in AWS, Kubernetes, and Modern CI/CD.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a href="#projects" className="btn-primary">View Work</a>
          <a href="#contact" className="btn-outline">Contact Me</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
