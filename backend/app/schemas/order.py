from pydantic import BaseModel

from app.constants.order_status import OrderStatus


class OrderCreate(BaseModel):
    sender_name: str
    receiver_name: str
    source: str
    destination: str
    parcel_name: str
    weight: float


class OrderStatusUpdate(BaseModel):
    status: OrderStatus


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