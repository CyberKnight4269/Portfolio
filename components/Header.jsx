import React, { useState, useEffect } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          {/* <h3 className="logo">DK</h3> */}
          <nav>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>
      <section className="hero">
        <div className="hero-content">
          <h1>Divyansh Kanaujia</h1>
          {/* <p className="subtitle">Full-Stack Developer</p> */}
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;