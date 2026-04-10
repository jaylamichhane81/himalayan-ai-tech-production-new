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


async def get_ai_response(message: str) -> str:
    """Call the LLM provider and return a single assistant reply."""
    if not LLM_API_KEY:
        raise HTTPException(status_code=500, detail="AI service not configured")

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
                    "messages": [{"role": "user", "content": message}],
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

    logger.info("Processing chat request")

    reply = await get_ai_response(request.message)
    session_id = request.session_id or str(uuid.uuid4())

    return ChatResponse(
        reply=reply,
        session_id=session_id,
        message_id=str(uuid.uuid4()),
        timestamp=datetime.utcnow()
    )
