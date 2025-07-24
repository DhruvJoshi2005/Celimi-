import React from "react";
import "./Footer.css";
// Import the social media icons
import instagramIcon from '../assets/black_insta.png';
import facebookIcon from '../assets/Facebook_Symbol_1.png';
import youtubeIcon from '../assets/black_yt.png';

const Footer = () => {
  // Social media links
  const socialLinks = [
    {
      href: "https://www.instagram.com/_dhruvjoshi_/",
      icon: instagramIcon,
      alt: "Instagram",
      name: "instagram"
    },
    {
      href: "#",
      icon: facebookIcon,
      alt: "Facebook",
      name: "facebook"
    },
    {
      href: "#",
      icon: youtubeIcon,
      alt: "YouTube",
      name: "youtube"
    }
  ];

  const handleSocialClick = (socialName, href) => {
    // Add click tracking or analytics here if needed
    console.log(`Clicked on ${socialName}`);
    
    // Prevent default for placeholder links
    if (href === "#") {
      return false;
    }
  };

  return (
    <footer className="footer">
      <div className="footer-section center">
        <h4>CONTACT US</h4>
        <div className="contact-info">
          <p> kansightsvision@gmail.com</p>
          <p> +1 (555) 123-4567</p>
          <p> 123 Main Street, City, State 12345</p>
        </div>
      </div>
      
      <div className="footer-section center">
        <h4>FOLLOW US</h4>
        <div className="social-icons">
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.href}
              target={social.href !== "#" ? "_blank" : "_self"}
              rel={social.href !== "#" ? "noopener noreferrer" : ""}
              onClick={() => handleSocialClick(social.name, social.href)}
              aria-label={`Follow us on ${social.alt}`}
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <img 
                src={social.icon} 
                alt={social.alt} 
                className="social-icon"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;