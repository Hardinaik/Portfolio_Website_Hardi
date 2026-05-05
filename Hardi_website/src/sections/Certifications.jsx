import React from 'react';
import { FaCertificate } from 'react-icons/fa';
import { certificates } from '../data';
import './Experience.css';

export default function Certifications() {
  return (
    <section id="certifications" className="exp-section">
      <div className="container">
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