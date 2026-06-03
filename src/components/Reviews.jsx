import { useState, useEffect, useRef } from 'react';
import './Reviews.css';

const Reviews = () => {
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Programmatic mapping of all 22 reviews with detailed captions
  const reviewsData = Array.from({ length: 22 }, (_, i) => {
    const id = i + 1;
    let platform = 'Telegram Chat';
    let badgeClass = 'badge-telegram';
    let caption = 'Student celebrating successful prop challenge payout or trade result.';

    if ([1, 11, 12, 18].includes(id)) {
      platform = 'Instagram Direct';
      badgeClass = 'badge-instagram';
      if (id === 1) {
        caption = 'Instagram conversation praising Hamza\'s genuine and personalized mentorship approach with real results.';
      } else if (id === 11) {
        caption = 'Student sharing experience: "Best trading mentor I\'ve ever worked with. Real strategies, real profits."';
      } else if (id === 12) {
        caption = 'Instagram testimonial: Successful student sharing their trading journey transformation with concrete proof.';
      } else {
        caption = 'Instagram tag endorsing Hamza Maqsood\'s professional trading academy and mentorship quality.';
      }
    } else if ([10, 21, 22].includes(id)) {
      platform = 'VIP Channel';
      badgeClass = 'badge-vip';
      if (id === 10) {
        caption = 'VIP members-only channel discussing advanced gold trading strategies and market analysis techniques.';
      } else if (id === 21) {
        caption = 'VIP Gold breakout analysis with profit verification showing consistent 3:1 risk-reward execution.';
      } else {
        caption = 'Premium student sharing detailed analysis in the exclusive VIP Trading Community for advanced traders.';
      }
    } else if ([2, 3, 4, 13, 14, 16, 20].includes(id)) {
      platform = 'Group Chat';
      badgeClass = 'badge-group';
      if (id === 2) {
        caption = 'Group member confirming: Received funding approval and started trading on prop firm account.';
      } else if (id === 3) {
        caption = 'Trader celebrating $2000+ profit from successful trade setup on XAUUSD (Gold) pair.';
      } else if (id === 4) {
        caption = 'Student message: "Just hit my daily target! This methodology is absolutely game-changing."';
      } else if (id === 16) {
        caption = 'Student reporting outstanding $93 withdrawal profit from a small initial deposit - 430% ROI.';
      } else {
        caption = 'Successful trading group member chat logs showing consistent daily wins and profit tracking.';
      }
    } else {
      platform = 'Telegram Chat';
      badgeClass = 'badge-telegram';
      if (id === 5) {
        caption = 'Tanveer Shaikh thanking Hamza for comprehensive help with loss recovery strategy and mindset reset.';
      } else if (id === 6) {
        caption = 'White Devil expressing deep gratitude for professional structural price action lessons learned.';
      } else if (id === 7) {
        caption = 'Successful trader sharing milestone: "Made $500 profit this week using exactly your setups."';
      } else {
        caption = 'Forex student sharing high quality setup screenshots with technical analysis validation details.';
      }
    }

    return {
      id,
      image: `/reviews/${id}.jpeg`,
      platform,
      badgeClass,
      caption,
    };
  });

  const displayedReviews = reviewsData.slice(0, visibleCount);

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
    // Fast loading with minimal delay
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 4, reviewsData.length));
      setIsLoadingMore(false);
    }, 150);
  };

  return (
    <section className="reviews section" id="reviews" ref={sectionRef}>
      <div className="reviews-bg-glow" />
      <div className="container">
        <div className="reviews-header">
          <span className="section-label reveal">Testimonials</span>
          <h2 className="section-title reveal delay-1">
            What Our <span>Students Say</span>
          </h2>
          <p className="section-subtitle reveal delay-2">
            Real feedback, Telegram logs, and Instagram conversations from students who have completed 
            the course or trade with our proven strategies and guidance.
          </p>
        </div>

        {/* Uniform Grid Layout */}
        <div className="reviews-grid">
          {displayedReviews.map((review, idx) => (
            <div 
              key={review.id} 
              className="review-item glass-card reveal-scale"
              style={{ transitionDelay: `${(idx % 3) * 0.1}s` }}
              onClick={() => openLightbox(review.image)}
            >
              <div className="review-img-container">
                <img 
                  src={review.image} 
                  alt={review.platform} 
                  className="review-img"
                  loading="lazy"
                  decoding="async"
                />
                <span className={`review-platform-badge ${review.badgeClass}`}>
                  {review.platform}
                </span>
                <div className="review-overlay">
                  <span>🔍 Expand</span>
                </div>
              </div>
              <div className="review-caption-box">
                <p className="review-caption">{review.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < reviewsData.length && (
          <div className="reviews-load-more reveal delay-2">
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
                  View More Testimonials
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
            <img src={selectedImage} alt="Review" className="lightbox-img" decoding="async" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Reviews;
