import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Divyansh Kanaujia</h3>
            {/* <p>Full-Stack Developer</p> */}
          </div>
          {/* <div className="footer-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div> */}

          <div className="footer-social">
            <a href="https://www.linkedin.com/in/divyansh-kanaujia" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.github.com/CyberKnight4269" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;