from sqlalchemy.orm import Session

from app.models.order import Order
from app.models.user import User
from app.schemas.order import OrderCreate
from app.utils.tracking import generate_tracking_id


def create_order(
    db: Session,
    order: OrderCreate,
    current_user: User,
):
    new_order = Order(
        tracking_id=generate_tracking_id(),
        sender_name=order.sender_name,
        receiver_name=order.receiver_name,
        source=order.source,
        destination=order.destination,
        parcel_name=order.parcel_name,
        weight=order.weight,
        user_id=current_user.id,
    )

    db.add(new_order)
    db.commit()
    db.refresh(new_order)

    return new_order