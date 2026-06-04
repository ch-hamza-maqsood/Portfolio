import { useState, useEffect, useRef } from 'react';
import './Results.css';

const Results = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(9);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
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

  // Reset pagination when filter changes
  useEffect(() => {
    setVisibleCount(9);
  }, [activeFilter]);

  // Optimized programmatic mapping of all 24 results with rich descriptions
  const resultsData = Array.from({ length: 24 }, (_, i) => i + 1)
  .filter(id => id !== 4 && id !== 5)
  .map(id => {
    let category = 'prop-firm';
    let categoryLabel = 'Prop Firm';
    let title = `Prop Challenge Passed #${id}`;
    let student = 'Trader Success';
    let desc = 'Successful challenge completion and trade validation on live servers.';

    // Distribute results into meaningful categories with detailed descriptions
    if ([1, 2, 4, 11, 12, 13, 14, 21, 22].includes(id)) {
      category = 'prop-firm';
      categoryLabel = 'Prop Firm';
      if (id === 1) {
        title = 'V Prop Trader Passed';
        student = 'Sultan Qadri';
        desc = 'Successfully passed V Prop Trader evaluation with disciplined risk management. Demonstrated consistent profitability across multiple days of trading with perfect drawdown control.';
      } else if (id === 2) {
        title = 'Goat Funded 5K Phase 1 Passed';
        student = 'Vinay Angre';
        desc = 'Completed Phase 1 of Goat Funded challenge with a 5K account. Showcased strong technical analysis skills and proper trade execution with 3:1 risk-reward ratio.';
      } else if (id === 4) {
        title = 'Goat Funded 5K Phase 1 Passed';
        student = 'Mohammed Omar';
        desc = 'Successfully navigated the first phase of Goat Funded evaluation. Demonstrated mastery of market structure and price action trading setups on forex pairs.';
      } else {
        title = `Prop Challenge Passed #${id}`;
        student = 'Mentorship Student';
        desc = 'Evaluation pass demonstrating disciplined drawdowns and consistent execution. Trading approach focused on high-probability setups and strict risk management protocols.';
      }
    } else if ([3, 7, 8, 9, 10, 15, 16].includes(id)) {
      category = 'verification';
      categoryLabel = 'Verification';
      if (id === 3) {
        title = 'Goat Funded 10K Passed';
        student = 'Vinay Angre';
        desc = 'Official verification of Goat Funded challenge completion on 10K account. Achieved targets through disciplined market entry points and professional trade management.';
      } else {
        title = `Funding Verification Certificate`;
        student = 'Verified Account';
        desc = 'Official certificate validating successful challenge completion and account funding approval. Recognition of trading excellence and proven risk management capability.';
      }
    } else if ([5, 17, 18, 19, 20].includes(id)) {
      category = 'mentorship';
      categoryLabel = 'Student Success';
      title = `Mentorship Success Review`;
      student = 'Student Achievement';
      desc = 'Live conversation detailing payout records, challenge status, and trade success stories. Real-time feedback from mentors discussing strategy improvement and account growth.';
    } else {
      category = 'analysis';
      categoryLabel = 'Analysis';
      title = `Gold (XAUUSD) Precision Setup`;
      student = 'Market Analysis';
      desc = 'Live price action layout detailing high-probability support/resistance breakout entries. Technical setup showing confluence of multiple confirming indicators for optimal trade execution.';
    }

    return {
      id,
      image: `/results/${id}.jpeg`,
      title,
      student,
      category,
      categoryLabel,
      desc,
    };
  });

  const categories = [
    { id: 'all', label: 'All Results' },
    { id: 'prop-firm', label: 'Prop Firm Challenges' },
    { id: 'verification', label: 'Certificates' },
    { id: 'analysis', label: 'Market Analysis' },
    { id: 'mentorship', label: 'Student Milestones' },
  ];

  const filteredResults = activeFilter === 'all' 
    ? resultsData 
    : resultsData.filter(item => item.category === activeFilter);

  const displayedResults = filteredResults.slice(0, visibleCount);

  const openLightbox = (imagePath) => {
    setSelectedImage(imagePath);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const loadMore = () => {
    setIsLoadingMore(true);
    // Simulate fast loading with minimal delay
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 4, filteredResults.length));
      setIsLoadingMore(false);
    }, 150);
  };

  return (
    <section className="results section" id="results" ref={sectionRef}>
      <div className="results-bg-candles" />
      <div className="container">
        <div className="results-header">
          <span className="section-label reveal">Results & Certificates</span>
          <h2 className="section-title reveal delay-1">
            Proven <span>Track Record</span> & Success
          </h2>
          <p className="section-subtitle reveal delay-2">
            Explore verified certificates of completed funding challenges, student milestone screenshots, 
            and real-time market charting results demonstrating consistent profitability.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="results-filters reveal delay-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results Grid */}
        <div className="results-grid">
          {displayedResults.map((result, idx) => (
            <div 
              key={result.id} 
              className="result-card glass-card reveal-scale"
              style={{ transitionDelay: `${(idx % 3) * 0.1}s` }}
            >
              <div className="result-image-wrapper" onClick={() => openLightbox(result.image)}>
                <img 
                  src={result.image} 
                  alt={result.title} 
                  className="result-img" 
                  loading="lazy"
                  decoding="async"
                />
                <div className="result-overlay">
                  <span className="zoom-icon">🔍 View Full Image</span>
                </div>
              </div>
              <div className="result-info">
                <span className="result-tag">{result.categoryLabel}</span>
                <h3 className="result-card-title">{result.title}</h3>
                <div className="result-meta">
                  <span className="result-label-text">Trader:</span>
                  <span className="result-val">{result.student}</span>
                </div>
                <p className="result-desc">{result.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredResults.length && (
          <div className="results-load-more reveal delay-2">
            <button 
              className={`btn btn-secondary load-more-btn ${isLoadingMore ? 'loading' : ''}`}
              onClick={loadMore}
              disabled={isLoadingMore}
            >
              {isLoadingMore ? (
                <>
                  <span className="spinner"></span>
                  Loading...
                </>
              ) : (
                <>
                  View More Results
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content-wrapper" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
            <img src={selectedImage} alt="Enlarged result" className="lightbox-img" decoding="async" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Results;
