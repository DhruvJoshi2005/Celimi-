from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from dotenv import load_dotenv
import os
import uvicorn

# Load environment variables from .env file
load_dotenv()

# Setup FastAPI app
app = FastAPI()

# Allow CORS for React frontend (adjust port if needed)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173",
                "http://celimi-frontend.s3-website.ap-south-1.amazonaws.com/"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB connection
MONGO_URI = os.getenv("MONGO_URI")
client = MongoClient(MONGO_URI)
db = client["coming_soon_db"]
collection = db["subscribers"]

# Route to receive email
@app.post("/subscribe")
async def subscribe(request: Request):
    try:
        data = await request.json()
        email = data.get("email")

        if not email:
            return {"status": "error", "message": "Email is required"}

        # Check if email already exists
        if collection.find_one({"email": email}):
            return {"status": "error", "message": "Email already subscribed"}

        collection.insert_one({"email": email})
        return {"status": "success", "message": "Email saved successfully"}
    
    except Exception as e:
        return {"status": "error", "message": str(e)}

# Run with: uvicorn main:app --reload
