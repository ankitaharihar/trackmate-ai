from datetime import datetime

from sqlalchemy import (
    Column,
    Integer,
    String,
    DateTime,
    ForeignKey,
)
from sqlalchemy.orm import relationship

from app.db.base import Base


class TrackingEvent(Base):
    __tablename__ = "tracking_events"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    order_id = Column(
        Integer,
        ForeignKey("orders.id"),
        nullable=False,
    )

    status = Column(
        String,
        nullable=False,
    )

    location = Column(
        String,
        nullable=False,
    )

    description = Column(
        String,
        nullable=False,
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow,
    )

    order = relationship(
        "Order",
        backref="tracking_events",
    )