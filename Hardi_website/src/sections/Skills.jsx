import React from 'react';
import {
  FaCode,
  FaReact,
  FaServer,
  FaDatabase,
  FaRobot,
  FaBrain,
  FaGitAlt,
} from 'react-icons/fa';
import { SiScikitlearn, SiTensorflow } from 'react-icons/si';
import { skills } from '../data';
import './Skills.css';

const CATEGORY_META = {
  'Languages':       { icon: <FaCode />,       desc: 'Core programming languages' },
  'Machine Learning':{ icon: <SiScikitlearn />, desc: 'ML libraries & frameworks' },
  'AI / LLM':        { icon: <FaRobot />,       desc: 'Generative AI & LLM tooling' },
  'Frontend':        { icon: <FaReact />,       desc: 'UI & web interfaces' },
  'Backend':         { icon: <FaServer />,      desc: 'APIs & server-side' },
  'Database':        { icon: <FaDatabase />,    desc: 'Storage & vector search' },
  'Tools & Practices':{ icon: <FaGitAlt />,     desc: 'Dev workflow & methodology' },
};

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="skills-header">
          <div className="section-label">Technical Skills</div>
          
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => {
            const meta = CATEGORY_META[category] || { icon: <FaBrain />, desc: '' };
            return (
              <div key={category} className="skill-card">
                <div className="skill-card__header">
                  <span className="skill-card__icon">{meta.icon}</span>
                  <div>
                    <h3 className="skill-card__title">{category}</h3>
                    <p className="skill-card__desc">{meta.desc}</p>
                  </div>
                </div>
                <div className="skill-card__items">
                  {items.map((item) => (
                    <span key={item} className="skill-pill">{item}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}