import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      {/* Background Image */}
      <img src="/navbar bg.png" alt="Navbar Background" className="navbar-bg" />

      {/* Logo */}
      <div className="navbar-logo">
        <img src="/unified logo.png" alt="Unified Gallery Logo" />
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/about" ? "active" : ""}>
          <Link to="/about">About</Link>
        </li>
        <li className={location.pathname === "/gallery" ? "active" : ""}>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
