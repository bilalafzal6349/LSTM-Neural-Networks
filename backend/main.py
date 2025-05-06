from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

# Allow frontend origin (adjust port if needed)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/chat")
async def chat(request: Request):
    data = await request.json()
    prompt = data.get("prompt")

    instruction = (
        "You are an AI trained to return a single word, nothing else. "
        "Given the following text, return only the next word.\n\n"
        f"Text: {prompt}"
    )

    res = requests.post("http://localhost:11434/api/generate", json={
        "model": "mistral:7b",
        "prompt": instruction,
        "stream": False
    })

    return res.json()
