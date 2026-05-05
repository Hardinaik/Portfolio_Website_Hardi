import React, { useState } from 'react';
import { FiSend, FiCheck, FiMail, FiMapPin, FiZap } from 'react-icons/fi';
import { personalInfo } from '../data';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body    = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-inner">

          {/* ── Header — left aligned like all other sections ── */}
          <div className="contact-header">
            <div className="section-label">Get In Touch</div>
            <h2 className="contact-title">Start a Conversation</h2>
            <p className="contact-sub">
              I'm a fresher actively looking for opportunities — whether it's a full-time role,
              internship or a project to collaborate on. Drop me a message and let's build
              something together.
            </p>
          </div>

          {/* ── Glass Card ── */}
          <div className="contact-card">
            <div className="contact-form">

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    className="form-input"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="your name"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    className="form-input"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-input form-textarea"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity, project idea or just say hi..."
                  rows={5}
                />
              </div>

              <button
                className={`form-submit${sent ? ' form-submit--sent' : ''}`}
                onClick={handleSubmit}
              >
                {sent
                  ? <><FiCheck size={14} /> Message Sent</>
                  : <><FiSend  size={14} /> Transmit Message</>
                }
              </button>

            </div>
          </div>

          {/* ── Info row ── */}
          <div className="contact-info">
            <div className="contact-info__item">
              <span className="contact-info__label">Email</span>
              <a href={`mailto:${personalInfo.email}`} className="contact-info__val">
                <FiMail size={11} style={{ marginRight: '0.3rem', verticalAlign: 'middle' }} />
                {personalInfo.email || 'hardinaik@email.com'}
              </a>
            </div>

            <div className="contact-info__divider" />

            <div className="contact-info__item">
              <span className="contact-info__label">Location</span>
              <span className="contact-info__val">
                <FiMapPin size={11} style={{ marginRight: '0.3rem', verticalAlign: 'middle' }} />
                {personalInfo.location}
              </span>
            </div>

            <div className="contact-info__divider" />

            <div className="contact-info__item">
              <span className="contact-info__label">Status</span>
              <span className="contact-info__val contact-info__available">
                <span className="contact-info__dot" />
                Open to Opportunities
              </span>
            </div>

            <div className="contact-info__divider" />

            <div className="contact-info__item">
              <span className="contact-info__label">Looking For</span>
              <span className="contact-info__val" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <FiZap size={11} style={{ color: 'var(--accent)' }} />
                Jobs &amp; Collaborations
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}