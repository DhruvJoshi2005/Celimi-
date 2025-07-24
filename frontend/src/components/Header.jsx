import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/celimi.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""} ${isVisible ? "visible" : ""}`}>
      <div className="logo-section">
        {/* ✅ Logo links to home */}
        <Link to="/">
          <img
            src={logo}
            alt="Celimi Logo"
            className="logo"
            onLoad={() => console.log("Logo loaded successfully")}
          />
        </Link>
      </div>

      <div className="about-us-section">
        <Link to="/about-us" className="about-us-link">About Us</Link>
      </div>
    </header>
  );
};

export default Header;
