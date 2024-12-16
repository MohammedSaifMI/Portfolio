import React, { useEffect, useRef } from 'react';
import '../Components/box5.css';

function Connect() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          containerRef.current.classList.add('open');
        } else {
          containerRef.current.classList.remove('open');
        }
      },
      { threshold: 0.1 }
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

  const handleMailClick = () => {
    const mailtoLink = `mailto:md.saifmi1969@gmail.com?subject=Let's Connect&body=Hi there, I’d like to discuss a project!`;
    window.location.href = mailtoLink; 
  };

  return (
    <div className="connect-container" ref={containerRef}>
      <div className="connect-content">
        <p className="project-in-mind">GOT A PROJECT IN MIND?</p>
        <h1 className="connect-title">LET'S CONNECT</h1>
        <div className="write-message">
          <button onClick={handleMailClick} className="message-button">
            WRITE A MESSAGE
          </button>
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
