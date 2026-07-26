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

    if courier == "Amazon Logistics":
        from app.services.amazon import track_amazon

        data = track_amazon(request.trackingUrl)

    elif courier == "Flipkart":
        from app.services.flipkart import track_flipkart

        data = track_flipkart(request.trackingUrl)

    elif courier == "DHL":
        from app.services.dhl import track_dhl

        data = track_dhl(request.trackingUrl)

    else:
        data = {
            "courier": courier,
            "trackingId": tracking_id,
            "origin": "Unknown",
            "destination": "Unknown",
            "status": "Tracking Not Available",
            "eta": "-",
            "confidence": 0,
        }

    return TrackResponse(**data)