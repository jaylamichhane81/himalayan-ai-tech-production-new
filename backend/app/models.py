from pydantic import BaseModel, EmailStr, Field
from datetime import datetime
from typing import Optional

class ContactRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    project: str = Field(..., min_length=10, max_length=5000)
    phone: Optional[str] = None
    budget: Optional[str] = None

class ContactResponse(BaseModel):
    status: str
    message: str
    id: str
    created_at: datetime

class ContactListResponse(BaseModel):
    id: str
    name: str
    email: str
    project: str
    phone: Optional[str] = None
    budget: Optional[str] = None
    created_at: datetime

class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=1000)
    session_id: Optional[str] = None
    bot_type: str = Field(default="support", pattern="^(hotel|school|support)$")

class ChatResponse(BaseModel):
    reply: str
    session_id: str
    message_id: str
    timestamp: datetime
