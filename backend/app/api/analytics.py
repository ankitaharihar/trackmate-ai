from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.schemas.analytics import DashboardStats
from app.services.analytics_service import get_dashboard_stats

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