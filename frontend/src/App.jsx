import React from "react";
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import EmailForm from "./components/EmailForm";
import Footer from "./components/Footer";
import WaveLines from "./components/wavelines";
import aiLensImage from "./assets/ai_lens2.png";
import "./App.css";

function App() {
  return (
    <>
      <WaveLines />
      <AnnouncementBar />
      <Header />

      {/* Main Hero Section */}
      <main className="main-content hero-aligned">
        <h1 className="brand-title">Coming Soon</h1>

        {/* Logo (mimicking Tailwind Hero structure) */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/ec7b73e1942488082aabffd4e01bb277db3a2173?width=482"
          alt="Celimi Logo"
          className="hero-logo"
        />

        <p className="tagline">Style Meets Comfort</p>

        {/* Smart Glasses Image */}
        <div className="goggles-container">
          <img
            src={aiLensImage}
            alt="AI Smart Glasses - CELIMI"
            className="goggles-image"
          />
        </div>

        <EmailForm />
      </main>

      <Footer />
    </>
  );
}

export default App;
