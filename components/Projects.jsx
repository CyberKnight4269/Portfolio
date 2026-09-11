import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Melody",
      description: "A full-stack music streaming web app inspired by Spotify — built with React on the frontend and a Node.js/Express REST API on the backend",
      details: "Users can browse songs and albums, build custom playlists, and stream audio, while admins can upload new tracks and curate albums",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
      link: "https://github.com/CyberKnight4269/melody",
      live: "https://melody-sooty.vercel.app/"
    },
    {
      title: "User Management System",
      description: "A User Management System built with Node.js, Express.js, and MongoDB, featuring secure user registration, login, profile management, account deactivation, and role-based access control",
      details: "Super Admins can manage all users and access detailed information. Includes JWT-based authentication with refresh tokens for enhanced security",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
      link: "https://github.com/CyberKnight4269/User-Management-System"
    },
    {
      title: "MNIST-ANN",
      description: "An Artificial Neural Network model to predict hand-written digits using the MNIST dataset with an accuracy of 97.79%",
      details: "Implemented in TensorFlow Keras on Google Colab",
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
              <div className='project-links-container'>
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  View Project <i className="fas fa-arrow-right"></i>
                </a>
                {project.live && <a href={project.live} className="project-live" target="_blank" rel="noopener noreferrer">
                  Live Demo <i className="fas fa-arrow-right"></i>
                </a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;