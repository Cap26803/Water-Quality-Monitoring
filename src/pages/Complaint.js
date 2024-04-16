import React, { useState } from 'react';

const styles = {
  container: {
    maxWidth: '500px',
    margin: '50px auto 0', // Added margin from the top
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
    photo: null,
  });

  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      photo: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic form validation
    if (!formData.name || !formData.address || !formData.zone || !formData.complaintType || !formData.photo) {
      setFormError('Please fill out all fields and attach a photo.');
      return;
    }
    // Handle form submission
    console.log(formData);
    // Reset form and clear error message
    setFormData({
      name: '',
      address: '',
      zone: '',
      complaintType: '',
      photo: null,
    });
    setFormError('Complaint submitted successfully!');
  };

  return (
    <div style={styles.container}>
      <h1>Submit a Complaint</h1> {/* Updated title */}
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
            <option value="East">East</option>
            <option value="West">West</option>
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
          <label style={styles.label}>Attach Photo</label>
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleFileChange}
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
