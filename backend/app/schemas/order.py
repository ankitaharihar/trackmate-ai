from pydantic import BaseModel


class OrderCreate(BaseModel):
    sender_name: str
    receiver_name: str
    source: str
    destination: str
    parcel_name: str
    weight: float


class OrderResponse(BaseModel):
    id: int
    tracking_id: str
    sender_name: str
    receiver_name: str
    source: str
    destination: str
    parcel_name: str
    weight: float
    status: str

    class Config:
        from_attributes = True