import React from 'react'

function Projects() {
  return (
    <section id="projects" className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
            <a href='https://github.com/CyberKnight4269/MelodyServer' className="project-item">
                <h3 className="project-title">MelodyServer</h3>
                <p className="project-description">MelodyServer is a backend server for a music application, built to handle user authentication and user interactions, music streaming, playlists, and more. It features a RESTful API for seamless integration, efficient data handling, and scalability to support rich music experiences.</p>
            </a>
            {/* <a href='' className="project-item">
                <h3 className="project-title">Project 2</h3>
                <p className="project-description">Project 2 Description</p>
            </a>
            <a href='' className="project-item">
                <h3 className="project-title">Project 3</h3>
                <p className="project-description">Project 3 Description</p>
            </a> */}
        </div>
    </section>
  )
}

export default Projects
