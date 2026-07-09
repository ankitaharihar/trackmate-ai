from pydantic import BaseModel


class DashboardStats(BaseModel):
    total_orders: int
    pending: int
    picked_up: int
    in_transit: int
    out_for_delivery: int
    delivered: int
    cancelled: int


class RecentOrder(BaseModel):
    tracking_id: str
    receiver_name: str
    destination: str
    status: str

    class Config:
        from_attributes = True