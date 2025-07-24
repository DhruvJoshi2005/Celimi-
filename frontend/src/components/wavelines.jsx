import React from 'react';
import './waveLines2.css';

const OrganicWaveLines = () => {
  return (
    <div className="wave-container">
      <svg
        className="wave-svg"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'rgba(255,255,255,0)', stopOpacity: 0 }} />
            <stop offset="10%" style={{ stopColor: 'rgba(255,255,255,0.2)', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: 'rgba(255,255,255,0.8)', stopOpacity: 1 }} />
            <stop offset="90%" style={{ stopColor: 'rgba(255,255,255,0.2)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgba(255,255,255,0)', stopOpacity: 0 }} />
          </linearGradient>
          
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'rgba(245,245,245,0)', stopOpacity: 0 }} />
            <stop offset="15%" style={{ stopColor: 'rgba(245,245,245,0.3)', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: 'rgba(245,245,245,0.6)', stopOpacity: 1 }} />
            <stop offset="85%" style={{ stopColor: 'rgba(245,245,245,0.3)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgba(245,245,245,0)', stopOpacity: 0 }} />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Main flowing wave lines */}
        <g>
          {/* Top flowing bundle */}
          <path
            d="M-100 250 Q150 200 400 280 T800 250 Q1000 230 1300 280"
            fill="none"
            stroke="url(#waveGradient1)"
            strokeWidth="2"
            filter="url(#glow)"
            opacity="0.9"
            className="wave-path-1"
          />

          <path
            d="M-100 260 Q200 210 450 290 T850 260 Q1050 240 1300 290"
            fill="none"
            stroke="url(#waveGradient2)"
            strokeWidth="1.5"
            filter="url(#glow)"
            opacity="0.7"
            className="wave-path-2"
          />

          <path
            d="M-100 270 Q250 220 500 300 T900 270 Q1100 250 1300 300"
            fill="none"
            stroke="url(#waveGradient1)"
            strokeWidth="2"
            filter="url(#glow)"
            opacity="0.8"
            className="wave-path-3"
          />

          {/* Middle intersecting waves */}
          <path
            d="M-100 350 Q300 300 600 400 T1200 350 Q1400 330 1500 380"
            fill="none"
            stroke="url(#waveGradient2)"
            strokeWidth="1.8"
            filter="url(#glow)"
            opacity="0.9"
            className="wave-path-4"
          />

          <path
            d="M-100 380 Q350 330 650 430 T1250 380 Q1450 360 1500 410"
            fill="none"
            stroke="url(#waveGradient1)"
            strokeWidth="2.2"
            filter="url(#glow)"
            opacity="0.6"
            className="wave-path-5"
          />

          {/* Bottom flowing bundle */}
          <path
            d="M-100 480 Q400 430 700 530 T1300 480 Q1500 460 1600 510"
            fill="none"
            stroke="url(#waveGradient2)"
            strokeWidth="1.6"
            filter="url(#glow)"
            opacity="0.8"
            className="wave-path-6"
          />

          <path
            d="M-100 510 Q450 460 750 560 T1350 510 Q1550 490 1600 540"
            fill="none"
            stroke="url(#waveGradient1)"
            strokeWidth="2.4"
            filter="url(#glow)"
            opacity="0.7"
            className="wave-path-7"
          />

          {/* Additional intersecting lines for complexity */}
          <path
            d="M-100 320 Q500 270 800 370 T1400 320 Q1600 300 1700 350"
            fill="none"
            stroke="url(#waveGradient2)"
            strokeWidth="1.4"
            filter="url(#glow)"
            opacity="0.5"
            className="wave-path-8"
          />

          <path
            d="M-100 420 Q550 370 850 470 T1450 420 Q1650 400 1700 450"
            fill="none"
            stroke="url(#waveGradient1)"
            strokeWidth="1.7"
            filter="url(#glow)"
            opacity="0.6"
            className="wave-path-9"
          />
        </g>
      </svg>
    </div>
  );
};

export default OrganicWaveLines;