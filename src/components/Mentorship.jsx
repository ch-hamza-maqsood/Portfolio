import { useEffect, useRef } from 'react';
import './Mentorship.css';

const Mentorship = () => {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const topics = [
    'Market Structure',
    'Technical Analysis',
    'Risk Management',
    'Fundamental Analysis',
    'Trading Psychology',
    'Trade Execution',
    'Professional Trading Strategies',
    'Price Action Mastery',
  ];

  const benefits = [
    { icon: '🎓', title: '1-on-1 Mentorship', desc: 'Personal guidance tailored to your trading level and goals' },
    { icon: '📱', title: 'WhatsApp Support', desc: 'Direct access for questions, trade reviews, and daily guidance' },
    { icon: '📹', title: 'Video Lessons', desc: 'Comprehensive recorded content you can revisit anytime' },
    { icon: '🔔', title: 'Trade Signals', desc: 'Real-time trade setups and analysis shared in the community' },
    { icon: '📋', title: 'Trade Journal Reviews', desc: 'Regular review of your trades to identify patterns and improvements' },
    { icon: '🏆', title: 'Funded Challenge Prep', desc: 'Specific training to pass prop firm challenges and get funded' },
  ];

  return (
    <section className="mentorship section" id="mentorship" ref={sectionRef}>
      {/* Background decoration */}
      <div className="mentorship-bg-glow" />

      <div className="container">
        <div className="mentorship-header">
          <span className="section-label reveal">Mentorship</span>
          <h2 className="section-title reveal delay-1">
            Learn to Trade with <span>Confidence</span>
          </h2>
          <p className="section-subtitle reveal delay-2">
            Join 30+ successful students who have transformed their trading journey
            through structured mentorship and hands-on training.
          </p>
        </div>

        <div className="mentorship-content">
          <div className="mentorship-topics reveal-left delay-1">
            <div className="topics-card">
              <h3 className="topics-title">What You'll Learn</h3>
              <div className="topics-list">
                {topics.map((topic, idx) => (
                  <div key={idx} className="topic-item">
                    <div className="topic-check">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
              <div className="topics-stat">
                <span className="topics-stat-number">30+</span>
                <span className="topics-stat-label">Students Successfully Trained</span>
              </div>
            </div>
          </div>

          <div className="mentorship-benefits reveal-right delay-2">
            <div className="benefits-grid">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="benefit-card glass-card">
                  <span className="benefit-icon">{benefit.icon}</span>
                  <h4 className="benefit-title">{benefit.title}</h4>
                  <p className="benefit-desc">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mentorship-cta reveal delay-4">
          <div className="cta-card">
            <div className="cta-text">
              <h3>Ready to Start Your Trading Journey?</h3>
              <p>Get personal mentorship from an experienced trader. Learn the strategies, mindset, and discipline needed to succeed in the markets.</p>
            </div>
            <a href="#contact" className="btn btn-primary" id="mentorship-cta">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              Join Mentorship
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentorship;
