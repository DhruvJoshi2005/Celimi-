import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <Header />

      <main className="about-us-content">
        <h1 sty>About Celimi</h1>

        <h2>See the Future One Frame at a Time</h2>
        <p>
          At Celimi, we believe eyewear should do more than protect your eyes.
          It should enhance your life. That’s why we’ve reimagined sunglasses as
          intelligent, stylish companions that combine advanced AI technology
          with everyday functionality.
        </p>  
        <p>
          Our AI-powered sunglasses offer features like real-time navigation,
          voice assistance, and contextual information—designed to keep you
          connected, informed, and hands-free throughout your day.
        </p>

        <h2>Our Vision</h2>
        <p>
          To redefine eyewear by integrating intelligence, style, and seamless
          connectivity into a single wearable experience.
        </p>

        <h2>What Makes Celimi Unique</h2>

        <h3>AI Integration</h3>
        <p>
          Smart voice commands, real-time updates, and intelligent assistance on the go.
        </p>

        <h3>Design-Driven</h3>
        <p>
          Sleek, lightweight frames built for everyday wear, combining technology with fashion.
        </p>

        <h3>Effortless Connectivity</h3>
        <p>
          Connect to your devices smoothly and stay in control without looking at a screen.
        </p>

        <h2>Why We Created Celimi</h2>
        <p>
          We imagined a world where wearable technology is elegant, intuitive, and truly useful.
          Celimi brings that vision to life with a perfect blend of innovation and style
          that fits naturally into your lifestyle.
        </p>
      </main>

      <Footer />
    </>
  );
};

export default AboutUs;
