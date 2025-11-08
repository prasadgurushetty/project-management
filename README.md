# 🗂️ Project Management App (PERN Stack)

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-black?logo=express)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-%23336791.svg?logo=postgresql)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)

A **modern full-stack Project Management web application** built with the **PERN stack** and integrated with **Clerk, Inngest, Neon, Vercel, and Brevo**.  
It allows users to **plan, manage, and automate projects and tasks**, featuring real-time updates, secure authentication, email notifications, and a clean, responsive interface.

---

### 🆕 Create Account
<p align="center">
  <img src="https://github.com/prasadgurushetty/project-management/blob/main/assets/screenshots/create_account.png?raw=true" width="700" alt="Create Account Form">
</p>

### 🔐 Sign In
<p align="center">
  <img src="https://github.com/prasadgurushetty/project-management/blob/main/assets/screenshots/sign_in.png?raw=true" width="700" alt="Sign In Form">
</p>

### 📧 Check Email (Verification)
<p align="center">
  <img src="https://github.com/prasadgurushetty/project-management/blob/main/assets/screenshots/check_email_verification.png?raw=true" width="700" alt="Email Verification Screen">
</p>

### 📈 Dashboard (Initial)
<p align="center">
  <img src="https://github.com/prasadgurushetty/project-management/blob/main/assets/screenshots/dashboard_initial.png?raw=true" width="700" alt="Initial Dashboard with 0 Projects">
</p>

### 📂 Create New Project Dialog
<p align="center">
  <img src="https://github.com/prasadgurushetty/project-management/blob/main/assets/screenshots/create_project_dialog.png?raw=true" width="700" alt="New Project Creation Modal">
</p>

### 🌙 Dashboard (After Adding Project - Dark Mode)
<p align="center">
  <img src="https://github.com/prasadgurushetty/project-management/blob/main/assets/screenshots/dashboard_after_adding_project_darkmode.png?raw=true" width="700" alt="Dashboard After Adding Project in Dark Mode">
</p>

### 💻 Projects Page
<p align="center">
  <img src="https://github.com/prasadgurushetty/project-management/blob/main/assets/screenshots/projects_page.png?raw=true" width="700" alt="Projects Listing Page">
</p>

### 📝 Project Tasks List
<p align="center">
  <img src="https://github.com/prasadgurushetty/project-management/blob/main/assets/screenshots/project_tasks_list.png?raw=true" width="700" alt="Project Task List View">
</p>

### 📈 Analytics View
<p align="center">
  <img src="https://github.com/prasadgurushetty/project-management/blob/main/assets/screenshots/analytics_view.png?raw=true" width="700" alt="Project Analytics Dashboard">
</p>

### 📅 Task Calendar View
<p align="center">
  <img src="https://github.com/prasadgurushetty/project-management/blob/main/assets/screenshots/task_calendar_view.png?raw=true" width="700" alt="Project Task Calendar View">
</p>

### ⚙️ Project Settings
<p align="center">
  <img src="https://github.com/prasadgurushetty/project-management/blob/main/assets/screenshots/project_settings.png?raw=true" width="700" alt="Project Details and Settings">
</p>

### 👤 User Account Profile
<p align="center">
  <img src="https://github.com/prasadgurushetty/project-management/blob/main/assets/screenshots/user_profile.png?raw=true" width="700" alt="User Profile Details and Account Settings">
</p>

## 🚀 Features

### 👨‍💻 Frontend
- Built with **React + Vite + TailwindCSS**
- Responsive dashboard UI with project and task views
- Authentication integrated using **Clerk**
- Smooth transitions and modern UI effects
- API integration with backend endpoints
- Hosted on **Vercel**

### ⚙️ Backend
- **Express.js** REST API with PostgreSQL (via **Neon** cloud DB)
- Secure authentication middleware using **Clerk JWT**
- **Inngest** for event-driven background processing
- **Nodemailer + Brevo (Sendinblue)** for email automation
- Environment variable configuration with `.env`
- Hosted on **Render / Vercel Functions** (or similar)

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|---------------|
| Frontend | React, Vite, Tailwind CSS, Clerk |
| Backend | Node.js, Express.js |
| Database | PostgreSQL (via Neon) |
| Authentication | Clerk |
| Email Service | Nodemailer + Brevo (Sendinblue) |
| Event System | Inngest |
| Deployment | Vercel (Frontend + API), Neon (Database) |

---

## ⚙️ Installation & Setup

### 🔹 1. Clone the repository
```bash
git clone https://github.com/prasadgurushetty/project-management-app.git
cd project-management-app

 Setup Backend
npm install
Create a .env file inside /server:
PORT=5000
DATABASE_URL=your_neon_postgresql_url
CLERK_SECRET_KEY=your_clerk_secret_key
BREVO_API_KEY=your_brevo_api_key
SMTP_USER=your_email
SMTP_PASS=your_password
JWT_SECRET=your_jwt_secret
INNGEST_EVENT_KEY=your_inngest_key

npm run dev

Setup Frontend
npm install

Create a .env file inside /client:

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:5000

npm run dev
---
