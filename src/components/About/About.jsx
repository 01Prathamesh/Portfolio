import React from 'react';
import './About.css';

const About = ({ sectionStyle }) => {
  return (
    <section className="about-skills container-fluid py-5">
        <div className="container">
            <div className="row align-items-center">
                {/* About Me */}
                <div id="about" className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
                    <h2 className="mb-3">About Me</h2>
                    <p style={{ lineHeight: "1.8" }}>
                    I'm a passionate and enthusiastic final-year <strong>Computer Science Engineering</strong> student, currently pursuing my <strong>B.Tech (2021–2025)</strong> from <strong>G H Raisoni College of Engineering and Management, Jalgaon</strong>. <br /><br />
                    With a strong foundation in programming and a deep interest in building scalable, real-world software, I specialize in backend development using technologies like <strong>Django</strong>, <strong>ASP.NET Core</strong>, <strong>FastAPI</strong>, <strong>Node.js</strong> and <strong>Spring Boot</strong>. <br /><br />
                    I love designing clean APIs, managing databases, and working with modern dev tools to deliver efficient, production-ready solutions. Whether it's building RESTful APIs, working with cloud platforms, or optimizing backend logic — I thrive on creating impactful tech. <br /><br />
                    I'm continuously learning, exploring new stacks, and seeking opportunities to contribute to meaningful projects and teams. 🚀
                    </p>
                </div>

                {/* Skills */}
                <div id="skills" className="col-md-6 text-center" data-aos="fade-left">
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
  );
};

export default About;
