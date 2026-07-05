from datetime import datetime

from pydantic import BaseModel


class TrackingEventCreate(BaseModel):
    tracking_id: str
    status: str
    location: str
    description: str


class TrackingEventResponse(BaseModel):
    id: int
    status: str
    location: str
    description: str
    created_at: datetime

    class Config:
        from_attributes = True