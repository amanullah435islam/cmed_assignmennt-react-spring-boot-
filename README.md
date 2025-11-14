# 🏥 CMED Hospital Management System

<div align="center">

![Java](https://img.shields.io/badge/Java-17-orange?style=for-the-badge&logo=java)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.5.7-brightgreen?style=for-the-badge&logo=springboot)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![JWT](https://img.shields.io/badge/JWT-Authentication-yellow?style=for-the-badge&logo=jsonwebtokens)

**A complete full-stack hospital management solution with React frontend and Spring Boot backend**

[![GitHub stars](https://img.shields.io/github/stars/amanullah435islam/cmed_assignmennt-react-spring-boot?style=social)](https://github.com/amanullah435islam/cmed_assignmennt-react-spring-boot/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/amanullah435islam/cmed_assignmennt-react-spring-boot?style=social)](https://github.com/amanullah435islam/cmed_assignmennt-react-spring-boot/network/members)
</div>
<br>

<div align="center">
## 🎯 Quick Start
    
bash
# Clone & Setup
git clone https://github.com/amanullah435islam/cmed_assignmennt-react-spring-boot.git
cd cmed_assignmennt-react-spring-boot

# Backend (Spring Boot)
cd backend && mvn spring-boot:run

# Frontend (React) - New Terminal
cd frontend && npm start
📍 Access Points:

Frontend: http://localhost:3000
Backend API: http://localhost:8080
H2 Console: http://localhost:8080/h2-console

</div>
📋 Table of Contents
Section	Description
🌟 Features	Key functionalities
🛠️ Tech Stack	Technologies used
🚀 Installation	Setup guide
📁 Project Structure	Code organization
🔧 API Documentation	Endpoints & usage
💾 Database	Schema & models
👨‍💻 Developer	About the creator
🌟 Features
<div align="center">
    
🔐 Security & Authentication
<div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;"><div style="background: #f8f9fa; padding: 15px; border-radius: 10px; border-left: 4px solid #007bff; width: 280px;"> <h4>🔒 JWT Authentication</h4> <p>Secure token-based authentication system</p> </div><div style="background: #f8f9fa; padding: 15px; border-radius: 10px; border-left: 4px solid #28a745; width: 280px;"> <h4>👥 Role-based Access</h4> <p>Doctor & Admin role management</p> </div><div style="background: #f8f9fa; padding: 15px; border-radius: 10px; border-left: 4px solid #ffc107; width: 280px;"> <h4>🔑 BCrypt Encryption</h4> <p>Secure password hashing</p> </div></div>
    
💊 Prescription Management
<div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;"><div style="background: #f8f9fa; padding: 15px; border-radius: 10px; border-left: 4px solid #17a2b8; width: 280px;"> <h4>📝 Digital Prescriptions</h4> <p>Create and manage patient prescriptions</p> </div><div style="background: #f8f9fa; padding: 15px; border-radius: 10px; border-left: 4px solid #6f42c1; width: 280px;"> <h4>🔍 Search & Filter</h4> <p>Advanced search and filtering options</p> </div><div style="background: #f8f9fa; padding: 15px; border-radius: 10px; border-left: 4px solid #e83e8c; width: 280px;"> <h4>📊 Patient Records</h4> <p>Comprehensive patient history tracking</p> </div></div>

📈 Analytics & Reports
<div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;"><div style="background: #f8f9fa; padding: 15px; border-radius: 10px; border-left: 4px solid #20c997; width: 280px;"> <h4>📅 Daily Statistics</h4> <p>Day-wise prescription analytics</p> </div><div style="background: #f8f9fa; padding: 15px; border-radius: 10px; border-left: 4px solid #fd7e14; width: 280px;"> <h4>📈 Peak Analysis</h4> <p>Identify busiest hours and days</p> </div><div style="background: #f8f9fa; padding: 15px; border-radius: 10px; border-left: 4px solid #6c757d; width: 280px;"> <h4>📊 Visual Reports</h4> <p>Graphical data representation</p> </div></div></div>

🛠️ Tech Stack
<div align="center">
    
🖥️ Backend Stack
Layer	Technology	Version
Framework	Spring Boot	3.5.7
Language	Java	17
Security	Spring Security + JWT	6.5.6
Database	H2 Database	2.3.232
ORM	Spring Data JPA	3.5.7
Build Tool	Maven	3.6+

💻 Frontend Stack
Layer	Technology	Version
Library	React.js	18
HTTP Client	Axios	1.6+
Routing	React Router DOM	6.8+
UI Framework	Bootstrap	5.3+
Styling	CSS3	-

🛠️ Development Tools
Purpose	Tool
Backend IDE	IntelliJ IDEA
Frontend IDE	VS Code
API Testing	Postman
Version Control	Git & GitHub
Database Viewer	H2 Console
</div>

🚀 Installation
<div align="center">
⚡ Quick Setup Guide
    
bash
# 1. Clone repository
git clone https://github.com/amanullah435islam/cmed_assignmennt-react-spring-boot.git
cd cmed_assignmennt-react-spring-boot

# 2. Start Backend (Terminal 1)
cd backend
mvn clean install
mvn spring-boot:run

# 3. Start Frontend (Terminal 2)
cd frontend
npm install
npm start
</div>

📋 Prerequisites
✅ Java 17 or higher
✅ Node.js 16 or higher
✅ Maven 3.6+
✅ Git
✅ Modern Web Browser

🔧 Configuration
Backend Configuration (application.properties):

properties
server.port=8080
spring.datasource.url=jdbc:h2:mem:prescriptiondb
app.jwt.secret=your-jwt-secret-key
app.jwt.expiration=86400000
Frontend Configuration (.env):

env
REACT_APP_API_BASE_URL=http://localhost:8080/api
REACT_APP_APP_NAME=Hospital Management System

📁 Project Structure
cmed_assignmennt-react-spring-boot/
├── 📂 backend/                 # Spring Boot Application
│   ├── src/main/java/com/cmed/
│   │   ├── 🎮 controller/      # REST API Controllers
│   │   ├── 🛠️ service/        # Business Logic
│   │   ├── 💾 repository/     # Data Access Layer
│   │   ├── 📊 model/          # Entity Classes
│   │   └── ⚙️ config/         # Configuration Classes
│   └── pom.xml               # Maven Dependencies
│
└── 📂 frontend/                # React.js Application
    ├── src/
    │   ├── 🧩 components/     # React Components
    │   ├── 🔧 services/       # API Services
    │   ├── 🛠️ utils/         # Utilities
    │   └── 🎨 styles/         # CSS Styles
    └── package.json          # NPM Dependencies
    
🔧 API Documentation
🔐 Authentication Endpoints
Method	Endpoint	Description	Request Body
POST	/api/auth/register	User Registration	{username, password, name, userRole}
POST	/api/auth/login	User Login	{username, password}
POST	/api/auth/logout	User Logout	-

💊 Prescription Endpoints
Method	Endpoint	Description	Parameters
GET	/api/prescriptions	Get All Prescriptions	page, size, sort
POST	/api/prescriptions	Create Prescription	Prescription Object
PUT	/api/prescriptions/{id}	Update Prescription	id, Prescription Object
DELETE	/api/prescriptions/{id}	Delete Prescription	id

📊 Analytics Endpoints
Method	Endpoint	Description
GET	/api/analytics/daily	Daily Statistics
GET	/api/analytics/monthly	Monthly Analytics

💾 Database
🗃️ Database Schema

Users Table:
sql
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    user_role VARCHAR(50) DEFAULT 'USER'
);

Prescriptions Table:
sql
CREATE TABLE prescriptions (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    patient_name VARCHAR(255) NOT NULL,
    patient_age INTEGER NOT NULL,
    patient_gender VARCHAR(10) NOT NULL,
    diagnosis TEXT,
    medicines TEXT,
    prescription_date DATE NOT NULL,
    next_visit_date DATE
);

📊 Sample Data
sql
-- Default Users
INSERT INTO users (username, password, name, user_role) VALUES 
('doctor1', '$2a$10$encrypted', 'Dr. Amanullah', 'DOCTOR');

-- Sample Prescriptions
INSERT INTO prescriptions VALUES
(1, 'John Doe', 35, 'Male', 'Common Cold', 'Paracetamol', '2024-11-13', '2024-11-20');

👨‍💻 Developer
<div align="center">
🎓 Amanullah Islam
💼 Full Stack Java Developer
<div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;"><div style="text-align: center;"> <h4>📧 Email</h4> <p>aman435islam@gmail.com</p> </div><div style="text-align: center;"> <h4>🔗 GitHub</h4> <p>@amanullah435islam</p> </div><div style="text-align: center;"> <h4>💻 Skills</h4> <p>Java • Spring Boot • React • MySQL</p> </div></div></div>

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments
<div align="center">
🎯 Special Thanks
Contributor	Contribution
Spring Boot Team	Excellent Framework
React Community	Amazing Ecosystem
Medical Professionals	Real-world Insights
IsDB-BISEW	Scholarship Support
</div>

<div align="center">
⭐ Support
If you find this project helpful, please give it a star on GitHub!
🚀 Happy Coding!
Built with ❤️ using Spring Boot & React.js
</div>
