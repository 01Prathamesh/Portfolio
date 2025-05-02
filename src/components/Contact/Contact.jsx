import React, { useEffect } from 'react';
import './Contact.css';

const Contact = ({ darkMode }) => {
  const formActionURL =
    'https://docs.google.com/forms/d/e/1FAIpQLSfQ3Txy2hsiAV9Ap1XeOfaJv5QcaC5LEtSjdqjAz1hzLe9vgw/formResponse';

  // Apply dark/light mode class to <body>
  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <>
      {/* Contact Section */}
      <section id="contact">
        <h2><span style={{ borderBottom: '2px solid var(--accent-color)' }}>📬 Get in Touch</span></h2>

        {/* Contact Details */}
        <div className="contact-box contact-row">
          <div className="contact-item">
            <i className="bi bi-github"></i>
            <div>
              <strong>GitHub</strong><br />
              <a href="https://github.com/01Prathamesh" target="_blank" rel="noreferrer">
                github.com/01Prathamesh
              </a>
            </div>
          </div>

          <div className="contact-item">
            <i className="bi bi-linkedin"></i>
            <div>
              <strong>LinkedIn</strong><br />
              <a href="https://www.linkedin.com/in/prathamesh-kasar" target="_blank" rel="noreferrer">
                prathamesh-kasar
              </a>
            </div>
          </div>

          <div className="contact-item">
            <i className="bi bi-envelope-fill"></i>
            <div>
              <strong>Email</strong><br />
              <a href="mailto:prathameshkasar.work@gmail.com">
                prathameshkasar.work@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-item">
            <i className="bi bi-geo-alt-fill"></i>
            <div>
              <strong>Location</strong><br />
              Jalgaon, Maharashtra, INDIA 🇮🇳
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-box" data-aos="zoom-in">
          <form action={formActionURL} method="POST" target="_blank">
            <div>
              <label htmlFor="name"><i className="bi bi-person-fill"></i> Name</label>
              <input type="text" id="name" name="entry.1791844630" className="form-control" required />
            </div>

            <div>
              <label htmlFor="email"><i className="bi bi-envelope-fill"></i> Email address</label>
              <input type="email" id="email" name="entry.14260939" className="form-control" required />
            </div>

            <div>
              <label htmlFor="message"><i className="bi bi-chat-text-fill"></i> Your Message</label>
              <textarea id="message" name="entry.1122207592" className="form-control" style={{ height: '150px' }} required></textarea>
            </div>

            <div style={{ textAlign: 'center' }}>
              <button type="submit">
                <i className="bi bi-send"></i> Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* GitHub Activity Section */}
      <section id="github">
        <h2><span style={{ borderBottom: '2px solid var(--accent-color)' }}>📈 GitHub Activity</span></h2>
        <div className="contact-row">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=01Prathamesh&show_icons=true&theme=${darkMode ? 'radical' : 'default'}`}
            alt="GitHub Stats"
            width="400"
          />
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=01Prathamesh&layout=compact&theme=${darkMode ? 'radical' : 'default'}`}
            alt="Top Languages"
            width="350"
          />
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=01Prathamesh&theme=${darkMode ? 'radical' : 'default'}`}
            alt="GitHub Streak"
            width="400"
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
