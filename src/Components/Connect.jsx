import React, { useEffect, useRef, useState } from 'react';
import '../Components/box5.css';

function Connect() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add the "open" class when the container is in view
          containerRef.current.classList.add('open');
        } else {
          // Remove the "open" class when the container is out of view
          containerRef.current.classList.remove('open');
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="connect-container" ref={containerRef}>
      <div className="connect-content">
        <p className="project-in-mind">GOT A PROJECT IN MIND?</p>
        <h1 className="connect-title">LET'S CONNECT</h1>
        <div className="write-message">
          <button className="message-button">WRITE A MESSAGE</button>
        </div>
      </div>

      <div className="social-links">
        <p>FEEL FREE TO CONNECT WITH ME ON SOCIAL</p>
        <div className="links">
          <span>INSTAGRAM</span>
          <span>TWITTER</span>
          <span>LINKEDIN</span>
        </div>
      </div>
    </div>
  );
}

export default Connect;
