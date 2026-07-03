from datetime import datetime
from sqlalchemy import Enum
from app.constants.order_status import OrderStatus

from sqlalchemy import (
    Column,
    Integer,
    String,
    Float,
    DateTime,
    ForeignKey,
)
from sqlalchemy.orm import relationship

from app.db.base import Base


class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)

    tracking_id = Column(
        String,
        unique=True,
        nullable=False,
        index=True,
    )

    sender_name = Column(String, nullable=False)

    receiver_name = Column(String, nullable=False)

    source = Column(String, nullable=False)

    destination = Column(String, nullable=False)

    parcel_name = Column(String, nullable=False)

    weight = Column(Float, nullable=False)

    status = Column(
    Enum(OrderStatus),
    default=OrderStatus.PENDING,
    nullable=False,
)

    created_at = Column(
        DateTime,
        default=datetime.utcnow,
    )

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False,
    )

    user = relationship(
        "User",
        backref="orders",
    )