import React from 'react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';

const Contact = () => {
  return (
    <PageTransition className="page-container">
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '800px' }}>
        <ScrollReveal>
          <h1>LET'S CREATE TOGETHER</h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p style={{ margin: '2rem 0', fontSize: '1.2rem' }}>
            Available for freelance projects and collaborations worldwide.
            Please include project details and timeline in your inquiry.
          </p>

          <div className="grid-2">
            <div>
              <h3>EMAIL</h3>
              <a href="mailto:hello@artistname.com" className="link-inline">hello@artistname.com</a>
            </div>
            <div>
              <h3>SOCIALS</h3>
              <p>Instagram / Vimeo / LinkedIn</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </PageTransition>
  );
};

export default Contact;
