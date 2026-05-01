import React from 'react';
import { achievements } from '../data';
import './Achievements.css';

export default function Achievements() {
  return (
    <section className="achievements-section">
      <div className="container">
        <div className="achievements-inner">
          <div className="section-label" style={{ marginBottom: '2rem' }}>Achievements</div>
          <div className="achievements-grid">
            {achievements.map((ach, i) => (
              <div key={i} className="ach-card">
                <div className="ach-card__icon">{ach.icon}</div>
                <div className="ach-card__val">{ach.value}</div>
                <div className="ach-card__label">{ach.label}</div>
                <div className="ach-card__detail">{ach.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
