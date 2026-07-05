from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
    status,
)
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.dependencies.auth import get_current_user
from app.models.user import User
from app.constants.order_status import OrderStatus

from app.schemas.order import (
    OrderCreate,
    OrderResponse,
    OrderStatusUpdate,
)
from app.services.order_service import (
    create_order,
    get_user_orders,
    get_order_by_tracking_id,
    update_order_status,
    delete_order,
)

router = APIRouter(
    prefix="/orders",
    tags=["Orders"],
)


@router.post(
    "",
    response_model=OrderResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_new_order(
    order: OrderCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return create_order(
        db=db,
        order=order,
        current_user=current_user,
    )


@router.get(
    "",
    response_model=list[OrderResponse],
)
def read_my_orders(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return get_user_orders(
        db,
        current_user.id,
    )


@router.get(
    "/{tracking_id}",
    response_model=OrderResponse,
)
def track_order(
    tracking_id: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    order = get_order_by_tracking_id(
        db,
        tracking_id,
    )

    if not order:
        raise HTTPException(
            status_code=404,
            detail="Order not found",
        )

    if order.user_id != current_user.id:
        raise HTTPException(
            status_code=403,
            detail="Access denied",
        )

    return order


@router.put(
    "/{tracking_id}",
    response_model=OrderResponse,
)
def update_status(
    tracking_id: str,
    order_update: OrderStatusUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    order = update_order_status(
        db=db,
        tracking_id=tracking_id,
        status=order_update.status,
        current_user=current_user,
    )

    if order is None:
        raise HTTPException(
            status_code=404,
            detail="Order not found",
        )

    if order == "FORBIDDEN":
        raise HTTPException(
            status_code=403,
            detail="Access denied",
        )

    return order

@router.delete(
    "/{tracking_id}",
)
def delete_my_order(
    tracking_id: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    result = delete_order(
        db=db,
        tracking_id=tracking_id,
        current_user=current_user,
    )

    if result is None:
        raise HTTPException(
            status_code=404,
            detail="Order not found",
        )

    if result == "FORBIDDEN":
        raise HTTPException(
            status_code=403,
            detail="Access denied",
        )

    return {
        "message": "Order deleted successfully"
    }