import React from 'react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import Section from '../components/Section';
import Container from '../components/Container';
import Card from '../components/Card';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <Hero
        title="VISUAL<br/>NARRATIVES"
        subtitle="DIRECTOR / PHOTOGRAPHER"
      />

      <Section style={{ padding: '8rem 0', textAlign: 'center' }}>
        <Container size="md">
          <ScrollReveal>
            <p className="text-headline" style={{ lineHeight: '1.4' }}>
              "It’s not about the shutter click. It’s about the silence before it. We craft visual legacies that speak to the human experience, preserving the feeling of a moment long after it has passed."
            </p>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Visual Reinforcement */}
      <ScrollReveal className="w-full">
        <div style={{
          width: '100%',
          height: '70vh',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            backgroundImage: 'url(https://images.unsplash.com/photo-1504913659239-6abc87884fb8?q=80&w=2576&auto=format&fit=crop)', // Raw monotone landscape
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%) brightness(0.8) contrast(1.1)'
          }} role="img" aria-label="Cinematic landscape" />
        </div>
      </ScrollReveal>

      {/* Featured Work Skeleton */}
      <Section>
        <Container>
          <ScrollReveal>
            <h3 className="text-section" style={{ marginBottom: '3rem' }}>SELECTED WORK</h3>
          </ScrollReveal>

          <div className="grid-2">
            <ScrollReveal delay={0.1}>
              <Card
                title="ECHOES OF SILENCE"
                category="Music Video"
                aspectRatio="video"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Card
                title="VOGUE: SUMMER"
                category="Editorial"
                aspectRatio="portrait"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <Card
                title="NIKE CAMPAIGN"
                category="Commercial"
                aspectRatio="portrait"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <Card
                title="URBAN RHYTHM"
                category="Documentary"
                aspectRatio="square"
              />
            </ScrollReveal>
          </div>
        </Container>
      </Section>
    </PageTransition>
  );
};

export default Home;
