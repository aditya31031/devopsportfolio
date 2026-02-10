import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <span className="hero-badge">Available for Hire</span>
        <h1 className="text-gradient">
          <h1>
            Hi, I'm <span className="highlight">Aditya</span> <br />
            DevOps Engineer
          </h1>
        </h1>
        <p>
          I help companies automate deployment, scale effortlessly, and ensure 99.99% uptime.
          Bridging the gap between development and operations.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="cta-button">View Work</a>
          <a href="#contact" className="cta-button secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
