import React from 'react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import Section from '../components/Section';
import Container from '../components/Container';
import Button from '../components/Button';
import Card from '../components/Card';

const About = () => {
  return (
    <PageTransition>
      <Section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <Container>
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <ScrollReveal>
              <Card
                title=""
                category=""
                aspectRatio="portrait"
                className="pointer-events-none" // Optional: disable hover if it's just a static image
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2} style={{ padding: '0 2rem' }}>
              <h1 className="text-headline" style={{ marginBottom: '2rem' }}>ABOUT THE ARTIST</h1>
              <p className="text-body" style={{ marginBottom: '2rem' }}>
                Start with a strong opening statement. This is a placeholder for the artist's biography.
                It should discuss their vision, process, and experience.
                <br /><br />
                Keep it minimal but impactful. Focus on the "why" rather than just the "how".
              </p>
              <Button variant="outline" href="/resume.pdf">
                RESUME
              </Button>
            </ScrollReveal>
          </div>
        </Container>
      </Section>
    </PageTransition>
  );
};

export default About;
