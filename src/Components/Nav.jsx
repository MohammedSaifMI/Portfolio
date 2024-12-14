import React, { useState } from 'react';
import '../Components/nav.css';
import Src from '../Components/ms1.png';

function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="container-fluid">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light">
          {/* Brand (Logo) */}
          <a className="navbar-brand" href="#">
            <img className="logo" src={Src} alt="Logo" />
          </a>

          {/* Toggle Button (Visible on Small Screens) */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links (Visible on Large Screens) */}
          <div className="collapse navbar-collapse d-none d-lg-flex">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Project</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Full-Screen Overlay Menu for Small Screens */}
      {isMenuOpen && (
        <div className={`menu-overlay ${isMenuOpen ? 'show' : ''}`}>
          {/* Animated Close Button */}
          <span className="close-icon" onClick={toggleMenu}>
            &times;
          </span>
          <ul className="menu-list">
            <li className="menu-item">
              <a href="#" onClick={toggleMenu}>About</a>
            </li>
            <li className="menu-item">
              <a href="#" onClick={toggleMenu}>Project</a>
            </li>
            <li className="menu-item">
              <a href="#" onClick={toggleMenu}>Contact</a>
            </li>
          </ul>
        </div>
      )}

    </div>
  );
}

export default Nav;
