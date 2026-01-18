import React from 'react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import Section from '../components/Section';
import Container from '../components/Container';
import PhotoCard from '../components/PhotoCard';

const Photography = () => {
  // Mock data with "layout hints" to drive the editorial feel
  const feedItems = [
    { id: 1, type: 'hero', title: 'Urban Solitude', category: 'Tokyo, 2024', image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&q=80', ratio: 'wide' },
    {
      id: 2, type: 'pair',
      items: [
        { id: 21, title: 'Shadow Study', category: 'Studio', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80', ratio: 'portrait' },
        { id: 22, title: 'Light Leak', category: '35mm', image: 'https://images.unsplash.com/photo-1519744531200-c1176874aa9d?auto=format&fit=crop&q=80', ratio: 'portrait' }
      ]
    },
    { id: 3, type: 'full', title: 'Neon Nights', category: 'Hong Kong', image: 'https://images.unsplash.com/photo-1555685812-4b943f3db990?auto=format&fit=crop&q=80', ratio: 'landscape' },
    { id: 4, type: 'offset-left', title: 'Raw Texture', category: 'Architecture', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80', ratio: 'portrait' },
    { id: 5, type: 'offset-right', title: 'Human Form', category: 'Nude Art', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80', ratio: 'square' },
  ];

  return (
    <PageTransition className="page-wrapper">
      <Section>
        <Container style={{ maxWidth: '1600px', padding: '0 2rem' }}>
          <ScrollReveal>
            <h1 className="text-hero" style={{ marginBottom: '8rem', textAlign: 'center' }}>SELECTED<br />STILLS</h1>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15vh' }}>
            {feedItems.map((block) => {
              // RENDER LOGIC BASED ON BLOCK TYPE

              // 1. Full Width Hero
              if (block.type === 'hero') {
                return (
                  <ScrollReveal key={block.id} style={{ width: '100%' }}>
                    <PhotoCard
                      title={block.title}
                      category={block.category}
                      image={block.image}
                      aspectRatio={block.ratio}
                      to={`/photo/${block.id}`}
                    />
                  </ScrollReveal>
                );
              }

              // 2. Diptych (Pair)
              if (block.type === 'pair') {
                return (
                  <div key={block.id} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    {block.items.map((item, i) => (
                      <ScrollReveal key={item.id} delay={i * 0.1}>
                        <PhotoCard
                          title={item.title}
                          category={item.category}
                          image={item.image}
                          aspectRatio={item.ratio}
                          to={`/photo/${item.id}`}
                        />
                      </ScrollReveal>
                    ))}
                  </div>
                );
              }

              // 3. Central Landscape
              if (block.type === 'full') {
                return (
                  <ScrollReveal key={block.id} style={{ width: '80%', margin: '0 auto' }}>
                    <PhotoCard
                      title={block.title}
                      category={block.category}
                      image={block.image}
                      aspectRatio={block.ratio}
                      to={`/photo/${block.id}`}
                    />
                  </ScrollReveal>
                );
              }

              // 4. Offset Single Column (Left/Right)
              if (block.type === 'offset-left') {
                return (
                  <ScrollReveal key={block.id} style={{ width: '40%', alignSelf: 'flex-start', marginLeft: '10%' }}>
                    <PhotoCard
                      title={block.title}
                      category={block.category}
                      image={block.image}
                      aspectRatio={block.ratio}
                      to={`/photo/${block.id}`}
                    />
                  </ScrollReveal>
                );
              }

              if (block.type === 'offset-right') {
                return (
                  <ScrollReveal key={block.id} style={{ width: '50%', alignSelf: 'flex-end', marginRight: '5%' }}>
                    <PhotoCard
                      title={block.title}
                      category={block.category}
                      image={block.image}
                      aspectRatio={block.ratio}
                      to={`/photo/${block.id}`}
                    />
                  </ScrollReveal>
                );
              }

              return null;
            })}
          </div>
        </Container>
      </Section>
    </PageTransition>
  );
};

export default Photography;
