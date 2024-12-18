import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../Components/nav2.css';
import Src from '../Components/ms1.png';

function Nav2() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Handle scroll event to hide navbar on small screens
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true); // Navbar will hide on scroll
    } else {
      setIsScrolled(false); // Navbar will show when at the top
    }
  };

  // Add scroll event listener on mount and clean up on unmount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="navbar-container w-100">
      <div className="container-fluid">
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
          {/* Brand (Logo) */}
          <a className="navbar-brand" href="#home">
            <img className="logo" src={Src} alt="Logo" />
          </a>

          {/* Navbar Links (Visible on Large Screens) */}
          <div className="navbar-nav d-none d-lg-flex">
            <ScrollLink
              className="nav-link"
              to="about"
              smooth={true}
              duration={500}
            >
              About
            </ScrollLink>
            <ScrollLink
              className="nav-link"
              to="projects"
              smooth={true}
              duration={500}
            >
              Projects
            </ScrollLink>
            <ScrollLink
              className="nav-link"
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </ScrollLink>
          </div>

          {/* Toggle Button (Visible on Small Screens) */}
          <button
            className={`navbar-toggler d-lg-none ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>

      {/* Full-Screen Overlay Menu (Visible on Small Screens) */}
      <div className={`menu-overlay ${isMenuOpen ? 'show' : ''}`}>
        <ul className="menu-list">
          <li className="menu-item">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              onClick={handleLinkClick}
            >
              About
            </ScrollLink>
          </li>
          <li className="menu-item">
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              onClick={handleLinkClick}
            >
              Projects
            </ScrollLink>
          </li>
          <li className="menu-item">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              onClick={handleLinkClick}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>

        <hr className="menu-divider" />

        {/* Social Media Links */}
        <ul className="social-media-list">
          <li className="social-media-item">
            <a href="mailto:md.saifmi1969@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src="https://www.svgrepo.com/show/452213/gmail.svg" alt="Email" />
            </a>
          </li>
          <li className="social-media-item">
            <a href="https://www.instagram.com/x._saifu_/" target="_blank" rel="noopener noreferrer">
              <img src="https://www.svgrepo.com/show/452229/instagram-1.svg" alt="Instagram" />
            </a>
          </li>
          <li className="social-media-item">
            <a href="https://www.linkedin.com/in/mdsaif233/" target="_blank" rel="noopener noreferrer">
              <img src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="LinkedIn" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav2;
