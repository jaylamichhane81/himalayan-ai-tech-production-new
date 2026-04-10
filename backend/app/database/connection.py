
"""
Database Connection Configuration
Uses SQLAlchemy ORM for PostgreSQL database management
"""

import os
from sqlalchemy import create_engine, event
from sqlalchemy.orm import sessionmaker, declarative_base
import os
from sqlalchemy.pool import StaticPool
from dotenv import load_dotenv

# Load environment variables from .env file in the backend directory
# load_dotenv(os.path.join(os.path.dirname(__file__), '..', '..', '.env'))

# print(f"🔗 Loading .env from: {os.path.join(os.path.dirname(__file__), '..', '..', '.env')}")
# print(f"🔗 GROQ_API_KEY loaded: {bool(os.getenv('GROQ_API_KEY'))}")

# Get database URL from environment
DATABASE_URL = os.getenv("DATABASE_URL")

if not DATABASE_URL:
    raise ValueError("DATABASE_URL environment variable is required")

print(f"🔗 Connecting to database: {'PostgreSQL' if 'postgresql' in DATABASE_URL else 'SQLite'}")

# Connection settings based on database type
if "postgresql" in DATABASE_URL:
    # PostgreSQL production settings
    engine = create_engine(
        DATABASE_URL,
        pool_size=10,
        max_overflow=20,
        pool_pre_ping=True,  # Test connections before using
        pool_recycle=300,  # Recycle connections after 5 minutes
        echo=os.getenv("SQL_ECHO", "false").lower() == "true"
    )
else:
    # SQLite development settings (fallback)
    print("⚠️ WARNING: Using SQLite database. Set DATABASE_URL for PostgreSQL.")
    engine = create_engine(
        DATABASE_URL,
        connect_args={"check_same_thread": False},
        poolclass=StaticPool,
        echo=os.getenv("SQL_ECHO", "false").lower() == "true"
    )

# Session factory
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class for all models
Base = declarative_base()

def get_db():
    """Dependency for getting database session in routes"""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
