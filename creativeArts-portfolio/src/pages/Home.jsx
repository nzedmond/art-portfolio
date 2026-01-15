import React from 'react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import Section from '../components/Section';
import Container from '../components/Container';

const Home = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <Section className="hero-section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <Container>
          <ScrollReveal>
            <h1 className="text-hero">VISUAL STORYTELLER<br />BASED IN [CITY]</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-body" style={{ marginTop: '2rem' }}>
              CAPTURING MOMENTS WITH INTENTION & ARTISTRY.
              SPECIALIZING IN CINEMATIC VIDEOGRAPHY AND
              EDITORIAL PHOTOGRAPHY.
            </p>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Featured Work Skeleton */}
      <Section>
        <Container>
          <ScrollReveal>
            <h3 className="text-section" style={{ marginBottom: '3rem' }}>SELECTED WORK</h3>
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
        </Container>
      </Section>
    </PageTransition>
  );
};

export default Home;
