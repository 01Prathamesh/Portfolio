import React from 'react';
import './App.css';

function App() {
  return (
    <div className="bg-dark text-white min-vh-100">
      {/* Hero Section */}
      <header className="text-center py-5">
        <h1 className="display-4 animate__animated animate__fadeInDown">
          Hi, I'm Prathamesh 👋
        </h1>
        <p className="lead animate__animated animate__fadeInUp">
          A Backend-Focused Full-Stack Developer
        </p>
      </header>

      {/* About + Skills */}
      <section className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6 animate__animated animate__fadeInLeft">
            <h2>About Me</h2>
            <p>
              I'm a final-year Computer Science student with hands-on experience building scalable full-stack apps using Django, ASP.NET Core, Spring Boot, FastAPI, and Node.js. I love solving backend problems and working on meaningful projects.
            </p>
          </div>
          <div className="col-md-6 animate__animated animate__fadeInRight">
            <h2>Skills</h2>
            <div className="d-flex flex-wrap gap-3 mt-3 fs-3">
              <i className="devicon-python-plain colored" title="Python"></i>
              <i className="devicon-csharp-plain colored" title="C#"></i>
              <i className="devicon-nodejs-plain colored" title="Node.js"></i>
              <i className="devicon-django-plain colored" title="Django"></i>
              <i className="devicon-fastapi-plain colored" title="FastAPI"></i>
              <i className="devicon-dotnetcore-plain colored" title=".NET Core"></i>
              <i className="devicon-java-plain colored" title="Java"></i>
              <i className="devicon-spring-plain colored" title="Spring Boot"></i>
              <i className="devicon-mysql-plain colored" title="MySQL"></i>
              <i className="devicon-mongodb-plain colored" title="MongoDB"></i>
              <i className="devicon-bootstrap-plain colored" title="Bootstrap"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4 animate__animated animate__fadeInDown">Projects</h2>
        <div className="row">
          {[
            {
              title: "Career Dendrogram",
              desc: "Visualizes career paths in an interactive web app.",
              tech: "Django, SQLite, HTML/CSS/JS",
              github: "https://github.com/01Prathamesh/Career_Dendrogram_Project",
            },
            {
              title: "School Blog API",
              desc: "Asynchronous FastAPI blog service for schools.",
              tech: "FastAPI, MongoDB, Pydantic",
              github: "https://github.com/01Prathamesh/school_blog_API.git",
            },
            {
              title: "ECommerce AtoZ",
              desc: "Online store with user login & checkout flow.",
              tech: "Django REST, PostgreSQL, Bootstrap",
              github: "https://github.com/01Prathamesh/ECommerce_AtoZ",
            },
          ].map((proj, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="card h-100 bg-dark text-white border-light animate__animated animate__fadeInUp">
                <div className="card-body">
                  <h5 className="card-title">{proj.title}</h5>
                  <p className="card-text">{proj.desc}</p>
                  <p><strong>Tech:</strong> {proj.tech}</p>
                  <a href={proj.github} className="btn btn-outline-light" target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
