import React, { useEffect } from 'react';
import './Navbar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Navbar({ darkMode, toggleTheme }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark' : 'navbar-light'} shadow-sm sticky-top`}>
      <div className="container">
        <a className="navbar-brand fw-bold" href="https://prathamesh-kasar-portfolio.vercel.app/">
          Prathamesh Kasar
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#hero">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#resume">Resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Toggle Button Moved Inside Navbar */}
      <div className="d-flex align-items-center ms-auto me-3">
        <label className="toggle-switch">
          <input type="checkbox" checked={!darkMode} onChange={toggleTheme} />
          <span className="slider">
            <span className="emoji">{darkMode ? '🌙' : '☀️'}</span>
          </span>
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
