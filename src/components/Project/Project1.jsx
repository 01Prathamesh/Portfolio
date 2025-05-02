import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Project = ({ darkMode }) => {
    const [showScreenshots, setShowScreenshots] = useState(false);

    const sectionBg = darkMode
    ? 'bg-gradient bg-primary text-white'   // Rich dark blue with white text
    : 'bg-gradient bg-warning text-dark';   // Warm yellow with black text
  
  const cardClass = darkMode
    ? 'card bg-dark text-light shadow-lg border border-info'
    : 'card bg-info text-dark shadow-lg border border-dark';
  
  const btnClass = darkMode
    ? 'btn btn-outline-light btn-sm'
    : 'btn btn-outline-dark btn-sm';
  
  const headerClass = darkMode
    ? 'border-bottom border-info'
    : 'border-bottom border-dark';

    // For Videos
    const videoSectionBg = darkMode
    ? 'bg-gradient bg-danger text-white'
    : 'bg-gradient bg-success text-white';

    // For Screenshots
    const screenshotSectionBg = darkMode
    ? 'bg-gradient bg-info text-dark'
    : 'bg-gradient bg-primary text-white';


  const projects = [
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

  const videos = [
    { title: "Career Dendrogram", url: "https://www.youtube.com/embed/p70oAqZrcfc" },
    { title: "ECommerce AtoZ", url: "https://www.youtube.com/embed/e9MqXj5HTe8" },
    { title: "SciAstra", url: "https://www.youtube.com/embed/tMiIE3D9NOE" },
    { title: "Team Communication Platform", url: "https://www.youtube.com/embed/nx__NHE-qPQ" }
  ];

  const screenshots = [
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
  ];

  return (
    <div className={`container-fluid py-5 ${sectionBg}`}>
      {/* Project Cards */}
      <section id="projects" className="mb-5">
        <h2 className={`text-center mb-4 pb-2 ${headerClass}`}>🚀 Projects</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projects.map((proj, idx) => (
            <div className="col" key={idx}>
              <div className={cardClass}>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{proj.title}</h5>
                  <p className="card-text">{proj.desc}</p>
                  <p><strong>Tech:</strong> {proj.tech}</p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <a href={proj.github} target="_blank" rel="noreferrer" className={`${btnClass} w-100`}>
                    🔗 GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Videos */}
      <section id="project-videos" className={`mb-5 p-4 rounded-3 ${videoSectionBg}`}>
        <h3 className={`text-center mb-4 pb-2 ${headerClass}`}>🎥 Project Demo Videos</h3>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {videos.map((video, index) => (
            <div className="col" key={index}>
              <div className={cardClass}>
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">{video.title}</h5>
                  <button
                    className="btn btn-sm btn-outline-light"
                    onClick={() => window.open(`https://youtu.be/${video.url.split('/').pop()}`, '_blank')}
                  >
                    ↗
                  </button>
                </div>
                <div className="ratio ratio-16x9">
                  <iframe
                    src={`${video.url}?autoplay=1&mute=1&loop=1&playlist=${video.url.split("/").pop()}`}
                    title={video.title}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots */}
      <section id="project-screenshots" className={`p-4 rounded-3 ${screenshotSectionBg}`}>
        <div
          className="text-center mb-3 fw-bold fs-5"
          role="button"
          onClick={() => setShowScreenshots(!showScreenshots)}
        >
          {showScreenshots ? "🔽 Hide Project Screenshots" : "🖼️ Show Project Screenshots"}
        </div>
        {showScreenshots && (
          <div>
            {screenshots.map((project, idx) => (
              <div key={idx} className="mb-5">
                <h5 className="mb-3">{project.title}</h5>
                <div className="d-flex overflow-auto gap-3">
                  {Array.from({ length: project.count }).map((_, i) => (
                    <img
                      key={i}
                      src={`${project.path}${i + 1}.${project.ext}`}
                      alt={`${project.title} Screenshot ${i + 1}`}
                      className="img-thumbnail"
                      style={{ maxHeight: '300px', flex: '0 0 auto' }}
                    />
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