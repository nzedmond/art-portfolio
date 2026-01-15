import React from 'react';
import { motion } from 'framer-motion';
import Container from './Container';
import { TRANSITION_DURATION, CINEMATIC_EASE } from '../utils/motion';
import '../styles/Hero.css';

const Hero = ({
  title,
  subtitle,
  image = "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop" // Default cinematic placeholder
}) => {
  return (
    <div className="hero-container">
      {/* Background with Ken Burns Effect */}
      <div className="hero-background">
        <motion.img
          src={image}
          alt="Hero Background"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="hero-image"
        />
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <Container className="hero-content">
        <div className="hero-text-wrapper">
          {title && (
            <motion.h1
              className="text-hero"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: TRANSITION_DURATION,
                ease: CINEMATIC_EASE,
                delay: 0.2
              }}
            >
              {title.split('<br/>').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i !== title.split('<br/>').length - 1 && <br />}
                </React.Fragment>
              ))}
            </motion.h1>
          )}

          {subtitle && (
            <motion.p
              className="text-body hero-subtitle"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: TRANSITION_DURATION,
                ease: CINEMATIC_EASE,
                delay: 0.4
              }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Hero;
