💊 CMED Hospital Management System
<div align="center">
A complete full-stack hospital management solution with React frontend and Spring Boot backend
</div>

📖 Table of Contents
🌟 Overview
🚀 Features
🛠️ Tech Stack
📁 Project Structure
📦 Installation
🎯 Usage Guide
🔗 API Endpoints
📊 Database Schema
👨‍💻 Developer
📄 License
🙏 Acknowledgments

🌟 Overview
CMED Hospital Management System is a modern full-stack web application designed to digitalize hospital operations. It features a React.js frontend with a Spring Boot backend, providing a seamless experience for managing patient prescriptions and hospital workflows.

🎯 Key Benefits
⚡ Real-time prescription management
🔒 Secure JWT-based authentication
📱 Responsive design for all devices
📊 Advanced analytics and reporting
🏥 Professional healthcare interface

🚀 Features
🔐 Authentication & Security
✅ JWT Token-based Authentication
✅ Role-based Access Control (Doctor/Admin)
✅ Secure Password Encryption (BCrypt)
✅ Session Management
✅ Protected API Routes

💊 Prescription Management
✅ Digital Prescription Creation
✅ Patient Record Management
✅ Prescription History Tracking
✅ Search & Filter Functionality
✅ Bulk Operations Support

📈 Analytics & Dashboard
✅ Real-time Prescription Analytics
✅ Day-wise Statistics
✅ Peak Hours Identification
✅ Visual Data Representation
✅ Export Reports

🎨 User Experience
✅ Responsive React Components
✅ Modern Bootstrap UI
✅ Interactive Dashboard
✅ Mobile-Friendly Design
✅ Professional Healthcare Theme

🛠️ Tech Stack
🖥️ Backend Technologies
Technology	Version	Purpose
Java	17	Main Programming Language
Spring Boot	3.5.7	Application Framework
Spring Security	6.5.6	Authentication & Authorization
Spring Data JPA	3.5.7	Database Operations
JWT	0.11.5	Token-based Authentication
H2 Database	2.3.232	In-memory Database
Maven	3.6+	Dependency Management

💻 Frontend Technologies
Technology	Version	Purpose
React.js	18	Frontend Library
Axios	1.6+	HTTP Client
React Router DOM	6.8+	Client-side Routing
Bootstrap	5.3+	UI Framework
CSS3	-	Custom Styling
JavaScript ES6+	-	Client-side Logic

🛠️ Development Tools
Tool	Purpose
IntelliJ IDEA	Backend Development
VS Code	Frontend Development
Postman	API Testing
Git & GitHub	Version Control
H2 Console	Database Management

📁 Project Structure
cmed_assignmennt-react-spring-boot/
│
├── 📁 backend/ (Spring Boot Application)
│   ├── 📁 src/main/java/com/cmed/prescription_boot/
│   │   ├── 📁 controller/
│   │   │   ├── AuthController.java          # Authentication APIs
│   │   │   ├── PrescriptionController.java  # Prescription CRUD APIs
│   │   │   └── UserController.java          # User Management APIs
│   │   ├── 📁 service/
│   │   │   ├── UserService.java             # User business logic
│   │   │   └── PrescriptionService.java     # Prescription business logic
│   │   ├── 📁 repository/
│   │   │   ├── UserRepository.java          # User data access
│   │   │   └── PrescriptionRepository.java  # Prescription data access
│   │   ├── 📁 model/
│   │   │   ├── User.java                    # User entity
│   │   │   └── Prescription.java            # Prescription entity
│   │   ├── 📁 config/
│   │   │   ├── SecurityConfig.java          # Security configuration
│   │   │   ├── JwtTokenProvider.java        # JWT utilities
│   │   │   └── JwtAuthenticationFilter.java # JWT filter
│   │   └── PrescriptionBootApplication.java # Main application class
│   ├── 📁 src/main/resources/
│   │   ├── application.properties           # Application configuration
│   │   └── data.sql                         # Initial data setup
│   └── pom.xml                             # Maven dependencies
│
└── 📁 frontend/ (React.js Application)
    ├── 📁 src/
    │   ├── 📁 components/
    │   │   ├── Login.js                     # Login component
    │   │   ├── Register.js                  # Registration component
    │   │   ├── Dashboard.js                 # Main dashboard
    │   │   ├── PrescriptionList.js          # Prescription listing
    │   │   ├── PrescriptionForm.js          # Add/Edit prescription
    │   │   └── Analytics.js                 # Analytics component
    │   ├── 📁 services/
    │   │   ├── api.js                       # API configuration
    │   │   ├── authService.js               # Authentication services
    │   │   └── prescriptionService.js       # Prescription services
    │   ├── 📁 utils/
    │   │   ├── auth.js                      # Authentication utilities
    │   │   └── constants.js                 # Application constants
    │   ├── 📁 styles/
    │   │   └── App.css                      # Global styles
    │   ├── App.js                           # Main App component
    │   └── index.js                         # Application entry point
    ├── public/
    │   └── index.html                       # HTML template
    └── package.json                         # NPM dependencies

    
📦 Installation
✅ Prerequisites Checklist
Java 17 or higher installed
Node.js 16 or higher installed
Maven 3.6+ installed
Git installed
Modern web browser

⚙️ Step-by-Step Setup
1️⃣ Clone Repository

bash
git clone https://github.com/amanullah435islam/cmed_assignmennt-react-spring-boot.git
cd cmed_assignmennt-react-spring-boot
2️⃣ Backend Setup
bash
# Navigate to backend directory
cd backend

# Build the project
mvn clean install

# Run Spring Boot application
mvn spring-boot:run
Backend will start at: http://localhost:8080

3️⃣ Frontend Setup
bash
# Open new terminal and navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start React development server
npm start
Frontend will start at: http://localhost:3000

4️⃣ Verify Installation
✅ Backend: Visit http://localhost:8080/api/auth/test

✅ Frontend: Visit http://localhost:3000

✅ H2 Console: http://localhost:8080/h2-console

🗂️ Default Access
Service	URL	Credentials
React Frontend	http://localhost:3000	Register new account
Spring Boot API	http://localhost:8080	-
H2 Database Console	http://localhost:8080/h2-console	JDBC URL: jdbc:h2:mem:prescriptiondb
Username: sa
Password: (empty)
🎯 Usage Guide
👤 For Medical Staff
1️⃣ Account Registration

json
{
  "username": "doctor1",
  "password": "securepassword",
  "name": "Dr. John Smith",
  "userRole": "DOCTOR"
}

2️⃣ Login to System
Navigate to http://localhost:3000/login
Enter credentials
Receive JWT token for API access

3️⃣ Manage Prescriptions
Create: Fill prescription form with patient details
View: Browse all prescriptions with search/filter
Edit: Update existing prescription records
Delete: Remove outdated prescriptions

4️⃣ View Analytics
Access dashboard for real-time statistics
View day-wise prescription trends
Identify peak operational hours

📝 Prescription Form Fields
Field	Type	Required	Description
Patient Name	Text	✅	Full name of the patient
Age	Number	✅	Patient's age
Gender	Dropdown	✅	Male/Female/Other
Prescription Date	Date	✅	Date of prescription
Diagnosis	Textarea	❌	Medical diagnosis details
Medicines	Textarea	❌	Prescribed medications
Next Visit Date	Date	❌	Follow-up appointment date


🔗 API Endpoints
🔐 Authentication Endpoints
Method	Endpoint	Description	Request Body
POST	/api/auth/register	User registration	{username, password, name, userRole}
POST	/api/auth/login	User login	{username, password}
POST	/api/auth/logout	User logout	-
GET	/api/auth/validate	Validate token	-

💊 Prescription Endpoints
Method	Endpoint	Description	Parameters
GET	/api/prescriptions	Get all prescriptions	page, size, sort
GET	/api/prescriptions/{id}	Get prescription by ID	id
POST	/api/prescriptions	Create new prescription	Prescription object
PUT	/api/prescriptions/{id}	Update prescription	id, Prescription object
DELETE	/api/prescriptions/{id}	Delete prescription	id
GET	/api/prescriptions/search	Search prescriptions	query, date

📊 Analytics Endpoints
Method	Endpoint	Description	Parameters
GET	/api/analytics/daily	Daily prescription stats	startDate, endDate
GET	/api/analytics/monthly	Monthly analytics	year, month
GET	/api/analytics/peak-hours	Busiest hours analysis	date

📊 Database Schema
👥 Users Table
sql
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    user_role VARCHAR(50) NOT NULL DEFAULT 'USER',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

💊 Prescriptions Table
sql
CREATE TABLE prescriptions (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    prescription_date DATE NOT NULL,
    patient_name VARCHAR(255) NOT NULL,
    patient_age INTEGER NOT NULL,
    patient_gender VARCHAR(10) NOT NULL,
    diagnosis TEXT,
    medicines TEXT,
    next_visit_date DATE,
    created_by BIGINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES users(id)
);

📈 Sample Data
sql
-- Default users
INSERT INTO users (name, username, password, user_role) VALUES 
('Dr. Amanullah Islam', 'doctor1', '$2a$10$encrypted', 'DOCTOR'),
('Admin User', 'admin', '$2a$10$encrypted', 'ADMIN');

-- Sample prescriptions
INSERT INTO prescriptions (prescription_date, patient_name, patient_age, patient_gender, diagnosis, medicines, next_visit_date) VALUES
('2024-11-13', 'John Doe', 35, 'Male', 'Common Cold', 'Paracetamol 500mg', '2024-11-20'),
('2024-11-13', 'Jane Smith', 28, 'Female', 'Headache', 'Ibuprofen 400mg', '2024-11-27');

👨‍💻 Developer
<div align="center">
🎓 Amanullah Islam
💻 Full Stack Java Developer
📧 Email: aman435islam@gmail.com
🔗 GitHub: @amanullah435islam
💼 Portfolio: [Your Portfolio Link]
Skills: Java, Spring Boot, React.js, MySQL, REST APIs, JWT, Bootstrap
</div>

🤝 Contributing
We welcome contributions from the community! Here's how you can help:

🐛 Reporting Issues
Check existing issues first
Create a new issue with:
Detailed description
Steps to reproduce
Expected vs actual behavior
Screenshots (if applicable)

💡 Feature Requests
Open an issue with "[FEATURE]" prefix
Describe the proposed feature
Explain the benefits and use cases

🔧 Development Contribution
Fork the repository
Create a feature branch:

bash
git checkout -b feature/AmazingFeature
Commit your changes:

bash
git commit -m "Add AmazingFeature"
Push to the branch:

bash
git push origin feature/AmazingFeature
Open a Pull Request

📝 Code Guidelines
Follow Java and React best practices
Write meaningful commit messages
Add comments for complex logic
Update documentation accordingly
Test thoroughly before submitting

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
text
MIT License
Copyright (c) 2024 Amanullah Islam

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

🙏 Acknowledgments
<div align="center">
🎯 Special Thanks To:
Contributor	Contribution
Spring Boot Team	Excellent framework and documentation
React Community	Amazing components and ecosystem
H2 Database Team	Lightweight in-memory database
Bootstrap Team	Responsive UI components
Medical Professionals	Real-world insights and feedback
IsDB-BISEW	IT Scholarship Programme support
    
</div>
📞 Support & Contact
<div align="center">
🚨 Need Help?
📧 Email: aman435islam@gmail.com
💬 GitHub Issues: Create Issue
🔧 Documentation: Check this README first
🌟 Found this project useful?
Please consider giving it a ⭐ Star on GitHub!
    
</div>
<div align="center">
🚀 Happy Coding! 🚀
Built with ❤️ using Spring Boot & React.js
⭐ Don't forget to star this repository if you find it helpful!
</div>
