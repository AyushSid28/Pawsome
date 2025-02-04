import React, { useState } from 'react';
import './Header.css';

function Header() {
  // State to toggle the form visibility
  const [showForm, setShowForm] = useState(false);

  // Handle the Home button click
  const handleHomeClick = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    window.scrollTo(0, 0); // Optional: scroll to the top of the page
  };

  // Handle the Subscribe button click
  const handleSubscribeClick = () => {
    window.location.href = '/Newsletter.html'; // Navigate to Newsletter.html
  };

  // Toggle the visibility of the form
  const toggleForm = () => {
    setShowForm(prevShowForm => !prevShowForm);
  };

  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <a href="/" className="logo" onClick={handleHomeClick}>
          <img src="/logo.png" alt="PawSome Logo" className="logo-image" />
        </a>
        <nav className="navbar" aria-label="Main Navigation">
          <a href="/" className="nav-link" onClick={handleHomeClick}>Home</a>
          <a href="/about.html" className="nav-link">About</a>
          <a href="/adopt.html" className="nav-link">Adopt</a>
          <a href="/donate.html" className="nav-link">Donate</a>
          <a href="/volunteer.html" className="nav-link">Volunteer</a>
        </nav>
      </header>

      {/* Video Section */}
      <div className="header-video">
        <video
          id="comp-ldj26lck_video"
          className="video"
          crossOrigin="anonymous"
          playsInline
          preload="auto"
          muted
          loop
          autoPlay
          src="https://video.wixstatic.com/video/3d01f2_7b078d036bdb4e789791c1386391cd16/1080p/mp4/file.mp4"
        ></video>

        {/* Join Us Button inside Video */}
        <div className="video-overlay">
          <button className="join-us-button" onClick={toggleForm}>Join Us!</button>
        </div>

        {/* Conditionally render the form when showForm is true */}
        {showForm && (
          <div id="join-us-form">
            <div className="form-overlay">
              <div className="form-container">
                <h3>Join Us</h3>
                <button onClick={() => window.location.href = '/login'}>Login</button>
                <button onClick={() => window.location.href = '/register'}>Register</button>
                <button className="close-button" onClick={toggleForm}>Close</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Review Section */}
      <section className="review-section">
        <h2>Why We Need Your Help</h2>
        <div className="review-summary">
          <span>⭐️⭐️⭐️⭐️⭐️</span>
          <span>6999 VERIFIED REVIEWS</span>
        </div>
        <div className="review-cards">
          <div className="review-card">
            <p>“This shelter provides a safe haven for both dogs and cats, ensuring they receive the love and care they deserve.”</p>
            <span>- Pet Lovers Magazine</span>
          </div>
          <div className="review-card">
            <p>“They offer excellent medical care and rehabilitation services, helping animals recover and find their forever homes.”</p>
            <span>- Animal Welfare Weekly</span>
          </div>
          <div className="review-card">
            <p>“A compassionate team dedicated to rescuing and rehoming pets, making a real difference in the lives of countless animals.”</p>
            <span>- Furry Friends Gazette</span>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <h2>Join Our Newsletter</h2>
        <div className="newsletter-summary">
          <span>Stay updated with our latest news, stories, and events.</span>
          <span>Join our community and never miss out on the amazing work we do for animals across India.</span>
        </div>
        <button className="newsletter-button" onClick={handleSubscribeClick}>
          Subscribe
        </button>
      </section>
    </div>
  );
}

export default Header;
