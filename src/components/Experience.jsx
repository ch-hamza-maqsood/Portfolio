import { useEffect, useRef } from 'react';
import './Experience.css';

const Experience = () => {
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

  const timeline = [
    {
      year: '2021',
      title: 'Started Trading Journey',
      desc: 'Began learning Forex fundamentals, chart reading, and basic technical analysis. Developed a passion for understanding financial markets.',
      tags: ['Forex Basics', 'Chart Reading'],
    },
    {
      year: '2022',
      title: 'Mastered Technical Analysis',
      desc: 'Deep-dived into market structure, price action strategies, and risk management. Started trading Gold (XAUUSD) alongside Forex pairs.',
      tags: ['XAUUSD', 'Price Action', 'Risk Management'],
    },
    {
      year: '2023',
      title: 'Consistent Profitability',
      desc: 'Achieved consistent profitability through disciplined execution. Refined swing and intraday trading strategies using MetaTrader 5.',
      tags: ['MT5', 'Swing Trading', 'Consistency'],
    },
    {
      year: '2024',
      title: 'Began Mentoring Students',
      desc: 'Started sharing knowledge with aspiring traders. Built a growing community of students learning advanced trading concepts and strategies.',
      tags: ['Mentorship', 'Community', 'Teaching'],
    },
    {
      year: '2025-26',
      title: '30+ Students & Growing',
      desc: 'Successfully mentored 30+ students across multiple countries. Students passing funded trading challenges and achieving their first profitable months.',
      tags: ['30+ Students', 'Funded Traders', 'Global Reach'],
    },
  ];

  return (
    <section className="experience section" id="experience" ref={sectionRef}>
      <div className="container">
        <div className="experience-header">
          <span className="section-label reveal">Journey</span>
          <h2 className="section-title reveal delay-1">
            5 Years of <span>Trading</span> Excellence
          </h2>
          <p className="section-subtitle reveal delay-2">
            From beginner to professional trader and mentor — a journey of discipline,
            learning, and continuous growth in the financial markets.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-line" />
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className={`timeline-item ${idx % 2 === 0 ? 'reveal-left' : 'reveal-right'} delay-${idx + 1}`}
            >
              <div className="timeline-dot">
                <div className="timeline-dot-inner" />
              </div>
              <div className="timeline-card glass-card">
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-desc">{item.desc}</p>
                <div className="timeline-tags">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="timeline-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-areas reveal delay-3">
          <h3 className="areas-title">Key Areas of Expertise</h3>
          <div className="areas-grid">
            {[
              'Market Structure Analysis',
              'Technical Analysis',
              'Risk Management',
              'Trade Planning & Execution',
              'Price Action Strategies',
              'Forex Market Trading',
              'Gold (XAUUSD) Trading',
              'Trading Psychology & Discipline',
              'Student Mentorship & Training',
            ].map((area, idx) => (
              <div key={idx} className="area-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
