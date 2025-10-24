# 📞 My-Contacts-API  
*A secure RESTful API for managing personal and professional contacts.*

---

## 🚀 Overview  
**My-Contacts-API** is a backend RESTful service built to store and manage contact information efficiently.  
Users can register and log in securely, then perform CRUD (Create, Read, Update, Delete) operations on their personal contact list.  
Each user’s data is fully protected, ensuring privacy and secure access control.

---

## 🔧 Features  
- ✅ User registration and login system  
- ✅ JWT authentication for secure API access  
- ✅ CRUD operations on contacts (Create, Read, Update, Delete)  
- ✅ Each user has private, isolated contact data  
- ✅ Validation and error handling middleware  
- ✅ Environment-based configuration using `.env`  
- ✅ Built with Node.js, Express.js, and MongoDB  

---

## 🗂️ Project Structure  
/config # MongoDB connection setup
/controllers # Business logic for users and contacts
/middleware # Authentication and error handlers
/models # Mongoose schemas for users and contacts
/routes # User and contact API routes
/server.js # Entry point for Express app
.env # Environment variables

---

## ⚙️ Getting Started  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/raufkali/My-Contacts-API.git
cd My-Contacts-API
```
2️⃣ Install Dependencies
```bash
Copy code
npm install
```
3️⃣ Configure Environment Variables
```bash
Create a .env file in the project root and add the following:

ini
Copy code
PORT=5000
MONGO_URI=mongodb://localhost:27017/myContacts
JWT_SECRET=your_jwt_secret
```
4️⃣ Start the Server
```bash
Copy code
npm run dev
Server will start on http://localhost:5000
```
🧠 API Endpoints
👤 User Routes

```bash
Copy code
POST   /api/users/register     # Register a new user  
POST   /api/users/login        # Log in existing user  
GET    /api/users/me           # Get current user info (protected)
```
📇 Contact Routes
```bash
Copy code
GET    /api/contacts           # Get all contacts (protected)  
POST   /api/contacts           # Add a new contact (protected)  
GET    /api/contacts/:id       # Get a specific contact (protected)  
PUT    /api/contacts/:id       # Update a contact (protected)  
DELETE /api/contacts/:id       # Delete a contact (protected)
```
🧰 Tech Stack
Backend: Node.js + Express.js
Database: MongoDB (Mongoose ODM)
Authentication: JWT
Environment: dotenv
Version Control: Git & GitHub

🧩 Why I Built It
To strengthen my backend development and REST API design skills
To implement secure JWT-based authentication
To understand CRUD operations and database interaction using Mongoose
To build a modular, real-world backend project for my portfolio

👤 Author
Rauf Ahmad — Computer Science Student & MERN Stack Developer
GitHub: @raufkali
