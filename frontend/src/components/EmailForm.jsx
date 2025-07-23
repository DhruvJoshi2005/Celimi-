import React, { useState } from "react";
import "./EmailForm.css";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    // Add a small delay to show the loading animation
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
      const response = await fetch("http://localhost:8000/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("✨ Successfully subscribed! Welcome aboard!");
        setEmail("");
        
        // Auto-clear success message after 3 seconds
        setTimeout(() => setStatus(""), 3000);
      } else {
        setStatus("⚠️ Oops! Something went wrong. Please try again.");
        
        // Auto-clear error message after 5 seconds
        setTimeout(() => setStatus(""), 5000);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("🔌 Connection error. Please check your internet and try again.");
      
      // Auto-clear error message after 5 seconds
      setTimeout(() => setStatus(""), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`email-form ${isLoading ? 'loading' : ''}`}>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "" : "Get Notified"}
        </button>
      </form>
      {status && (
        <div className="status-message" style={{ 
          marginTop: "15px", 
          textAlign: "center",
          color: status.includes('✨') ? '#4ade80' : 
                 status.includes('⚠️') || status.includes('🔌') ? '#f87171' : 'white'
        }}>
          {status}
        </div>
      )}
    </div>
  );
};

export default EmailForm;