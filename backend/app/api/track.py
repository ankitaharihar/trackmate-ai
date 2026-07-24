from fastapi import APIRouter, HTTPException
from app.services.url_validator import is_valid_tracking_url
from app.services.courier_detector import (
    detect_courier,
    extract_tracking_id,
)
from fastapi import APIRouter
from pydantic import BaseModel


router = APIRouter(
    prefix="/api",
    tags=["AI Tracking"],
)


class TrackRequest(BaseModel):
    trackingUrl: str


class TrackResponse(BaseModel):
    courier: str
    trackingId: str
    origin: str
    destination: str
    status: str
    eta: str
    confidence: float

@router.post("/track", response_model=TrackResponse)
async def track_parcel(request: TrackRequest):
 if not is_valid_tracking_url(request.trackingUrl):
    raise HTTPException(
        status_code=400,
        detail="Invalid or unsupported tracking URL.",
    )  
    courier = detect_courier(request.trackingUrl)
    tracking_id = extract_tracking_id(request.trackingUrl)

    return TrackResponse(
        courier=courier,
        trackingId=tracking_id,
        origin="Mumbai",
        destination="Pune",
        status="In Transit",
        eta="Tomorrow 2:30 PM",
        confidence=98.7,
    )