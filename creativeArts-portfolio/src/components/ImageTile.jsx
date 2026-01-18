import React from 'react';
import '../styles/ImageTile.css';

const ImageTile = ({
  src,
  alt,
  title,     // New prop
  category,  // New prop
  span = 6, // 4, 6, 8, 12
  aspectRatio = 'landscape', // landscape, portrait, square, auto
  rounded = false,
  delay = 0,
  className = '',
  onClick // New prop
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  const style = {
    animationDelay: `${delay}s`,
    cursor: onClick ? 'zoom-in' : 'default' // Add cursor hint
  };

  return (
    <div
      className={`image-tile tile-span-${span} ratio-${aspectRatio} ${rounded ? 'rounded' : ''} ${className}`}
      style={style}
      onClick={onClick} // Attach handler
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
    >
      <div className={`image-tile-placeholder ${isLoaded ? 'hidden' : ''}`} />
      <img
        src={src}
        alt={alt || 'Project image'}
        className={`image-tile-img ${isLoaded ? 'is-visible' : ''}`}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
      />

      {/* Editorial Overlay */}
      {title && (
        <>
          <div className="image-tile-overlay" />
          <div className="image-tile-content">
            <h3 className="image-tile-title">{title}</h3>
            {category && <p className="image-tile-category">{category}</p>}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageTile;
