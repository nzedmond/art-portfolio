import React from 'react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import Section from '../components/Section';
import Container from '../components/Container';

const About = () => {
  return (
    <PageTransition>
      {/* Opening Section */}
      <Section style={{ paddingTop: '15vh', paddingBottom: '12vh' }}>
        <Container size="md">
          <ScrollReveal>
            <h1 className="text-hero" style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              textAlign: 'center',
              marginBottom: '3rem',
              fontWeight: 600,
              letterSpacing: '-0.02em'
            }}>
              Images That<br />Feel Real
            </h1>

            <p className="text-body" style={{
              fontSize: '1.5rem',
              lineHeight: 1.7,
              textAlign: 'center',
              maxWidth: '45ch',
              margin: '0 auto',
              color: 'rgba(255, 255, 255, 0.85)'
            }}>
              I'm interested in the moments people don't usually notice—the ones that happen when no one's performing. That's where things get interesting.
            </p>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Creative Philosophy */}
      <Section style={{ paddingTop: '12vh', paddingBottom: '12vh' }}>
        <Container size="md">
          <ScrollReveal delay={0.1}>
            <div style={{ maxWidth: '60ch', margin: '0 auto' }}>
              <h2 className="text-label" style={{
                marginBottom: '3rem',
                fontSize: '0.9rem',
                opacity: 0.6,
                textAlign: 'center'
              }}>
                HOW I SEE IT
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                <p className="text-body" style={{
                  fontSize: '1.15rem',
                  lineHeight: 1.8,
                  color: 'rgba(255, 255, 255, 0.85)'
                }}>
                  Good work comes from noticing things. Not just what's in frame, but how the light's changing, what people do when they think no one's watching.
                </p>

                <p className="text-body" style={{
                  fontSize: '1.15rem',
                  lineHeight: 1.8,
                  color: 'rgba(255, 255, 255, 0.85)'
                }}>
                  You can't make moments happen, but you can be ready when they do. That's most of the job.
                </p>

                <p className="text-body" style={{
                  fontSize: '1.15rem',
                  lineHeight: 1.8,
                  color: 'rgba(255, 255, 255, 0.85)'
                }}>
                  Real moments don't need fixing. They're already there—in how people move when they forget about the camera, in the quiet parts, in what you'd normally cut out.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Visual Presence */}
      <Section style={{ paddingTop: '8vh', paddingBottom: '8vh' }}>
        <Container size="md">
          <ScrollReveal delay={0.15}>
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

      {/* Process */}
      <Section style={{ paddingTop: '12vh', paddingBottom: '15vh' }}>
        <Container size="md">
          <ScrollReveal delay={0.2}>
            <div style={{ maxWidth: '60ch', margin: '0 auto' }}>
              <h2 className="text-label" style={{
                marginBottom: '4rem',
                fontSize: '0.9rem',
                opacity: 0.6,
                textAlign: 'center'
              }}>
                PROCESS
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                <div>
                  <h3 className="text-label" style={{
                    marginBottom: '0.75rem',
                    fontSize: '0.85rem',
                    opacity: 0.8
                  }}>
                    Before
                  </h3>
                  <p className="text-body" style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                    color: 'rgba(255, 255, 255, 0.85)'
                  }}>
                    I try to understand what something should feel like before worrying about how it looks.
                  </p>
                </div>

                <div>
                  <h3 className="text-label" style={{
                    marginBottom: '0.75rem',
                    fontSize: '0.85rem',
                    opacity: 0.8
                  }}>
                    During
                  </h3>
                  <p className="text-body" style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                    color: 'rgba(255, 255, 255, 0.85)'
                  }}>
                    I pay attention and stay flexible. The plan matters less than what's actually happening.
                  </p>
                </div>

                <div>
                  <h3 className="text-label" style={{
                    marginBottom: '0.75rem',
                    fontSize: '0.85rem',
                    opacity: 0.8
                  }}>
                    After
                  </h3>
                  <p className="text-body" style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                    color: 'rgba(255, 255, 255, 0.85)'
                  }}>
                    I keep what works and cut everything else.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Subtle CTAs */}
      <Section style={{ paddingBottom: '10vh' }}>
        <Container size="md">
          <ScrollReveal delay={0.25}>
            <div style={{
              display: 'flex',
              gap: '3rem',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              <a
                href="/videography"
                style={{
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  letterSpacing: '0.05em',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                  paddingBottom: '4px',
                  transition: 'border-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.8)'}
                onMouseLeave={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
              >
                View the work
              </a>

              <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>—</span>

              <a
                href="mailto:hello@example.com"
                style={{
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  letterSpacing: '0.05em',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                  paddingBottom: '4px',
                  transition: 'border-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.8)'}
                onMouseLeave={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
              >
                Get in touch
              </a>
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    </PageTransition>
  );
};

export default About;
