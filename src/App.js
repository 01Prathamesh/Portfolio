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

  const [showScreenshots, setShowScreenshots] = useState(false);
  const sectionStyle = (dark, light) => ({ background: darkMode ? dark : light, color: darkMode ? '#fff' : '#111' });

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

      {/* Hero Section */}
      <header id="hero" className="container py-5 hero-section" style={sectionStyle("#0f2027", "#e6f0ff")}>
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
      <section id="about" className="container-fluid py-5" style={sectionStyle("linear-gradient(to right, #2c3e50, #4ca1af)", "linear-gradient(to right, #f0f9ff, #e0f7fa)")}>
        <div className="container">
          <div className="row align-items-center">
            {/* About Me */}
            <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
              <h2 className="mb-3">About Me</h2>
              <p style={{ lineHeight: "1.8" }}>
                I'm a passionate and enthusiastic final-year <strong>Computer Science Engineering</strong> student, currently pursuing my <strong>B.Tech (2021–2025)</strong> from <strong>G H Raisoni College of Engineering and Management, Jalgaon</strong>. <br /><br />

                With a strong foundation in programming and a deep interest in building scalable, real-world software, I specialize in backend development using technologies like <strong>Django</strong>, <strong>ASP.NET Core</strong>, <strong>FastAPI</strong>, <strong>Node.js</strong> and  <strong>Spring Boot</strong>. <br /><br />

                I love designing clean APIs, managing databases, and working with modern dev tools to deliver efficient, production-ready solutions. Whether it's building RESTful APIs, working with cloud platforms, or optimizing backend logic — I thrive on creating impactful tech. <br /><br />

                I'm continuously learning, exploring new stacks, and seeking opportunities to contribute to meaningful projects and teams. 🚀
              </p>
            </div>


            {/* Skills */}
            <div id='skills' className="col-md-6 text-center" data-aos="fade-left">
              <h2 className="mb-4">Skills</h2>
              <div className="d-flex flex-wrap justify-content-center gap-4 fs-1 px-3 skills-wrapper">

                {/* Programming Languages */}
                <div>
                  <h5 className="fw-bold mb-3">🧠 Programming Languages</h5>
                  <div className="d-flex flex-wrap gap-4 fs-1">
                    <i className="devicon-c-plain colored skill-icon" data-title="C"></i>
                    <i className="devicon-cplusplus-plain colored skill-icon" data-title="C++"></i>
                    <i className="devicon-csharp-plain colored skill-icon" data-title="C#"></i>
                    <i className="devicon-python-plain colored skill-icon" data-title="Python"></i>
                    <i className="devicon-javascript-plain colored skill-icon" data-title="JavaScript"></i>
                    <i className="devicon-java-plain colored skill-icon" data-title="Java"></i>
                  </div>
                </div>

                {/* Frameworks & Libraries */}
                <div>
                  <h5 className="fw-bold mb-3">🔧 Frameworks & Libraries</h5>
                  <div className="d-flex flex-wrap gap-4 fs-1">
                    <i className="devicon-react-original colored skill-icon" data-title="ReactJS"></i>
                    <span className="skill-icon" data-title="Angular">
                      <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Angular" width="40" height="40" />
                    </span>
                    <i className="devicon-nodejs-plain colored skill-icon" data-title="Node.js"></i>
                    <i className="devicon-django-plain colored skill-icon" data-title="Django"></i>
                    <span className="skill-icon" data-title="FastAPI">
                      <img src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" alt="FastAPI" width="40" height="40" />
                    </span>
                    <span className="skill-icon" data-title=".NET Core">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg" alt=".NET Core" width="40" height="40" />
                    </span>
                    <i className="devicon-spring-plain colored skill-icon" data-title="Spring Boot"></i>
                    <i className="devicon-bootstrap-plain colored skill-icon" data-title="Bootstrap"></i>
                  </div>
                </div>

                {/* Databases */}
                <div>
                  <h5 className="fw-bold mb-3">🛢️ Databases</h5>
                  <div className="d-flex flex-wrap gap-4 fs-1">
                    <i className="devicon-mysql-plain colored skill-icon" data-title="MySQL"></i>
                    <i className="devicon-mongodb-plain colored skill-icon" data-title="MongoDB"></i>
                    <i className="devicon-postgresql-plain colored skill-icon" data-title="PostgreSQL"></i>
                    <span className="skill-icon" data-title="SQLite">
                      <img src="https://e7.pngegg.com/pngimages/890/928/png-clipart-sqlite-logo-sqlite-logo-icons-logos-emojis-tech-companies.png" alt="SQLite" width="40" height="40" />
                    </span>
                  </div>
                </div>

                {/* Tools & DevOps */}
                <div>
                  <h5 className="fw-bold mb-3">☁️ Tools & DevOps</h5>
                  <div className="d-flex flex-wrap gap-4 fs-1">
                    <i className="devicon-git-plain colored skill-icon" data-title="Git"></i>
                    <i className="devicon-github-original colored skill-icon" data-title="GitHub"></i>
                    <i className="devicon-docker-plain colored skill-icon" data-title="Docker"></i>
                    <span className="skill-icon" data-title="VirtualBox (Oracle)">
                      <img src="https://1000logos.net/wp-content/uploads/2020/08/VirtualBox-Logo-2010.png" alt="Oracle VirtualBox" width="40" height="40" />
                    </span>
                    <span className="skill-icon" data-title="Vercel">
                      <img src="https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" alt="Vercel" width="40" height="40" />
                    </span>
                    <span className="skill-icon" data-title="Netlify">
                      <img src="https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" alt="Netlify" width="40" height="40" />
                    </span>
                    <span className="skill-icon" data-title="AWS">
                      <img src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" alt="AWS" width="40" height="40" />
                    </span>
                    <span className="skill-icon" data-title="Google Cloud">
                      <img src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" alt="Google Cloud" width="40" height="40" />
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section
        id="resume"
        className="container-fluid py-5 text-center"
        style={{
          background: darkMode
            ? "linear-gradient(to right, #232526, #414345)"
            : "linear-gradient(to right, #e0f7fa, #f0f9ff)",
          color: darkMode ? "#f1f1f1" : "#0a0a0a",
        }}
      >
        <h2 className="mb-4" data-aos="fade-down">
          📄 <span style={{ borderBottom: "2px solid #00d4ff" }}>My Resume</span>
        </h2>
        <p className="lead mb-4 px-3" data-aos="fade-up">
          A quick snapshot of my experience, skills, and tech journey — neatly packed into a single document.
        </p>
        <a
          href="https://drive.google.com/file/d/1frXb24ETZwmhmivNKtw8RIA8gzQIzYAz/view?usp=sharing"
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

      {/* Projects Section */}
      <section id="projects" className="container py-5" style={sectionStyle("#000000", "#f5f5f5")}>
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

      {/* Project Demo Videos */}
      <section
        id="project-videos"
        className={`container py-5 ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}
      >
        <h3 className="text-center mt-5 mb-4" data-aos="fade-up">
          🎥 <span style={{ borderBottom: '2px solid #00d4ff' }}>Project Demo Videos</span>
        </h3>

        <div className="row mt-4">
          {[
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

      {/* Project Screenshots */}
      <section className={`container my-5 ${darkMode ? "dark" : ""}`} id="project-screenshots">
        <div
          className="screenshot-toggle"
          onClick={() => setShowScreenshots(!showScreenshots)}
        >
          {showScreenshots ? "🔽 Hide Project Screenshots" : "🖼️ Show Project Screenshots"}
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



      {/* Contact Section */}
      <section id="contact" className="container-fluid py-5" style={sectionStyle("#141e30", "#d0eaff")}>
        <h2 className="text-center mb-5 animate__animated animate__fadeInDown">📬 Get in Touch</h2>

        {/* Contact Details */}
        <div className="container mb-5" data-aos="fade-up">
          <div className={`row justify-content-center p-4 rounded-4 shadow-lg ${darkMode ? 'bg-dark text-white' : 'bg-white text-dark'}`}>
            <div className="col-md-10">
              <div className="row row-cols-1 row-cols-md-2 g-4 text-start">

                {/* GitHub */}
                <div className="col d-flex align-items-center gap-3">
                  <i className="bi bi-github fs-3"></i>
                  <div>
                    <strong>GitHub</strong>
                    <br />
                    <a href="https://github.com/01Prathamesh" target="_blank" rel="noreferrer" className="text-decoration-none text-reset">
                      github.com/01Prathamesh
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="col d-flex align-items-center gap-3">
                  <i className="bi bi-linkedin fs-3"></i>
                  <div>
                    <strong>LinkedIn</strong>
                    <br />
                    <a href="https://www.linkedin.com/in/prathamesh-kasar" target="_blank" rel="noreferrer" className="text-decoration-none text-reset">
                      prathamesh-kasar
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="col d-flex align-items-center gap-3">
                  <i className="bi bi-envelope-fill fs-3"></i>
                  <div>
                    <strong>Email</strong>
                    <br />
                    <a href="mailto:prathameshkasar.work@gmail.com" className="text-decoration-none text-reset">
                      prathameshkasar.work@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="col d-flex align-items-center gap-3">
                  <i className="bi bi-geo-alt-fill fs-3"></i>
                  <div>
                    <strong>Location</strong>
                    <br />
                    Jalgaon, Maharashtra, India 🇮🇳
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form  */}
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className={`p-4 rounded shadow ${darkMode ? "bg-dark text-white" : "bg-white text-dark"}`} data-aos="zoom-in">
              <form
                action="https://docs.google.com/forms/d/e/1FAIpQLSfQ3Txy2hsiAV9Ap1XeOfaJv5QcaC5LEtSjdqjAz1hzLe9vgw/formResponse"
                method="POST"
                target="_blank"
              >
                <div className="form-floating mb-4">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="entry.1791844630"
                    placeholder="Your Name"
                    required
                  />
                  <label htmlFor="name"><i className="bi bi-person-fill me-2"></i>Name</label>
                </div>
                <div className="form-floating mb-4">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="entry.14260939"
                    placeholder="name@example.com"
                    required
                  />
                  <label htmlFor="email"><i className="bi bi-envelope-fill me-2"></i>Email address</label>
                </div>
                <div className="form-floating mb-4">
                  <textarea
                    className="form-control"
                    placeholder="Leave a message here"
                    id="message"
                    name="entry.1122207592"
                    style={{ height: '150px' }}
                    required
                  ></textarea>
                  <label htmlFor="message"><i className="bi bi-chat-text-fill me-2"></i>Your Message</label>
                </div>
                <div className="text-center">
                  <button type="submit" className={`btn btn-lg btn-outline-${darkMode ? 'light' : 'dark'} px-5`}>
                    <i className="bi bi-send me-2"></i>Send Message
                  </button>
                </div>
              </form>
            </div>
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
            <a href="https://drive.google.com/file/d/1frXb24ETZwmhmivNKtw8RIA8gzQIzYAz/view?usp=sharing" target="_blank" rel="noreferrer" className="mx-3 text-reset">
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
