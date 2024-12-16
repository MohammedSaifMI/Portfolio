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
    <span>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <img src="src/assets/Image/instagram-1-svgrepo-com.svg" alt="Instagram" className="icons" />
        INSTAGRAM
      </a>
    </span>
    <span>
      <a href="https://wa.me/9789988242" target="_blank" rel="noopener noreferrer">
        <img src="src/assets/Image/whatsapp-svgrepo-com.svg" alt="WhatsApp" className="icons" />
        WHATSAPP
      </a>
    </span>
    <span>
      <a href="https://www.linkedin.com/in/mdsaif233/" target="_blank" rel="noopener noreferrer">
        <img src="src/assets/Image/linkedin-svgrepo-com.svg" alt="LinkedIn" className="icons" />
        LINKEDIN
      </a>
    </span>
  </div>
</div>

    </div>
  );
}

export default Connect;
