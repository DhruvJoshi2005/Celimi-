import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from '../assets/celimi.png';
// Import the social media icons
import instagramIcon from '../assets/black_insta.png';
import facebookIcon from '../assets/Facebook_Symbol_1.png';
import youtubeIcon from '../assets/black_yt.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Entrance animation trigger
    const timer = setTimeout(() => setIsVisible(true), 100);

    // Scroll event listener for dynamic header effects
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Social media links with analytics tracking
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
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isVisible ? 'visible' : ''}`}>
      <div className="logo-section">
        <img 
          src={logo} 
          alt="Celimi Logo" 
          className="logo"
          onLoad={() => console.log('Logo loaded successfully')}
        />
      </div>
      
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
    </header>
  );
};

export default Header;