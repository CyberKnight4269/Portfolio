import React from 'react'

function Projects() {
  return (
    <section id="projects" className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
            <a href='https://github.com/CyberKnight4269/User-Management-System' className="project-item">
                <h3 className="project-title">User Management System</h3>
                <p className="project-description">A User Management System built with Node.js, Express.js, and MongoDB, featuring secure user registration, login, profile management, account deactivation, and role-based access control. Super Admins can manage all users and access detailed information. Includes JWT-based authentication with refresh tokens for enhanced security.</p>
            </a>
            <a href='https://github.com/CyberKnight4269/MelodyServer' className="project-item">
                <h3 className="project-title">MelodyServer</h3>
                <p className="project-description">MelodyServer is a backend server for a music application, built to handle user authentication and user interactions, music streaming, playlists, and more. It features a RESTful API for seamless integration, efficient data handling, and scalability to support rich music experiences.</p>
            </a>
            <a href='https://github.com/CyberKnight4269/MNIST-ANN' className="project-item">
                <h3 className="project-title">MNIST-ANN</h3>
                <p className="project-description">An Artificial Neural Network model to predict hand-written digits using the MNIST dataset. Implemented in TensorFlow Keras on Google Colab.</p>
            </a>
        </div>
    </section>
  )
}

export default Projects
