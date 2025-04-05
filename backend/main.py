from fastapi import FastAPI, HTTPException
from bson import ObjectId
import pymongo
from pymongo import MongoClient
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from models import Note 
import certifi
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv 

load_dotenv()

app = FastAPI()

MONGODB_URI = os.getenv("MONGODB_URI")#"mongodb+srv://yauhenibudzko:pGh8YjGcCo9u2Qp3@cluster-notes.pcpzzww.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-notes"

client = MongoClient(MONGODB_URI, tlsCAFile=certifi.where())
db = client["notes_db"]
collection = db["notes"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://jackychan0201.github.io"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
def note_serializer(note):
    return {
        "id": str(note["_id"]),  
        "title": note["title"],
        "description": note["description"]
    }

@app.get("/")
async def root():
    return {"status": "ok", "message": "Notes API is running"}

#get all notes
@app.get("/notes")
async def get_notes():
    notes = collection.find()
    return [note_serializer(note) for note in notes]

#write a new note
@app.post("/notes")
async def add_note(note: Note):
    result = collection.insert_one(note.dict())
    return {"id": str(result.inserted_id), "message": "Note added"}

#delete a note by ID
@app.delete("/notes/{note_id}")
async def delete_note(note_id: str):
    result = collection.delete_one({"_id": ObjectId(note_id)})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Note not found")
    return {"message": "Note deleted"}