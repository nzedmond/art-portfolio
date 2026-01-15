import React from 'react';
import { motion } from 'framer-motion';
import { PAGE_VARIANTS, TRANSITION_DURATION, CINEMATIC_EASE } from '../utils/motion';

const PageTransition = ({ children, className = "" }) => {
  return (
    <motion.div
      className={className}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={PAGE_VARIANTS}
      transition={{
        duration: TRANSITION_DURATION,
        ease: CINEMATIC_EASE
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
