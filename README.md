# 🥦 Nutrio – Nutrition & Health E-Commerce Platform

[![Live Demo](https://img.shields.io/badge/Live%20Demo-nutrio-frontend?style=flat&logo=vercel)](https://nutrio-amber.vercel.app/)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-nutrio-admin_pannel?style=flat&logo=vercel)](https://nutrio-adminpanel.vercel.app/)

Nutrio is a full-stack e-commerce web application focused on nutrition and health. It enables users to browse, search, and purchase supplements and health products. The platform supports user features like reviews, wishlist, and orders, along with a powerful admin panel to manage products and users.

---

## ✨ Features

- 🛒 Product listing, search, voice search, filtering, and detail view
- ❤️ Wishlist & Review system
- 🔐 Secure user authentication (JWT-based)
- 🧾 Order management & payment via Stripe
- 📦 Admin dashboard to manage products, categories, and orders
- ☁️ Cloudinary integration for image uploads
- 🎨 Modern responsive UI (Tailwind CSS + Framer Motion)

---

## 🗂️ Project Structure

Nutrio/

├── client/ # React-based frontend for users

├── server/ # Express backend with MongoDB

├── admin/ # React-based admin dashboard

└── README.md


---

## ⚙️ Tech Stack

### Frontend (User & Admin Panel)
- React.js (Vite)
- Tailwind CSS
- Framer Motion

### Backend
- Node.js + Express.js
- MongoDB (via Mongoose)
- JWT Authentication
- Cloudinary (for image hosting)
- Stripe (for payments)

---

## 🔐 Environment Variables Setup

You will need **three** `.env` files in respective directories:

### `/server/.env`
```env
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret
CLOUDINARY_NAME=your_cloud_name
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=admin_email@example.com
ADMIN_PASSWORD=admin_password
STRIPE_SECRET_KEY=your_stripe_secret_key

```
### `/clent/.env`
VITE_BACKEND_URL=http://localhost:4000

```
```
### `/admin/.env`
VITE_BACKEND_URL=http://localhost:4000

---

# 🚀 Getting Started

##  1. Clone the Repository
git clone https://github.com/Nithurzan/Nutrio.git
cd Nutrio

##  2. Install Dependencies

### Client
cd client
npm install

### Server
cd ../server
npm install

### Admin
cd ../admin
npm install

---

## Start Development Servers

### Client
cd client
npm run dev

### Server
cd ../server
npm start

### Admin
cd ../admin
npm run dev

---

# 🧪 Demo Credentials
For quick testing, use the following demo credentials:

## 🧑‍💼 Admin Login
Email: user@Nutrio.com  
Password: 12345678

---

# 🌍 Deployment
## The project is deployed on Vercel
🔗 https://nutrio-tau.vercel.app

---

# 📸 Screenshots

---

# ✨ Developer
👨‍💻 Nithurzan Yogalingam
