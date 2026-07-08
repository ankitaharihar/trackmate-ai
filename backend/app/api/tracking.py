from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
    status,
)
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.schemas.tracking import (
    TrackingEventCreate,
    TrackingEventResponse,
)
from app.services.tracking_service import (
    create_tracking_event,
    get_tracking_history,
)

router = APIRouter(
    prefix="/tracking",
    tags=["Tracking"],
)


@router.post(
    "",
    response_model=TrackingEventResponse,
    status_code=status.HTTP_201_CREATED,
)
def add_tracking_event(
    event: TrackingEventCreate,
    db: Session = Depends(get_db),
):
    tracking_event = create_tracking_event(
        db=db,
        event=event,
    )

    if tracking_event is None:
        raise HTTPException(
            status_code=404,
            detail="Order not found",
        )

    return tracking_event


@router.get(
    "/{tracking_id}",
    response_model=list[TrackingEventResponse],
)
def get_tracking(
    tracking_id: str,
    db: Session = Depends(get_db),
):
    history = get_tracking_history(
        db=db,
        tracking_id=tracking_id,
    )

    if history is None:
        raise HTTPException(
            status_code=404,
            detail="Order not found",
        )

    return history