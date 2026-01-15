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
