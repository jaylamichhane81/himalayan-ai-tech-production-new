# Himalayan AI Tech Pro - Production-Ready AI SaaS Application

A modern, professional AI SaaS web application built with Next.js, TypeScript, and FastAPI. Features a complete landing page with AI chatbot demo, contact forms, and responsive design.

## 🚀 Features

- **Professional Landing Page**: Services, Founder, Testimonials, Contact sections
- **AI Chatbot Demo**: Real-time streaming chat with industry-specific bots (Hotel, School, Support)
- **Responsive Design**: Mobile-first approach with premium SaaS styling
- **Contact Form**: Working form with validation and database storage
- **Smooth Animations**: Framer Motion animations throughout
- **Production Ready**: Optimized builds, error handling, and clean code

## 🛠 Tech Stack

### Frontend
- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide Icons**

### Backend
- **FastAPI** (Python)
- **SQLAlchemy** (ORM)
- **SQLite/PostgreSQL** (Database)
- **Pydantic** (Validation)

## 📁 Project Structure

```
himalayan-ai-tech-pro/
├── frontend/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── loading.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── UseCases.tsx
│   │   ├── Founder.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Chat.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── DemoBotSwitcher.tsx
│   ├── lib/
│   │   └── api.ts
│   └── public/images/
│       ├── logo.png
│       ├── pic.jpg
│       └── [other assets]
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── models.py
│   │   ├── database/
│   │   │   ├── connection.py
│   │   │   └── models.py
│   │   └── routers/
│   │       ├── ai.py
│   │       └── contact.py
│   ├── requirements.txt
│   └── .env
└── README.md
```

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+
- Python 3.8+
- npm or yarn

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Start the backend server:**
   ```bash
   uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
   ```

   The API will be available at `http://localhost:8000`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`

### Production Build

1. **Build the frontend:**
   ```bash
   npm run build
   ```

2. **Start production server:**
   ```bash
   npm start
   ```

## 🎯 Key Components

### Header/Navbar
- Sticky navigation with Services, Founder, Contact, Book Consultation
- Responsive design with horizontal scroll on mobile
- Smooth scroll to sections

### AI Chatbot
- Real-time streaming responses
- Industry-specific bots (Hotel, School, Support)
- Typing animation and auto-scroll
- Mobile-optimized input

### Contact Form
- Full validation with error handling
- Database storage
- Responsive grid layout
- Success/error states

### Testimonials
- Clean card design without broken images
- Responsive grid
- Smooth animations

## 🔧 Configuration

### Environment Variables

**Backend (.env):**
```env
DATABASE_URL=sqlite:///./dev.db
ENVIRONMENT=development
GROQ_API_KEY=your_groq_api_key_here
LLM_MODEL=llama-3.1-8b-instant
SENDGRID_API_KEY=your_sendgrid_key
FROM_EMAIL=noreply@himalayanaitech.com
ADMIN_EMAIL=admin@himalayanaitech.com
```

**Frontend (.env.local):**
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## 🚀 Deployment

### Backend Deployment
- Use Railway, Render, or Heroku
- Set environment variables
- Database will auto-migrate

### Frontend Deployment
- Deploy to Vercel, Netlify, or any static host
- Set `NEXT_PUBLIC_API_URL` to your backend URL

## 📱 Responsive Design

- **Mobile**: Single column, optimized touch targets
- **Tablet**: 2-column grids, adjusted spacing
- **Desktop**: Full layout with hover effects

## 🎨 Design System

- **Colors**: AI Cyan (#00d4ff), Midnight (#0a0a14), Glass effects
- **Typography**: Clean sans-serif, responsive sizing
- **Spacing**: Consistent padding/margins with Tailwind
- **Animations**: Smooth Framer Motion transitions

## 🔍 Testing

### Backend Tests
```bash
# Health check
curl http://localhost:8000/health

# Chat API test
curl -X POST http://localhost:8000/ai/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello", "bot_type": "support"}'
```

### Frontend Tests
- Visit `http://localhost:3000`
- Test all navigation links
- Try the chatbot with different bot types
- Submit the contact form

## 📈 Performance

- Optimized Next.js Image components
- CSS minification and tree-shaking
- Database connection pooling
- Streaming responses for better UX

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For questions or support, contact us at hello@himalayanaitech.com

---

**Built with ❤️ by Himalayan AI Tech**
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

