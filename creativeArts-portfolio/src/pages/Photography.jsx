import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import Section from '../components/Section';
import Container from '../components/Container';
import PhotoCard from '../components/PhotoCard';

import '../styles/Photography.css'; // Import styles

const Photography = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Portraits', 'Events', 'Creative'];

  // Mock data with "layout hints" to drive the editorial feel
  // Added tags for filtering logic
  const feedItems = [
    {
      id: 1,
      type: 'hero',
      title: 'Urban Solitude',
      category: 'Tokyo, 2024',
      image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&q=80',
      ratio: 'wide',
      tags: ['Creative', 'Events']
    },
    {
      id: 2,
      type: 'pair',
      tags: ['Portraits', 'Creative'],
      items: [
        { id: 21, title: 'Shadow Study', category: 'Studio', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80', ratio: 'portrait' },
        { id: 22, title: 'Light Leak', category: '35mm', image: 'https://images.unsplash.com/photo-1519744531200-c1176874aa9d?auto=format&fit=crop&q=80', ratio: 'portrait' }
      ]
    },
    {
      id: 3,
      type: 'full',
      title: 'Neon Nights',
      category: 'Hong Kong',
      image: 'https://images.unsplash.com/photo-1555685812-4b943f3db990?auto=format&fit=crop&q=80',
      ratio: 'landscape',
      tags: ['Events', 'Creative']
    },
    {
      id: 4,
      type: 'offset-left',
      title: 'Raw Texture',
      category: 'Architecture',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80',
      ratio: 'portrait',
      tags: ['Creative']
    },
    {
      id: 5,
      type: 'offset-right',
      title: 'Human Form',
      category: 'Nude Art',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80',
      ratio: 'square',
      tags: ['Portraits', 'Creative']
    },
  ];

  const filteredItems = filter === 'All'
    ? feedItems
    : feedItems.filter(item => {
      // For 'pair' type, check tags of individual items if available, otherwise check block tags
      if (item.type === 'pair' && item.items) {
        return item.items.some(subItem => subItem.tags && subItem.tags.includes(filter)) || (item.tags && item.tags.includes(filter));
      }
      return item.tags && item.tags.includes(filter);
    });

  return (
    <PageTransition className="page-wrapper">
      <Section>
        <Container className="photography-container">
          <ScrollReveal>
            <h1 className="text-hero photography-title" style={{ marginBottom: '15vh', textAlign: 'center' }}>SELECTED<br />STILLS</h1>
          </ScrollReveal>

          {/* Minimal Filter UI */}
          <ScrollReveal delay={0.1}>
            <div className="filter-buttons-container">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-label filter-button ${filter === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <motion.div
            layout
            className="photo-feed-container"
          >
            <AnimatePresence mode='popLayout'>
              {filteredItems.map((block) => {
                // SHARED WRAPPER COMPONENT FOR ANIMATION
                const AnimatedWrapper = ({ children }) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {children}
                  </motion.div>
                );

                // RENDER LOGIC BASED ON BLOCK TYPE

                // 1. Full Width Hero
                if (block.type === 'hero') {
                  return (
                    <AnimatedWrapper key={block.id}>
                      <div className="photo-feed-hero">
                        <PhotoCard
                          title={block.title}
                          category={block.category}
                          image={block.image}
                          aspectRatio={block.ratio}
                          to={`/photo/${block.id}`}
                        />
                      </div>
                    </AnimatedWrapper>
                  );
                }

                // 2. Diptych (Pair)
                if (block.type === 'pair') {
                  return (
                    <AnimatedWrapper key={block.id}>
                      <div className="photo-feed-pair">
                        {block.items.map((item, i) => (
                          <div key={item.id}>
                            <PhotoCard
                              title={item.title}
                              category={item.category}
                              image={item.image}
                              aspectRatio={item.ratio}
                              to={`/photo/${item.id}`}
                            />
                          </div>
                        ))}
                      </div>
                    </AnimatedWrapper>
                  );
                }

                // 3. Central Landscape
                if (block.type === 'full') {
                  return (
                    <AnimatedWrapper key={block.id}>
                      <div className="photo-feed-central">
                        <PhotoCard
                          title={block.title}
                          category={block.category}
                          image={block.image}
                          aspectRatio={block.ratio}
                          to={`/photo/${block.id}`}
                        />
                      </div>
                    </AnimatedWrapper>
                  );
                }

                // 4. Offset Single Column (Left/Right)
                if (block.type === 'offset-left') {
                  return (
                    <AnimatedWrapper key={block.id}>
                      <div className="photo-feed-offset-left">
                        <PhotoCard
                          title={block.title}
                          category={block.category}
                          image={block.image}
                          aspectRatio={block.ratio}
                          to={`/photo/${block.id}`}
                        />
                      </div>
                    </AnimatedWrapper>
                  );
                }

                if (block.type === 'offset-right') {
                  return (
                    <AnimatedWrapper key={block.id}>
                      <div className="photo-feed-offset-right">
                        <PhotoCard
                          title={block.title}
                          category={block.category}
                          image={block.image}
                          aspectRatio={block.ratio}
                          to={`/photo/${block.id}`}
                        />
                      </div>
                    </AnimatedWrapper>
                  );
                }

                return null;
              })}
            </AnimatePresence>
          </motion.div>

        </Container>
      </Section>
    </PageTransition>
  );
};

export default Photography;
