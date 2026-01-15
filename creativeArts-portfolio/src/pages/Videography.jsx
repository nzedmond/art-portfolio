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
        {/* Full width container to allow mixing widths */}
        <Container size="full">
          <ScrollReveal>
            <h1 className="text-hero" style={{ marginBottom: '15vh', textAlign: 'center' }}>SELECTED<br />MOTION</h1>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15vh', alignItems: 'center' }}>
            {projects.map((item, index) => {
              // every 3rd item is a "Feature" (wider)
              const isFeature = index % 3 === 0;
              const width = isFeature ? '1400px' : '900px';

              return (
                <ScrollReveal key={item} delay={0.1} style={{ width: '100%', maxWidth: width }}>
                  <VideoCard
                    title={`PROJECT TITLE ${item}`}
                    category="MUSIC VIDEO / 2024"
                    image="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop"
                    to={`/project/${item}`}
                  />
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </Section>
    </PageTransition>
  );
};

export default Videography;
