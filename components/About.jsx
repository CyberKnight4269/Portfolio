import React from 'react';
import photo from './profile_photo.jpeg';

function About() {
  return (
    <section id="about" className="container section-padding">
      <div className="section-header">
        <h2>About Me</h2>
        <div className="underline"></div>
      </div>
      
      <div className="about-content">
        <div className="about-image">
          <img src={photo} alt="Divyansh" className="profile-image" />
        </div>
        <div className="about-text">
          <h3>Hello, I'm <span className="highlight">Divyansh Kanaujia</span></h3>
          <p>
            I'm a passionate Computer Science student at the Indian Institute of Information Technology Kalyani, 
            with a love for building innovative solutions that solve real-world problems.
          </p>
          <p>
            I specialize in <span className="highlight">Full-Stack Development</span>, working with technologies 
            like the MERN stack (MongoDB, Express.js, React, Node.js) to create user-friendly and efficient applications.
            My experience includes developing RESTful APIs, implementing secure authentication systems, and optimizing database queries.
          </p>
          <div className="about-details">
            <div className="detail-item">
              <span className="detail-label">Education:</span>
              <span className="detail-info">B.Tech CSE, IIIT Kalyani</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Location:</span>
              <span className="detail-info">India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;