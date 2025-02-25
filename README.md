# Task Management Application

## Project Overview
Task Management is a web-based application that enables users to add, edit, delete, and reorder tasks using a drag-and-drop interface. Tasks are categorized into three sections: **To-Do, In Progress, and Done**. The platform ensures **real-time synchronization**, allowing seamless task management with instant updates stored in the database.

### 🌐 Live URL
[Task Management Application](https://task-management-f6e55.web.app/)

---

## 🚀 Features

### 🖥️ General Features
- **Fully responsive design** for mobile, tablet, and desktop.
- **Navigation links** to Home, Dashboard, and Logout.
- **User profile display** upon login.

### 🔐 Authentication System
- **Login:** Email/Password-based login & Google Sign-in.
- **Registration:** Name, email, password, and photo URL fields.
- **Error Handling:** Displays relevant messages for login/registration failures.

### 📌 Task Management System
- Users can **add, edit, delete, and reorder tasks**.
- **Task Status:** 
  - To-Do
  - In Progress
  - Done
- **Drag-and-Drop functionality** for easy task movement between categories.

### 🔄 Real-Time Synchronization
- Tasks **maintain their last known order** when refreshed.
- **WebSockets & MongoDB Change Streams** for instant updates.

### 📊 Dashboard
- Displays **all tasks categorized** by status.

### 📝 Task Details
Each task includes:
- **Title:** Max 50 characters.
- **Description & Status.**

### 🎓 Add Tutorials Page *(Private Route)*
- Form to add a tutorial with fields:
  - Name, email, image, language, price, description, and reviews (default: 0).

### ⚡ Additional Features
- **Loading Spinner** during data fetch.
- **404 Error Page** for invalid routes.
- **Dark/Light Mode Toggle** for UI customization.

---

## 🛠️ Tech Stack

### **Frontend**
- React.js
- Tailwind CSS *(with optional UI libraries like Mamba UI, Chakra UI, or ShadCN)*

### **Backend**
- Node.js
- Express.js

### **Database**
- MongoDB

### **Authentication**
- Firebase

### **Deployment**
- **Frontend:** Netlify
- **Backend:** Render

---

## 📋 Deployment Checklist
✅ Ensure server works without **CORS/404/504 errors**.  
✅ Validate the **live URL** is functional across all routes.  
✅ Add the **deployment domain** to Firebase authentication.  
✅ Maintain **user session integrity** on private routes.  

---

## 📦 npm Packages Used
- `react-router-dom` - For navigation
- `axios` - For API requests
- `firebase` - For authentication
- `dotenv` - For managing environment variables
- `jsonwebtoken` - For JWT authentication
- `tailwindcss` - For styling

---

## 🛠️ How to Run the Project Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Arifulit/Task-client
