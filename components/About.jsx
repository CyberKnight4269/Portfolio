import React from 'react'
import Header from './Header.jsx'
import photo2 from './profile_photo-removebg.png'

function About() {
  return (
      <div className='about-container'>
            <Header />
            <section id="about" className="container">
                <div className='about-content'>
                  <h1 className="about-heading">HI, I AM <br />DIVYANSH KANAUJIA.</h1>
                  <p>
                      I am a passionate Computer Science student with a love for building innovative solutions.
                      <br /><br />
                      I specialize in Full Stack Development, working with technologies like the MERN stack (MongoDB, Express.js, React, Node.js). I'm committed to creating user-friendly and efficient applications that solve real-world problems.
                      <br />
                  </p>
                </div>
                <img src={photo2} alt="Divyansh" className='about-img'/>
            </section>
      </div>
  )
}

export default About
