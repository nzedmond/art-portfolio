import React from 'react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import Section from '../components/Section';
import Container from '../components/Container';
import Card from '../components/Card';

const Photography = () => {
  const photos = [1, 2, 3, 4, 5, 6];

  return (
    <PageTransition>
      <Section>
        <Container>
          <ScrollReveal>
            <h1 className="text-hero" style={{ marginBottom: '4rem' }}>PHOTOGRAPHY</h1>
          </ScrollReveal>

          <div className="grid-3">
            {photos.map((item, index) => (
              <ScrollReveal key={item} delay={index * 0.1}>
                <Card
                  title={`PHOTO SERIES ${item}`}
                  category={index % 2 === 0 ? 'EDITORIAL' : 'PORTRAIT'}
                  aspectRatio={index % 2 === 0 ? 'portrait' : 'square'}
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

export default Photography;
