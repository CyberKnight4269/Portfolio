import React from 'react';

function Projects() {
  const projects = [
    {
      title: "User Management System",
      description: "A User Management System built with Node.js, Express.js, and MongoDB, featuring secure user registration, login, profile management, account deactivation, and role-based access control.",
      details: "Super Admins can manage all users and access detailed information. Includes JWT-based authentication with refresh tokens for enhanced security.",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
      link: "https://github.com/CyberKnight4269/User-Management-System"
    },
    {
      title: "MelodyServer",
      description: "MelodyServer is a backend server for a music application, built to handle user authentication and user interactions, music streaming, playlists, and more.",
      details: "It features a RESTful API for seamless integration, efficient data handling, and scalability to support rich music experiences.",
      tech: ["Node.js", "Express.js", "MongoDB", "REST API"],
      link: "https://github.com/CyberKnight4269/MelodyServer"
    },
    {
      title: "MNIST-ANN",
      description: "An Artificial Neural Network model to predict hand-written digits using the MNIST dataset with an accuracy of 97.79%.",
      details: "Implemented in TensorFlow Keras on Google Colab.",
      tech: ["Python", "TensorFlow", "Keras", "Neural Networks"],
      link: "https://github.com/CyberKnight4269/MNIST-ANN"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2>Projects</h2>
          <div className="underline"></div>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-item" key={index}>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-details">{project.details}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span className="tech-tag" key={techIndex}>{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;