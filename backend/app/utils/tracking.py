from datetime import datetime
import random


def generate_tracking_id() -> str:
    """
    Generate a unique tracking ID.

    Example:
    TM202607040123
    """

    date = datetime.now().strftime("%Y%m%d")

    number = random.randint(
        1000,
        9999,
    )

    return f"TM{date}{number}"