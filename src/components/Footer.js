import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* PawSome Section */}
        <div className="footer-column">
          <h3>PawSome</h3>
          <p>Connecting communities with compassionate animal care and adoption.</p>
        </div>

        {/* FAQ Section */}
        <div className="footer-column">
          <h3>FAQ</h3>
          <ul>
            <li><a href="#faq1">What We Do</a></li>
            <li><a href="#faq2">How to Help</a></li>
            <li><a href="#faq3">Adoption Process</a></li>
            <li><a href="#faq4">Volunteer Opportunities</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-column">
          <h3>Contact</h3>
          <p>Wakad, Pune , Maharashtra</p>
          <p><a href="mailto:info@pawsome.com" className="contact-link">info@pawsome.com</a></p>
          <p><a href="tel:+919661474996" className="contact-link">+91 9661474996</a></p>
        </div>

        {/* Social Media Section */}
        <div className="footer-column">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="mailto:info@pawsome.com">
                <i className="fas fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 PawSome. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
