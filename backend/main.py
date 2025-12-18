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
    "https://yashodare-nursery.vercel.app",
    "https://yashodarenursery.com",
    "https://www.yashodarenursery.com"
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
                        # Look for all common image types
                        image_extensions = {".jpg", ".jpeg", ".png", ".webp", ".gif"}
                        image_files = sorted([
                            f for f in plant_dir.iterdir() 
                            if f.is_file() and f.suffix.lower() in image_extensions
                        ])
                        
                        data["image_urls"] = []
                        
                        if image_files:
                            # Add all found images to image_urls
                            for img in image_files:
                                data["image_urls"].append(f"/static/{plant_dir.name}/{img.name}")
                            
                            # Use the first image as the primary image_url
                            data["image_url"] = data["image_urls"][0]
                        else:
                             data["image_url"] = None
                        
                        data["id"] = plant_dir.name
                        plants.append(data)
                except Exception as e:
                    print(f"Error reading {info_file}: {e}")
    
    # Sort plants alphabetically by name
    plants.sort(key=lambda x: x.get("name", "").lower())
    
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
    
    image_extensions = {".jpg", ".jpeg", ".png", ".webp", ".gif"}
    image_files = sorted([
        f for f in plant_dir.iterdir() 
        if f.is_file() and f.suffix.lower() in image_extensions
    ])

    data["image_urls"] = []
    
    if image_files:
        for img in image_files:
             data["image_urls"].append(f"/static/{plant_dir.name}/{img.name}")
        data["image_url"] = data["image_urls"][0]
    else:
        data["image_url"] = None
        
    return data
