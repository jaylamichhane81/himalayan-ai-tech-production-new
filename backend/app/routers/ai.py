"""
AI Chat Router
Simple AI chatbot endpoint for customer demos and business questions
"""

from fastapi import APIRouter, HTTPException
from datetime import datetime
import uuid
import os
import httpx
import logging

from ..models import ChatRequest, ChatResponse

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/ai")

LLM_API_KEY = os.getenv("GROQ_API_KEY")
LLM_MODEL = os.getenv("LLM_MODEL", "llama-3.1-8b-instant")
GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"

# Industry-specific system prompts
BOT_PROMPTS = {
    "hotel": """You are an AI assistant for a premium hotel. Help guests with:
- Room reservations and check-in/checkout
- Amenities and facilities information
- Dining reservations and special requests
- Local recommendations and tourist information
- Billing and account inquiries
Be professional, warm, and helpful. Always aim to enhance the guest experience.""",
    
    "school": """You are an AI assistant for an educational institution. Help students, parents, and staff with:
- Admissions and enrollment inquiries
- Academic programs and course information
- Exam schedules and results assistance
- Attendance and assignment tracking
- Campus facilities and resources
- Tuition and fee information
Be supportive, informative, and encouraging. Foster a positive learning environment.""",
    
    "support": """You are a professional customer support AI assistant. Help customers with:
- Product inquiries and technical support
- Troubleshooting and issue resolution
- Account management and billing
- Refunds and returns
- Best practices and usage tips
Be empathetic, efficient, and solution-oriented. Escalate to human agents if needed."""
}


async def get_ai_response(message: str, bot_type: str = "support") -> str:
    """Call the LLM provider and return a single assistant reply."""
    if not LLM_API_KEY:
        raise HTTPException(status_code=500, detail="AI service not configured")

    system_prompt = BOT_PROMPTS.get(bot_type, BOT_PROMPTS["support"])

    try:
        async with httpx.AsyncClient(timeout=30.0) as client:
            response = await client.post(
                GROQ_API_URL,
                headers={
                    "Authorization": f"Bearer {LLM_API_KEY}",
                    "Content-Type": "application/json"
                },
                json={
                    "model": LLM_MODEL,
                    "messages": [
                        {"role": "system", "content": system_prompt},
                        {"role": "user", "content": message}
                    ],
                    "max_tokens": 800,
                    "temperature": 0.7
                }
            )

            if response.status_code != 200:
                raise HTTPException(status_code=500, detail="AI service error")

            data = response.json()
            return data["choices"][0]["message"]["content"]

    except httpx.TimeoutException:
        raise HTTPException(status_code=504, detail="AI service timeout")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"AI service error: {str(e)}")


@router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """AI Chat endpoint for a lightweight demo experience."""
    if not request.message.strip():
        raise HTTPException(status_code=400, detail="Message cannot be empty")

    if len(request.message) > 5000:
        raise HTTPException(status_code=400, detail="Message too long (max 5000 characters)")

    logger.info(f"Processing chat request for bot_type: {request.bot_type}")

    reply = await get_ai_response(request.message, request.bot_type)
    session_id = request.session_id or str(uuid.uuid4())

    return ChatResponse(
        reply=reply,
        session_id=session_id,
        message_id=str(uuid.uuid4()),
        timestamp=datetime.utcnow()
    )
