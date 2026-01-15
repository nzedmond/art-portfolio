import React from 'react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import Section from '../components/Section';
import Container from '../components/Container';
import VideoCard from '../components/VideoCard';

const Videography = () => {
  const projects = [1, 2, 3, 4, 5, 6];

  return (
    <PageTransition className="page-wrapper">
      <Section>
        <Container style={{ maxWidth: '900px' }}>
          <ScrollReveal>
            <h1 className="text-hero" style={{ marginBottom: '6rem', textAlign: 'center' }}>SELECTED<br />MOTION</h1>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
            {projects.map((item, index) => (
              <ScrollReveal key={item} delay={0.1} style={{ width: '100%' }}>
                <VideoCard
                  title={`PROJECT TITLE ${item}`}
                  category="MUSIC VIDEO / 2024"
                  image="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop" // Placeholder cinematic image
                  to="#"
                />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>
    </PageTransition>
  );
};

export default Videography;
