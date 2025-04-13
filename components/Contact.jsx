import React from 'react';

function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2>Contact</h2>
          <div className="underline"></div>
        </div>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>Feel free to reach out to me for collaboration or opportunities.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <p>Email: <a href="mailto:kanaujiadivyansh@gmail.com">kanaujiadivyansh@gmail.com</a></p>
              </div>
              <div className="contact-item">
                <i className="fab fa-linkedin"></i>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/divyansh-kanaujia" target="_blank" rel="noopener noreferrer">Divyansh Kanaujia</a></p>
              </div>
              <div className="contact-item">
                <i className="fab fa-github"></i>
                <p>Github: <a href="https://www.github.com/CyberKnight4269" target="_blank" rel="noopener noreferrer">CyberKnight4269</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;