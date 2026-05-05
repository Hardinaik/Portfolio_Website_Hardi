import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';
import './Navbar.css';

const NAV_LINKS = ['About', 'Experience', 'Education', 'Skills', 'Projects', 'Contact'];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [active,    setActive]    = useState('About');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      highlightActive();
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close mobile menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (!e.target.closest('.navbar__inner')) setMenuOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [menuOpen]);

  const highlightActive = () => {
    const ids = NAV_LINKS.map(l => l.toLowerCase());
    let current = ids[0];
    ids.forEach(id => {
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

        {/* Desktop links */}
        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                className={`navbar__link ${active === link ? 'navbar__link--active' : ''}`}
                onClick={() => handleNav(link)}
              >
                {link}
                {active === link && <span className="navbar__link-pip" />}
              </button>
            </li>
          ))}

          {/* Resume inside mobile menu */}
          <li className="navbar__mobile-resume">
            <a
              href="https://drive.google.com/your-resume-link"
              target="_blank"
              rel="noreferrer"
              className="navbar__resume"
              onClick={() => setMenuOpen(false)}
            >
              Resume
              <FiArrowUpRight size={13} />
            </a>
          </li>
        </ul>

        {/* Desktop Resume CTA */}
        <a
          href="https://drive.google.com/your-resume-link"
          target="_blank"
          rel="noreferrer"
          className="navbar__resume navbar__resume--desktop"
        >
          Resume
          <FiArrowUpRight size={13} />
        </a>

        {/* Burger */}
        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>

      </div>
    </nav>
  );
}