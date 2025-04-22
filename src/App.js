import React, { useState, useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const githubPhoto = "https://avatars.githubusercontent.com/u/108261929?v=4";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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


  return (
    <div className={darkMode ? 'bg-dark text-white' : 'bg-light text-dark'} style={{ transition: "all 0.5s ease-in-out" }}>
      {/* Theme Toggle Switch */}
      <div className="toggle-container">
        <label className="toggle-switch">
          <input type="checkbox" checked={!darkMode} onChange={toggleTheme} />
          <span className="slider">
            <span className="emoji">{darkMode ? '🌙' : '☀️'}</span>
          </span>
        </label>
      </div>

      {/* Hero Section */}
      <header className="container py-5 hero-section">
        <div className="row align-items-center">
          {/* Left Side - Text Content */}
          <div className="col-md-6 animate__animated animate__fadeInLeft">
            <h1 className="display-4">Hi, I'm Prathamesh 👋</h1>
            <p className="lead">
              A Backend-Focused Full-Stack Developer <br />
              with hands-on experience across Django, ASP.NET, Spring Boot, FastAPI & Node.js.
            </p>
          </div>

          {/* Right Side - Profile Image */}
          <div className="col-md-6 text-center animate__animated animate__fadeInRight">
          <img
            src="https://avatars.githubusercontent.com/01Prathamesh"
            alt="Prathamesh Kasar"
            className="rounded-circle shadow-lg animate__animated animate__zoomIn"
            width="180"
            height="180"
          />
          </div>
        </div>
      </header>

      {/* About + Skills Section */}
      <section className="container-fluid py-5" style={{ background: "linear-gradient(to right, #2c3e50, #4ca1af)", color: "#fff" }}>
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
      <section className="container py-5" style={{ background: 'linear-gradient(to right, #000000, #434343)', color: '#fff' }}>
        <h2 className="text-center mb-4" data-aos="fade-down">Projects</h2>
        <div className="row">
          {projects.map((proj, idx) => (
            <div className="col-md-4 mb-4" key={idx} data-aos="fade-up">
              <div className={`card h-100 ${darkMode ? 'bg-dark text-white border-light' : 'bg-white text-dark border-dark'} card-hover`}>
                <div className="card-body">
                  <h5 className="card-title">{proj.title}</h5>
                  <p className="card-text">{proj.desc}</p>
                  <p><strong>Tech:</strong> {proj.tech}</p>
                  <a href={proj.github} className={`btn btn-outline-${darkMode ? 'light' : 'dark'}`} target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container-fluid py-5" style={{ background: "linear-gradient(to right, #141e30, #243b55)", color: "#fff" }}>
        <h2 className="text-center mb-4 animate__animated animate__fadeInDown">Contact Me</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form
              action="mailto:prathameshkasar.work@gmail.com"
              method="POST"
              encType="text/plain"
              className="animate__animated animate__fadeInUp"
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="Name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name="Email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" name="Message" rows="4" required></textarea>
              </div>
              <button type="submit" className={`btn btn-outline-${darkMode ? 'light' : 'dark'}`}>Send</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-secondary text-light' : 'bg-light text-dark'} py-4 mt-5`}>
        <div className="container text-center">
          <div className="mb-3">
            <a href="https://github.com/01Prathamesh" target="_blank" rel="noreferrer" className="mx-3 text-reset">
              <i className="bi bi-github fs-4"></i>
            </a>
            <a href="https://www.linkedin.com/in/prathamesh-kasar" target="_blank" rel="noreferrer" className="mx-3 text-reset">
              <i className="bi bi-linkedin fs-4"></i>
            </a>
            <a href="https://drive.google.com/file/d/1dOYtfXw9zFRazJPfqdvMAZaaONYrzS8m/view?usp=sharing" target="_blank" rel="noreferrer" className="mx-3 text-reset">
              <i className="bi bi-file-earmark-person fs-4"></i>
            </a>
          </div>
          <p className="mb-0">© {new Date().getFullYear()} Prathamesh Kasar | Made with 💙 in India</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
