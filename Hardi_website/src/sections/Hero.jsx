import React, { useEffect, useRef } from 'react';
import { personalInfo } from '../data';
import profileImg from '../assets/profile.jpg'; // ← match your filename
import './Hero.css';

/* ── react-icons ── install if needed: npm i react-icons ── */
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces, SiGeeksforgeeks } from 'react-icons/si';

const SOCIAL_LINKS = [
  { label: 'LinkedIn',    href: personalInfo.links.linkedin,   icon: <FaLinkedinIn /> },
  { label: 'GitHub',      href: personalInfo.links.github,     icon: <FaGithub /> },
  { label: 'LeetCode',   href: personalInfo.links.leetcode,   icon: <SiLeetcode /> },
  { label: 'Codeforces', href: personalInfo.links.codeforces, icon: <SiCodeforces /> },
  { label: 'GFG',        href: personalInfo.links.gfg,        icon: <SiGeeksforgeeks /> },
];

export default function Hero() {
  const avatarRef = useRef(null);

  useEffect(() => {
    const handleMouse = (e) => {
      if (!avatarRef.current) return;
      const { innerWidth: W, innerHeight: H } = window;
      const dx = (e.clientX / W - 0.5) * 12;
      const dy = (e.clientY / H - 0.5) * 8;
      avatarRef.current.style.transform = `rotateY(${dx}deg) rotateX(${-dy}deg)`;
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section id="about" className="hero">
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />
      <div className="hero__glow hero__glow--3" />
      <div className="hero__grid" />

      <div className="hero__particles" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <span key={i} className={`hero__particle hero__particle--${i + 1}`} />
        ))}
      </div>

      <div className="container hero__container">
        {/* ── Left ── */}
        <div className="hero__content">
          {personalInfo.available && (
            <div className="hero__badge animate-fade-up delay-1">
              <span className="hero__badge-dot" />
               Open to approtunities
            </div>
          )}

          <h1 className="hero__headline animate-fade-up delay-2">
            <span className="hero__headline-name">{personalInfo.name}</span>
            <span className="hero__headline-accent">{personalInfo.title}</span>
          </h1>

          <p className="hero__sub animate-fade-up delay-3">{personalInfo.subtitle}</p>

          <div className="hero__actions animate-fade-up delay-4">
            <button
              className="hero__btn hero__btn--primary"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>View Selected Works</span>
            </button>
            <button
              className="hero__btn hero__btn--ghost"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* ── Right — Avatar ── */}
        <div className="hero__avatar-wrap animate-fade-up delay-3">
          <div className="hero__avatar-frame" ref={avatarRef}>

            {/* spinning gradient border */}
            <div className="hero__avatar-border-track">
              <div className="hero__avatar-border-spin" />
            </div>

            <div className="hero__avatar-inner">
              <img
                src={profileImg}
                alt={personalInfo.name}
                className="hero__avatar-img"
                draggable={false}
              />
              <div className="hero__avatar-shimmer" />
              <div className="hero__avatar-fade" />
            </div>

            <div className="hero__avatar-ring" />
            <div className="hero__avatar-ring hero__avatar-ring--2" />

            <div className="hero__avatar-tag">
              <span className="hero__avatar-tag-dot" />
              <span className="hero__avatar-tag-label">Computer Science</span>
              <span className="hero__avatar-tag-sep">·</span>
              <span className="hero__avatar-tag-val">DAU '26</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Social Bar ── */}
      <div className="hero__socials animate-fade-up delay-5">
        <div className="container hero__socials-inner">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="hero__social-link"
              aria-label={s.label}
            >
              <span className="hero__social-icon">{s.icon}</span>
              <span className="hero__social-label">{s.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}