# 🔐 MERN Authentication System

A complete authentication system built with **Node.js, Express.js, MongoDB, JWT, Nodemailer, HTML, Tailwind CSS, and JavaScript**. The project provides secure user authentication with Email OTP verification, JWT-based login, password reset, and protected routes.

---

## 🚀 Features

* Modern Dashboard UI
* User Profile Dropdown Menu
* Secure Logout
* Responsive Home Page
* Dashboard Statistics Cards
* Recent Activity Section

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* Tailwind CSS
* JavaScript
* Font Awesome

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JWT (JSON Web Token)
* bcrypt

### Email Service

* Nodemailer
* Gmail App Password

---

## 📂 Project Structure

```
mern-authentication/
│
├── backend/
│   ├── connection/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── Routers/
│   ├── app.js
│   └── package.json
│
├── frontend/
│   ├── sign-up.html
│   ├── login.html
│   ├── verifyOTP.html
│   ├── forgot.html
│   ├── newOtpVerify.html
│   ├── newPassword.html
│   └── home.html
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/mern-authentication.git
```

### Move into Project

```bash
cd mern-authentication
```

### Install Dependencies

```bash
npm install
```

### Start MongoDB

Make sure MongoDB is running on:

```
mongodb://localhost:27017/myData
```

### Run Server

```bash
node app.js
```

or

```bash
nodemon app.js
```

Server runs on:

```
http://localhost:8000
```

---

## 🔑 Environment Variables

Create a `.env` file.

```
PORT=8000

MONGO_URI=mongodb://localhost:27017/myData

JWT_SECRET=your_jwt_secret

EMAIL=your_email@gmail.com

EMAIL_PASSWORD=your_gmail_app_password
```

> **Note:** Never upload your Gmail App Password or JWT Secret to GitHub.

---

## 🔄 Authentication Flow

### User Registration

* User enters details
* OTP is generated
* OTP is sent to email
* User verifies OTP
* Account becomes verified

---

### Login

* User enters email & password
* Password is verified using bcrypt
* JWT token is generated
* Token is stored inside an HTTP-only cookie
* User is redirected to the Home page

---

### Forgot Password

* User enters registered email
* New OTP is sent
* OTP is verified
* User sets a new password
* Password is hashed before storing in MongoDB

---

## 📸 Pages

* Modern Sign Up Page
* Login Page
* Email OTP Verification
* Forgot Password
* Reset Password OTP Verification
* Create New Password
* Protected Dashboard (Home)
  * Modern Navigation Bar
  * User Profile Dropdown
  * Logout Functionality
  * Dashboard Overview Cards
  * Recent Activity Section
  * Responsive Design


---

## 🔒 Security Features

* Password hashing with bcrypt
* JWT Authentication
* HTTP Only Cookies
* Protected Routes Middleware
* Email OTP Verification
* MongoDB Validation

---

## 📦 NPM Packages

```bash
express
mongoose
bcrypt
jsonwebtoken
cookie-parser
nodemailer
dotenv
```

---

## 🚀 Future Improvements

* Refresh Tokens
* Google Login
* GitHub OAuth
* User Profile
* Email Verification Link
* Password Strength Meter
* OTP Expiry Timer
* Resend OTP
* Input Validation
* CSRF Protection

---


🌐 Live Demo

🔗 Live Application:
https://your-live-demo-link.com

## 👨‍💻 Author

**Ajmal Hussain**

MERN Stack Developer

GitHub:
https://github.com/ajmal53229

LinkedIn:
https://linkedin.com/in/ajmal-hussain-9284593ba