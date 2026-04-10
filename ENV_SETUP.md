# Environment Variables Setup

This file shows all required environment variables for development and production.

---

## Frontend Development (.env.local)

```
NEXT_PUBLIC_API_URL=http://localhost:10000
NEXT_PUBLIC_WHATSAPP_NUMBER=9779849745629
NEXT_PUBLIC_ENV=development
```

**File location**: `frontend/.env.local`

---

## Frontend Production (Vercel Environment Variables)

Set these in Vercel project settings:

```
NEXT_PUBLIC_API_URL = https://himalayan-ai-backend.onrender.com
NEXT_PUBLIC_WHATSAPP_NUMBER = 9779849745629
NEXT_PUBLIC_ENV = production
```

---

## Backend Development (Create backend/.env)

```
# Database
DATABASE_URL = sqlite:///./test.db

# Environment
ENVIRONMENT = development

# AI API
GROQ_API_KEY = <your-groq-key>
LLM_MODEL = llama-3.1-8b-instant

# Email Service
SENDGRID_API_KEY = <your-sendgrid-key>
FROM_EMAIL = noreply@himalayanatech.com
ADMIN_EMAIL = your-email@gmail.com

# Admin User
ADMIN_USERNAME = admin
ADMIN_PASSWORD = admin

# CORS
ALLOWED_ORIGINS = http://localhost:3002
```

**File location**: `backend/.env`

---

## Backend Production (Render Setup)

Set these in Render dashboard:

```
DATABASE_URL = postgresql://user:password@host:port/database
ENVIRONMENT = production
GROQ_API_KEY = <your-groq-key>
LLM_MODEL = llama-3.1-8b-instant
SENDGRID_API_KEY = <your-sendgrid-key>
FROM_EMAIL = noreply@himalayanatech.com
ADMIN_EMAIL = your-email@gmail.com
ADMIN_USERNAME = admin
ADMIN_PASSWORD = <strong-password>
ALLOWED_ORIGINS = https://your-frontend-url.vercel.app
```

---

## Getting API Keys

### GROQ API Key
1. Go to https://console.groq.com
2. Sign up / Log in
3. Go to **API Keys** section
4. Create new key
5. Copy and paste into environment

### SendGrid API Key
1. Go to https://sendgrid.com
2. Sign up / Log in
3. Go to **Settings** → **API Keys**
4. Create new API key
5. Copy and paste into environment

### PostgreSQL URL (Production)
1. Create database on Render (see DEPLOYMENT.md)
2. Connection string provided automatically
3. Format: `postgresql://user:password@host:port/database`

---

## Security Tips

✅ **Always use environment variables** - never hardcode sensitive keys
✅ **Use .gitignore** - ensure `.env`, `.env.local` are never committed
✅ **Vercel/Render secrets** - keep API keys secure in dashboard only
✅ **Rotate keys regularly** - regenerate API keys periodically
✅ **Unique passwords** - use strong passwords for admin/database

---

## Verification

### Check Frontend Env Variables
```bash
cd frontend
npm run build
# If build succeeds, frontend env is correct
```

### Check Backend Env Variables
```bash
cd backend
python -c "import os; print('DATABASE_URL:', os.getenv('DATABASE_URL'))"
```

Both should print without errors.
