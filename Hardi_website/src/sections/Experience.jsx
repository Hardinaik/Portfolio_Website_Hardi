import React from 'react';
import { FaBriefcase, FaGraduationCap, FaCertificate } from "react-icons/fa";
import { experience, education, positions, certificates } from '../data';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="exp-section">
      <div className="container">

        {/* EXPERIENCE */}
        <div className="exp-block">
          <div className="section-label">Experience</div>

          <div className="timeline">
            {experience.map((job, i) => (
              <div key={i} className="timeline__item">
                <div className="timeline__dot" />

                <div className="timeline__card">
                  <div className="timeline__header">
                    <div className="timeline__icon">
                      <FaBriefcase />
                    </div>

                    <div>
                      <p className="timeline__period">{job.period}</p>
                      <h3 className="timeline__role">{job.role}</h3>
                      <p className="timeline__company">{job.company}</p>
                    </div>
                  </div>

                  <ul className="timeline__points">
                    {job.points.map((pt, j) => (
                      <li key={j}>{pt}</li>
                    ))}
                  </ul>

                  <div className="timeline__tags">
                    {job.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* LEADERSHIP */}
            <div className="section-label sub">Leadership</div>

            {positions.map((pos, i) => (
              <div key={i} className="timeline__item">
                <div className="timeline__dot small" />

                <div className="timeline__card small">
                  <div className="timeline__header">
                    <div className="timeline__icon">
                      <FaBriefcase />
                    </div>

                    <div>
                      <p className="timeline__period">{pos.period}</p>
                      <h4 className="timeline__role small-text">{pos.role}</h4>
                      <p className="timeline__company">{pos.org}</p>
                    </div>
                  </div>

                  <p className="timeline__detail">{pos.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

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

        {/* CERTIFICATIONS */}
        <div className="exp-block">
          <div className="section-label">Certifications</div>

          {certificates.map((cert, i) => (
            <div key={i} className="cert-card">
              <div className="cert-card__icon">
                <FaCertificate />
              </div>

              <div>
                <p className="cert-card__name">{cert.name}</p>
                <p className="cert-card__issuer">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}