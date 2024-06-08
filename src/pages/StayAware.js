import React from 'react';

const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
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
    sectionTitle: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#007bff',
    },
    content: {
        fontSize: '18px',
        lineHeight: '1.6',
        color: '#555',
        textAlign: 'justify', // Justify text content
    },
    paragraph: {
        marginBottom: '20px', // Add spacing between paragraphs
    },
    sectionSpacing: {
        marginBottom: '40px', // Add space after each section
    },
};

export default function StayAware() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Stay Aware</h1>
            <div style={styles.content}>
                <p style={styles.paragraph}>
                    Water quality is essential for sustaining life and preserving ecosystems. Here are some key points to stay
                    aware of:
                </p>

                <div style={styles.sectionSpacing}></div>

                <h2 style={styles.sectionTitle}>Understanding Water Quality</h2>
                <p style={styles.paragraph}>
                    Water quality refers to the chemical, physical, biological, and radiological characteristics of water. It
                    affects the health of humans, animals, and plants, as well as the overall ecosystem health.
                </p>

                <div style={styles.sectionSpacing}></div>

                <h2 style={styles.sectionTitle}>Common Water Pollutants</h2>
                <p style={styles.paragraph}>
                    Water pollution can arise from various sources, including industrial discharges, agricultural runoff, sewage
                    discharge, and improper waste disposal. Chemicals, heavy metals, pathogens, and nutrients are among the most
                    common pollutants found in water bodies.
                </p>

                <div style={styles.sectionSpacing}></div>

                <h2 style={styles.sectionTitle}>Impact of Water Pollution</h2>
                <p style={styles.paragraph}>
                    Water pollution can have severe consequences, including contamination of drinking water sources, loss of
                    aquatic biodiversity, degradation of ecosystems, and adverse health effects on humans and wildlife.
                </p>

                <div style={styles.sectionSpacing}></div>

                <h2 style={styles.sectionTitle}>Protecting Water Quality</h2>
                <p style={styles.paragraph}>
                    Individuals can take steps to protect water quality, such as conserving water, reducing pollution, properly
                    disposing of waste, and supporting policies and initiatives that promote clean water and sanitation.
                </p>

                <div style={styles.sectionSpacing}></div>

                <h2 style={styles.sectionTitle}>Sustainable Development Goal 6</h2>
                <p style={styles.paragraph}>
                    Sustainable Development Goal 6 (SDG 6) aims to ensure access to clean water and sanitation for all. By
                    addressing water scarcity, water pollution, and inadequate sanitation facilities, SDG 6 seeks to improve
                    health, reduce poverty, and promote sustainable development globally.
                </p>

                <div style={styles.sectionSpacing}></div>

                <h2 style={styles.sectionTitle}>Conclusion</h2>
                <p style={styles.paragraph}>
                    By staying informed and taking action to protect water quality, individuals can contribute to a healthier
                    environment and a more sustainable future for all.
                </p>
            </div>
        </div>
    );
}