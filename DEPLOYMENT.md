# Deployment Guide - Himalayan AI Tech Pro

This guide covers deploying the project to **Vercel** (frontend) and **Render** (backend).

---

## Prerequisites
- GitHub account (for connecting repositories)
- Render account (free tier available)
- Vercel account (free tier available)
- API keys:
  - `GROQ_API_KEY` - from [Groq Console](https://console.groq.com)
  - `SENDGRID_API_KEY` - from [SendGrid](https://sendgrid.com)
  - PostgreSQL database URL (production) or use SQLite

---

## Part 1: Deploy Backend to Render

### Step 1: Create PostgreSQL Database on Render
1. Go to [render.com](https://render.com)
2. Click **New** → **PostgreSQL**
3. Fill in:
   - **Name**: `himalayan-ai-db`
   - **Database**: `himalayan_ai_db`
   - Keep other defaults
4. Create database and copy the connection string

### Step 2: Deploy Backend Service
1. Go to [render.com](https://render.com) → **New** → **Web Service**
2. Select **GitHub** and authorize
3. Select this repository
4. Configure:
   - **Name**: `himalayan-ai-backend`
   - **Environment**: `Python 3.12`
   - **Build Command**: `pip install -r backend/requirements.txt`
   - **Start Command**: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
   - **Root Directory**: `backend`
5. Add environment variables:
   ```
   DATABASE_URL = postgresql://...  (from Step 1)
   ENVIRONMENT = production
   GROQ_API_KEY = <your-groq-key>
   SENDGRID_API_KEY = <your-sendgrid-key>
   ADMIN_EMAIL = your-email@example.com
   ADMIN_USERNAME = admin
   ADMIN_PASSWORD = strong-password-here
   ALLOWED_ORIGINS = https://your-frontend-url.vercel.app
   ```
6. Click **Deploy**
7. Copy the backend URL (e.g., `https://himalayan-ai-backend.onrender.com`)

---

## Part 2: Deploy Frontend to Vercel

### Step 1: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **Add New...** → **Project**
4. Select this repository
5. Configure:
   - **Framework**: Next.js
   - **Root Directory**: `./frontend`
   - **Build Command**: `npm run build`

### Step 2: Add Environment Variables
In the environment variables section, add:
```
NEXT_PUBLIC_API_URL = https://himalayan-ai-backend.onrender.com
NEXT_PUBLIC_WHATSAPP_NUMBER = 9779849745629
NEXT_PUBLIC_ENV = production
```

### Step 3: Deploy
Click **Deploy**. Vercel will build and deploy automatically.

---

## Part 3: Update Production URLs

### Update Render Backend
1. Go to your Render backend service
2. Update `ALLOWED_ORIGINS` with your Vercel URL (e.g., `https://himalayan-ai-tech-pro.vercel.app`)

### Update Vercel Frontend (if needed)
If your backend URL changes, update the `NEXT_PUBLIC_API_URL` environment variable in Vercel.

---

## Verification

### Test Backend
```bash
curl https://himalayan-ai-backend.onrender.com/health
```
Should return: `{"status":"healthy", ...}`

### Test Frontend
Visit: `https://your-frontend-url.vercel.app`

### Test API Connection
1. Open the chatbot demo on your frontend
2. Send a test message - should get an AI response
3. Submit a contact form - should save to the database

---

## Common Issues

### Backend not connecting
- Check `ALLOWED_ORIGINS` includes your frontend URL
- Verify `DATABASE_URL` in Render is correct
- Check GROQ_API_KEY is valid

### Database errors
- Ensure PostgreSQL database is created
- DATABASE_URL format: `postgresql://user:password@host:port/database`

### Environment variables not loading
- Wait 1-2 minutes after deploying for variables to take effect
- Redeploy if changes don't appear

---

## Production Checklist

- [x] Database configured (PostgreSQL)
- [x] All environment variables set
- [x] CORS origins configured
- [x] API keys secured (use Render/Vercel secrets)
- [x] Email notifications configured
- [x] Logo image optimized
- [x] Frontend and backend connected

**Your project is production-ready!** 🚀
