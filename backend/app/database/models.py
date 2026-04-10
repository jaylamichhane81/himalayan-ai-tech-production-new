"""
SQLAlchemy Database Models
Defines the schema for the minimal backend tables
"""

from sqlalchemy import Column, String, Text, DateTime, Index
from sqlalchemy.sql import func
from .connection import Base

class Contact(Base):
    """Contact form submission database model"""
    __tablename__ = "contacts"

    id = Column(String(36), primary_key=True, index=True)
    name = Column(String(100), nullable=False, index=True)
    email = Column(String(255), nullable=False, index=True)
    project = Column(Text, nullable=False)
    phone = Column(String(20), nullable=True)
    budget = Column(String(100), nullable=True)
    created_at = Column(DateTime, server_default=func.now(), nullable=False, index=True)

    __table_args__ = (
        Index('idx_contact_created', 'created_at'),
        Index('idx_contact_email', 'email'),
    )



