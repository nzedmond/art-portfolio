import React, { useEffect, useState, useRef } from 'react';
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
import '../styles/Project.css';

const Project = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const heroVideoRef = useRef(null);

  // Mock Data - In Real World, fetch by ID
  const project = {
    id,
    title: `Project Title ${id}`,
    category: "Music Video / 2024",
    client: "Universal Music Group",
    role: "Director / Editor",
    description: "A visual exploration of sound and motion. This project aimed to capture the raw energy of the performance while maintaining a cinematic and polished aesthetic. We utilized practical effects and dynamic lighting to create an immersive experience.",
    // Support image or video for hero
    heroMedia: {
      type: 'image', // Change to 'video' to test video support
      src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop",
      // videoSrc: "/path/to/video.mp4" 
    },
    credits: [
      { label: "Client", value: "Universal Music Group" },
      { label: "Role", value: "Director / Editor" },
      { label: "Year", value: "2024" }
    ],
    gallery: [
      { id: 1, span: 8, ratio: 'landscape', src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop", title: "Wide Shot" },
      { id: 2, span: 4, ratio: 'portrait', src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop", title: "Close Up" },
      { id: 3, span: 4, ratio: 'square', src: "https://images.unsplash.com/photo-1519744531200-c1176874aa9d?q=80&w=1000&auto=format&fit=crop", title: "Detail" },
      { id: 4, span: 4, ratio: 'square', src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop", title: "Texture" },
      { id: 5, span: 4, ratio: 'square', src: "https://images.unsplash.com/photo-1555685812-4b943f3db990?q=80&w=1000&auto=format&fit=crop", title: "Atmosphere" },
      { id: 6, span: 12, ratio: 'wide', src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1000&auto=format&fit=crop", title: "Closing Shot" },
    ],
    bts: [
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517604931442-710c8ef5ad25?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?auto=format&fit=crop&q=80"
    ]
  };

  return (
    <PageTransition>
      {/* 1. Hero Section */}
      <div className="project-hero">
        {project.heroMedia.type === 'video' ? (
          <video
            ref={heroVideoRef}
            src={project.heroMedia.videoSrc}
            className="project-hero-media"
            autoPlay
            muted
            loop
            playsInline
            poster={project.heroMedia.src}
          />
        ) : (
          <img
            src={project.heroMedia.src}
            alt={project.title}
            className="project-hero-media"
          />
        )}

        <div className="project-hero-overlay" />

        <Container className="project-hero-content">
          <ScrollReveal>
            <Link to="/videography" className="project-back-link">
              <ArrowLeft size={16} /> BACK TO FEED
            </Link>
            <h1 className="text-hero" style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 8vw, 6rem)' }}>{project.title}</h1>
            <p className="text-label" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>{project.category}</p>
          </ScrollReveal>
        </Container>
      </div>

      {/* 2. Overview Section */}
      <Section>
        <Container size="lg">
          <div className="project-overview-grid">
            {/* Credits Column */}
            <ScrollReveal delay={0.2}>
              <div className="project-credits">
                {project.credits.map((credit, i) => (
                  <div key={i}>
                    <h3 className="text-label" style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>{credit.label}</h3>
                    <p className="text-body">{credit.value}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Description Column */}
            <ScrollReveal delay={0.4}>
              <div className="project-description">
                <p>{project.description}</p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* 3. Main Content (Visuals) */}
      <Section>
        <Container size="xl">
          <ScrollReveal>
            <h2 className="text-section" style={{ marginBottom: '4rem', textAlign: 'center' }}>VISUALS</h2>
          </ScrollReveal>

          <TileGrid>
            {project.gallery.map((item, index) => (
              <ImageTile
                key={item.id}
                span={item.span}
                aspectRatio={item.ratio}
                src={item.src}
                title={item.title}
                delay={index * 0.1}
                onClick={() => setSelectedImage(item.src)}
              />
            ))}
          </TileGrid>
        </Container>
      </Section>

      {/* 4. Process / BTS (Optional) */}
      {project.bts && project.bts.length > 0 && (
        <Section style={{ paddingBottom: '10vh' }}>
          <Container size="lg">
            <ScrollReveal>
              <h2 className="text-section" style={{ marginBottom: '4rem', textAlign: 'center', opacity: 0.7 }}>PROCESS</h2>
            </ScrollReveal>
            <div className="project-bts-grid">
              {project.bts.map((src, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="project-bts-item" onClick={() => setSelectedImage(src)}>
                    <img src={src} alt="Behind the scenes" className="project-bts-image" loading="lazy" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

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
