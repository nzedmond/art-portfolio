import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import '../styles/VideoCard.css';

const VideoCard = ({
  title,
  category,
  image,
  videoSrc,
  to = '#',
  className = ''
}) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  // Lazy Load Observer
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const lazyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            lazyObserver.disconnect();
          }
        });
      },
      { rootMargin: '200px' } // Load when 200px away from viewport
    );

    lazyObserver.observe(container);

    return () => lazyObserver.disconnect();
  }, []);

  // Auto-play Observer
  useEffect(() => {
    if (!shouldLoad || !videoSrc) return;

    // Small delay to ensure ref is attached after render
    const timeoutId = setTimeout(() => {
      const video = videoRef.current;
      if (!video) return;

      const playObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.play().catch(e => {
                // Autoplay prevented is common/expected
              });
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0.5 }
      );

      playObserver.observe(video);

      return () => playObserver.disconnect();
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [videoSrc, shouldLoad]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Link
      to={to}
      className={`video-card-link ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="video-card-wrapper" ref={containerRef}>
        {/* Media Layer */}
        <div className="video-card-media">
          {shouldLoad && videoSrc ? (
            <video
              ref={videoRef}
              src={videoSrc}
              className="video-card-video"
              muted
              loop
              playsInline
              poster={image} // Fallback image while loading
            />
          ) : (
            image ? (
              <img src={image} alt={title} className="video-card-image" />
            ) : (
              <div className="video-card-placeholder" style={{ width: '100%', height: '100%', background: '#111' }} />
            )
          )}

          {/* Gradient Overlay */}
          <div className="video-card-overlay" />

          {/* Play Indicator */}
          <div className="play-indicator">
            <Play size={32} fill="white" color="white" style={{ marginLeft: '4px' }} />
          </div>
        </div>

        {/* Content Layer */}
        <div className="video-card-content">
          <span className="video-card-category">{category}</span>
          <h3 className="video-card-title">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
