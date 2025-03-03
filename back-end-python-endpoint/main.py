# Basic EDI System by Carl Mesias
# 
# Server end-point that handles get requests from both 
# supplier and customer front-end website
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class UserRegisterData(BaseModel):
    email: str
    password_hash: str

@app.get("/")
async def root():
    return {"message": "Hello crawlers of the world!"}

@app.post("/register")
async def register_user(user: UserRegisterData):
    return {"message": "Hello to the Register Page",
            "user": user}

@app.get("/login")
async def login_user():
    return {"message": "Welcome to the Login Page!"}










