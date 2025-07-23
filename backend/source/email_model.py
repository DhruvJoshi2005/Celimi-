from pydantic import BaseModel, EmailStr

class EmailEntry(BaseModel):
    email: EmailStr
