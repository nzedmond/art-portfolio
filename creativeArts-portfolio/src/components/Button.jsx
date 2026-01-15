import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Button.css';

const Button = ({
  children,
  variant = 'primary', // 'primary', 'outline', 'text'
  to,
  href,
  onClick,
  className = ''
}) => {
  const isLink = to || href;
  const Component = isLink ? (to ? Link : 'a') : 'button';
  const props = {
    to: to,
    href: href,
    onClick: onClick,
    target: href ? '_blank' : undefined,
    rel: href ? 'noopener noreferrer' : undefined,
    className: `btn btn-${variant} ${className}`
  };

  return (
    <Component {...props}>
      <motion.span
        className="btn-content"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        {children}
      </motion.span>
    </Component>
  );
};

export default Button;
