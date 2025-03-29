import React from "react";
import { Link } from "react-router-dom"; // Correct way to navigate
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Us Section */}
        <div className="footer-contact">
          <h5>Contact Us</h5>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Your Name" />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" placeholder="Your Email" />

          <label htmlFor="message">Your Message</label>
          <textarea id="message" placeholder="Your Message"></textarea>

          <button>Send</button>
        </div>

        {/* Sitemap Section */}
        <div className="footer-sitemap">
          <h5>Sitemap</h5>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Logo & Contact Info */}
        <div className="footer-logo">
          <img src="/unified logo.png" alt="Gallery Logo" />
          <div className="footer-icons">
            <span>📧 Email: bhattunnati9366@gmail.com</span>
            <span>📞 Phone: +91 12345 06789</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
