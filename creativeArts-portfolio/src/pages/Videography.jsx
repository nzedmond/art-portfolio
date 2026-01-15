import React from 'react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import Section from '../components/Section';
import Container from '../components/Container';
import Card from '../components/Card';

const Videography = () => {
  const projects = [1, 2, 3, 4];

  return (
    <PageTransition>
      <Section>
        <Container>
          <ScrollReveal>
            <h1 className="text-hero" style={{ marginBottom: '4rem' }}>VIDEOGRAPHY</h1>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {projects.map((item, index) => (
              <ScrollReveal key={item} delay={index * 0.1}>
                <Card
                  title={`PROJECT TITLE ${item}`}
                  category="MUSIC VIDEO / 2024"
                  aspectRatio="video"
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
