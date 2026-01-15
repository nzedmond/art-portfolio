import React from 'react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';

const Photography = () => {
  return (
    <PageTransition className="page-container">
      <ScrollReveal>
        <h1 style={{ marginBottom: '4rem' }}>PHOTOGRAPHY</h1>
      </ScrollReveal>

      <div className="grid-3" style={{ paddingBottom: '4rem' }}>
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <ScrollReveal key={item} delay={index * 0.1}>
            <div className={`skeleton-box ${index % 2 === 0 ? 'aspect-portrait' : 'aspect-square'}`} style={{ marginBottom: '2rem' }}>
              PHOTO {item}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </PageTransition>
  );
};

export default Photography;
