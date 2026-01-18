import React from 'react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import Section from '../components/Section';
import Container from '../components/Container';

const About = () => {
  return (
    <PageTransition>
      {/* Opening Section */}
      <Section style={{ paddingTop: '15vh', paddingBottom: '10vh' }}>
        <Container size="md">
          <ScrollReveal>
            <h1 className="text-hero" style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              textAlign: 'center',
              marginBottom: '3rem',
              fontWeight: 600,
              letterSpacing: '-0.02em'
            }}>
              Making Images<br />That Matter
            </h1>

            <p className="text-body" style={{
              fontSize: '1.5rem',
              lineHeight: 1.7,
              textAlign: 'center',
              maxWidth: '45ch',
              margin: '0 auto',
              color: 'rgba(255, 255, 255, 0.85)'
            }}>
              I care about the moments between the moments—the ones that feel honest and unforced. That's where the real story lives.
            </p>
          </ScrollReveal>
        </Container>
      </Section>

      {/* What I Do */}
      <Section style={{ paddingTop: '10vh', paddingBottom: '10vh' }}>
        <Container size="md">
          <ScrollReveal delay={0.2}>
            <div style={{ maxWidth: '60ch', margin: '0 auto' }}>
              <p className="text-body" style={{
                fontSize: '1.15rem',
                lineHeight: 1.8,
                marginBottom: '2rem',
                color: 'rgba(255, 255, 255, 0.85)'
              }}>
                I work mostly in music videos and editorial photography. The work is about finding the right light, the right moment, and knowing when to stop.
              </p>

              <p className="text-body" style={{
                fontSize: '1.15rem',
                lineHeight: 1.8,
                marginBottom: '2rem',
                color: 'rgba(255, 255, 255, 0.85)'
              }}>
                I'm drawn to projects that prioritize atmosphere over perfection. The best work happens when there's trust between everyone involved and room for things to unfold naturally.
              </p>

              <p className="text-body" style={{
                fontSize: '1.15rem',
                lineHeight: 1.8,
                color: 'rgba(255, 255, 255, 0.85)'
              }}>
                I've been doing this for a while now. The technical side matters, but it's always in service of the story or the feeling we're trying to create.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Visual Presence */}
      <Section style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
        <Container size="md">
          <ScrollReveal delay={0.3}>
            <div style={{
              maxWidth: '700px',
              margin: '0 auto',
              aspectRatio: '4 / 5',
              overflow: 'hidden',
              backgroundColor: 'var(--bg-contrast)'
            }}>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                alt="Portrait"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* How I Work */}
      <Section style={{ paddingTop: '10vh', paddingBottom: '15vh' }}>
        <Container size="md">
          <ScrollReveal delay={0.3}>
            <div style={{ maxWidth: '60ch', margin: '0 auto' }}>
              <h2 className="text-label" style={{
                marginBottom: '3rem',
                fontSize: '0.9rem',
                opacity: 0.6,
                textAlign: 'center'
              }}>
                HOW I WORK
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <p className="text-body" style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                    color: 'rgba(255, 255, 255, 0.85)'
                  }}>
                    I prefer practical lighting over heavy post-production. What you see on set is usually what you get.
                  </p>
                </div>

                <div>
                  <p className="text-body" style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                    color: 'rgba(255, 255, 255, 0.85)'
                  }}>
                    I believe in rehearsal and preparation, but I leave room for accidents. Some of the best moments are unplanned.
                  </p>
                </div>

                <div>
                  <p className="text-body" style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                    color: 'rgba(255, 255, 255, 0.85)'
                  }}>
                    I work with small teams when possible. It keeps things focused and allows for faster decisions.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Subtle Contact */}
      <Section style={{ paddingBottom: '10vh' }}>
        <Container size="md">
          <ScrollReveal delay={0.4}>
            <p className="text-body" style={{
              fontSize: '1rem',
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.5)',
              letterSpacing: '0.05em'
            }}>
              If you want to work together → <a href="mailto:hello@example.com" style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                transition: 'border-color 0.3s ease'
              }}>hello@example.com</a>
            </p>
          </ScrollReveal>
        </Container>
      </Section>
    </PageTransition>
  );
};

export default About;
