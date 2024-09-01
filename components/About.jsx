import React from 'react'
// import Image from ''

function About() {
  return (
    <section id="about" className="container">
        <h2>About Me</h2>
        <img src="https://media.licdn.com/dms/image/v2/D5603AQFo0jHkjvVNSg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724741142675?e=1730332800&v=beta&t=HJhX4r2OZzmdL_GTPqk72QT1_WQvC-VegYBCFqB1aOg" alt="Divyansh" />
        {/* <Image/> */}
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
