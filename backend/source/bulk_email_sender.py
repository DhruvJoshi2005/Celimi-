from pymongo import MongoClient
import smtplib
from email.message import EmailMessage
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

EMAIL_ADDRESS = os.getenv("EMAIL_ADDRESS")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")
MONGO_URI = os.getenv("MONGO_URI")

# Connect to MongoDB
client = MongoClient(MONGO_URI)
db = client["coming_soon_db"]              # ✅ Your DB
collection = db["subscribers"]             # ✅ Your Collection

# Fetch all email addresses from 'email' field
emails_cursor = collection.find({}, {"email": 1, "_id": 0})
email_list = [doc["email"] for doc in emails_cursor if "email" in doc]
print("Fetched emails:", email_list)


# Email content
subject = "🚀 Welcome to Our Early Access List!"
body = """
Hi there,

You're receiving this email because you subscribed to get notified when we launch.

Thanks for your interest — we're launching soon!

Best,
celimi
"""

# Prepare reusable email object
msg = EmailMessage()
msg["Subject"] = subject
msg["From"] = EMAIL_ADDRESS
msg.set_content(body)

# Send email to all subscribers
with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
    smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
    for email in email_list:
        msg["To"] = email
        try:
            smtp.send_message(msg)
            print(f"✅ Email sent to: {email}")
        except Exception as e:
            print(f"❌ Failed to send to {email}: {e}")
        del msg["To"]  # Remove "To" field for next loop
