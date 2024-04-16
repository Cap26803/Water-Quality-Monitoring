import React from 'react';

const styles = {
  container: {
    maxWidth: '800px',
    margin: '100px auto', // Add margin from top
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  },
  content: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#555',
  },
};

function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Us</h1>
      <div style={styles.content}>
        <p>
          Welcome to the Water Quality Management (WQM) platform! Our mission is to raise awareness about the importance of clean water and promote sustainable practices for managing water resources.
        </p>
        <p>
          At WQM, we believe that access to clean water is a fundamental human right. We work towards ensuring that everyone has access to safe and clean drinking water, as well as proper sanitation facilities.
        </p>
        <p>
          Our platform provides information about water quality, common water pollutants, and ways to protect water resources. We also support initiatives aligned with Sustainable Development Goal 6 (SDG 6), which aims to ensure availability and sustainable management of water and sanitation for all.
        </p>
        <p>
          Thank you for joining us in our mission to promote clean water and sustainable development!
        </p>
      </div>
    </div>
  );
}

export default About;
