import React, { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = ['About', 'Education', 'Skills', 'Projects', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active,   setActive]     = useState('About');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      highlightActive();
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const highlightActive = () => {
    const sections = NAV_LINKS.map(l => l.toLowerCase());
    let current = sections[0];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) current = id;
    });
    setActive(current.charAt(0).toUpperCase() + current.slice(1));
  };

  const handleNav = (section) => {
    setActive(section);
    setMenuOpen(false);
    const el = document.getElementById(section.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">

        {/* Logo */}
        <span className="navbar__logo" onClick={() => handleNav('About')}>
          HN<span className="navbar__logo-dot">.</span>
        </span>

        {/* Links */}
        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                className={`navbar__link ${active === link ? 'navbar__link--active' : ''}`}
                onClick={() => handleNav(link)}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Resume CTA */}
        <a
          href="https://drive.google.com/your-resume-link"
          target="_blank"
          rel="noreferrer"
          className="navbar__resume"
        >
          Resume <span className="navbar__resume-arrow">↗</span>
        </a>

        {/* Burger */}
        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

      </div>
    </nav>
  );
}