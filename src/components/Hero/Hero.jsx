import React from 'react';
import './Hero.css';
import { Typewriter } from 'react-simple-typewriter';

const Hero = ({ sectionStyle }) => {
  return (
    <header id="hero" className="hero-section" >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Text Content */}
          <div className="col-md-6 hero-text-content" data-aos="fade-right">
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
      </div>
    </header>
  );
};

export default Hero;
