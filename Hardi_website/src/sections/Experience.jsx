import React from 'react';
import { experience } from '../data';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="exp-section">
      <div className="container">
        <div className="exp-block">
          <div className="section-label">Experience</div>

          <div className="timeline">
            {experience.map((job, i) => (
              <div key={i} className="timeline__item">
                <div className="timeline__dot" />

                <div className="timeline__content">
                  <p className="timeline__period">{job.period}</p>
                  <h3 className="timeline__role">
                    {job.role}
                    <span className="timeline__sep"> — </span>
                    <span className="timeline__company">{job.company}</span>
                  </h3>
                  <p className="timeline__summary">{job.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}