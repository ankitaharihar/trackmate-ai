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


def detect_courier(url: str) -> str:
    url = url.lower()

    if "amazon" in url:
        return "Amazon Logistics"

    elif "flipkart" in url:
        return "Flipkart"

    elif "dhl" in url:
        return "DHL"

    elif "bluedart" in url:
        return "Blue Dart"

    elif "dtdc" in url:
        return "DTDC"

    elif "delhivery" in url:
        return "Delhivery"

    elif "fedex" in url:
        return "FedEx"

    elif "indiapost" in url:
        return "India Post"

    return "Unknown Courier"


@router.post("/track", response_model=TrackResponse)
async def track_parcel(request: TrackRequest):

    courier = detect_courier(request.trackingUrl)

    return TrackResponse(
        courier=courier,
        trackingId="TM982731",
        origin="Mumbai",
        destination="Pune",
        status="In Transit",
        eta="Tomorrow 2:30 PM",
        confidence=98.7,
    )