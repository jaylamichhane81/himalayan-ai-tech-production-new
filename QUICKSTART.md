# Quick Start Guide

Get the project running locally in 5 minutes.

---

## Prerequisites
- Node.js 18+ and npm
- Python 3.12+
- Git (for version control)

---

## 1. Clone & Setup

```bash
# Clone repository
git clone https://github.com/yourusername/himalayan-ai-tech-pro.git
cd himalayan-ai-tech-pro
```

---

## 2. Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file (see ENV_SETUP.md for template)
# Get GROQ_API_KEY from https://console.groq.com

# Start backend
python -m uvicorn app.main:app --reload --port 10000
```

**Backend ready at**: `http://localhost:10000`

---

## 3. Frontend Setup (New Terminal)

```bash
cd frontend

# Install dependencies
npm install

# Create .env.local file
echo "NEXT_PUBLIC_API_URL=http://localhost:10000" > .env.local

# Start development server
npm run dev
```

**Frontend ready at**: `http://localhost:3000`

---

## 4. Test Everything

### Test Backend
```bash
curl http://localhost:10000/health
```
Response: `{"status":"healthy",...}`

### Test Frontend
Open: `http://localhost:3000`

### Test Chat Demo
1. Open chat component
2. Send test message
3. Should see AI response

### Test Contact Form
1. Fill contact form
2. Click submit
3. Should see success message

---

## 5. Common Commands

### Backend
```bash
# Run with auto-reload
python -m uvicorn app.main:app --reload --port 10000

# Run health check
curl http://localhost:10000/health

# Access API docs
# Go to http://localhost:10000/docs
```

### Frontend
```bash
# Development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm run start

# Run linter
npm run lint

# Run tests (if configured)
npm test
```

---

## 6. Project Structure

```
himalayan-ai-tech-pro/
├── backend/                 # FastAPI backend
│   ├── app/
│   │   ├── main.py         # Entry point
│   │   ├── models.py       # Database models
│   │   └── routers/        # API routes
│   └── requirements.txt
├── frontend/               # Next.js frontend
│   ├── app/                # Next.js app directory
│   ├── components/         # React components
│   └── lib/                # Utilities
├── DEPLOYMENT.md           # Production deployment
├── ENV_SETUP.md            # Environment variables
└── README.md               # Overview
```

---

## 7. Environment Variables

### Frontend Development (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:10000
```

### Backend Development (.env)
```
GROQ_API_KEY=<your-key>
SENDGRID_API_KEY=<your-key>
DATABASE_URL=sqlite:///./test.db
ADMIN_EMAIL=admin@example.com
```

See **ENV_SETUP.md** for complete list.

---

## 8. Troubleshooting

### Backend not responding
- Is backend running? Check terminal for errors
- Port 10000 in use? Kill process or use different port

### Frontend can't connect to backend
- Check NEXT_PUBLIC_API_URL in .env.local
- Make sure backend is running on port 10000
- Check browser console for CORS errors

### npm install fails
- Delete node_modules and package-lock.json
- Run `npm install` again
- Try `npm install --legacy-peer-deps` if issues persist

### Python import errors
- Activate virtual environment: `source venv/bin/activate`
- Reinstall: `pip install -r requirements.txt`

---

## 9. Next Steps

After local development:
1. When ready to deploy, see **DEPLOYMENT.md**
2. For production environment setup, see **ENV_SETUP.md**
3. Push code to GitHub
4. Connect to Vercel & Render

---

## 10. Support Resources

- **FastAPI Docs**: https://fastapi.tiangolo.com
- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **Render Docs**: https://render.com/docs

---

**You're all set!** 🚀 Start building!
