import React from 'react';
import { skills } from '../data';
import './Skills.css';

const CATEGORY_ICONS = {
  'Languages': '{ }',
  'Machine Learning': '∿',
  'Frontend': '◱',
  'Backend': '⚙',
  'Database': '⊞',
  'AI / LLM': '◈',
  'Other': '⋯',
};

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="skills-header">
          <div className="section-label">Technical Proficiency</div>
          <p className="skills-subtitle">
            A specialized toolkit refined through academic rigor and practical industry exposure.
          </p>
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-card">
              <div className="skill-card__icon">{CATEGORY_ICONS[category] || '◆'}</div>
              <h3 className="skill-card__title">{category}</h3>
              <div className="skill-card__items">
                {items.map((item) => (
                  <span key={item} className="skill-pill">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
