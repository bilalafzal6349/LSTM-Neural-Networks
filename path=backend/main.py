@app.post("/predict")
async def predict_api(payload: dict):
    text = payload.get("text", "")
    return {"next_word": predict_next_word(text)} 