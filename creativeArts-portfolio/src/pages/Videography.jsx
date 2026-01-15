import React from 'react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';

const Videography = () => {
  return (
    <PageTransition className="page-container">
      <ScrollReveal>
        <h1 style={{ marginBottom: '4rem' }}>VIDEOGRAPHY</h1>
      </ScrollReveal>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', paddingBottom: '4rem' }}>
        {[1, 2, 3, 4].map((item, index) => (
          <ScrollReveal key={item} delay={index * 0.1}>
            <div className="skeleton-box aspect-video">
              VIDEO PROJECT {item}
            </div>
            <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between' }}>
              <h4>PROJECT TITLE {item}</h4>
              <p style={{ fontSize: '0.9rem' }}>YEAR / TYPE</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </PageTransition>
  );
};

export default Videography;
