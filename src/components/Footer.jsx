import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
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
