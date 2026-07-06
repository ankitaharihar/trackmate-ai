from sqlalchemy.orm import Session

from app.models.order import Order
from app.models.tracking_event import TrackingEvent
from app.schemas.tracking import TrackingEventCreate


def create_tracking_event(
    db: Session,
    event: TrackingEventCreate,
):
    order = (
        db.query(Order)
        .filter(
            Order.tracking_id == event.tracking_id
        )
        .first()
    )

    if order is None:
        return None

    tracking_event = TrackingEvent(
        order_id=order.id,
        status=event.status,
        location=event.location,
        description=event.description,
    )

    db.add(tracking_event)
    db.commit()
    db.refresh(tracking_event)

    return tracking_event


def get_tracking_history(
    db: Session,
    tracking_id: str,
):
    order = (
        db.query(Order)
        .filter(
            Order.tracking_id == tracking_id
        )
        .first()
    )

    if order is None:
        return None

    return (
        db.query(TrackingEvent)
        .filter(
            TrackingEvent.order_id == order.id
        )
        .order_by(
            TrackingEvent.created_at.asc()
        )
        .all()
    )