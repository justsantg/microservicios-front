import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📍 123 Gym Street, City</p>
          <p>📞 +1 234 567 890</p>
          <p>✉️ info@gymfit.com</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/classes">Classes</Link></li>
            <li><Link to="/memberships">Memberships</Link></li>
            <li><Link to="/trainers">Trainers</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Opening Hours</h3>
          <p>Monday - Friday: 6:00 AM - 10:00 PM</p>
          <p>Saturday: 7:00 AM - 8:00 PM</p>
          <p>Sunday: 8:00 AM - 6:00 PM</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 GymFit. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;