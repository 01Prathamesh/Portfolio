import React, { useState, useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typewriter } from 'react-simple-typewriter';

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
      <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} shadow-sm sticky-top`}>
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">Prathamesh Kasar</a>

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
                <a className="nav-link active" href="#hero">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
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

      {/* Hero Section */}
      <header id="hero" className="container py-5 hero-section">
        <div className="row align-items-center">
          {/* Left Side - Text Content */}
          <div className="col-md-6" data-aos="fade-right">
            <h1 className="display-4 fw-bold text-gradient">
              Hi, I'm <span className="highlight-name">Prathamesh</span> 👋
            </h1>
            <p className="lead fs-4 mt-3">
              <Typewriter
                words={[
                  'Backend Developer 💻',
                  'Full Stack Engineer 🔧',
                  'Web Development | Django | FastAPI | .NET',
                  'Building Scalable Backends 🚀',
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </p>
          </div>

          {/* Right Side - Profile Image */}
          <div className="col-md-6 text-center" data-aos="fade-left">
            <img
              src="https://avatars.githubusercontent.com/01Prathamesh"
              alt="Prathamesh Kasar"
              className="rounded-circle shadow-lg profile-hero"
              width="200"
              height="200"
            />
          </div>
        </div>
      </header>

      {/* About + Skills Section */}
      <section id="about" className="container-fluid py-5" style={{ background: "linear-gradient(to right, #2c3e50, #4ca1af)", color: "#fff" }}>
        <div className="container">
          <div className="row align-items-center">
            {/* About Me */}
            <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
              <h2 className="mb-3">About Me</h2>
              <p style={{ lineHeight: "1.8" }}>
                I'm a final-year Computer Science student with hands-on experience building scalable full-stack applications. <br />
                I specialize in backend technologies like Django, ASP.NET Core, Spring Boot, FastAPI, and Node.js. <br />
                Passionate about solving real-world problems and crafting impactful software.
              </p>
            </div>

            {/* Skills */}
            <div id='skills' className="col-md-6 text-center" data-aos="fade-left">
              <h2 className="mb-4">Skills</h2>
              <div className="d-flex flex-wrap justify-content-center gap-4 fs-1 px-3">
                {/* Programming Languages */}
                <i className="devicon-c-plain colored" title="C"></i>
                <i className="devicon-cplusplus-plain colored" title="C++"></i>
                <i className="devicon-csharp-plain colored" title="C#"></i>
                <i className="devicon-python-plain colored" title="Python"></i>
                <i className="devicon-javascript-plain colored" title="JavaScript"></i>
                <i className="devicon-java-plain colored" title="Java"></i>

                {/* Frameworks */}
                <i className="devicon-nodejs-plain colored" title="Node.js"></i>
                <i className="devicon-react-original colored" title="ReactJS"></i>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" alt="Angular" title="Angular" width="40" height="40" />
                <i className="devicon-django-plain colored" title="Django"></i>
                <img src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" alt="FastAPI" title="FastAPI" width="40" height="40" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg" alt=".NET Core" title=".NET Core" width="40" height="40" />
                <i className="devicon-spring-plain colored" title="Spring Boot"></i>
                <i className="devicon-bootstrap-plain colored" title="Bootstrap"></i>

                {/* Databases */}
                <i className="devicon-mysql-plain colored" title="MySQL"></i>
                <i className="devicon-mongodb-plain colored" title="MongoDB"></i>
                <i className="devicon-postgresql-plain colored" title="PostgreSQL"></i>
                <img src="https://e7.pngegg.com/pngimages/890/928/png-clipart-sqlite-logo-sqlite-logo-icons-logos-emojis-tech-companies.png" alt="SQLite" title="SQLite" width="40" height="40" />

                {/* Tools */}
                <i className="devicon-github-original colored" title="GitHub"></i>
                <i className="devicon-docker-plain colored" title="Docker"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className="container py-5" style={{ background: 'linear-gradient(to right, #000000, #434343)', color: '#fff' }}>
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
      <section id='contact' className="container-fluid py-5" style={{ background: "linear-gradient(to right, #141e30, #243b55)", color: "#fff" }}>
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

      {/* GitHub Activity Section */}
      <section
        className={`container py-5 text-center ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}
        id="github"
      >
        <h2 className="mb-4" data-aos="fade-down">📈 GitHub Activity</h2>

        <div className="d-flex flex-column flex-md-row justify-content-center gap-4">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=01Prathamesh&show_icons=true&theme=${darkMode ? 'radical' : 'default'}`}
            alt="GitHub Stats"
            className="img-fluid"
            width="400"
          />
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=01Prathamesh&layout=compact&theme=${darkMode ? 'radical' : 'default'}`}
            alt="Top Languages"
            className="img-fluid"
            width="350"
          />
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=01Prathamesh&theme=${darkMode ? 'radical' : 'default'}`}
            alt="GitHub Streak"
            className="img-fluid"
            width="400"
          />
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
