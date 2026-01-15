import React from 'react';
import { motion } from 'framer-motion';
import { REVEAL_VARIANTS, TRANSITION_DURATION, CINEMATIC_EASE } from '../utils/motion';

const ScrollReveal = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={REVEAL_VARIANTS}
      transition={{
        duration: TRANSITION_DURATION,
        delay: delay,
        ease: CINEMATIC_EASE
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
