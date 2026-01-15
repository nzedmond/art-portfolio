import React from 'react';
import '../styles/Layout.css';

const Container = ({
  children,
  className = '',
  size = 'xl' // 'sm', 'md', 'lg', 'xl'
}) => {
  return (
    <div className={`container container-${size} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
