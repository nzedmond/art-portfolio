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

  // Mock Data Structure - Customize per project for uniqueness
  // - heroMedia: video or image (video-first when applicable)
  // - overview: 2-4 lines, personal and reflective tone
  // - credits: flexible fields (Client, Role, Year, etc.)
  // - gallery: custom layouts using span (4,6,8,12) and ratio (wide, landscape, portrait, square)
  // - processNotes: optional, reveal creative decisions
  // - bts: optional behind-the-scenes images
  const project = {
    id,
    title: `Project Title ${id}`,
    category: "Music Video / 2024",
    client: "Universal Music Group",
    role: "Director / Editor",
    overview: "A music video about movement and light. I wanted to capture the raw energy of the performance without overproducing it. We shot everything in one take using practical lighting.",
    // Support image or video for hero
    heroMedia: {
      type: 'video',
      src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop", // Poster
      videoSrc: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
    },
    credits: [
      { label: "Client", value: "Universal Music Group" },
      { label: "Role", value: "Director / Editor" },
      { label: "Year", value: "2024" }
    ],
    gallery: [
      // Opening: Full-width cinematic shot
      { id: 1, span: 12, ratio: 'wide', src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop" },

      // Detail shots: 2-column layout
      { id: 2, span: 6, ratio: 'landscape', src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" },
      { id: 3, span: 6, ratio: 'landscape', src: "https://images.unsplash.com/photo-1519744531200-c1176874aa9d?q=80&w=1000&auto=format&fit=crop" },

      // Feature: Large portrait
      { id: 4, span: 8, ratio: 'portrait', src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop" },
      { id: 5, span: 4, ratio: 'portrait', src: "https://images.unsplash.com/photo-1555685812-4b943f3db990?q=80&w=1000&auto=format&fit=crop" },

      // Closing: Full-width
      { id: 6, span: 12, ratio: 'wide', src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1000&auto=format&fit=crop" },
    ],
    bts: [
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517604931442-710c8ef5ad25?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?auto=format&fit=crop&q=80"
    ],
    processNotes: [
      {
        title: "The One-Take Challenge",
        note: "We committed to capturing everything in a single continuous shot. It meant rehearsing for hours, but the energy was worth it."
      },
      {
        title: "Practical Lighting",
        note: "I wanted the light to feel raw and real, so we used only what was already there—streetlights, neon signs, car headlights."
      }
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
        <Container size="md">
          <ScrollReveal>
            <p className="text-body" style={{
              fontSize: '1.5rem',
              lineHeight: 1.8,
              textAlign: 'center',
              maxWidth: '50ch',
              margin: '0 auto',
              color: 'var(--text-primary)'
            }}>
              {project.overview}
            </p>
          </ScrollReveal>
        </Container>
      </Section>

      {/* 3. Credits Section */}
      <Section style={{ paddingTop: '5vh' }}>
        <Container size="lg">
          <ScrollReveal delay={0.2}>
            <div className="project-credits" style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '4rem',
              flexWrap: 'wrap'
            }}>
              {project.credits.map((credit, i) => (
                <div key={i}>
                  <h3 className="text-label" style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>{credit.label}</h3>
                  <p className="text-body">{credit.value}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* 4. Main Content (Visuals) */}
      <Section style={{ paddingTop: '10vh' }}>
        <Container size="full">
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

      {/* 5. Process / BTS (Optional) */}
      {(project.bts || project.processNotes) && (
        <Section style={{ paddingBottom: '10vh', paddingTop: '15vh' }}>
          <Container size="lg">
            <ScrollReveal>
              <h2 className="text-section" style={{ marginBottom: '6rem', textAlign: 'center', opacity: 0.5, fontSize: '1.5rem' }}>PROCESS</h2>
            </ScrollReveal>

            {/* Process Notes */}
            {project.processNotes && project.processNotes.length > 0 && (
              <div style={{ marginBottom: '6rem' }}>
                {project.processNotes.map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <div style={{
                      marginBottom: '3rem',
                      maxWidth: '60ch',
                      margin: '0 auto 3rem'
                    }}>
                      <h3 className="text-label" style={{
                        marginBottom: '1rem',
                        color: 'var(--text-primary)',
                        fontSize: '1rem',
                        letterSpacing: '0.05em'
                      }}>
                        {item.title}
                      </h3>
                      <p className="text-body" style={{
                        fontSize: '1.1rem',
                        lineHeight: 1.7,
                        color: 'rgba(255, 255, 255, 0.7)'
                      }}>
                        {item.note}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            )}

            {/* BTS Images */}
            {project.bts && project.bts.length > 0 && (
              <div className="project-bts-grid">
                {project.bts.map((src, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <div className="project-bts-item" onClick={() => setSelectedImage(src)}>
                      <img src={src} alt="Behind the scenes" className="project-bts-image" loading="lazy" />
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            )}
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
