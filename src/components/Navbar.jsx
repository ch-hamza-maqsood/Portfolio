import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Mentorship', href: '#mentorship' },
    { label: 'Results', href: '#results' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo" id="navbar-logo">
          <span className="logo-monogram">HM</span>
          <span className="logo-text">TradewithHamza</span>
        </a>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`} id="navbar-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleNavClick}>{link.label}</a>
            </li>
          ))}
          <li className="nav-cta-mobile">
            <a href="#contact" className="btn btn-primary" onClick={handleNavClick}>
              Get in Touch
            </a>
          </li>
        </ul>

        <a href="#contact" className="btn btn-primary nav-cta-desktop" id="nav-cta">
          Get in Touch
        </a>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          id="hamburger-btn"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
};

export default Navbar;
