import React from 'react';
import '../styles/ImageTile.css';

const TileGrid = ({ children, className = '' }) => {
  return (
    <div className={`tile-grid ${className}`}>
      {children}
    </div>
  );
};

export default TileGrid;
