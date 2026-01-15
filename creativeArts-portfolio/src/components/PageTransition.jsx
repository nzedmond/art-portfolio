import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children, className = "" }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] // Cinematic easeOutQuint-like curve
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
