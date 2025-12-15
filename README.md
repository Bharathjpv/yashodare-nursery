# Yashodare Nursery Website

A beautiful, green-themed website for Yashodare Nursery, built with React and FastAPI.

## Project Structure
- `frontend/`: React application (Vite)
- `backend/`: FastAPI Python server
  - `plants_data/`: Contains separate folders for each plant with their details and images.

## How to Run

### 1. Start the Backend
Open a terminal and run:
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```
The backend API will run on `http://localhost:8000`.

### 2. Start the Frontend
Open a **new** terminal window and run:
```bash
cd frontend
npm install
npm run dev
```
The website will open at `http://localhost:5173`.

## Features
- Aesthetic green theme
- Catalog of plants
- Detailed plant care (Do's and Don'ts)
- Responsive design
