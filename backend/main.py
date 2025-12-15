from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os
import json
from pathlib import Path

app = FastAPI()

# Input: "backend in python fastapi and frondend in react.create tw saperate folders for them. maitain saperate files for images and their discreption and do's and dont's for each plant."

origins = [
    "http://localhost:5173",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_DIR = Path(__file__).resolve().parent
PLANTS_DIR = BASE_DIR / "plants_data"

# Ensure directory exists
PLANTS_DIR.mkdir(exist_ok=True)

# Mount static files for images
# We will assume each plant folder has an image that we can serve
app.mount("/static", StaticFiles(directory=PLANTS_DIR), name="static")

@app.get("/")
def read_root():
    return {"message": "Welcome to Yashodare Nursery API"}

@app.get("/plants")
def get_plants():
    plants = []
    if not PLANTS_DIR.exists():
        return plants
        
    for plant_dir in PLANTS_DIR.iterdir():
        if plant_dir.is_dir():
            # Try to read info.json
            info_file = plant_dir / "info.json"
            if info_file.exists():
                try:
                    with open(info_file, "r") as f:
                        data = json.load(f)
                        # Add image URL if image exists
                        # Assuming image is named 'image.png' or similar
                        # We will look for an image file
                        image_files = list(plant_dir.glob("image.*"))
                        if image_files:
                            # Use the first image found
                            image_name = image_files[0].name
                            data["image_url"] = f"/static/{plant_dir.name}/{image_name}"
                        
                        data["id"] = plant_dir.name
                        plants.append(data)
                except Exception as e:
                    print(f"Error reading {info_file}: {e}")
    return plants

@app.get("/plants/{plant_id}")
def get_plant_detail(plant_id: str):
    plant_dir = PLANTS_DIR / plant_id
    if not plant_dir.exists():
        raise HTTPException(status_code=404, detail="Plant not found")
    
    info_file = plant_dir / "info.json"
    if not info_file.exists():
        raise HTTPException(status_code=404, detail="Plant info not found")
        
    with open(info_file, "r") as f:
        data = json.load(f)
    
    image_files = list(plant_dir.glob("image.*"))
    if image_files:
        image_name = image_files[0].name
        data["image_url"] = f"/static/{plant_dir.name}/{image_name}"
        
    return data
