import React from 'react';
import { positions } from '../data';
import './Experience.css';

export default function PositionOdResponsibilities() {
  return (
    <section id="leadership" className="exp-section">
      <div className="container">
        <div className="exp-block">
          <div className="section-label">Positions of Responsibility</div>

          <div className="timeline">
            {positions.map((pos, i) => (
              <div key={i} className="timeline__item">
                <div className="timeline__dot small" />

                <div className="timeline__content">
                  <p className="timeline__period">{pos.period}</p>
                  <h4 className="timeline__role">
                    {pos.role}
                    <span className="timeline__sep"> — </span>
                    <span className="timeline__company">{pos.org}</span>
                  </h4>
                  <p className="timeline__summary">{pos.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}