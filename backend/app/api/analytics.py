from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.schemas.analytics import (
    DashboardStats,
    RecentOrder,
)

from app.services.analytics_service import (
    get_dashboard_stats,
    get_recent_orders,
)

router = APIRouter(
    prefix="/analytics",
    tags=["Analytics"],
)


@router.get(
    "/dashboard",
    response_model=DashboardStats,
)

def dashboard(
    db: Session = Depends(get_db),
):
    return get_dashboard_stats(db)
@router.get(
    "/recent-orders",
    response_model=list[RecentOrder],
)
def recent_orders(
    db: Session = Depends(get_db),
):
    return get_recent_orders(db)