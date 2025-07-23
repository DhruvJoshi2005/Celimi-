import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>HELP & SUPPORT</h4>
        <ul>
          <li>Contact Us</li>
          <li>FAQs</li>
          <li>Shipping Info</li>
          <li>Payment Options</li>
          <li>Warranty</li>
          <li>Return & Exchange Policy</li>
        </ul>
      </div>
      
      <div className="footer-section center">
        <h4>CONTACT US</h4>
        <div className="contact-info">
          <p> info@company.com</p>
          <p> +1 (555) 123-4567</p>
          <p> 123 Main Street, City, State 12345</p>
        </div>
      </div>
      
      <div className="footer-section">
        <h4>INFO</h4>
        <ul>
          <li>About</li>
          <li>Careers</li>
          <li>Press & Media</li>
          <li>Blogs</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;