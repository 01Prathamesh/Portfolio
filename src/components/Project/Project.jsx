import React, { useState } from 'react';
import './Project.css';

const Project = ({ darkMode }) => {
  const [showScreenshots, setShowScreenshots] = useState(false);

  const projects = [
    {
      title: "ShopShakti (Full-Stack E-Commerce)",
      desc: "A modern full-stack e-commerce web application currently under active development. It features a responsive Angular frontend and a robust ASP.NET Core Web API backend. Key functionalities include user authentication, cart & checkout system, admin dashboard, and dynamic product management. Designed with scalability, performance, and clean architecture in mind.",
      tech: "Angular 17+, ASP.NET Core Web API, Entity Framework Core, SQL Server, TypeScript",
      github: "https://github.com/01Prathamesh/ShopShakti"
    },
    {
      title: "Career Dendrogram Web Application",
      desc: "Developed a web application to visualize career paths, enabling users to explore various career options through an interactive dendrogram. Features include user account management, CRUD operations for career paths, and responsive design.",
      tech: "Django, SQLite, HTML, CSS, JavaScript, Python",
      github: "https://github.com/01Prathamesh/Career_Dendrogram_Project"
    },
    {
      title: "School Blog API",
      desc: "Created a blog API for a school using FastAPI and MongoDB (Motor) for async operations. Includes CRUD for posts, Pydantic validation, and auto-generated API docs.",
      tech: "FastAPI, Motor, Pydantic, Uvicorn, Python",
      github: "https://github.com/01Prathamesh/school_blog_API"
    },
    {
      title: "ECommerce AtoZ",
      desc: "Django-based web application for an online store with product listings, checkout flow, mock payment, user login, and order tracking.",
      tech: "Django, Django REST, PostgreSQL/SQLite, HTML/CSS, JavaScript, Bootstrap, Pillow",
      github: "https://github.com/01Prathamesh/ECommerce_AtoZ"
    },
    {
      title: "Team Communication Platform",
      desc: "Role-based team chat system with login tracking, inbox messaging, and dashboards for Admin, Project Leader, and Programmer.",
      tech: "ASP.NET Core, Razor Views, SQLite, C#",
      github: "https://github.com/01Prathamesh/TeamCommunicationPlatform"
    },
    {
      title: "SciAstra Backend API",
      desc: "RESTful APIs for courses, blogs, and transactions with MySQL integration, error handling, and environment config setup.",
      tech: "Node.js, Express, MySQL, Postman",
      github: "https://github.com/01Prathamesh/SciAstraBackendAPI"
    },
    {
      title: "Customer Relationship Manager (Spring Boot)",
      desc: "Spring Boot CRM for customer management including add/edit/delete. Integrated with MySQL & H2 console for dev/debug.",
      tech: "Spring Boot, Thymeleaf, MySQL, Java",
      github: "https://github.com/01Prathamesh/CRM_SpringBoot"
    }
  ];

  return (
    <div className={`project-wrapper ${darkMode ? "dark" : ""}`}>
      
      {/* === Projects Section === */}
      <section className="project-section" id="projects">
        <h2 className="section-title" data-aos="fade-down"><span style={{ borderBottom: '2px solid #00d4ff' }}>Projects </span></h2>
        <div className="project-grid">
          {projects.map((proj, idx) => (
            <div className="project-card" key={idx} data-aos="fade-up">
              <h5>{proj.title}</h5>
              <p>{proj.desc}</p>
              <p><strong>Tech:</strong> {proj.tech}</p>
              <a href={proj.github} className="btn-outline" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </section>

      {/* === Videos Section === */}
      <section className="video-section" id="project-videos">
        <h3 className="section-title" data-aos="fade-up">
          🎥 <span style={{ borderBottom: '2px solid #00d4ff' }}>Project Demo Videos</span>
        </h3>
        <div className="row mt-4">
          {[
            {
              title: "ShopShakti",
              url: "https://www.youtube.com/embed/cAOLf5x-35U"
            },
            {
              title: "Career Dendrogram",
              url: "https://www.youtube.com/embed/p70oAqZrcfc"
            },
            {
              title: "ECommerce AtoZ",
              url: "https://www.youtube.com/embed/e9MqXj5HTe8"
            },
            {
              title: "SciAstra",
              url: "https://www.youtube.com/embed/tMiIE3D9NOE"
            },
            {
              title: "Team Communication Platform",
              url: "https://www.youtube.com/embed/nx__NHE-qPQ"
            }
          ].map((video, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div
                className={`video-card-modern p-4 rounded-4 shadow-lg ${darkMode ? 'bg-dark text-white' : 'bg-white text-dark'}`}
                data-aos="zoom-in"
              >
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="fw-semibold mb-0">{video.title}</h5>
                  <button
                    className="open-btn"
                    onClick={() => window.open(`https://youtu.be/${video.url.split('/').pop()}`, '_blank')}
                    title="Watch on YouTube"
                  >
                    <i className="bi bi-box-arrow-up-right"></i>
                  </button>
                </div>
                <div className="video-frame">
                  <iframe
                    src={`${video.url}?autoplay=1&mute=1&loop=1&playlist=${video.url.split("/").pop()}`}
                    className="styled-video"
                    title={video.title}
                    allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === Screenshots Section === */}
      <section className="screenshot-toggle-section" id="project-screenshots">
        <div className="screenshot-toggle" onClick={() => setShowScreenshots(!showScreenshots)}>
          <span style={{ borderBottom: '2px solid #00d4ff' }}>
            {showScreenshots ? "🔽 Hide Project Screenshots" : "🖼️ Show Project Screenshots"}
          </span>
        </div>
        {showScreenshots && (
          <div className="screenshot-section">
            {[
              {
                title: "Career Dendrogram",
                count: 18,
                path: "https://raw.githubusercontent.com/01Prathamesh/Career_Dendrogram_Project/master/SS/",
                ext: "jpg"
              },
              {
                title: "Team Communication Platform",
                count: 6,
                path: "https://raw.githubusercontent.com/01Prathamesh/TeamCommunicationPlatform/main/Screenshot/",
                ext: "jpg"
              },
              {
                title: "Customer Relationship Manager",
                count: 4,
                path: "https://raw.githubusercontent.com/01Prathamesh/Customer-Relationship-Manager/main/SS/",
                ext: "png"
              },
              {
                title: "School Blog API",
                count: 5,
                path: "https://raw.githubusercontent.com/01Prathamesh/school_blog_API/main/ScreenShot/",
                ext: "png"
              }
            ].map((project, idx) => (
              <div key={idx} className="mb-5">
                <h5 className="mb-3 fw-semibold">{project.title}</h5>
                <div className="screenshot-gallery">
                  {Array.from({ length: project.count }).map((_, i) => (
                    <div className="screenshot-item" key={i}>
                      <img
                        src={`${project.path}${i + 1}.${project.ext}`}
                        alt={`${project.title} Screenshot ${i + 1}`}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Project;
