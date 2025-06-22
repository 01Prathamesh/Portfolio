import React from 'react';
import './Resume.css';

const Resume = ({ darkMode }) => {
  return (
    <section
      id="resume"
      className="container-fluid py-5 text-center"
    >
      <h2 className="mb-4" data-aos="fade-down">
        📄 <span style={{ borderBottom: "2px solid #00d4ff" }}>My Resume</span>
      </h2>
      <p className="lead mb-4 px-3" data-aos="fade-up">
        A quick snapshot of my experience, skills, and tech journey — neatly packed into a single document.
      </p>
      <a
        href="https://drive.google.com/file/d/1FRMCgRArYSas94urqGu0STE0htXVdq8G/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className={`btn btn-lg px-5 py-3 fw-semibold ${
          darkMode ? 'btn-outline-info' : 'btn-outline-dark'
        } shadow-sm`}
        style={{
          borderRadius: "30px",
          letterSpacing: "1px",
          transition: "all 0.3s ease-in-out",
        }}
        data-aos="zoom-in"
      >
        <i className="bi bi-file-earmark-person-fill me-2"></i> View Resume
      </a>
    </section>
  );
};

export default Resume;
