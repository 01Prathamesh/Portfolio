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
                        I am a dedicated <strong>Computer Science Engineer</strong> with a strong focus on full-stack development, specializing in <strong>.NET technologies</strong> such as <strong>C#</strong>, <strong>ASP.NET Core</strong>, <strong>ADO.NET</strong>, and <strong>MS SQL Server</strong>. Currently, I'm honing my skills in building scalable and secure backend services, while also developing responsive front-end interfaces with modern tools like <strong>Angular</strong> and <strong>React</strong>. <br /><br />
                        
                        My expertise includes designing RESTful APIs, working with cloud services like <strong>Microsoft Azure</strong>, and deploying applications on platforms like <strong>Vercel</strong> and <strong>GitHub Pages</strong>. I have a proven track record of building efficient and scalable web applications, as demonstrated in projects like a full-stack <strong>e-commerce platform</strong>. <br /><br />
                        
                        I am passionate about creating seamless user experiences, from the backend architecture to the frontend UI. I thrive in dynamic environments where I can leverage my problem-solving skills and continuously learn new technologies to improve my development processes. I am actively seeking opportunities to grow as a professional software engineer and contribute to impactful projects. 🚀
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
                                <i className="devicon-csharp-plain colored skill-icon" data-title="C#"></i>
                                <i className="devicon-javascript-plain colored skill-icon" data-title="JavaScript"></i>
                                <i className="devicon-python-plain colored skill-icon" data-title="Python"></i>
                            </div>
                        </div>

                        {/* Frameworks & Libraries */}
                        <div>
                            <h5 className="fw-bold mb-3">🔧 Frameworks & Libraries</h5>
                            <div className="d-flex flex-wrap gap-4 fs-1">
                                <span className="skill-icon" data-title=".NET Core">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg" alt=".NET Core" width="40" height="40" />
                                </span>
                                <span className="skill-icon" data-title="Angular">
                                    <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Angular" width="40" height="40" />
                                </span>
                                <i className="devicon-react-original colored skill-icon" data-title="ReactJS"></i>
                                <i className="devicon-nodejs-plain colored skill-icon" data-title="Node.js"></i>
                                <i className="devicon-django-plain colored skill-icon" data-title="Django"></i>
                            </div>
                        </div>

                        {/* Databases */}
                        <div>
                            <h5 className="fw-bold mb-3">🛢️ Databases</h5>
                            <div className="d-flex flex-wrap gap-4 fs-1">
                                <span className="skill-icon" data-title="MS SQL Server">
                                    <img src="https://icon2.cleanpng.com/20180817/xql/0d674c909fbaa35fe3c1f6819251f3fb.webp" alt="MS SQL Server" width="40" height="40"/>
                                </span>
                                <i className="devicon-mysql-plain colored skill-icon" data-title="MySQL"></i>
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
