from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from app.api import track
from app.api import (
    auth,
    users,
    orders,
    tracking,
    analytics,
    track
)

app = FastAPI(
    title="TrackMate AI",
    description="AI-powered parcel tracking platform",
    version="1.0.0",
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(users.router)
app.include_router(orders.router)
app.include_router(tracking.router)
app.include_router(analytics.router)
app.include_router(track.router)



@app.get("/", tags=["Root"])
def root():
    return {
        "message": "Welcome to TrackMate AI 🚀"
    }