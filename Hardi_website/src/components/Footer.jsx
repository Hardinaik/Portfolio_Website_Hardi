import React from 'react';
import { personalInfo } from '../data';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">HN<span style={{ color: 'var(--accent)' }}>.</span></span>
          <span className="footer__tagline">Engineering Precision</span>
        </div>
        <div className="footer__links">
          {Object.entries(personalInfo.links).map(([key, href]) => (
            <a key={key} href={href} target="_blank" rel="noreferrer" className="footer__link">
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </a>
          ))}
          <a href={`mailto:${personalInfo.email}`} className="footer__link">Email</a>
        </div>
        <div className="footer__copy">
          © 2026 Hardi Naik. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
