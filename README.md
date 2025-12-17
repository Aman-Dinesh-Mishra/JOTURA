# Jotura 📝

Jotura is a full‑stack **note‑taking application** built with **React (Vite)** on the frontend and **Express + MongoDB** on the backend.  
It supports CRUD operations for notes, rate limiting for API security, and environment‑based configuration for smooth local and production deployments.

---

## 🚀 Features
- Create, Read, Update, Delete notes
- Rate limiting middleware for API protection
- CORS configuration for local development and production
- Environment variable management with `dotenv`
- Frontend built with **React + Vite + TailwindCSS (daisyUI)**
- Backend powered by **Express + MongoDB**
- Production‑ready deployment on **Render**

---

## 📂 Project Structure
JOTURA/ │ ├── backend/              # Express + MongoDB backend │   ├── src/ │   │   ├── server.js     # Main server entry │   │   ├── routes/       # Notes API routes │   │   ├── config/       # Database connection │   │   └── middlewares/  # Rate limiter, etc. │   └── package.json │ ├── frontend/             # React + Vite frontend │   ├── src/ │   │   ├── main.jsx      # React entry point │   │   └── components/   # UI components │   └── package.json │ ├── README.md             # Project documentation └── package.json          # Root scripts for build/start

> ⚠️ Never commit `.env` files. Ensure `.gitignore` includes `backend/.env`.

---

## 🛠️ Installation

Clone the repository:
```bash
git clone https://github.com/Aman-Dinesh-Mishra/JOTURA.git
cd JOTURA
```
## Demo Link
Visit: https://jotura-3.onrender.com/
