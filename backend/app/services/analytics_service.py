from sqlalchemy.orm import Session

from app.models.order import Order
from app.constants.order_status import OrderStatus


def get_dashboard_stats(db: Session):
    total_orders = db.query(Order).count()

    pending = (
        db.query(Order)
        .filter(Order.status == OrderStatus.PENDING)
        .count()
    )

    picked_up = (
        db.query(Order)
        .filter(Order.status == OrderStatus.PICKED_UP)
        .count()
    )

    in_transit = (
        db.query(Order)
        .filter(Order.status == OrderStatus.IN_TRANSIT)
        .count()
    )

    out_for_delivery = (
        db.query(Order)
        .filter(Order.status == OrderStatus.OUT_FOR_DELIVERY)
        .count()
    )

    delivered = (
        db.query(Order)
        .filter(Order.status == OrderStatus.DELIVERED)
        .count()
    )

    cancelled = (
        db.query(Order)
        .filter(Order.status == OrderStatus.CANCELLED)
        .count()
    )

    return {
        "total_orders": total_orders,
        "pending": pending,
        "picked_up": picked_up,
        "in_transit": in_transit,
        "out_for_delivery": out_for_delivery,
        "delivered": delivered,
        "cancelled": cancelled,
    }