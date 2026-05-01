import React from 'react';
import './styles/globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
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
        <Skills />
        <Achievements />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
