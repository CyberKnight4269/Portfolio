import React from 'react'
import Header from './Header.jsx'
import photo from './profile_photo.jpeg'

function About() {
  return (
    
    <section id="about" className="container">
        <h2>About Me</h2>
        <img src={photo} alt="Divyansh" />
        <p>
            Hi, I'm <span className="highlight">Divyansh Kanaujia</span>, a passionate Computer Science student with a love for building innovative solutions.
            <br /><br />
            I specialize in <span className="highlight">Full-Stack Development</span>, working with technologies like the MERN stack (MongoDB, Express.js, React, Node.js). I'm committed to creating user-friendly and efficient applications that solve real-world problems.
            <br />
        </p>
    </section>
  )
}

export default About
