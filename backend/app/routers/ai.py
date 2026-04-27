"""
AI Chat Router
Simple AI chatbot endpoint for customer demos and business questions
"""

from fastapi import APIRouter, HTTPException
from fastapi.responses import StreamingResponse
from datetime import datetime
import uuid
import os
import httpx
import logging
import random
import json
import asyncio

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
        # Demo mode: return a helpful response without requiring API key
        demo_responses = [
            "Hello! I'm the Himalayan AI Tech Pro assistant. I'm here to help you learn about our AI-powered solutions for business automation, data analytics, and intelligent systems. What would you like to know?",
            "Thank you for your interest in Himalayan AI Tech Pro! We specialize in cutting-edge AI technologies including machine learning, natural language processing, and computer vision. How can I assist you today?",
            "That's a great question! At Himalayan AI Tech Pro, we focus on delivering scalable AI solutions that drive business value. Our expertise includes custom AI model development, API integrations, and automated workflows. What specific area interests you?",
            "I'm excited to help you explore our AI capabilities! We offer comprehensive services from initial consultation to full implementation. Whether you're looking to automate processes, gain insights from data, or build intelligent applications, we're here to guide you through the journey."
        ]
        return random.choice(demo_responses)

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


async def get_ai_response_stream(message: str, bot_type: str = "support"):
    """Call the LLM provider and stream the assistant reply."""
    if not LLM_API_KEY:
        # Demo mode: simulate streaming response
        demo_response = random.choice([
            "Hello! I'm the Himalayan AI Tech Pro assistant. I'm here to help you learn about our AI-powered solutions for business automation, data analytics, and intelligent systems. What would you like to know?",
            "Thank you for your interest in Himalayan AI Tech Pro! We specialize in cutting-edge AI technologies including machine learning, natural language processing, and computer vision. How can I assist you today?",
            "That's a great question! At Himalayan AI Tech Pro, we focus on delivering scalable AI solutions that drive business value. Our expertise includes custom AI model development, API integrations, and automated workflows. What specific area interests you?",
            "I'm excited to help you explore our AI capabilities! We offer comprehensive services from initial consultation to full implementation. Whether you're looking to automate processes, gain insights from data, or build intelligent applications, we're here to guide you through the journey."
        ])

        # Simulate streaming by yielding chunks
        words = demo_response.split()
        for i, word in enumerate(words):
            chunk = {
                "content": word + " ",
                "done": i == len(words) - 1
            }
            yield f"data: {json.dumps(chunk)}\n\n"
            await asyncio.sleep(0.05)  # Simulate typing delay
        return

    system_prompt = BOT_PROMPTS.get(bot_type, BOT_PROMPTS["support"])

    try:
        async with httpx.AsyncClient(timeout=60.0) as client:
            async with client.stream(
                "POST",
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
                    "temperature": 0.7,
                    "stream": True
                }
            ) as response:
                if response.status_code != 200:
                    raise HTTPException(status_code=500, detail="AI service error")

                async for line in response.aiter_lines():
                    if line.startswith("data: "):
                        data = line[6:]  # Remove "data: " prefix
                        if data == "[DONE]":
                            yield f"data: {json.dumps({'done': True})}\n\n"
                            break

                        try:
                            chunk = json.loads(data)
                            if chunk.get("choices") and len(chunk["choices"]) > 0:
                                delta = chunk["choices"][0].get("delta", {})
                                content = delta.get("content", "")
                                if content:
                                    yield f"data: {json.dumps({'content': content})}\n\n"
                        except json.JSONDecodeError:
                            continue

    except httpx.TimeoutException:
        yield f"data: {json.dumps({'error': 'AI service timeout'})}\n\n"
    except Exception as e:
        yield f"data: {json.dumps({'error': f'AI service error: {str(e)}'})}\n\n"
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


@router.post("/chat/stream")
async def chat_stream(request: ChatRequest):
    """Streaming AI Chat endpoint for real-time responses."""
    if not request.message.strip():
        raise HTTPException(status_code=400, detail="Message cannot be empty")

    if len(request.message) > 5000:
        raise HTTPException(status_code=400, detail="Message too long (max 5000 characters)")

    logger.info(f"Processing streaming chat request for bot_type: {request.bot_type}")

    return StreamingResponse(
        get_ai_response_stream(request.message, request.bot_type),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Cache-Control",
        }
    )
