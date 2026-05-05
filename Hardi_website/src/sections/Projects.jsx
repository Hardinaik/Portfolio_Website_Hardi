import React, { useState } from 'react';
import { projects ,personalInfo} from '../data';
import './Projects.css';

const TYPE_COLORS = {
  'Full-Stack + AI':  'var(--lilac)',
  'AI / Research':    'var(--pink-orchid)',
  'Database':         'var(--amethyst-smoke)',
  'Machine Learning': 'var(--accent)',
  'Web':              'var(--lilac)',
  'Mobile':           'var(--pink-orchid)',
};

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <div className="container">

        <div className="projects-header">
          <div className="projects-header__left">
            <div className="section-label">Selected Works</div>
            <h2 className="projects-title">Featured Projects</h2>
            <p className="projects-subtitle">
              Systems built with focus on performance, scalability and clean architecture.
            </p>
          </div>
          <a
            href="https://github.com/Hardinaik"
            target="_blank"
            rel="noreferrer"
            className="projects-github-link"
          >
            View GitHub
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((proj, i) => (
            <div
              key={i}
              className={`project-card ${expanded === i ? 'project-card--expanded' : ''}`}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="project-card__inner">
                {/* Header */}
                <div className="project-card__top">
                  <span
                    className="project-card__type"
                    style={{ color: TYPE_COLORS[proj.type] || 'var(--accent)' }}
                  >
                    {proj.type}
                  </span>
                  <span className="project-card__expand-icon">
                    {expanded === i ? '−' : '+'}
                  </span>
                </div>

                <h3 className="project-card__title">{proj.title}</h3>

                <p className="project-card__desc">
                  {expanded === i ? proj.longDescription : proj.description}
                </p>

                {/* External links */}
                {(proj.github || proj.demo) && (
                  <div className="project-card__links" onClick={e => e.stopPropagation()}>
                    {proj.github && (
                      <a href={proj.github} target="_blank" rel="noreferrer" className="project-card__link">
                        GitHub ↗
                      </a>
                    )}
                    {proj.demo && (
                      <a href={proj.demo} target="_blank" rel="noreferrer" className="project-card__link">
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                )}

                {/* Highlight */}
                <div className="project-card__highlight">
                  <span className="project-card__highlight-label">Key Result</span>
                  <span className="project-card__highlight-val">{proj.highlight}</span>
                </div>

                {/* Tags */}
                <div className="project-card__tags">
                  {proj.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>

              {/* Decorative number */}
              <div className="project-card__num">0{i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}