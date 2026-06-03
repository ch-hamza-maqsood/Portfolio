import { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-scale').forEach((el) => {
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

  const skills = [
    { name: 'Forex Trading', icon: '💱', desc: 'Major & minor currency pairs with precision entries' },
    { name: 'Gold Trading (XAUUSD)', icon: '🥇', desc: 'Specialized in gold market movements and setups' },
    { name: 'Technical Analysis', icon: '📈', desc: 'Chart patterns, indicators & confluence trading' },
    { name: 'Market Structure', icon: '🏗️', desc: 'Break of structure, CHoCH, and order flow analysis' },
    { name: 'Risk Management', icon: '🛡️', desc: 'Capital preservation with calculated risk-reward ratios' },
    { name: 'Price Action Trading', icon: '🕯️', desc: 'Pure price action reading without lagging indicators' },
    { name: 'Swing & Intraday', icon: '⏱️', desc: 'Multi-timeframe approach for both short and medium term' },
    { name: 'Trading Psychology', icon: '🧠', desc: 'Emotional discipline, patience, and consistency' },
    { name: 'MetaTrader 5 (MT5)', icon: '💻', desc: 'Expert-level platform usage and trade execution' },
    { name: 'TradingView', icon: '📊', desc: 'Advanced charting, analysis, and idea sharing' },
  ];

  return (
    <section className="skills section" id="skills" ref={sectionRef}>
      <div className="skills-bg-grid" />
      <div className="container">
        <div className="skills-header">
          <span className="section-label reveal">Expertise</span>
          <h2 className="section-title reveal delay-1">
            Trading <span>Skills</span> & Tools
          </h2>
          <p className="section-subtitle reveal delay-2">
            Mastery built over 5 years of consistent market analysis, trade execution, and continuous learning.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className={`skill-card glass-card reveal-scale delay-${(idx % 5) + 1}`}
            >
              <span className="skill-icon">{skill.icon}</span>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-desc">{skill.desc}</p>
              <div className="skill-shine" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
