import React from 'react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';

const About = () => {
  return (
    <PageTransition className="page-container">
      <div className="grid-2" style={{ alignItems: 'center', minHeight: '60vh' }}>
        <ScrollReveal>
          <div className="skeleton-box aspect-portrait" style={{ height: '600px' }}>
            PORTRAIT
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} style={{ padding: '2rem' }}>
          <h1>ABOUT THE ARTIST</h1>
          <p style={{ margin: '2rem 0' }}>
            Start with a strong opening statement. This is a placeholder for the artist's biography.
            It should discuss their vision, process, and experience.
            <br /><br />
            Keep it minimal but impactful. Focus on the "why" rather than just the "how".
          </p>
          <div className="skeleton-box" style={{ width: '150px', height: '50px' }}>
            RESUME
          </div>
        </ScrollReveal>
      </div>
    </PageTransition>
  );
};

export default About;
