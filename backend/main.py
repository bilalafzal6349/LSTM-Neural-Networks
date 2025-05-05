from fastapi import FastAPI, WebSocket

app = FastAPI()

@app.websocket("/ws/predict")
async def websocket_predict(websocket: WebSocket):
    await websocket.accept()
    while True:
        text = await websocket.receive_text() 
        prediction = predict_next_word(text)  
        await websocket.send_text(prediction)