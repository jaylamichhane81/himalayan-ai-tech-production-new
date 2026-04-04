"""
Authentication Router
Handles JWT token generation and verification with secure credential management
"""

from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from datetime import datetime, timedelta
import jwt
import os
from ..models import AdminLogin, AdminToken
from dotenv import load_dotenv

# Load environment variables
load_dotenv(os.path.join(os.path.dirname(__file__), '..', '..', '.env'))

router = APIRouter(prefix="/auth")

# Security configuration from environment variables
import secrets

SECRET_KEY = os.getenv("JWT_SECRET")
if not SECRET_KEY:
    # Force explicit configuration in production
    if os.getenv("ENVIRONMENT") == "production":
        raise ValueError("JWT_SECRET environment variable is required in production")
    # Use a random key for development
    SECRET_KEY = secrets.token_urlsafe(32)
    print("⚠️ WARNING: Using random JWT_SECRET for development. Set JWT_SECRET env var for persistence.")

ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# Admin credentials from environment variables
ADMIN_USERNAME = os.getenv("admin")
ADMIN_PASSWORD = os.getenv("admin012")

# Treat placeholders as unset values to avoid locked-out development states
def _normalize_credential(val: str | None) -> str | None:
    if not val:
        return None
    trimmed = val.strip()
    if trimmed == "" or trimmed.upper() in {"REPLACE_ME", "YOUR_PASSWORD", "YOUR_ADMIN_PASSWORD"}:
        return None
    return trimmed

ADMIN_USERNAME = _normalize_credential(ADMIN_USERNAME)
ADMIN_PASSWORD = _normalize_credential(ADMIN_PASSWORD)

if not ADMIN_USERNAME or not ADMIN_PASSWORD:
    if os.getenv("ENVIRONMENT") == "production":
        raise ValueError("ADMIN_USERNAME and ADMIN_PASSWORD environment variables are required in production")
    print("⚠️ WARNING: Using default admin credentials for development (admin/password123)")
    ADMIN_USERNAME = "admin"
    ADMIN_PASSWORD = "password123"

security = HTTPBearer()


def create_access_token(data: dict, expires_delta: timedelta | None = None) -> str:
    """Create JWT token with expiration"""
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def verify_token(credentials: HTTPAuthorizationCredentials = Depends(security)) -> str:
    """Verify JWT token from Authorization header"""
    token = credentials.credentials
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise HTTPException(status_code=401, detail="Invalid token")
        return username
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")


@router.post("/login", response_model=AdminToken)
def login(credentials: AdminLogin) -> AdminToken:
    """Admin login endpoint"""
    # Validate credentials
    if credentials.username != ADMIN_USERNAME or \
       credentials.password != ADMIN_PASSWORD:
        raise HTTPException(
            status_code=401,
            detail="Invalid username or password"
        )
    
    # Create access token
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": credentials.username},
        expires_delta=access_token_expires
    )
    
    return AdminToken(
        access_token=access_token,
        token_type="bearer",
        expires_in=ACCESS_TOKEN_EXPIRE_MINUTES * 60
    )


@router.get("/verify")
def verify(username: str = Depends(verify_token)) -> dict:
    """Verify token and return user info"""
    return {"status": "authorized", "username": username}


@router.post("/logout")
def logout() -> dict:
    """Logout endpoint (tokens are stateless, this is informational)"""
    return {"status": "logged out", "message": "Please discard the token"}
