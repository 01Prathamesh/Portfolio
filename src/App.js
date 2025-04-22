import React from 'react';
import './App.css';

function App() {
  return (
    <div className="bg-dark text-white min-vh-100">
      <header className="text-center py-5">
        <h1 className="display-4 animate__animated animate__fadeInDown">
          Hi, I'm Prathamesh 👋
        </h1>
        <p className="lead animate__animated animate__fadeInUp">
          A Backend-Focused Full-Stack Developer
        </p>
      </header>
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

    </div>
  );
}

export default App;
