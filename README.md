# MERN Stack Developer Portfolio

A modern, responsive, and fully functional full-stack portfolio built with the MERN stack.

## Tech Stack
- **Frontend**: React (Vite), Tailwind CSS v4, Framer Motion, React Icons
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)

## Features
- **Modern UI**: Clean, minimal, premium design using Tailwind CSS.
- **Dark Mode**: Built-in dark/light mode toggle that respects user preference.
- **Animations**: Smooth scroll reveal animations and transitions with Framer Motion.
- **Fully Responsive**: Works seamlessly across mobile, tablet, and desktop devices.
- **Contact Form**: Functional contact form backed by a Node.js REST API with MongoDB storage.
- **SEO Optimized**: Standard meta tags included for search engines.

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB (running locally on port 27017, or a MongoDB Atlas URI)

### Local Development Setup

**1. Clone the repository / Open the workspace**

**2. Backend Setup**
```bash
cd backend
npm install
```
- Ensure you have a `.env` file in the `backend/` directory with the following variables:
  ```env
  MONGO_URI=mongodb://127.0.0.1:27017/portfolio
  PORT=5000
  ADMIN_SECRET=your_admin_secret_key
  ```
- Start the backend development server:
  ```bash
  node server.js
  ```

**3. Frontend Setup**
```bash
cd frontend
npm install
```
- (Optional) Create a `.env` file in the `frontend/` directory if your API is not running on `localhost:5000`:
  ```env
  VITE_API_BASE_URL=http://localhost:5000/api
  ```
- Start the frontend development server:
  ```bash
  npm run dev
  ```

### Deployment Instructions

**Frontend (Deploy to Vercel)**
1. Push your code to GitHub.
2. Sign in to Vercel and connect your GitHub repository.
3. Select the `frontend` directory as the Root Directory.
4. Set Build Command to `npm run build` and Output Directory to `dist`.
5. Add Environment Variables (e.g., `VITE_API_BASE_URL` pointing to your deployed backend URL).
6. Click Deploy.

**Backend (Deploy to Render / Heroku / Railway)**
1. Connect your GitHub repository to your cloud provider (e.g., Render).
2. Create a new Web Service and point it to the `backend` directory.
3. Set the Environment to Node.
4. Set Build Command to `npm install` and Start Command to `node server.js`.
5. Add Environment Variables:
   - `MONGO_URI` (your MongoDB Atlas connection string)
   - `ADMIN_SECRET` (your custom secret for admin access)
6. Deploy the service.

---

**Note:** Ensure you replace the placeholder data (Resume link, social media links, project images) in the React components (`src/sections/*`) before deploying.
