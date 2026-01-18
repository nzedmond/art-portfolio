import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Section from '../components/Section';
import Container from '../components/Container';
import ScrollReveal from '../components/ScrollReveal';
import TileGrid from '../components/TileGrid';
import ImageTile from '../components/ImageTile';
import Lightbox from '../components/Lightbox';

const Project = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  // Mock Data - In a real app, this would be fetched based on ID
  const project = {
    id,
    title: `Project Title ${id}`,
    category: "Music Video / 2024",
    client: "Universal Music Group",
    role: "Director / Editor",
    description: "A visual exploration of sound and motion. This project aimed to capture the raw energy of the performance while maintaining a cinematic and polished aesthetic. We utilized practical effects and dynamic lighting to create an immersive experience that transports the viewer into the artist's world.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop"
  };

  return (
    <PageTransition>
      {/* Full Screen Hero with Back Button */}
      <div style={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden' }}>
        <img
          src={project.image}
          alt={project.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, var(--bg-color) 0%, transparent 40%, rgba(0,0,0,0.3) 100%)'
        }} />

        <Container style={{ position: 'absolute', bottom: '10vh', left: 0, right: 0, zIndex: 2 }}>
          <ScrollReveal>
            <Link to="/videography" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '2rem', textDecoration: 'none', fontSize: '0.9rem', letterSpacing: '0.1em' }} className="hover-opacity">
              <ArrowLeft size={16} /> BACK TO FEED
            </Link>
            <h1 className="text-hero" style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 8vw, 6rem)' }}>{project.title}</h1>
            <p className="text-label" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>{project.category}</p>
          </ScrollReveal>
        </Container>
      </div>

      <Section>
        <Container size="lg">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem' }} className="project-grid">
            {/* Credits Column */}
            <ScrollReveal delay={0.2}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <h3 className="text-label" style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>CLIENT</h3>
                  <p className="text-body">{project.client}</p>
                </div>
                <div>
                  <h3 className="text-label" style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>ROLE</h3>
                  <p className="text-body">{project.role}</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Description Column */}
            <ScrollReveal delay={0.4}>
              <div style={{ maxWidth: '60ch' }}>
                <p className="text-body" style={{ fontSize: '1.25rem', lineHeight: 1.6 }}>{project.description}</p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Visual Grid / Additional Content */}
      <Section style={{ paddingBottom: '10vh' }}>
        <Container size="xl">
          <h2 className="text-section" style={{ marginBottom: '4rem', textAlign: 'center' }}>VISUALS</h2>

          <TileGrid>
            {/* Row 1: Hero landscape + Portrait */}
            <ImageTile
              span={8}
              aspectRatio="landscape"
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop"
              delay={0.1}
              onClick={() => setSelectedImage("https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop")}
              title="Cinematic Wide"
              category="Film"
            />
            <ImageTile
              span={4}
              aspectRatio="portrait"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
              delay={0.2}
              onClick={() => setSelectedImage("https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop")}
            />

            {/* Row 2: Three squares */}
            <ImageTile
              span={4}
              aspectRatio="square"
              src="https://images.unsplash.com/photo-1519744531200-c1176874aa9d?q=80&w=1000&auto=format&fit=crop"
              delay={0.3}
              onClick={() => setSelectedImage("https://images.unsplash.com/photo-1519744531200-c1176874aa9d?q=80&w=1000&auto=format&fit=crop")}
            />
            <ImageTile
              span={4}
              aspectRatio="square"
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop"
              delay={0.4}
              onClick={() => setSelectedImage("https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop")}
            />
            <ImageTile
              span={4}
              aspectRatio="square"
              src="https://images.unsplash.com/photo-1555685812-4b943f3db990?q=80&w=1000&auto=format&fit=crop"
              delay={0.5}
              onClick={() => setSelectedImage("https://images.unsplash.com/photo-1555685812-4b943f3db990?q=80&w=1000&auto=format&fit=crop")}
            />

            {/* Row 3: Full Width */}
            <ImageTile
              span={12}
              aspectRatio="wide"
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1000&auto=format&fit=crop"
              delay={0.6}
              onClick={() => setSelectedImage("https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1000&auto=format&fit=crop")}
            />
          </TileGrid>
        </Container>
      </Section>

      <AnimatePresence>
        {selectedImage && (
          <Lightbox
            src={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>

    </PageTransition>
  );
};

export default Project;
