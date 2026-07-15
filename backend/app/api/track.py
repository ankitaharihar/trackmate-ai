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
    return TrackResponse(
        courier="Amazon Logistics",
        trackingId="TM982731",
        origin="Mumbai",
        destination="Pune",
        status="In Transit",
        eta="Tomorrow 2:30 PM",
        confidence=98.7,
    )