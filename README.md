# 🛡️ Secure Full-Stack Portfolio & Blog

> A cybersecurity-focused personal web application built with Vue 3, Serverless Architecture, and Secure Database principles.

![Project Status](https://img.shields.io/badge/status-live-success)
![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?logo=vue.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?logo=tailwind-css)
![Netlify](https://img.shields.io/badge/Netlify-Functions-00C7B7?logo=netlify)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?logo=supabase)

## 🚀 Overview

This project is not just a portfolio website; it is a demonstration of modern web engineering and cybersecurity best practices. It bridges the gap between frontend interactivity and backend security using a **Serverless Architecture**.

The application features a dynamic portfolio powered by the GitHub API, a custom Markdown-based blog engine, and a secure communication system protected against common web vulnerabilities like XSS.

🔗 **Live Demo:** [https://mustafakoparal.netlify.app](https://mustafakoparal.netlify.app)

## 🏗️ Tech Stack & Architecture

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Frontend** | Vue.js 3 (Composition API) | Reactive UI, State Management |
| **Styling** | Tailwind CSS | Utility-first responsive design (Cybersecurity Dark Theme) |
| **Backend** | Netlify Functions | Serverless API endpoints (Node.js) |
| **Database** | Supabase (PostgreSQL) | Relational data storage with RLS protection |
| **Security** | sanitize-html | Backend-side XSS prevention & Input Sanitization |
| **Content** | Marked.js | Custom Markdown-to-HTML parsing engine |
| **Localization** | Vue I18n | Multi-language support (TR/EN) |

## 🔐 Key Engineering & Security Features

### 1. Secure Backend Communication (Serverless)
Instead of exposing database credentials on the client-side, this project uses **Netlify Functions** as a middleware.
- **Frontend** sends data to Netlify Functions.
- **Backend** validates and cleans data using `sanitize-html` to prevent **Stored XSS (Cross-Site Scripting)** attacks.
- **Database** accepts data only from the secure backend environment.

### 2. Row Level Security (RLS)
The PostgreSQL database is protected by strict RLS policies:
- **Write Access:** Anonymous users can insert data (comments/messages).
- **Read Access:** Public can read comments, but *only Admin* can read private messages.
- **Delete Access:** Restricted to users with the correct `admin_password` or ownership credentials.

### 3. Custom Authorization Logic
A custom backend logic (`delete-comment.js`) implements a multi-level authorization system:
- **Admin Level:** Can delete any comment using a master key.
- **User Level:** Can delete their own comments using a unique password set during creation.

### 4. Dynamic Content Engine
- **Portfolio:** Fetches live data from **GitHub REST API**. No manual HTML updates required for new projects.
- **Blog:** Implements a custom **Markdown Parser**. Blog posts are written in `.md` files and compiled to HTML at runtime, separating content from code.

## 🛠️ Installation & Setup

To run this project locally, follow these steps:

### 1. Clone the Repository
```bash
git clone [https://github.com/Mustaffa1/mk-portfolio-blog.git](https://github.com/Mustaffa1/mk-portfolio-blog.git)
cd mk-portfolio-blog