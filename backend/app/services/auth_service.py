from sqlalchemy.orm import Session

from app.models.user import User
from app.schemas.user import UserRegister, UserLogin
from app.core.security import (
    hash_password,
    verify_password,
    create_access_token,
)


def get_user_by_email(
    db: Session,
    email: str,
):
    return (
        db.query(User)
        .filter(User.email == email)
        .first()
    )


def register_user(
    db: Session,
    user: UserRegister,
):
    existing_user = get_user_by_email(
        db,
        user.email,
    )

    if existing_user:
        raise ValueError(
            "Email already registered."
        )

    new_user = User(
        name=user.name,
        email=user.email,
        password_hash=hash_password(
            user.password
        ),
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user


def authenticate_user(
    db: Session,
    user: UserLogin,
):
    existing_user = get_user_by_email(
        db,
        user.email,
    )

    if not existing_user:
        return None

    if not verify_password(
        user.password,
        existing_user.password_hash,
    ):
        return None

    access_token = create_access_token(
        {
            "sub": existing_user.email,
        }
    )

    return {
        "access_token": access_token,
        "token_type": "bearer",
    }