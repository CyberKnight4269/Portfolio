// App.jsx
import React from 'react';
import Header from '../components/Header.jsx';
import About from '../components/About.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;