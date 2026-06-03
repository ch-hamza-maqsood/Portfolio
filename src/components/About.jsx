import { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const highlights = [
    { icon: '🎯', title: 'Discipline First', desc: 'Consistent approach to every trade with strict risk management protocols' },
    { icon: '📊', title: 'Technical Mastery', desc: 'Deep expertise in price action, market structure, and chart patterns' },
    { icon: '🏆', title: 'Proven Track Record', desc: '5+ years of profitable trading across Forex & Gold (XAUUSD) markets' },
    { icon: '🤝', title: 'Mentor & Leader', desc: 'Successfully trained 30+ students in advanced trading strategies' },
  ];

  return (
    <section className="about section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <span className="section-label reveal">About Me</span>
            <h2 className="section-title reveal delay-1">
              Trading with <span>Precision</span> & Purpose
            </h2>
            <p className="about-text reveal delay-2">
              I'm Hamza Maqsood, a Professional Forex & Gold Trader with 5 years of experience
              in the financial markets. My journey started with a deep fascination for market
              movements, and over the years I've developed a disciplined approach to trading
              that focuses on technical analysis, market structure, and smart execution.
            </p>
            <p className="about-text reveal delay-3">
              With 30+ students under my mentorship learning advanced trading strategies,
              market structures, risk management, market analysis, fundamentals, and trade
              execution — I believe in sharing knowledge and building a community of
              disciplined traders.
            </p>

            <div className="about-stats-grid reveal delay-4">
              <div className="about-stat-item">
                <span className="stat-icon">📈</span>
                <div className="stat-info">
                  <span className="stat-num">5+ Years</span>
                  <span className="stat-label">Trading Markets</span>
                </div>
              </div>
              <div className="about-stat-item">
                <span className="stat-icon">🎓</span>
                <div className="stat-info">
                  <span className="stat-num">30+ Students</span>
                  <span className="stat-label">Mentored & Funded</span>
                </div>
              </div>
              <div className="about-stat-item">
                <span className="stat-icon">🪙</span>
                <div className="stat-info">
                  <span className="stat-num">Gold Spec</span>
                  <span className="stat-label">XAUUSD Specialist</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-right">
            <div className="about-highlights">
              {highlights.map((item, idx) => (
                <div key={idx} className={`about-highlight-card glass-card reveal-scale delay-${idx + 1}`}>
                  <span className="highlight-icon">{item.icon}</span>
                  <div>
                    <h4 className="highlight-title">{item.title}</h4>
                    <p className="highlight-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
