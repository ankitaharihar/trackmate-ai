from fastapi import FastAPI

from app.api import (
    auth,
    users,
    orders,
    tracking,
    analytics,
)

app = FastAPI(
    title="TrackMate AI",
    description="AI-powered parcel tracking platform",
    version="1.0.0",
)

app.include_router(auth.router)
app.include_router(users.router)
app.include_router(orders.router)
app.include_router(tracking.router)
app.include_router(analytics.router)



@app.get("/", tags=["Root"])
def root():
    return {
        "message": "Welcome to TrackMate AI 🚀"
    }