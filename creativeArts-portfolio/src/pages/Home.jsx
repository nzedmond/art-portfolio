import React from 'react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';

const Home = () => {
  return (
    <PageTransition className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <ScrollReveal>
          <h1>VISUAL STORYTELLER<br />BASED IN [CITY]</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p>
            CAPTURING MOMENTS WITH INTENTION & ARTISTRY.
            SPECIALIZING IN CINEMATIC VIDEOGRAPHY AND
            EDITORIAL PHOTOGRAPHY.
          </p>
        </ScrollReveal>
      </section>

      {/* Featured Work Skeleton */}
      <section>
        <ScrollReveal>
          <h3 style={{ marginBottom: '2rem' }}>SELECTED WORK</h3>
        </ScrollReveal>

        <div className="grid-2">
          <ScrollReveal delay={0.1}>
            <div className="skeleton-box aspect-video">FEATURED VIDEO PROJECT</div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="skeleton-box aspect-portrait">FEATURED EDITORIAL</div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="skeleton-box aspect-portrait">COMMERCIAL SHOOT</div>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <div className="skeleton-box aspect-square">MUSIC VIDEO</div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
