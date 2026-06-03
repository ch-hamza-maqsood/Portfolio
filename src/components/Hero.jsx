import { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const statsRef = useRef([]);

  useEffect(() => {
    const animateCounter = (el, target) => {
      let current = 0;
      const increment = target / 60;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = Math.floor(current);
      }, 30);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.dataset.target);
          animateCounter(entry.target, target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" id="hero">
      {/* Background candlestick decorations */}
      <div className="hero-bg-candles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`candle ${i % 2 === 0 ? 'green' : 'red'}`}
            style={{
              left: `${5 + i * 5}%`,
              animationDelay: `${i * 0.3}s`,
              height: `${20 + Math.random() * 60}px`,
            }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      <div className="hero-container container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-dot" />
              Available for Mentorship
            </div>
            <h1 className="hero-title">
              HAMZA<br />
              <span className="gold-text">MAQSOOD</span>
            </h1>
            <p className="hero-tagline">
              Professional Forex & Gold Trader
            </p>
            <p className="hero-description">
              5 years of experience in technical analysis, market structure,
              risk management, and price action trading. Focused on discipline,
              consistency, and smart execution in financial markets.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary" id="hero-cta-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Start Learning
              </a>
              <a href="#results" className="btn btn-secondary" id="hero-cta-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
                View Results
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-image-ring" />
            <div className="hero-image-glow" />
            <img
              src="/profile.png"
              alt="Hamza Maqsood - Forex & Gold Trader"
              className="hero-image"
            />
            <div className="hero-float-card hero-float-card-1">
              <span className="float-icon">📈</span>
              <div>
                <span className="float-label">Gold Trading</span>
                <span className="float-value">XAUUSD</span>
              </div>
            </div>
            <div className="hero-float-card hero-float-card-2">
              <span className="float-icon">💰</span>
              <div>
                <span className="float-label">Forex Expert</span>
                <span className="float-value">5+ Years</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-number" ref={el => statsRef.current[0] = el} data-target="5">0</span>
            <span className="hero-stat-plus">+</span>
            <span className="hero-stat-label">Years Experience</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-number" ref={el => statsRef.current[1] = el} data-target="30">0</span>
            <span className="hero-stat-plus">+</span>
            <span className="hero-stat-label">Students Mentored</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-number" ref={el => statsRef.current[2] = el} data-target="500">0</span>
            <span className="hero-stat-plus">+</span>
            <span className="hero-stat-label">Profitable Trades</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <div className="scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
