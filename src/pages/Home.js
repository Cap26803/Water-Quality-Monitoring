import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const styles = {
  pageContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '88vh', // Ensure it covers the full viewport height
    background: 'url(https://wallpapercave.com/wp/5Oi2ZbZ.jpg) center/cover no-repeat', // Background image with URL
    backgroundColor: '#f0f4f8', // Fallback background color
  },
  contentContainer: {
    textAlign: 'center',
    color: '#fff', // Dark text color for contrast
    maxWidth: '600px',
    padding: '40px', // Increased padding for better spacing
    background: 'rgba(0, 0, 0, 0.9)', // White background with 90% opacity
    borderRadius: '12px', // Slightly rounded corners for modern feel
    //boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
    transform: 'translateY(20px)', // Initial state for animation
    opacity: 0, // Initial state for animation
    transition: 'all 0.6s ease-out', // Smooth transition for animation
  },
  contentContainerVisible: {
    transform: 'translateY(0)', // Final state for animation
    opacity: 1, // Final state for animation
  },
  welcomeText: {
    fontSize: '36px',
    fontWeight: '700', // Bold weight for emphasis
    marginBottom: '20px',
    transition: 'color 0.3s ease', // Transition for hover effect
    color: '#007bff', // Blue text color
  },
  infoText: {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '30px',
    color: '#ffffff', // Slightly lighter text for contrast
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px', // Space between buttons
  },
  button: {
    padding: '12px 24px', // Larger padding for touch-friendly buttons
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: '#007bff', // Blue background color
    color: '#fff',
    borderRadius: '8px',
    transition: 'background-color 0.3s ease, transform 0.3s ease', // Smooth hover effect
    textDecoration: 'none',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
    transform: 'translateY(-2px)', // Lift button on hover
  },
  sliderContainer: {
    marginTop: '40px', // Space above the slider
  },
  slide: {
    padding: '20px',
    background: '#e3f2fd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    fontSize: '18px',
    color: '#ffffff',
  },
};

function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  const tips = [
    "Fix leaking taps and pipes.",
    "Use water filters certified to remove specific contaminants.",
    "Store water in clean, sealed containers away from chemicals.",
    "Stay updated on local water quality reports and advisories.",
    "Boil water before drinking or cooking to kill harmful pathogens.",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };


  return (
    <div style={styles.pageContent}>
      <div
        style={{
          ...styles.contentContainer,
          ...(showContent ? styles.contentContainerVisible : {}),
        }}
      >
        <h1
          style={styles.welcomeText}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#0056b3')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#007bff')}
        >
          Water Quality Monitoring
        </h1>
        <p style={styles.infoText}>
          We're here to help you make a difference. Whether it's reporting a leak or learning how to conserve water, our platform is designed to empower you to take action.
        </p>
        <div style={styles.buttonsContainer}>
          <Link to="/complaint" style={{ textDecoration: 'none' }}>
            <button
              style={styles.button}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor;
                e.currentTarget.style.transform = styles.buttonHover.transform;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = styles.button.backgroundColor;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Raise a Complaint
            </button>
          </Link>
        </div>
        <div style={styles.sliderContainer}>
          <Slider {...settings}>
            {tips.map((tip, index) => (
              <div key={index} style={{ ...styles.slide, color: '#fff' }}>
                {tip}
              </div>
            ))}
          </Slider>

        </div>
      </div>
    </div>
  );
}

export default Home;
