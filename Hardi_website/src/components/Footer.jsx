import React from 'react';
import { personalInfo } from '../data';
import { TbCopyright } from 'react-icons/tb';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__logo">
          HN<span style={{ color: 'var(--accent)' }}>.</span>
        </span>

        <p className="footer__copy">
          <TbCopyright className="footer__copy-icon" />
          2026 Hardi Naik
        </p>
      </div>
    </footer>
  );
}