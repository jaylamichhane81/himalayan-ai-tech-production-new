"""
AI Chat Router
Handles AI chatbot interactions with conversation history persistence
"""

from fastapi import APIRouter, HTTPException, Depends
from datetime import datetime
from sqlalchemy.orm import Session
import uuid
import os
import httpx
import logging

from ..models import ChatRequest, ChatResponse
from ..database.connection import get_db
from ..database.models import ChatSession as ChatSessionModel

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/ai")

# LLM Configuration
LLM_API_KEY = os.getenv("GROQ_API_KEY")
LLM_MODEL = os.getenv("LLM_MODEL", "llama-3.1-8b-instant")
GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"


async def get_ai_response(message: str) -> str:
    """
    Get AI response from Groq API
    """
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
                    "max_tokens": 1000,
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
async def chat(request: ChatRequest, db: Session = Depends(get_db)):
    """
    AI Chat endpoint
    Accepts user messages and returns AI responses with persistent history
    """
    try:
        if not request.message.strip():
            raise HTTPException(status_code=400, detail="Message cannot be empty")
        
        if len(request.message) > 5000:
            raise HTTPException(status_code=400, detail="Message too long (max 5000 characters)")
        
        logger.info(f"Processing chat request for session: {request.session_id}")
        
        # Get AI response
        reply = await get_ai_response(request.message)
        
        # Create session ID if not provided
        session_id = request.session_id or str(uuid.uuid4())
        
        # Store chat record in database
        chat_record = ChatSessionModel(
            id=str(uuid.uuid4()),
            session_id=session_id,
            user_message=request.message,
            ai_reply=reply,
            user_info="user"
        )
        
        db.add(chat_record)
        db.commit()
        db.refresh(chat_record)
        
        logger.info(f"Chat response saved for session: {session_id}")
        
        return ChatResponse(
            reply=reply,
            session_id=session_id,
            timestamp=chat_record.created_at
        )
    
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Chat error: {str(e)}")
        db.rollback()
        raise HTTPException(status_code=500, detail=f"Chat error: {str(e)}")


@router.get("/chat/history/{session_id}")
def get_chat_history(session_id: str, limit: int = 50, db: Session = Depends(get_db)):
    """Get chat history for a session"""
    history = db.query(ChatSessionModel).filter(
        ChatSessionModel.session_id == session_id
    ).order_by(ChatSessionModel.created_at).limit(limit).all()
    
    return {
        "session_id": session_id,
        "total_messages": len(history),
        "messages": [
            {
                "id": h.id,
                "user_message": h.user_message,
                "ai_reply": h.ai_reply,
                "created_at": h.created_at.isoformat(),
            }
            for h in history
        ]
    }

@router.get("/stats")
def ai_stats(db: Session = Depends(get_db)):
    """Get AI chat statistics"""
    from sqlalchemy import distinct, func
    
    total_messages = db.query(ChatSessionModel).count()
    unique_sessions = db.query(distinct(ChatSessionModel.session_id)).count()
    
    return {
        "total_messages": total_messages,
        "unique_sessions": unique_sessions,
        "average_messages_per_session": total_messages / max(unique_sessions, 1)
    }

@router.post("/chat/feedback")
def chat_feedback(session_id: str, message_id: str, rating: int, db: Session = Depends(get_db)):
    """Record user feedback on AI response"""
    try:
        if rating not in [1, 2, 3, 4, 5]:
            raise HTTPException(status_code=400, detail="Rating must be 1-5")
        
        chat = db.query(ChatSessionModel).filter(ChatSessionModel.id == message_id).first()
        if not chat:
            raise HTTPException(status_code=404, detail="Message not found")
        
        chat.user_rating = rating
        chat.feedback_at = datetime.utcnow()
        db.commit()
        
        return {"status": "success", "message": "Feedback recorded"}
    except HTTPException:
        raise
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
