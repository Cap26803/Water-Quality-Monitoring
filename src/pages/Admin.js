import React, { useState } from 'react';

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
};

function Admin() {
    const [acknowledgements, setAcknowledgements] = useState({});

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

    const complaints = [
        { id: 1, text: 'Complaint 1' },
        { id: 2, text: 'Complaint 2' },
        { id: 3, text: 'Complaint 3' },
    ];

    return (
        <div style={styles.container}>
            <h2>Complaint Dashboard</h2>
            {complaints.map((complaint) => (
                <div key={complaint.id} style={styles.complaintItem}>
                    <p>{complaint.text}</p>
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
