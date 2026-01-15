import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { CINEMATIC_EASE, TRANSITION_DURATION } from '../utils/motion';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = React.useRef(0);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Background blur logic
      setScrolled(currentScrollY > 50);

      // Adaptive hide/show logic
      // If scrolling down AND passed threshold -> Hide
      // If scrolling up -> Show
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: TRANSITION_DURATION,
        ease: CINEMATIC_EASE
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: TRANSITION_DURATION,
        ease: CINEMATIC_EASE
      }
    }
  };

  const linkVariants = {
    closed: { y: 20, opacity: 0 },
    open: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1 + (i * 0.1),
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      style={{ transform: isVisible ? 'translateY(0)' : 'translateY(-100%)' }}
    >
      <div className="nav-container">
        <div className="logo">
          <NavLink to="/">EDMOND NZIVUGIRA</NavLink>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-links desktop-only">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/videography">Video</NavLink></li>
          <li><NavLink to="/photography">Photo</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <ul className="mobile-links">
              {['Home', 'Video', 'Photo', 'About', 'Contact'].map((item, i) => {
                const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace('video', 'videography').replace('photo', 'photography')}`;
                return (
                  <motion.li
                    key={item}
                    custom={i}
                    variants={linkVariants}
                  >
                    <NavLink to={path} end={item === 'Home'}>{item}</NavLink>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
