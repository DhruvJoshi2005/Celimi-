from fastapi import APIRouter, HTTPException, Request
from source.models import RegisterModel, LoginModel
from source.database import db
from source.utils import hash_password, verify_password, create_jwt_token, create_refresh_token, decode_refresh_token
from passlib.context import CryptContext
from datetime import datetime


router = APIRouter()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


@router.post("/register")
async def register(user: RegisterModel):
    users = db["users"]
    existing = await users.find_one({"email": user.email})
    if existing:
        raise HTTPException(status_code=400, detail="User already registered")

    hashed_pw = hash_password(user.password)
    await users.insert_one({"email": user.email, "password": hashed_pw})
    return {"msg": "User registered successfully"}


@router.post("/login")
async def login(user: LoginModel, request: Request):
    users = db["users"]
    db_user = await users.find_one({"email": user.email})
    if not db_user or not verify_password(user.password, db_user["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    payload = {"sub": user.email}
    access_token = create_jwt_token(payload)
    refresh_token = create_refresh_token(payload)
    hashed_refresh_token = hash_password(refresh_token)
    device = request.headers.get("user-agent", "unknown")

    await users.update_one(
        {"email": user.email},
        {"$push": {"refresh_tokens": {
            "token": hashed_refresh_token,
            "device": device,
            "created_at": datetime.utcnow()
        }}}
    )

    return {
        "access_token": access_token,
        "refresh_token": refresh_token,
        "token_type": "bearer"
    }



@router.post("/refresh")
async def refresh_token(request: Request):
    body = await request.json()
    incoming_token = body.get("refresh_token")

    if not incoming_token:
        raise HTTPException(status_code=400, detail="Refresh token missing")

    try:
        payload = decode_refresh_token(incoming_token)
        email = payload.get("sub")
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid or expired refresh token")

    users = db["users"]
    user = await users.find_one({"email": email})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    # Step 1: Find the matching hashed token in the stored list
    stored_tokens = user.get("refresh_tokens", [])
    matched_index = None

    for i, entry in enumerate(stored_tokens):
        if verify_password(incoming_token, entry["token"]):
            matched_index = i
            break

    if matched_index is None:
        raise HTTPException(status_code=403, detail="Refresh token invalid or revoked")

    # Step 2: Generate new tokens
    new_payload = {"sub": email}
    new_access_token = create_jwt_token(new_payload)
    new_refresh_token = create_refresh_token(new_payload)
    new_hashed = hash_password(new_refresh_token)
    device = request.headers.get("user-agent", "unknown")

    # Step 3: Replace the old token with the new one at the matched index
    stored_tokens[matched_index] = {
        "token": new_hashed,
        "device": device,
        "created_at": datetime.utcnow()
    }

    await users.update_one(
        {"email": email},
        {"$set": {"refresh_tokens": stored_tokens}}
    )

    return {
        "access_token": new_access_token,
        "refresh_token": new_refresh_token,
        "token_type": "bearer"
    }


@router.post("/logout")
async def logout(request: Request):
    body = await request.json()
    incoming_token = body.get("refresh_token")

    if not incoming_token:
        raise HTTPException(status_code=400, detail="Refresh token missing")

    try:
        payload = decode_refresh_token(incoming_token)
        email = payload.get("sub")
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid or expired refresh token")

    users = db["users"]
    user = await users.find_one({"email": email})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    # Filter out the matching refresh token
    new_tokens = []
    for entry in user.get("refresh_tokens", []):
        if not verify_password(incoming_token, entry["token"]):
            new_tokens.append(entry)

    await users.update_one(
        {"email": email},
        {"$set": {"refresh_tokens": new_tokens}}
    )

    return {"msg": "Logged out successfully"}
