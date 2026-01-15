import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Card.css';

const Card = ({
  title,
  category,
  image,
  to = '#',
  aspectRatio = 'portrait', // 'video', 'portrait', 'square'
  delay = 0,
  className = ''
}) => {
  return (
    <Link to={to} className={`card-link ${className}`}>
      <motion.div
        className={`card-wrapper aspect-${aspectRatio}`}
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        {/* Media Placeholder/Image */}
        <div className="card-media">
          {image ? (
            <img src={image} alt={title} className="card-image" />
          ) : (
            <div className="card-placeholder" />
          )}
          {/* Dark overlay for text contrast on hover */}
          <motion.div
            className="card-overlay"
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 0.4 }
            }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Content Reveal */}
        <motion.div
          className="card-content"
          variants={{
            rest: { opacity: 0, y: 20 },
            hover: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="card-category text-label">{category}</span>
          <h3 className="card-title text-section">{title}</h3>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default Card;
