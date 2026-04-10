# Himalayan AI Tech Pro - AI Lead Capture MVP

> Launch AI-assisted customer chat and lead capture with a modern landing page.

**Status**: ✅ **MVP Ready** | **Version**: 1.0 | **License**: MIT

A lean, production-ready MVP with a Next.js landing page, AI chat demo, and contact lead capture backend.

---

## ⚡ Quick Start

```bash
# Get the code
git clone https://github.com/jaylamichhane81/himalayan-ai-tech-pro.git
cd himalayan-ai-tech-pro

# Backend (Terminal 1)
cd backend && pip install -r requirements.txt
cp .env.example .env && uvicorn app.main:app --reload --port 10000

# Frontend (Terminal 2)
cd frontend && npm install && npm run dev
```

Visit: http://localhost:3000 🎉  
API Docs: http://localhost:10000/docs

---

## 🎯 What's Included

### ✨ Frontend Features
- 🎨 Premium landing page UI
- 📱 Fully responsive design
- 💬 Live AI chat demo
- ✉️ Contact lead capture form
- 🔍 SEO-friendly metadata

### 🔧 Backend Features
- 🤖 AI chat endpoint (`/ai/chat`)
- ✉️ Contact submission endpoint (`/contact/`)
- ✅ Pydantic validation
- 🔐 CORS protection

---

## 🏗️ Tech Stack

| Component | Technology | Version |
|-----------|-----------|---------|
| Frontend | Next.js + TypeScript | 15.0+ |
| Styling | Tailwind CSS + Framer Motion | 4.1 |
| Backend | FastAPI | 0.110+ |
| Database | PostgreSQL or SQLite | 14+ |
| Deployment | Render + Vercel | Latest |

---

## 📊 API Endpoints

```
CONTACT
  POST   /contact/                Receive inquiry form

AI CHAT
  POST   /ai/chat                 Get AI response

SYSTEM
  GET    /                      Health check
  GET    /health                Health status
```

**Interactive Docs**: http://localhost:10000/docs

---

## 🔐 Security

- ✅ **Pydantic Validation** prevents injection attacks
- ✅ **CORS Protection** with configurable origins
- ✅ **HTTPS/SSL** enforced in production
- ✅ **Environment Variables** for all secrets
- ✅ **Error Handling** doesn't leak sensitive data

---

## 🚀 Deployment (2-Click)

### Backend → Render
1. Push to GitHub
2. Create Render service
3. Configure env vars
4. Auto-deploy on push

### Frontend → Vercel
1. Connect GitHub
2. Set env vars
3. Auto-deploy on push

---

## 📁 Project Structure

```
himalayan-ai-tech-pro/
├── backend/
│   ├── app/
│   │   ├── main.py              FastAPI app
│   │   ├── models.py            Pydantic models
│   │   ├── routers/
│   │   │   ├── ai.py            AI chat endpoint
│   │   │   └── contact.py       Contact form endpoint
│   │   ├── database/
│   │   │   ├── connection.py    Database connection
│   │   │   └── models.py        Contact model
│   ├── requirements.txt
│   ├── .env.example
│   └── render.yaml
├── frontend/
│   ├── app/
│   │   ├── page.tsx             Home page
│   │   ├── globals.css          Styles
│   │   ├── robots.ts            Robots file
│   │   └── sitemap.ts           Sitemap file
│   ├── components/              React components
│   ├── lib/
│   │   ├── api.ts               API utilities
│   │   └── seo.ts               SEO utilities
│   ├── package.json
└── Documentation files
```

---

## 🎓 Learning Path

## 📚 Project Notes

This repository is now focused on the MVP for Himalayan AI Tech Pro:

- Next.js landing page with live AI chat demo
- FastAPI backend with `/ai/chat` and `/contact/`
- Contact lead capture stored via SQLAlchemy
- Minimal frontend and backend code for launch-ready validation

---

## 🚀 Running the MVP

1. Backend: `cd backend && pip install -r requirements.txt && cp .env.example .env && uvicorn app.main:app --reload --port 10000`
2. Frontend: `cd frontend && npm install && npm run dev`

Open `http://localhost:3000` and use the demo chatbot or contact form.

---

## 📄 License

MIT License

