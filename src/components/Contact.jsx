import { useState, useEffect, useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Mentorship Inquiry',
    message: '',
  });
  const [status, setStatus] = useState('');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate API request or mailto action
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: 'Mentorship Inquiry', message: '' });
      setTimeout(() => setStatus(''), 4000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      label: 'Call / Phone',
      value: '+92 325 8572200',
      link: 'tel:+923258572200',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: 'Email Address',
      value: 'tradewithhamza@gmail.com',
      link: 'mailto:tradewithhamza@gmail.com',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      label: 'Instagram',
      value: '@hm_1rades',
      link: 'https://instagram.com/hm_1rades',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: 'Location',
      value: 'Pakistan',
      link: null,
    },
  ];

  return (
    <section className="contact section" id="contact" ref={sectionRef}>
      <div className="contact-bg-glow" />
      <div className="container">
        <div className="contact-header">
          <span className="section-label reveal">Get In Touch</span>
          <h2 className="section-title reveal delay-1">
            Let's Talk <span>Trading</span>
          </h2>
          <p className="section-subtitle reveal delay-2">
            Interested in 1-on-1 mentorship, trading setups, or partnerships? 
            Send a message or connect directly through social platforms.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Details Column */}
          <div className="contact-info-col reveal-left delay-1">
            <h3 className="info-col-title">Direct Connection</h3>
            <p className="info-col-subtitle">
              Reach out directly on WhatsApp or social media for the fastest response times.
            </p>

            <div className="info-cards-list">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="info-card glass-card">
                  <div className="info-icon-box">{info.icon}</div>
                  <div className="info-details">
                    <span className="info-label">{info.label}</span>
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noopener noreferrer" className="info-value link">
                        {info.value}
                      </a>
                    ) : (
                      <span className="info-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action Button for WhatsApp */}
            <a 
              href="https://wa.me/923258572200" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-red whatsapp-cta"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.019-5.117-2.877-6.979C16.602 1.9 14.124.879 11.487.879 6.052.879 1.626 5.3 1.622 10.738c-.001 1.702.469 3.366 1.36 4.825L1.883 20.3l4.764-1.246zm12.3-5.621c-.34-.17-2.01-1.002-2.32-1.116-.31-.114-.536-.17-.76.17-.225.34-.87 1.116-1.066 1.346-.197.23-.394.256-.734.085-.34-.17-1.437-.53-2.736-1.699-1.011-.908-1.694-2.03-1.892-2.37-.197-.34-.02-.524.15-.693.153-.153.34-.397.51-.595.17-.198.227-.34.342-.567.113-.227.056-.425-.028-.595-.085-.17-.76-1.844-1.042-2.527-.275-.668-.553-.578-.76-.588-.21-.01-.45-.011-.69-.011-.24 0-.63.091-.96.452-.33.362-1.26 1.233-1.26 3.007 0 1.774 1.284 3.491 1.464 3.731.18.24 2.528 3.882 6.126 5.434.856.37 1.523.59 2.043.755.86.273 1.64.234 2.259.141.69-.103 2.01-.82 2.29-1.573.28-.752.28-1.398.196-1.527-.084-.129-.31-.2-.65-.37z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact Form Column */}
          <div className="contact-form-col reveal-right delay-2">
            <div className="form-card glass-card">
              <h3 className="form-title">Send a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input form-select"
                  >
                    <option value="Mentorship Inquiry">1-on-1 Mentorship Course</option>
                    <option value="Prop Challenge Help">Prop Firm Challenge Prep</option>
                    <option value="General Questions">General Questions</option>
                    <option value="Business Partnership">Business Partnership</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input form-textarea"
                    placeholder="Tell me about your trading experience and goals..."
                    rows="5"
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className={`btn btn-primary form-submit-btn ${status === 'sending' ? 'sending' : ''}`}
                  disabled={status === 'sending' || status === 'success'}
                  id="contact-submit"
                >
                  {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
