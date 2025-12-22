import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* Base mobile-friendly styles */
  * {
    box-sizing: border-box;
  }
  
  html {
    font-size: 16px;
    
    @media (max-width: 768px) {
      font-size: 14px; // Slightly reduced base font size for mobile
    }
    
    @media (max-width: 480px) {
      font-size: 13px; // Further reduced base font size for very small screens
    }
  }
  
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden; // Prevent horizontal scrolling on mobile
  }
  
  /* Touch-friendly improvements for mobile */
  button, a, input, select, textarea {
    @media (max-width: 768px) {
      min-height: 44px; // Minimum touch target size
      min-width: 44px; // Minimum touch target size
    }
  }
  
  /* Modern Card Hover Effects */
  .modern-card {
    background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
    border: 1px solid #B9E5E8;
    border-radius: 16px;
    padding: 24px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  .modern-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #7AB2D3, #4A628A, #B9E5E8);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  .modern-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(122, 178, 211, 0.2);
    border-color: #7AB2D3;
  }

  .modern-card:hover::before {
    transform: scaleX(1);
  }

  /* Glassmorphism Card */
  .glass-card {
    background: rgba(223, 242, 235, 0.8);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(185, 229, 232, 0.3);
    border-radius: 20px;
    padding: 24px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .glass-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(185, 229, 232, 0.4), transparent);
    transition: left 0.5s;
  }

  .glass-card:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 25px 50px rgba(122, 178, 211, 0.2);
    border-color: rgba(122, 178, 211, 0.5);
  }

  .glass-card:hover::before {
    left: 100%;
  }

  /* Timeline Card */
  .timeline-card {
    background: #ffffff;
    border-left: 4px solid #7AB2D3;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 16px;
    transition: all 0.3s ease;
    position: relative;
    box-shadow: 0 4px 6px rgba(122, 178, 211, 0.1);
  }

  .timeline-card::before {
    content: '';
    position: absolute;
    left: -8px;
    top: 24px;
    width: 12px;
    height: 12px;
    background: #7AB2D3;
    border-radius: 50%;
    border: 3px solid #ffffff;
    box-shadow: 0 0 0 3px #7AB2D3;
    transition: all 0.3s ease;
  }

  .timeline-card:hover {
    transform: translateX(8px);
    box-shadow: 0 8px 25px rgba(122, 178, 211, 0.2);
    border-left-color: #4A628A;
  }

  .timeline-card:hover::before {
    background: #4A628A;
    box-shadow: 0 0 0 3px #4A628A, 0 0 20px rgba(74, 98, 138, 0.4);
  }

  /* Publication Card */
  .publication-card {
    background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
    border: 1px solid #B9E5E8;
    border-radius: 16px;
    padding: 24px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .publication-card::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 40px 40px 0;
    border-color: transparent #7AB2D3 transparent transparent;
    opacity: 0;
    transition: all 0.3s ease;
  }

  .publication-card:hover {
    transform: translateY(-6px) rotateX(2deg);
    box-shadow: 0 20px 40px rgba(122, 178, 211, 0.2);
    border-color: #7AB2D3;
  }

  .publication-card:hover::after {
    opacity: 1;
  }

  /* Research Area Card */
  .research-card {
    background: linear-gradient(135deg, #DFF2EB 0%, #B9E5E8 100%);
    border: 2px solid transparent;
    border-radius: 20px;
    padding: 28px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .research-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #7AB2D3, #4A628A);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
  }

  .research-card > * {
    position: relative;
    z-index: 1;
  }

  .research-card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 25px 50px rgba(122, 178, 211, 0.25);
    border-color: #7AB2D3;
  }

  .research-card:hover::before {
    opacity: 0.05;
  }

  /* Dataset Card */
  .dataset-card {
    background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
    border: 1px solid #B9E5E8;
    border-radius: 18px;
    padding: 26px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .dataset-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(122, 178, 211, 0.15), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .dataset-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(122, 178, 211, 0.2);
    border-color: #7AB2D3;
  }

  .dataset-card:hover::before {
    opacity: 1;
  }

  /* Education Card */
  .education-card {
    background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
    border: 1px solid #B9E5E8;
    border-radius: 16px;
    padding: 24px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .education-card::after {
    content: '🎓';
    position: absolute;
    top: 16px;
    right: 16px;
    font-size: 24px;
    opacity: 0.3;
    transition: all 0.3s ease;
  }

  .education-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(122, 178, 211, 0.2);
    border-color: #7AB2D3;
  }

  .education-card:hover::after {
    opacity: 1;
    transform: scale(1.2);
  }

  /* Work Experience Card */
  .work-card {
    background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
    border: 1px solid #B9E5E8;
    border-radius: 16px;
    padding: 24px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .work-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, #7AB2D3, #4A628A);
    transform: scaleY(0);
    transition: transform 0.3s ease;
  }

  .work-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(122, 178, 211, 0.2);
    border-color: #7AB2D3;
  }

  .work-card:hover::before {
    transform: scaleY(1);
  }

  /* Modern Button Styles */
  .modern-button {
    background: linear-gradient(135deg, #7AB2D3, #4A628A);
    color: white;
    border: none;
    border-radius: 12px;
    padding: 12px 24px;
    font-weight: 600;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  .modern-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  .modern-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(122, 178, 211, 0.3);
  }

  .modern-button:hover::before {
    left: 100%;
  }

  /* Floating Animation */
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  .float-animation {
    animation: float 3s ease-in-out infinite;
  }

  /* Pulse Animation */
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }

  .pulse-animation {
    animation: pulse 2s ease-in-out infinite;
  }

  /* Gradient Text */
  .gradient-text {
    background: linear-gradient(135deg, #7AB2D3, #4A628A, #B9E5E8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .modern-card,
    .glass-card,
    .publication-card,
    .research-card,
    .dataset-card,
    .education-card,
    .work-card {
      padding: 16px; // Reduced padding for mobile
      margin-bottom: 12px; // Reduced margin for mobile
      border-radius: 12px; // Reduced border radius for mobile
    }
    
    .modern-button {
      padding: 10px 20px; // Reduced padding for mobile
      font-size: 0.9rem; // Reduced font size for mobile
    }
    
    /* Mobile-specific improvements */
    h1, h2, h3, h4, h5, h6 {
      line-height: 1.2; // Tighter line height for mobile
    }
    
    p {
      line-height: 1.5; // Tighter line height for mobile
    }
    
    /* Disable hover effects on mobile for better performance */
    .modern-card:hover,
    .glass-card:hover,
    .publication-card:hover,
    .research-card:hover,
    .dataset-card:hover,
    .education-card:hover,
    .work-card:hover {
      transform: none;
      box-shadow: 0 4px 6px rgba(122, 178, 211, 0.1);
    }
  }
  
  @media (max-width: 480px) {
    .modern-card,
    .glass-card,
    .publication-card,
    .research-card,
    .dataset-card,
    .education-card,
    .work-card {
      padding: 12px; // Further reduced padding for very small screens
      margin-bottom: 10px; // Further reduced margin for very small screens
      border-radius: 10px; // Further reduced border radius for very small screens
    }
    
    .modern-button {
      padding: 8px 16px; // Further reduced padding for very small screens
      font-size: 0.85rem; // Further reduced font size for very small screens
    }
    
    /* Very small screen improvements */
    h1 {
      font-size: 1.5rem !important; // Force smaller headings
    }
    
    h2 {
      font-size: 1.3rem !important; // Force smaller headings
    }
    
    h3 {
      font-size: 1.1rem !important; // Force smaller headings
    }
  }
  
  /* Landscape orientation adjustments for mobile */
  @media (max-width: 768px) and (orientation: landscape) {
    .modern-card,
    .glass-card,
    .publication-card,
    .research-card,
    .dataset-card,
    .education-card,
    .work-card {
      padding: 14px; // Slightly reduced padding for landscape
    }
  }
`;

export default GlobalStyles; 