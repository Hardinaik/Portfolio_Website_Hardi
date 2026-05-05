import React from 'react';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';
import { education, certificates } from '../data';
import './Experience.css';

export default function Education() {
  return (
    <section id="education" className="exp-section">
      <div className="container">

        {/* EDUCATION */}
        <div className="exp-block">
          <div className="section-label">Education</div>

          {education.map((edu, i) => (
            <div key={i} className="edu-card">
              <div className="edu-card__header">
                <div className="edu-card__icon">
                  <FaGraduationCap />
                </div>

                <div className="edu-card__content">
                  <p className="edu-card__period">{edu.period}</p>
                  <h3 className="edu-card__degree">{edu.degree}</h3>
                  <p className="edu-card__minor">{edu.minor}</p>
                  <p className="edu-card__institution">{edu.institution}</p>
                  <p className="edu-card__location">{edu.location}</p>
                </div>

                <div className="edu-card__cgpa">
                  <span className="edu-card__cgpa-val">{edu.cgpa}</span>
                  <span className="edu-card__cgpa-label">CGPA</span>
                </div>
              </div>

              <div className="edu-card__courses">
                <span className="edu-card__courses-label">Relevant Coursework</span>
                <div className="edu-card__courses-tags">
                  {edu.courses.map((c) => (
                    <span key={c} className="tag">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}