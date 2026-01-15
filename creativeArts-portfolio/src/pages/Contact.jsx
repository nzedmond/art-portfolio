import React from 'react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import Section from '../components/Section';
import Container from '../components/Container';

const Contact = () => {
  return (
    <PageTransition>
      <Section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <Container size="md">
          <ScrollReveal>
            <h1 className="text-headline" style={{ marginBottom: '1rem' }}>LET'S CREATE TOGETHER</h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-body" style={{ marginBottom: '3rem', fontSize: '1.2rem' }}>
              Available for freelance projects and collaborations worldwide.
              Please include project details and timeline in your inquiry.
            </p>

            <div className="grid-2">
              <div>
                <h3 className="text-subtitle" style={{ marginBottom: '1rem' }}>EMAIL</h3>
                <a href="mailto:hello@artistname.com" className="link-inline text-body">hello@artistname.com</a>
              </div>
              <div>
                <h3 className="text-subtitle" style={{ marginBottom: '1rem' }}>SOCIALS</h3>
                <p className="text-body">Instagram / Vimeo / LinkedIn</p>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    </PageTransition>
  );
};

export default Contact;
