import React, { useState } from 'react';
import { FiGithub, FiExternalLink, FiPlus, FiMinus, FiArrowUpRight } from 'react-icons/fi';
import { TbSparkles } from 'react-icons/tb';
import { projects, personalInfo } from '../data';
import './Projects.css';

const TYPE_COLORS = {
  'Full Stack + AI':  'var(--lilac)',
  'AI / Research':    'var(--pink-orchid)',
  'Database':         'var(--amethyst-smoke)',
  'Machine Learning': 'var(--accent)',
  'Web':              'var(--lilac)',
  'Mobile':           'var(--pink-orchid)',
};

/* Per-card SVG circuit lines — deterministic per index */
const LINE_SETS = [
  {
    lines: [[10,20,50,20],[50,20,50,50],[80,10,80,60],[80,60,130,60],[20,70,60,70],[60,70,60,90]],
    dots:  [[50,20],[50,50],[80,60],[60,70]],
  },
  {
    lines: [[15,30,55,30],[55,30,55,65],[90,15,90,50],[30,80,70,80],[70,80,70,55],[100,70,140,70]],
    dots:  [[55,30],[55,65],[70,55],[70,80]],
  },
  {
    lines: [[10,40,40,40],[40,40,40,20],[40,20,100,20],[100,20,100,60],[20,75,65,75],[65,75,65,55]],
    dots:  [[40,40],[100,20],[100,60],[65,75]],
  },
  {
    lines: [[20,25,60,25],[60,25,60,55],[60,55,100,55],[80,40,120,40],[30,70,80,70],[80,70,80,50]],
    dots:  [[60,25],[60,55],[80,55],[80,70]],
  },
];

function ThumbLines({ index }) {
  const set = LINE_SETS[index % LINE_SETS.length];
  return (
    <svg
      viewBox="0 0 160 100"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      preserveAspectRatio="xMidYMid slice"
    >
      {set.lines.map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="rgba(190,149,196,0.38)" strokeWidth="0.65" />
      ))}
      {set.dots.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="1.8" fill="rgba(190,149,196,0.55)" />
      ))}
    </svg>
  );
}

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <div className="container">

        {/* ── Header ── */}
        <div className="projects-header">
          <div className="projects-header__left">
            <div className="section-label">Selected Works</div>
            <h2 className="projects-title">Featured Projects</h2>
          </div>
          <a
            href={personalInfo.links.github || 'https://github.com/Hardinaik'}
            target="_blank"
            rel="noreferrer"
            className="projects-github-link"
          >
            <FiGithub size={13} />
            View GitHub
            <FiArrowUpRight size={12} />
          </a>
        </div>

        {/* ── Grid ── */}
        <div className="projects-grid">
          {projects.map((proj, i) => {
            const isExpanded = expanded === i;
            const typeColor  = TYPE_COLORS[proj.type] || 'var(--accent)';

            return (
              <div
                key={i}
                data-type={proj.type}
                className={`project-card${isExpanded ? ' project-card--expanded' : ''}`}
                onClick={() => setExpanded(isExpanded ? null : i)}
              >
                {/* ── Thumbnail ── */}
                <div className="project-card__thumb">
                  <div className="project-card__thumb-orb project-card__thumb-orb--1" />
                  <div className="project-card__thumb-orb project-card__thumb-orb--2" />
                  <div className="project-card__thumb-orb project-card__thumb-orb--3" />
                  <div className="project-card__thumb-grid" />
                  <div className="project-card__thumb-lines">
                    <ThumbLines index={i} />
                  </div>

                  {/* type badge */}
                  <div className="project-card__badge" style={{ color: typeColor }}>
                    {proj.type}
                  </div>

                  {/* hover overlay */}
                  <div className="project-card__thumb-overlay">
                    <span className="project-card__thumb-overlay-text">
                      {isExpanded ? 'Collapse' : 'Read More'}
                    </span>
                  </div>
                </div>

                {/* ── Body ── */}
                <div className="project-card__body">
                  <h3 className="project-card__title">{proj.title}</h3>

                  <div className="project-card__desc">
                    {isExpanded
                      ? proj.longDescription.split('\n\n').map((para, pi) => (
                          <p key={pi} className="project-card__desc-para">{para}</p>
                        ))
                      : <p>{proj.description}</p>
                    }
                  </div>

                  {/* Key result */}
                  <div className="project-card__highlight">
                    <TbSparkles size={13} className="project-card__highlight-icon" />
                    <span className="project-card__highlight-val">{proj.highlight}</span>
                  </div>

                  {/* Footer */}
                  <div className="project-card__footer">
                    <div className="project-card__tags">
                      {proj.tags.slice(0, isExpanded ? proj.tags.length : 4).map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                      {!isExpanded && proj.tags.length > 4 && (
                        <span className="tag project-card__tags-more">
                          +{proj.tags.length - 4}
                        </span>
                      )}
                    </div>

                    {/* External links — stop propagation */}
                    <div className="project-card__links" onClick={e => e.stopPropagation()}>
                      {proj.github && (
                        <a href={proj.github} target="_blank" rel="noreferrer" className="project-card__link">
                          <FiGithub size={11} />
                          GitHub
                        </a>
                      )}
                      {proj.demo && (
                        <a href={proj.demo} target="_blank" rel="noreferrer" className="project-card__link">
                          <FiExternalLink size={11} />
                          Demo
                        </a>
                      )}
                    </div>

                    {/* Expand toggle */}
                    <button
                      className="project-card__expand-btn"
                      onClick={e => { e.stopPropagation(); setExpanded(isExpanded ? null : i); }}
                    >
                      <span className="project-card__expand-icon">
                        {isExpanded ? <FiMinus size={11} /> : <FiPlus size={11} />}
                      </span>
                      {isExpanded ? 'Less' : 'More'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}