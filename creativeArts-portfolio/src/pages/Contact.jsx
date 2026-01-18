import React from 'react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import Section from '../components/Section';
import Container from '../components/Container';

const Contact = () => {
  return (
    <PageTransition>
      {/* Opening */}
      <Section style={{ paddingTop: '20vh', paddingBottom: '15vh' }}>
        <Container size="md">
          <ScrollReveal>
            <div style={{ maxWidth: '50ch', margin: '0 auto', textAlign: 'center' }}>
              <h1 className="text-hero" style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                marginBottom: '2rem',
                fontWeight: 600,
                letterSpacing: '-0.02em'
              }}>
                Let's Talk
              </h1>

              <p className="text-body" style={{
                fontSize: '1.25rem',
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.85)',
                marginBottom: '4rem'
              }}>
                If you have a project in mind or just want to say hi, I'd like to hear from you.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Contact Methods */}
      <Section style={{ paddingBottom: '15vh' }}>
        <Container size="md">
          <ScrollReveal delay={0.1}>
            <div style={{
              maxWidth: '40ch',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '3rem'
            }}>
              {/* Email */}
              <div>
                <h3 className="text-label" style={{
                  marginBottom: '1rem',
                  fontSize: '0.85rem',
                  opacity: 0.6
                }}>
                  Email
                </h3>
                <a
                  href="mailto:hello@example.com"
                  style={{
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    fontSize: '1.5rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                    paddingBottom: '4px',
                    transition: 'border-color 0.3s ease',
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.8)'}
                  onMouseLeave={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
                >
                  hello@example.com
                </a>
              </div>

              {/* Social */}
              <div>
                <h3 className="text-label" style={{
                  marginBottom: '1rem',
                  fontSize: '0.85rem',
                  opacity: 0.6
                }}>
                  Elsewhere
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <a
                    href="https://instagram.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      fontSize: '1.1rem',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                  >
                    Instagram
                  </a>
                  <a
                    href="https://vimeo.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      fontSize: '1.1rem',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                  >
                    Vimeo
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div>
                <h3 className="text-label" style={{
                  marginBottom: '1rem',
                  fontSize: '0.85rem',
                  opacity: 0.6
                }}>
                  Availability
                </h3>
                <p className="text-body" style={{
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  color: 'rgba(255, 255, 255, 0.7)'
                }}>
                  Currently taking on select projects for 2024.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    </PageTransition>
  );
};

export default Contact;
