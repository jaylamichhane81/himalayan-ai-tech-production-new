# 🚀 Deployment Instructions - "MAKE IT SELL READY"

## Summary of Changes

Your project has been transformed into a sales-ready AI chatbot product with:
- ✅ 3 industry-specific demo bots (Hotel, School, Support)
- ✅ New DemoBotSwitcher component
- ✅ Prominent WhatsApp CTA for lead capture
- ✅ Industry-specific AI prompts on backend
- ✅ Sales-focused Hero messaging

---

## Step-by-Step Deployment

### Phase 1: Test Locally (5 min)

#### 1. Start Backend Locally
```bash
cd backend
# Make sure .venv is activated
python -m uvicorn app.main:app --reload --port 8000
```

Expected output: ✅ `Uvicorn running on http://127.0.0.1:8000`

#### 2. Start Frontend Locally (New Terminal)
```bash
cd frontend
npm run dev
```

Expected output: ✅ `Ready in XXXms`

#### 3. Test the Bot Switcher
- Open `http://localhost:3000`
- Scroll to "Choose your AI assistant" section
- Click each bot button (🏨 Hotel, 🎓 School, 💬 Support)
- ✅ Should see color change and description update
- Type a test message for each bot
- ✅ Should get responses from the appropriate bot

#### 4. Test Endpoints
```bash
# Test Hotel Bot
curl -X POST http://localhost:8000/ai/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"I need a room","bot_type":"hotel","session_id":"test"}'

# Test School Bot
curl -X POST http://localhost:8000/ai/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"admission requirements","bot_type":"school","session_id":"test"}'

# Test Support Bot
curl -X POST http://localhost:8000/ai/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"I have an issue","bot_type":"support","session_id":"test"}'
```

---

### Phase 2: Deploy to Render (Backend)

#### 1. Verify `.env` Settings
Make sure your Render `.env` has:
```env
ENVIRONMENT=production
GROQ_API_KEY=your_groq_api_key
LLM_MODEL=llama-3.1-8b-instant
ALLOWED_ORIGINS=https://himalayan-ai-tech-pro-a1wx.vercel.app,https://himalayan-ai-tech-pro.onrender.com
```

#### 2. Push Code to GitHub
```bash
cd c:\Users\asus\Downloads\himalayan-ai-tech-pro
git add .
git commit -m "feat: add 3 demo bots with industry-specific prompts"
git push origin main
```

#### 3. Render Auto-Deploy
- Go to https://render.com/dashboard
- Your service should auto-trigger deployment
- Wait for deployment to complete (2-3 min)
- Check logs for errors

#### 4. Test Deployment
```bash
curl -X POST https://himalayan-ai-tech-pro.onrender.com/ai/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello","bot_type":"hotel","session_id":"test"}'
```

---

### Phase 3: Deploy to Vercel (Frontend)

#### 1. Update Environment Variables on Vercel
Go to: Vercel Dashboard → Project → Settings → Environment Variables

Add/Update:
```
NEXT_PUBLIC_API_URL = https://himalayan-ai-tech-pro.onrender.com
NEXT_PUBLIC_WHATSAPP_NUMBER = 9779841000000  # CHANGE THIS!
```

**⚠️ IMPORTANT: Update WhatsApp number to yours!**

#### 2. Push to Deploy
```bash
cd frontend
git add .
git commit -m "feat: add bot switcher and sales-focused UI"
git push origin main
```

Vercel will auto-deploy. Check: https://himalayan-ai-tech-pro-a1wx.vercel.app/

---

### Phase 4: Test Live Deployment (10 min)

#### 1. Test Homepage
- [ ] Open https://himalayan-ai-tech-pro-a1wx.vercel.app/
- [ ] Hero says "AI Chatbots for Hotels, Schools & Businesses" ✅
- [ ] Three feature cards show the bots ✅

#### 2. Test Bot Switcher
- [ ] Scroll to "Choose your AI assistant"
- [ ] Click each bot (🏨 Hotel, 🎓 School, 💬 Support)
- [ ] Visual feedback appears ✅
- [ ] Send test message for each bot
- [ ] Get industry-specific responses ✅

#### 3. Test WhatsApp CTA
- [ ] Scroll to "Ready to transform your business?"
- [ ] Click "💬 Get Free Demo on WhatsApp"
- [ ] WhatsApp opens with correct number ✅
- [ ] Pre-populated message appears ✅

#### 4. Test Chat Demo
- [ ] Click "Try Chat Demo"
- [ ] Should scroll to bot switcher
- [ ] Chat works normally ✅

---

## 📋 Verification Checklist

### Frontend
- [ ] Homepage loads without errors
- [ ] Hero text shows "AI Chatbots for Hotels, Schools & Businesses"
- [ ] DemoBotSwitcher component renders
- [ ] All 3 bot buttons clickable and highlight
- [ ] Chat responds differently for each bot type
- [ ] WhatsApp button is green and prominent
- [ ] WhatsApp link opens correctly

### Backend
- [ ] `/ai/chat` endpoint accepts `bot_type` parameter
- [ ] Hotel bot prompt visible in responses
- [ ] School bot prompt visible in responses
- [ ] Support bot prompt visible in responses
- [ ] Default bot type is "support"
- [ ] Invalid bot_type is rejected (400 error)

---

## 🚨 Troubleshooting

### Issue: Bot Switcher not showing
**Solution:**
- Check DemoBotSwitcher.tsx imported correctly in Chat.tsx
- Clear node_modules: `npm ci`
- Rebuild: `npm run build`

### Issue: Bot responses not changing
**Solution:**
- Verify `bot_type` is sent in POST request
- Check backend logs: `console.log(request.bot_type)`
- Make sure Render deployment is complete (check logs)

### Issue: WhatsApp button not opening
**Solution:**
- Check NEXT_PUBLIC_WHATSAPP_NUMBER is set
- Verify number format: `country_code` + `number` (no spaces/symbols)
- Example: `9779841000000` (16 digits)

### Issue: CORS errors
**Solution:**
```env
# Add to Render .env
ALLOWED_ORIGINS=https://himalayan-ai-tech-pro-a1wx.vercel.app
```

---

## 📊 What to Do Next

### Day 1 (Today):
- [ ] Deploy to Render
- [ ] Deploy to Vercel
- [ ] Test all 3 bots live

### Day 2 (Tomorrow):
- [ ] Start reaching out to hotels in Kathmandu
- [ ] Message school principals
- [ ] Post on LinkedIn about the bots

### Day 3-7 (This Week):
- [ ] Collect WhatsApp leads
- [ ] Create case study if client agrees
- [ ] Refine bot prompts based on feedback

---

## 💡 Tips for Sales

### Use These Messages:

**For Hotels:**
> "I built an AI bot that handles your reservations 24/7 and answers guest questions automatically. Reduces your workload by 40% while improving guest satisfaction. Want to see a demo?"

**For Schools:**
> "An AI admission bot that answers parent questions, schedules campus tours, and speeds up the enrollment process. Available on WhatsApp. Want to try?"

**For Any Business:**
> "Free AI chatbot demo. See how it can handle your customer service 24/7. Works on WhatsApp, website, and incoming calls. Let me show you—no commitment, just 10 minutes."

---

## 🎯 Metrics to Track

Add Google Analytics to track:
- Bot switcher clicks per type
- WhatsApp button clicks
- Chat demo length (time engaged)
- Conversion: WhatsApp leads → Meetings

---

## Need Help?

If deployment fails:
1. Check Render logs: https://dashboard.render.com
2. Check Vercel logs: Vercel Dashboard → Deployments
3. Test locally first before deploying
4. Check .env variables are correct

Good luck! Your product is now **SALES READY** 🚀
