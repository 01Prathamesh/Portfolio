import React from 'react';
import './Footer.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = ({ darkMode }) => {
  return (
    <footer >
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
            href="https://drive.google.com/file/d/1UksqrqTD363_ddaa5qZ-uJbsOO46-UaN/view?usp=sharing"
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
