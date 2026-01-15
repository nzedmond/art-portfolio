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
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoSrc) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(e => console.log('Autoplay prevented', e));
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [videoSrc]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Link
      to={to}
      className={`video-card-link ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="video-card-wrapper">
        {/* Media Layer */}
        <div className="video-card-media">
          {videoSrc ? (
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
