
"""
Database Connection Configuration
Uses SQLAlchemy ORM for PostgreSQL database management
"""

import os
from urllib.parse import urlparse
from sqlalchemy import create_engine, event
from sqlalchemy.orm import sessionmaker, declarative_base
from sqlalchemy.pool import StaticPool
from dotenv import load_dotenv

# Load environment variables from .env file in the backend directory
load_dotenv(os.path.join(os.path.dirname(__file__), '..', '..', '.env'))

# Get database URL from environment
DATABASE_URL = os.getenv("DATABASE_URL")
ENVIRONMENT = os.getenv("ENVIRONMENT", "development").lower()

if not DATABASE_URL:
    raise ValueError("DATABASE_URL environment variable is required")

if "postgresql" in DATABASE_URL:
    parsed = urlparse(DATABASE_URL)
    if parsed.hostname and parsed.hostname.startswith("dpg-") and "." not in parsed.hostname:
        raise ValueError(
            "DATABASE_URL host appears incomplete. "
            "Use the full Render hostname, e.g. dpg-xxxx.postgres.render.com. "
            f"Current host: {parsed.hostname}"
        )

db_type = 'PostgreSQL' if 'postgresql' in DATABASE_URL else 'SQLite'
print(f"Connecting to database: {db_type}")

# Connection settings based on database type
if "postgresql" in DATABASE_URL:
    engine = create_engine(
        DATABASE_URL,
        pool_size=10,
        max_overflow=20,
        pool_pre_ping=True,
        pool_recycle=300,
        echo=os.getenv("SQL_ECHO", "false").lower() == "true"
    )

    if ENVIRONMENT != 'production':
        try:
            with engine.connect() as connection:
                pass
        except Exception as connect_error:
            print("WARNING: PostgreSQL connection failed. Falling back to local SQLite for development.")
            print(f"  Reason: {connect_error}")
            engine = create_engine(
                "sqlite:///./dev.db",
                connect_args={"check_same_thread": False},
                poolclass=StaticPool,
                echo=os.getenv("SQL_ECHO", "false").lower() == "true"
            )
else:
    print("WARNING: Using SQLite database. Set DATABASE_URL for PostgreSQL.")
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
