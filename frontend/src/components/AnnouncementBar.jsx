import React, { useState, useEffect } from "react";
import "./AnnouncementBar.css";

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const messages = [
    "Coming Soon!!! Get Ready for Something Amazing!",
    "Coming Soon!!! Stay Tuned for Exciting Updates!",
    "Coming Soon!!! Big Things Are Coming Your Way!",
    "Coming Soon!!! Don't Miss Out on What's Next!",
    "Coming Soon!!! Get Ready for Something Amazing!",
    "Coming Soon!!! Stay Tuned for Exciting Updates!",
    "Coming Soon!!! Big Things Are Coming Your Way!",
    "Coming Soon!!! Don't Miss Out on What's Next!",
    "Coming Soon!!! Get Ready for Something Amazing!",
    "Coming Soon!!! Stay Tuned for Exciting Updates!",
    "Coming Soon!!! Big Things Are Coming Your Way!",
    "Coming Soon!!! Don't Miss Out on What's Next!",
    "Coming Soon!!! Get Ready for Something Amazing!",
    "Coming Soon!!! Stay Tuned for Exciting Updates!",
    "Coming Soon!!! Big Things Are Coming Your Way!",
    "Coming Soon!!! Don't Miss Out on What's Next!",
    "Coming Soon!!! Get Ready for Something Amazing!",
    "Coming Soon!!! Stay Tuned for Exciting Updates!",
    "Coming Soon!!! Big Things Are Coming Your Way!",
    "Coming Soon!!! Don't Miss Out on What's Next!"
  ];
  
  const [currentMessage, setCurrentMessage] = useState(0);
  
  useEffect(() => {
    // Entrance animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    // Message rotation
    const messageTimer = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 5000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(messageTimer);
    };
  }, );

  const repeatedMessage = Array(8).fill(messages[currentMessage]).join("   •   ");

  return (
    <div className={`announcement-bar ${isVisible ? 'visible' : ''}`}>
      <p className="announcement-text">
        {repeatedMessage}
      </p>
    </div>
  );
};

export default AnnouncementBar;