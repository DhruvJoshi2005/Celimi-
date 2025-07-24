import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import EmailForm from "./components/EmailForm";
import Footer from "./components/Footer";
import WaveLines from "./components/wavelines";
import logoImage from "./assets/logo_smalltext.png";
import aiLensImage from "./assets/ai_lens2.png";
import AboutUs from "./pages/AboutUs"; // ✅ Add this

import "./App.css";

function HomePage() {
  return (
    <>
      <WaveLines />
      <AnnouncementBar />
      <Header />

      <main className="main-content hero-aligned">
        <h1 className="brand-title">Coming Soon</h1>

        <img
          src={logoImage}
          alt="Celimi Logo"
          className="hero-logo"
        />

        <p className="tagline">Style Meets Comfort</p>

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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
