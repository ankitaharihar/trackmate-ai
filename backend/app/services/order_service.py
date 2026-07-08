from app.constants.order_status import OrderStatus
from sqlalchemy.orm import Session

from app.models.order import Order
from app.models.user import User
from app.models.tracking_event import TrackingEvent
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


# -----------------------------
# GET ALL ORDERS OF CURRENT USER
# -----------------------------
def get_user_orders(
    db: Session,
    user_id: int,
):
    return (
        db.query(Order)
        .filter(Order.user_id == user_id)
        .all()
    )


# -----------------------------
# GET ORDER BY TRACKING ID
# -----------------------------
def get_order_by_tracking_id(
    db: Session,
    tracking_id: str,
):
    return (
        db.query(Order)
        .filter(Order.tracking_id == tracking_id)
        .first()
    )

from app.constants.order_status import OrderStatus


def update_order_status(
    db: Session,
    tracking_id: str,
    status: OrderStatus,
    current_user: User,
):
    order = (
        db.query(Order)
        .filter(Order.tracking_id == tracking_id)
        .first()
    )

    if not order:
        return None

    if order.user_id != current_user.id:
        return "FORBIDDEN"

    order.status = status

    tracking_event = TrackingEvent(
        order_id=order.id,
        status=status.value,
        location="System",
        description=f"Order status updated to {status.value}",
    )

    db.add(tracking_event)

    db.commit()

    db.refresh(order)

    return order

def delete_order(
    db: Session,
    tracking_id: str,
    current_user: User,
):
    order = get_order_by_tracking_id(
        db,
        tracking_id,
    )

    if order is None:
        return None

    if order.user_id != current_user.id:
        return "FORBIDDEN"

    db.delete(order)
    db.commit()

    return True