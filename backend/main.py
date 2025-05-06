from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.sequence import pad_sequences
import numpy as np
import json
import os
from keras_preprocessing.text import tokenizer_from_json

app = FastAPI()

# Allow frontend (e.g., Vite dev server on localhost:5173) to access this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace "*" with frontend domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model and tokenizer
model = load_model("next_word_model (1).h5")

# Load tokenizer and word index mappings (adjust path as needed)
with open("tokenizer.json", "r") as f:
    tokenizer = tokenizer_from_json(json.load(f))

index_to_word = {index: word for word, index in tokenizer.word_index.items()}


# 🔁 Utility function to process input text and predict next word
def predict_next_word(text: str, max_seq_len: int = 10):
    sequence = tokenizer.texts_to_sequences([text])[0]
    padded = pad_sequences([sequence], maxlen=max_seq_len, padding='pre')
    prediction = model.predict(padded, verbose=0)
    predicted_index = np.argmax(prediction, axis=-1)[0]
    return index_to_word.get(predicted_index, "<unk>")


# 📡 WebSocket route
@app.websocket("/ws/predict")
async def websocket_predict(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            text = await websocket.receive_text()
            predicted_word = predict_next_word(text)
            await websocket.send_text(predicted_word)
    except WebSocketDisconnect:
        print("🔌 Client disconnected")
    except Exception as e:
        await websocket.send_text(f"❌ Error: {str(e)}")
