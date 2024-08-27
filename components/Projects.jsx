import React from 'react'

function Projects() {
  return (
    <section id="projects" className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
            <div className="project-item">
                <h3 className="project-title">Project 1</h3>
                <p className="project-description">Project 1 Description</p>
            </div>
            <div className="project-item">
                <h3 className="project-title">Project 2</h3>
                <p className="project-description">Project 2 Description</p>
            </div>
            <div className="project-item">
                <h3 className="project-title">Project 3</h3>
                <p className="project-description">Project 3 Description</p>
            </div>
        </div>
    </section>
  )
}

export default Projects
