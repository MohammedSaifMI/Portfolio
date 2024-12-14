import React, { useState } from 'react';
import '../Components/nav2.css';
import Src from '../Components/ms1.png';

function Nav2() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container w-100 h-25">
      <div className="container-fluid">
        <nav className="navbar">
          {/* Brand (Logo) */}
          <a className="navbar-brand" href="#">
            <img className="logo" src={Src} alt="Logo" />
          </a>

          {/* Navbar Links (Visible on Large Screens) */}
          <div className="navbar-nav ">
            <a className="nav-link" href="#">About</a>
            <a className="nav-link" href="#">Project</a>
            <a className="nav-link" href="#">Contact</a>
          </div>

          {/* Toggle Button (Visible on Small Screens) */}
          <button
            className={`navbar-toggler  d-lg-none ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>

      {/* Full-Screen Overlay Menu (Visible on Small Screens) */}
      <div className={`menu-overlay ${isMenuOpen ? 'show' : ''}`}>
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
    </div>
  );
}

export default Nav2;
