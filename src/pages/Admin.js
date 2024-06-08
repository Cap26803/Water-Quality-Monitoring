import axios from 'axios'; // Import Axios for making HTTP requests
import React, { useEffect, useState } from 'react';

const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    complaintItem: {
        marginBottom: '20px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    buttonContainer: {
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'center',
    },
    button: {
        margin: '0 10px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '4px',
    },
    acceptButton: {
        backgroundColor: 'green',
        color: '#fff',
    },
    rejectButton: {
        backgroundColor: 'red',
        color: '#fff',
    },
    acknowledgement: {
        marginTop: '10px',
        textAlign: 'center',
    },
    complaintType: {
        fontWeight: 'bold',
        marginBottom: '10px',
    },
};

function Admin() {
    const [complaints, setComplaints] = useState([]);
    const [acknowledgements, setAcknowledgements] = useState({});

    useEffect(() => {
        // Fetch complaints from the backend
        const fetchComplaints = async () => {
            try {
                const response = await axios.get('http://localhost:8081/api/complaints/getAll');
                setComplaints(response.data);
            } catch (error) {
                console.error('Error fetching complaints:', error);
            }
        };

        fetchComplaints();
    }, []);

    const handleAccept = (id) => {
        // Handle accept action
        setAcknowledgements({
            ...acknowledgements,
            [id]: `Complaint with ID ${id} accepted`,
        });
        console.log(`Complaint with ID ${id} accepted`);
    };

    const handleReject = (id) => {
        // Handle reject action
        setAcknowledgements({
            ...acknowledgements,
            [id]: `Complaint with ID ${id} rejected`,
        });
        console.log(`Complaint with ID ${id} rejected`);
    };

    return (
        <div style={styles.container}>
            <h2>Complaint Dashboard</h2>
            {complaints.map((complaint) => (
                <div key={complaint.id} style={styles.complaintItem}>
                    <p style={styles.complaintType}>{complaint.complaintType}</p>
                    <p>Name: {complaint.name}</p>
                    <p>Address: {complaint.address}</p>
                    <p>Zone: {complaint.zone}</p>
                    <p>Phone Number: {complaint.phoneNumber}</p>
                    <p>Email Address: {complaint.emailAddress}</p>
                    <div style={styles.buttonContainer}>
                        <button
                            style={{ ...styles.button, ...styles.acceptButton }}
                            onClick={() => handleAccept(complaint.id)}
                        >
                            Accept
                        </button>
                        <button
                            style={{ ...styles.button, ...styles.rejectButton }}
                            onClick={() => handleReject(complaint.id)}
                        >
                            Reject
                        </button>
                    </div>
                    {acknowledgements[complaint.id] && (
                        <p style={styles.acknowledgement}>
                            {acknowledgements[complaint.id]}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Admin;