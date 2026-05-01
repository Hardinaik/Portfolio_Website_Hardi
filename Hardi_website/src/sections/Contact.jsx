import React, { useState } from 'react';
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
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-header">
            <div className="section-label">Contact</div>
            <h2 className="contact-title">Initiate a Connection</h2>
            <p className="contact-sub">
              Whether it's for technical collaboration or career discussions,
              I'm always open to connecting.
            </p>
          </div>

          <div className="contact-form-wrap">
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
                    placeholder="Your name"
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
                    placeholder="your@email.com"
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
                  placeholder="Your message here..."
                  rows={5}
                />
              </div>
              <button
                className={`form-submit ${sent ? 'form-submit--sent' : ''}`}
                onClick={handleSubmit}
              >
                {sent ? ' Message Sent' : 'Send Message →'}
              </button>
            </div>

            {/* Direct contact info */}
            <div className="contact-info">
              <div className="contact-info__item">
                <span className="contact-info__label">Email</span>
                <a href={`mailto:${personalInfo.email}`} className="contact-info__val">
                  {personalInfo.email}
                </a>
              </div>
              <div className="contact-info__item">
                <span className="contact-info__label">Location</span>
                <span className="contact-info__val">{personalInfo.location}</span>
              </div>
              <div className="contact-info__item">
                <span className="contact-info__label">Status</span>
                <span className="contact-info__val contact-info__available">
                  <span className="contact-info__dot" /> Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
