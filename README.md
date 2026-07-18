# TrackMate AI....

AI-powered parcel tracking platform with a FastAPI backend and a React + TypeScript frontend.

## Tech Stack

- Frontend: React 19, TypeScript, Vite, Tailwind CSS, Framer Motion, React Three Fiber
- Backend: FastAPI, SQLAlchemy, Pydantic, Uvicorn
- Database: PostgreSQL (via `DATABASE_URL`)

## Repository Structure

```text
trackmate-ai/
	backend/
		app/
			api/
			core/
			db/
			models/
			schemas/
			services/
		scripts/
		tests/
		requirements.txt
	frontend/
		src/
			components/
			pages/
			routes/
			three/
		package.json
	docs/
	docker-compose.yml
```

## Prerequisites

- Python 3.11+
- Node.js 20+
- npm 10+
- PostgreSQL (or a hosted Postgres URL)

## Backend Setup

From project root:

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

Create a `.env` file inside `backend/`:

```env
DATABASE_URL=postgresql+psycopg2://postgres:postgres@localhost:5432/trackmate
SECRET_KEY=replace-with-a-long-random-string
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=60
```

Create tables and run API server:

```powershell
python -m scripts.create_db
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

Open API docs:

- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Frontend Setup

From project root:

```powershell
cd frontend
npm install
npm run dev
```

Default Vite URL:

- http://localhost:5173

## Available Scripts

In `frontend/`:

- `npm run dev` - start development server
- `npm run build` - type-check and build production bundle
- `npm run lint` - run ESLint
- `npm run preview` - preview production build locally

## Backend API Route Groups

- `/auth` - register and login
- `/users` - user profile and account endpoints
- `/orders` - order and shipment records
- `/tracking` - tracking event ingest and history
- `/analytics` - analytics and insights

## Current Landing Page Flow

Homepage section order:

1. Navbar
2. Hero (3D earth + tracking input)
3. AI Analysis (`#analysis`)
4. Dashboard Preview

Note: The tracking action in Hero scrolls to `#analysis` instead of rendering an in-Hero demo card, so Hero height remains stable.

## Notes

- `docker-compose.yml` is currently empty. Add services there if you want one-command local startup.
- `docs/` files are present but mostly placeholders right now.
