import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PhotoCard.css';

const PhotoCard = ({
  title,
  category,
  image,
  to = "#",
  aspectRatio = "portrait", // portrait, landscape, square, wide
  className = ""
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <Link to={to} className={`photo-card-link ${className}`}>
      <div className={`photo-card-wrapper aspect-${aspectRatio} ${isLoaded ? 'loaded' : 'loading'}`}>
        {image && (
          <img
            src={image}
            alt={title}
            className={`photo-card-image ${isLoaded ? 'is-visible' : ''}`}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
          />
        )}

        {/* Minimal Overlay & Info */}
        <div className="photo-card-overlay" />
        <div className="photo-card-info">
          <h3 className="photo-card-title">{title}</h3>
          {category && <p className="photo-card-meta">{category}</p>}
        </div>
      </div>
    </Link>
  );
};

export default PhotoCard;
