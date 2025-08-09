import React from 'react';
import './Footer.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = ({ darkMode }) => {
  return (
    <footer>
      <div className="container text-center">
        <div className="mb-3">
          <a
            href="https://github.com/01Prathamesh"
            target="_blank"
            rel="noreferrer"
            className="mx-3 text-reset"
            title="GitHub"
          >
            <i className="bi bi-github fs-4"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/prathamesh-kasar"
            target="_blank"
            rel="noreferrer"
            className="mx-3 text-reset"
            title="LinkedIn"
          >
            <i className="bi bi-linkedin fs-4"></i>
          </a>
          <a
            href="https://drive.google.com/file/d/13DJPSwzFAyNcVtFl_gze0TkezOFUyA05/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="mx-3 text-reset"
            title="RESUME"
          >
            <i className="bi bi-file-earmark-person fs-4"></i>
          </a>
          <a
            href="https://www.youtube.com/@PrathameshKasar_work"
            target="_blank"
            rel="noreferrer"
            className="mx-3 text-reset"
            title="YouTube"
          >
            <i className="bi bi-youtube fs-4"></i>
          </a>
          <a
            href="https://x.com/PrathameshCode"
            target="_blank"
            rel="noreferrer"
            className="mx-3 text-reset"
            title="X (formerly Twitter)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M14.748 10.123 23.429 0h-2.137l-7.39 8.582L8.385 0H0l9.065 13.177L0 24h2.137l7.743-8.984L15.615 24H24l-9.252-13.877z"/>
            </svg>
          </a>
        </div>
        <p className="mb-0">
          © {new Date().getFullYear()} Prathamesh Kasar <br />
          Made with 🧡🤍💚 in <span className="india-text">INDIA</span> 🇮🇳
        </p>
      </div>
    </footer>
  );
};

export default Footer;
