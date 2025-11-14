🏥 Hospital Management System
A comprehensive full-stack hospital management system built with React.js frontend and Spring Boot backend. This application digitalizes the entire prescription workflow with secure authentication and real-time analytics.

✨ Features
🔐 Authentication & Security
JWT-based secure authentication
Role-based access control (Doctor/Admin)
Password encryption with BCrypt
Secure API endpoints

💊 Prescription Management
Digital prescription creation & management
Patient record management
Medicine inventory tracking
Prescription history

📊 Analytics & Reporting
Real-time prescription analytics
Day-wise prescription statistics
Patient visit trends
Export reports functionality

🎨 User Experience
Responsive design for all devices
Intuitive doctor dashboard
Real-time notifications
Dark/Light theme support

🛠️ Tech Stack
Backend

Framework: Spring Boot 3.5.7
Language: Java 17
Security: Spring Security 6.5.6 + JWT
Database: H2 (Development), MySQL (Production)
ORM: Spring Data JPA + Hibernate
Build Tool: Maven

Frontend

Library: React.js 18
HTTP Client: Axios
UI Framework: Bootstrap 5 + Custom CSS
State Management: React Hooks
Routing: React Router DOM
Development Tools
IDE: IntelliJ IDEA, VS Code
API Testing: Postman
Version Control: Git & GitHub
Database Console: H2 Console

🗂️ Project Structure

cmed_assignmennt-react-spring-boot/
│
├── backend/ (Spring Boot)
│   ├── src/main/java/com/cmed/
│   │   ├── controller/     # REST APIs
│   │   ├── service/        # Business logic
│   │   ├── repository/     # Data access layer
│   │   ├── model/          # Entity classes
│   │   ├── config/         # Security & JWT config
│   │   └── PrescriptionBootApplication.java
│   ├── src/main/resources/
│   │   ├── application.properties
│   │   └── data.sql        # Initial data
│   └── pom.xml
│
└── frontend/ (React.js)
    ├── src/
    │   ├── components/     # React components
    │   ├── pages/          # Page components
    │   ├── services/       # API services
    │   ├── utils/          # Utilities & config
    │   └── App.js
    ├── public/
    └── package.json

  
🚀 Quick Start
Prerequisites

Java 17 or higher
Node.js 16 or higher
Maven 3.6+
MySQL (for production)

Backend Setup
Clone the repository
bash
git clone https://github.com/amanullah435islam/cmed_assignmennt-react-spring-boot.git
cd cmed_assignmennt-react-spring-boot/backend
Configure database (Update application.properties)

properties
spring.datasource.url=jdbc:mysql://localhost:3306/hospital_db
spring.datasource.username=your_username
spring.datasource.password=your_password
Run the application

bash
mvn clean install
mvn spring-boot:run
Backend will start at: http://localhost:8080

Frontend Setup
Navigate to frontend directory

bash
cd ../frontend
Install dependencies

bash
npm install
Start development server

bash
npm start
Frontend will start at: http://localhost:3000

📡 API Endpoints
Authentication
Method	Endpoint	Description
POST	/api/auth/register	User registration
POST	/api/auth/login	User login
POST	/api/auth/logout	User logout

Prescription Management
Method	Endpoint	Description
GET	/api/prescriptions	Get all prescriptions
POST	/api/prescriptions	Create new prescription
GET	/api/prescriptions/{id}	Get prescription by ID
PUT	/api/prescriptions/{id}	Update prescription
DELETE	/api/prescriptions/{id}	Delete prescription

Analytics
Method	Endpoint	Description
GET	/api/analytics/daily	Daily prescription stats
GET	/api/analytics/monthly	Monthly analytics

🔧 Configuration
Backend Configuration (application.properties)
properties
# Server Configuration
server.port=8080

# JWT Configuration
app.jwt.secret=your-jwt-secret-key
app.jwt.expiration=86400000

# H2 Database (Development)
spring.datasource.url=jdbc:h2:mem:hospitaldb
spring.datasource.username=sa
spring.datasource.password=

# JPA Configuration
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
Frontend Configuration
Create .env file in frontend directory:

env
REACT_APP_API_BASE_URL=http://localhost:8080/api
REACT_APP_APP_NAME=Hospital Management System
👥 Default Users
After starting the application, these users are available:

Doctor Account:
Username: doctor1
Password: password
Role: DOCTOR

Admin Account:
Username: admin
Password: admin123
Role: ADMIN

📊 Database Schema
Users Table
sql
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    user_role VARCHAR(50) NOT NULL
);

Prescriptions Table
sql
CREATE TABLE prescriptions (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    patient_name VARCHAR(255) NOT NULL,
    patient_age INT NOT NULL,
    patient_gender VARCHAR(10) NOT NULL,
    diagnosis TEXT NOT NULL,
    medicines TEXT NOT NULL,
    prescription_date DATE NOT NULL,
    next_visit_date DATE
);

🐛 Troubleshooting
Common Issues
Port already in use

bash
# Change port in application.properties
server.port=8081
Database connection error
Check MySQL service is running
Verify database credentials
CORS issues
Ensure backend CORS is configured
Check frontend API base URL
JWT errors
Verify JWT secret in properties
Check token expiration time

🤝 Contributing
We welcome contributions! Please follow these steps:
Fork the repository
Create a feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request
Development Guidelines
Follow Java and React best practices
Write meaningful commit messages
Add tests for new features
Update documentation accordingly

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

👨‍💻 Developer
Amanullah Islam
GitHub: @amanullah435islam
Email: aman435islam@gmail.com

🙏 Acknowledgments
Spring Boot team for excellent documentation
React community for awesome components
IsDB-BISEW for IT scholarship program
All contributors and testers
⭐ Star this repository if you find it helpful!

📞 Support
If you have any questions or need help, please:
Check the Issues page
Create a new issue with detailed description
Contact via email: aman435islam@gmail.com

<div align="center">
🚀 Happy Coding! 🚀
Built with ❤️ using Spring Boot & React.js
</div>
