import React from 'react';
import '../styles/Layout.css';

const Section = ({
  children,
  className = '',
  fullWidth = false,
  noPadding = false,
  id
}) => {
  const paddingClass = noPadding ? 'section-no-padding' : 'section-padding';
  const widthClass = fullWidth ? 'section-full' : '';

  return (
    <section id={id} className={`section ${paddingClass} ${widthClass} ${className}`}>
      {children}
    </section>
  );
};

export default Section;
