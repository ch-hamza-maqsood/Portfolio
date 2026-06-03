import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Logo column */}
          <div className="footer-brand">
            <a href="#" className="footer-logo" onClick={handleBackToTop}>
              <span className="logo-badge">HM</span>
              <span className="logo-text">TradewithHamza</span>
            </a>
            <p className="footer-desc">
              Empowering traders worldwide with high-probability price action strategies, 
              institutional market structure insight, and discipline-first risk management.
            </p>
            <div className="footer-socials">
              <a href="https://wa.me/923258572200" target="_blank" rel="noopener noreferrer" className="social-link" title="WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.004.01C5.393.01.056 5.348.06 12.003c.001 2.097.548 4.142 1.587 5.946L.057 24l6.162-1.618c1.751.953 3.719 1.454 5.724 1.455 6.613 0 11.95-5.34 11.953-11.997A11.982 11.982 0 0 0 12.004.01zm5.617 15.348c-.34.17-2.01 1.002-2.32 1.116-.31.114-.536.17-.76-.17-.225-.34-.87-1.116-1.066-1.346-.197-.23-.394-.256-.734-.085-.34-.17-1.437-.53-2.736-1.699-1.011-.908-1.694-2.03-1.892-2.37-.197-.34-.02-.524.15-.693.153-.153.34-.397.51-.595.17-.198.227-.34.342-.567.113-.227.056-.425-.028-.595-.085-.17-.76-1.844-1.042-2.527-.275-.668-.553-.578-.76-.588-.21-.01-.45-.011-.69-.011-.24 0-.63.091-.96.452-.33.362-1.26 1.233-1.26 3.007 0 1.774 1.284 3.491 1.464 3.731.18.24 2.528 3.882 6.126 5.434.856.37 1.523.59 2.043.755.86.273 1.64.234 2.259.141.69-.103 2.01-.82 2.29-1.573.28-.752.28-1.398.196-1.527-.084-.129-.31-.2-.65-.37z"/>
                </svg>
              </a>
              <a href="https://instagram.com/hm_1rades" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="mailto:tradewithhamza@gmail.com" className="social-link" title="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links columns */}
          <div className="footer-links-col">
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#about">About Me</a></li>
              <li><a href="#skills">My Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#mentorship">Mentorship</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-title">Verification</h4>
            <ul className="footer-links">
              <li><a href="#results">Results</a></li>
              <li><a href="#reviews">Student Reviews</a></li>
              <li><a href="#contact">Contact Me</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} TradewithHamza. All rights reserved. 
            <span className="footer-separator">|</span> Designed for Professional Forex Trading.
          </p>
          <a href="#" className="back-to-top" onClick={handleBackToTop} title="Back to Top">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
