import React from 'react';
import './styles/globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Achievements from './sections/Achievements';
import PositionOfResponsibilities from './sections/Positions';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="app">
      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      <Navbar />

      <main>
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <PositionOfResponsibilities />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}