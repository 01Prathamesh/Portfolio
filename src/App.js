import React, { useState, useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    document.body.classList.toggle('light-mode', !darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode); // Toggle darkMode state
  };

  const sectionStyle = (dark, light) => ({
    background: darkMode ? dark : light,
    color: darkMode ? '#fff' : '#111'
  });

  return (
    <div className="app-wrapper">
      {/* Navbar component */}
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <Hero darkMode={darkMode} sectionStyle={sectionStyle} />

      {/* About + Skills Section */}
      <About darkMode={darkMode} sectionStyle={sectionStyle} />

      {/* Resume Section */}
      <Resume darkMode={darkMode} />

      {/* Projects Section */}
      <Project darkMode={darkMode} />

      {/* Contact Section */}
      <Contact darkMode={darkMode} sectionStyle={sectionStyle} />

      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
