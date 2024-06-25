# Water Quality Monitoring (WQM)

## Overview

The Water Quality Monitoring (WQM) platform is designed to raise awareness about the importance of clean water and promote sustainable practices for managing water resources. Our mission is to ensure that everyone has access to safe and clean drinking water, as well as proper sanitation facilities. This project aligns with Sustainable Development Goal 6 (SDG 6), which aims to ensure availability and sustainable management of water and sanitation for all.

## Features

- Information on water quality and common water pollutants

- Methods to protect water resources

- Complaint submission and management system

- Dashboard for administrators to manage and respond to complaints

- Visualization of complaint statuses with a pie chart

## SDG 6 Alignment

The WQM platform supports Sustainable Development Goal 6 (SDG 6) by providing tools and resources to improve water quality and promote sustainable water monitoring practices. Through our complaint management system, we address water quality issues promptly, contributing to the goal of ensuring availability and sustainable management of water and sanitation for all.

## System Thinking

We applied systems thinking to analyze the intricate interactions involved in water quality monitoring. Breaking down the problem into smaller components enabled us to pinpoint crucial areas where intervention and enhancement were needed.

### Causal Map
![Causal Map](https://github.com/Cap26803/Water-Quality-Monitoring/assets/105357505/e5f1effa-380c-4cf7-a807-807c8b146a3c)

### Behaviour Over Time (BoT)
![Behaviour Over Time](https://github.com/Cap26803/Water-Quality-Monitoring/assets/105357505/c91e77ab-b31e-4870-943e-bb53ef092753)

### Feedback Loops
![Feedback Loop 1](https://github.com/Cap26803/Water-Quality-Monitoring/assets/105357505/d294e465-0678-4b65-8937-41e76b930d11)
![Feedback Loop 2](https://github.com/Cap26803/Water-Quality-Monitoring/assets/105357505/5f5c27a0-337f-49f3-9b46-0fa20e7765b7)

## Implementation Details

### Implementation Platform

- **Frontend:** 
  - **React.js** is used for building the user interface of the platform. It provides a component-based architecture that enhances the development of interactive and dynamic web applications.

- **Backend:** 
  - **Spring Boot** is used for creating the backend services. It simplifies the development of production-ready applications with its embedded server and wide range of libraries.

- **Database:** 
  - **MySQL** is utilized for managing and storing data. It is a reliable relational database management system that ensures data integrity and supports complex queries.

### Programming Languages

- **JavaScript:** 
  - Used for developing the frontend application with React.js.

- **Java:** 
  - Employed for developing the backend services using Spring Boot.

- **SQL:** 
  - Used for querying and managing data in MySQL.

### Packages and Libraries

#### Frontend

- **React.js:** A JavaScript library for building user interfaces.
- **Axios:** A promise-based HTTP client for making HTTP requests.
- **@fortawesome/fontawesome-free:** A library for incorporating Font Awesome icons.
- **Chart.js:** A library for creating responsive charts and graphs.
- **react-chartjs-2:** A React wrapper for Chart.js to create charts in React components.

#### Backend

- **Spring Boot:** A framework for building Java-based web applications with built-in support for embedded servers and RESTful services.
- **Spring Data JPA:** Provides APIs and implementations for data access.
- **Spring Web:** Provides features to build web applications, including RESTful applications using Spring MVC.
- **MySQL Connector/JDBC:** A driver that enables Java applications to communicate with MySQL databases.

## Setup Instructions

### Prerequisites

- Node.js

- npm (Node Package Manager)

### Installation

1\. Clone the repository:

   ```sh

   git clone https://github.com/Cap26803/Water-Quality-Monitoring.git

   cd wqm-platform

   ```

2\. Install dependencies:

   ```sh

   npm install

   ```

### Running the Project

1\. Start the development server:

   ```sh

   npm start

   ```

2\. Open your browser and navigate to:

   ```

   http://localhost:3000

   ```

### Backend Setup

The backend is required to manage the complaints. Ensure you have the backend server running on `http://localhost:8081`.


## Contribution Guidelines

We welcome contributions from the community. If you have suggestions or bug reports, please create an issue or submit a pull request.

### Steps to Contribute

1\. Fork the repository

2\. Create a new branch (`git checkout -b feature-branch`)

3\. Make your changes

4\. Commit your changes (`git commit -m 'Add some feature'`)

5\. Push to the branch (`git push origin feature-branch`)

6\. Open a pull request

Thank you for supporting the Water Quality Monitoring platform and our mission to promote clean water and sustainable development!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
