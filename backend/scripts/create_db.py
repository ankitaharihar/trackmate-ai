from app.db.database import Base
from app.db.session import engine
from app.db.base import *

print("Creating tables...")
Base.metadata.create_all(bind=engine)
print("Done!")