#!/bin/bash
echo "Starting Yashodare Nursery..."

# Start Backend in background
echo "Starting Backend..."
(cd backend && source venv/bin/activate && uvicorn main:app --reload) &

# Wait a moment
sleep 2

# Start Frontend
echo "Starting Frontend..."
(cd frontend && npm run dev)
