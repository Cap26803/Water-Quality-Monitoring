import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const styles = {
  pageContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '89vh',
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Glass background effect
    position: 'relative', // Make the container position relative for absolute positioning of child elements
  },
  contentContainer: {
    zIndex: 1, // Ensure the content is above the background
    textAlign: 'center',
    color: '#fff', // Text color
    maxWidth: '600px', // Limit content width for better readability
  },
  welcomeText: {
    fontSize: '50px',
    fontWeight: 'bold',
    color: '#000', // Text color
    textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)', // Add shadow to the text
    opacity: 0, // Initially set opacity to 0
    transform: 'scale(0.9)', // Initially set scale to 0.9
    transition: 'opacity 0.5s ease, transform 0.5s ease', // Add transition effect
    marginBottom: '20px', // Add spacing between "Welcome Back" section and additional content
  },
  infoText: {
    fontSize: '20px',
    lineHeight: '1.5', // Increase line height for better readability
    marginBottom: '20px', // Add spacing between lines
    color: '#000'
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    margin: '0 10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
    textDecoration: 'none', // Remove default button underline
  },
};

function Home() {
  const [showWelcomeText, setShowWelcomeText] = useState(false);

  useEffect(() => {
    // Delay showing the "Welcome Back" text for a smoother animation
    setTimeout(() => {
      setShowWelcomeText(true);
    }, 500);
  }, []);

  return (
    <div style={styles.pageContent}>
      <div style={styles.contentContainer}>
        <h1 style={{ ...styles.welcomeText, opacity: showWelcomeText ? 1 : 0, transform: showWelcomeText ? 'scale(1)' : 'scale(0.9)' }}>Welcome Back</h1>
        <p style={styles.infoText}>
          We're here to help you make a difference. Whether it's reporting a leak or learning how to conserve water, our platform is designed to empower you to take action.
        </p>
        <div style={styles.buttonsContainer}>
          <Link to="/complaint" style={{ textDecoration: 'none' }}>
            <button style={styles.button}>Raise a Complaint</button>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <button style={styles.button}>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
