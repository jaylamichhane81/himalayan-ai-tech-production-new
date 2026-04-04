"""
Contact Form Router
Handles contact form submissions with database persistence
"""

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel, EmailStr, Field
from datetime import datetime
from sqlalchemy.orm import Session
import uuid
import os
import logging
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

from ..models import ContactRequest, ContactResponse
from ..database.connection import get_db
from ..database.models import Contact as ContactModel
from .auth import verify_token

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/contact")


async def send_contact_email(contact: ContactModel):
    """Send notification email for new contact"""
    sendgrid_key = os.getenv("SENDGRID_API_KEY")
    from_email = os.getenv("FROM_EMAIL", "noreply@himalayanaitech.com")
    admin_email = os.getenv("ADMIN_EMAIL", "admin@himalayanaitech.com")
    
    if not sendgrid_key:
        logger.warning("SendGrid not configured, skipping email notification")
        return
    
    try:
        sg = SendGridAPIClient(sendgrid_key)
        subject = f"New Contact Form Submission: {contact.name}"
        html_content = f"""
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> {contact.name}</p>
        <p><strong>Email:</strong> {contact.email}</p>
        <p><strong>Phone:</strong> {contact.phone or 'Not provided'}</p>
        <p><strong>Budget:</strong> {contact.budget or 'Not specified'}</p>
        <p><strong>Project:</strong></p>
        <p>{contact.project}</p>
        <p><strong>Submitted:</strong> {contact.created_at}</p>
        """
        
        message = Mail(
            from_email=from_email,
            to_emails=admin_email,
            subject=subject,
            html_content=html_content
        )
        
        response = sg.send(message)
        if response.status_code == 202:
            logger.info(f"Contact email sent for {contact.email}")
        else:
            logger.error(f"Failed to send contact email: {response.status_code}")
            
    except Exception as e:
        logger.error(f"Email sending error: {str(e)}")


@router.post("/", response_model=ContactResponse)
async def save_contact(data: ContactRequest, db: Session = Depends(get_db)):
    """Save contact form submission to database"""
    contact_id = str(uuid.uuid4())
    
    # Create database record
    db_contact = ContactModel(
        id=contact_id,
        name=data.name,
        email=data.email,
        project=data.project,
        phone=data.phone,
        budget=data.budget,
    )
    
    try:
        db.add(db_contact)
        db.commit()
        db.refresh(db_contact)
        
        # Send notification email
        await send_contact_email(db_contact)
        
        return ContactResponse(
            status="success",
            message=f"Thank you {data.name}! We'll review your project and connect within 24 hours.",
            id=contact_id,
            created_at=db_contact.created_at
        )
    except Exception as e:
        db.rollback()
        logger.error(f"Contact save error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to save contact: {str(e)}")


@router.get("/")
def get_contacts(username: str = Depends(verify_token), db: Session = Depends(get_db)):
    """Get all contacts (admin only - requires authentication)"""
    contacts = db.query(ContactModel).all()
    return {
        "total": len(contacts),
        "messages": [
            {
                "id": c.id,
                "name": c.name,
                "email": c.email,
                "project": c.project,
                "phone": c.phone,
                "budget": c.budget,
                "created_at": c.created_at.isoformat(),
            }
            for c in contacts
        ]
    }
