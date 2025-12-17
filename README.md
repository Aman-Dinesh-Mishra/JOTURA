---

# Jotura 📝

**Jotura** is a full-stack **note-taking web application** designed for performance, scalability, and clean architecture.
It features a modern **React (Vite)** frontend and a robust **Express + MongoDB** backend, with production-ready configurations and security best practices.

---

## 🚀 Key Features

* Full **CRUD** functionality for managing notes
* **Rate limiting** middleware to protect APIs from abuse
* **CORS** configuration for both local and production environments
* Secure **environment variable** handling using `dotenv`
* Responsive and modern UI built with **React + Vite**
* Styled using **Tailwind CSS** with **daisyUI**
* Backend powered by **Node.js, Express, and MongoDB**
* Deployed and production-ready on **Render**

---

## 🏗️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* daisyUI

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Express Rate Limiter

### Deployment

* Render

---

## 📁 Project Structure

```bash
JOTURA/
│
├── backend/                 # Express + MongoDB backend
│   ├── src/
│   │   ├── server.js        # Application entry point
│   │   ├── routes/          # Notes API routes
│   │   ├── config/          # Database configuration
│   │   └── middlewares/     # Rate limiting & other middleware
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
```

> ⚠️ **Security Notice**
> Never commit `.env` files. Ensure your `.gitignore` includes:
>
> ```bash
> backend/.env
> ```

---

## 🛠️ Installation & Setup

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

Create a `.env` file inside `backend/`:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 Live Demo

🔗 **Visit:** [https://jotura-3.onrender.com/](https://jotura-3.onrender.com/)

---

## 📌 Notes

* Ensure MongoDB is accessible before starting the backend
* Configure environment variables correctly for production
* API rate limiting is enabled by default for enhanced security

---

