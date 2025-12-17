# Jotura 📝

**Jotura** is a full-stack note-taking web application designed for performance, scalability, and clean architecture.  
It features a modern React (Vite) frontend and a robust Express + MongoDB backend, with production-ready configurations and security best practices.

---

## 🚀 Key Features

- Full CRUD functionality for managing notes
- API rate limiting powered by Upstash (Redis-based) for enhanced security
- CORS configuration for both local and production environments
- Secure environment variable handling using dotenv
- Responsive and modern UI built with React and Vite
- Styled using Tailwind CSS with daisyUI
- Backend powered by Node.js, Express, MongoDB, and Upstash Redis
- Deployed and production-ready on Render

---

## 🏗️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- daisyUI

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Upstash Redis (Rate Limiting)

### Deployment
- Render

---

## 📁 Project Structure

```bash
JOTURA/
│
├── backend/                 # Express + MongoDB backend
│   ├── src/
│   │   ├── server.js        # Application entry point
│   │   ├── routes/          # Notes API routes
│   │   ├── config/          # Database and Upstash configuration
│   │   └── middlewares/     # Rate limiting and other middleware
│   └── package.json
│
├── frontend/                # React + Vite frontend
│   ├── src/
│   │   ├── main.jsx         # React entry point
│   │   └── components/      # Reusable UI components
│   └── package.json
│
├── README.md                # Project documentation
└── package.json             # Root scripts
````

> ⚠️ Security Notice
> Never commit `.env` files. Ensure your `.gitignore` includes:
>
> ```
> backend/.env
> ```

---

## 🛠️ Installation and Setup

### Clone the Repository

```bash
git clone https://github.com/Aman-Dinesh-Mishra/JOTURA.git
cd JOTURA
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 Live Demo

Visit: [https://jotura-3.onrender.com/](https://jotura-3.onrender.com/)

---

## 📌 Notes

* Ensure MongoDB and Upstash Redis are accessible before starting the backend
* Properly configure environment variables for production deployments
* Upstash-powered rate limiting is enabled by default to prevent API abuse

```

