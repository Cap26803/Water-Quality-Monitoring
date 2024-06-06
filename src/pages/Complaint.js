import axios from 'axios'; // Import Axios for making HTTP requests
import React, { useState } from 'react';

const styles = {
  container: {
    maxWidth: '500px',
    margin: '50px auto 0',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  formGroup: {
    marginBottom: '25px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
};

function Complaint() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    zone: '',
    complaintType: '',
    phoneNumber: '',
    emailAddress: '',
  });

  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    
    // Basic form validation
    if (!formData.name || !formData.address || !formData.zone || !formData.complaintType) {
      setFormError('Please fill out all fields.');
      return;
    }
    
    try {
      // Log the form data to ensure it's correctly populated
      console.log('Submitting form data:', formData);
    
      // Make POST request to backend
      const response = await axios.post('http://localhost:8081/api/complaints/add', formData);
    
      console.log('Response:', response.data);
    
      // Reset form after successful submission
      setFormData({
        name: '',
        address: '',
        zone: '',
        complaintType: '',
        phoneNumber: '',
        emailAddress: '',
      });
      setFormError('Complaint submitted successfully!');
    } catch (error) {
      console.error('Error submitting complaint:', error.message);
      setFormError('Error submitting complaint. Please try again.');
    }
  };  

  return (
    <div style={styles.container}>
      <h1>Submit a Complaint</h1>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Zone</label>
          <select
            name="zone"
            value={formData.zone}
            onChange={handleChange}
            style={styles.input}
            required
          >
            <option value="">Select Zone</option>
            <option value="North">North</option>
            <option value="South">South</option>
          </select>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Complaint Type</label>
          <select
            name="complaintType"
            value={formData.complaintType}
            onChange={handleChange}
            style={styles.input}
            required
          >
            <option value="">Select Complaint Type</option>
            <option value="Water Leakage">Water Leakage</option>
            <option value="Water Contamination">Water Contamination</option>
            <option value="Low Water Pressure">Low Water Pressure</option>
          </select>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email Address</label>
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        {formError && <p style={{ color: 'red' }}>{formError}</p>}
        <button type="submit" style={styles.button}>Submit Complaint</button>
      </form>
    </div>
  );
}

export default Complaint;