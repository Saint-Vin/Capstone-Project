import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevents default browser form submission

    const { fullName, email, phone, message } = formData;
    if (!fullName || !email || !phone || !message) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    try {
      // TODO: replace with your real endpoint
      const res = await fetch('https://your-endpoint.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Submission failed');
      setStatus('success');
      setFormData({ fullName: '', email: '', phone: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-title">
        <h2>Have Questions About Planetary Science?</h2>
        <p>
          Interested in learning more about space, astronomy, or how planetary data is
          collected and analyzed? Reach out and we'll get back to you.
        </p>
      </div>

      <form className="contact-form" method="post" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fullName">Full Name*</label>
            <input
              type="text"
              id="fullName"
              placeholder="Full name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              placeholder="example@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone Number*</label>
            <input
              type="tel"
              id="phone"
              placeholder="Please enter a valid phone number..."
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message*</label>
            <textarea
              id="message"
              rows={4}
              placeholder="Enter your message"
              maxLength={100}
              value={formData.message}
              onChange={handleChange}
            />
            <span className="char-note">
              {formData.message.length}/100 characters
            </span>
          </div>
        </div>

        {status === 'success' && (
          <p className="form-feedback success">Message sent! We'll be in touch soon.</p>
        )}
        {status === 'error' && (
          <p className="form-feedback error">Please fill in all fields and try again.</p>
        )}

        <button type="submit" className="btn-blue" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending…' : 'Submit →'}
        </button>
      </form>
    </section>
  );
};

export default Contact;