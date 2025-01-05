import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <div className="footer-content">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Spotify Lite. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="/terms" className="footer-link">Terms of Service</a>
            <span className="separator">|</span>
            <a href="/privacy" className="footer-link">Privacy Policy</a>
          </div>
          <div className="footer-social">
            <a href="https://facebook.com" className="footer-social-icon">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://twitter.com" className="footer-social-icon">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://instagram.com" className="footer-social-icon">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://spotify.com" className="footer-social-icon">
              <i className="bi bi-spotify"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
