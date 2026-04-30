"""
Himalayan AI Tech Pro - Main Application Entry Point
Simple backend for AI chat and contact lead capture
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
import logging
from contextlib import asynccontextmanager
from dotenv import load_dotenv
from starlette.requests import Request
from starlette.responses import Response as StarletteResponse

# Load environment variables
load_dotenv(os.path.join(os.path.dirname(__file__), '..', '.env'))

from .routers import ai, contact
from .database.connection import engine, Base

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)

# Initialize database tables
def init_db():
    """Create all required database tables"""
    Base.metadata.create_all(bind=engine)


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Application lifespan context manager"""
    init_db()
    logging.info("✓ Database initialized")
    yield
    logging.info("✓ Application shutdown")


app = FastAPI(
    title="Himalayan AI Tech Pro API",
    description="Fast API for AI chat and contact capture",
    version="1.0.0",
    lifespan=lifespan,
)

@app.middleware("http")
async def add_cors_headers(request: Request, call_next):
    if request.method == "OPTIONS":
        return StarletteResponse(status_code=204, headers={
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE,OPTIONS",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Max-Age": "3600",
        })
    response = await call_next(request)
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "GET,POST,PUT,PATCH,DELETE,OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "*"
    return response

# Include only MVP routers
app.include_router(ai.router)
app.include_router(contact.router)


@app.get("/")
def home():
    """Root endpoint - health check"""
    return {
        "status": "✅ Himalayan AI Tech Backend Running",
        "version": "1.0.0",
        "docs": "/docs",
        "environment": os.getenv("ENVIRONMENT", "development")
    }


@app.get("/health")
def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "service": "himalayan-ai-backend",
        "environment": os.getenv("ENVIRONMENT", "development")
    }
