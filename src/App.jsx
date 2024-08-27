import { useState } from 'react'
import Header from '../components/Header.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'
import Contact from '../components/Contact.jsx'
import './App.css'

function App() {

  return (
      <div>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
  )
}

export default App
